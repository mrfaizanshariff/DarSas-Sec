"use client"; 

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Point {
  x: number;
  originX: number;
  y: number;
  originY: number;
  active?: number;
  circle?: Circle;
  closest?: Point[];
}

interface Target {
  x: number;
  y: number;
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number = 0;

  constructor(pos: Point, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color.replace('0.3', this.active.toString());
    ctx.fill();
  }
}

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let width: number;
    let height: number;
    let ctx: CanvasRenderingContext2D | null = null;
    let points: Point[] = [];
    let target: Target = { x: 0, y: 0 };
    let animateHeader = true;
    const cmax = 3; // Increased connections per particle
    
    // Initialize the canvas and setup
    const initHeader = (): void => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      if (containerRef.current) {
        containerRef.current.style.height = `${height}px`;
      }
      
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        ctx = canvasRef.current.getContext('2d');
      }

      if (!ctx) return;

      // Create points - more points for higher density
      points = [];
      for (let x = 0; x < width; x = x + width / 15) { // Increased density
        for (let y = 0; y < height; y = y + height / 15) { // Increased density
          const px = x + Math.random() * width / 15;
          const py = y + Math.random() * height / 15;
          const p: Point = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // For each point find the closest points
      for (let i = 0; i < points.length; i++) {
        const closest: Point[] = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < cmax; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < cmax; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Assign a circle to each point - larger circles
      for (let i = 0; i < points.length; i++) {
        // Increased radius for more visibility
        const c = new Circle(points[i], 3 + Math.random() * 3, 'rgba(235,64,52 ,0.3)');
        points[i].circle = c;
      }
    };

    // Event handling
    const addListeners = (): void => {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    };

    const mouseMove = (e: MouseEvent): void => {
      let posx = 0, posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    };

    const scrollCheck = (): void => {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    };

    const resize = (): void => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (containerRef.current) {
        containerRef.current.style.height = `${height}px`;
      }
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    // Animation
    const initAnimation = (): void => {
      animate();
      for (let i = 0; i < points.length; i++) {
        shiftPoint(points[i]);
      }
    };

    const animate = (): void => {
      if (animateHeader && ctx) {
        ctx.clearRect(0, 0, width, height);
        
        // Detect points in range
        for (let i = 0; i < points.length; i++) {
          const point = points[i];
          const circle = point.circle;
          
          // Calculate distance from target
          const distance = Math.abs(getDistance(target, point));
          
          // Higher base opacity values for better visibility
          if (distance < 4000) { // Increased hover radius
            point.active = 0.6; // Increased line opacity
            if (circle) circle.active = 0.9; // Increased circle opacity
          } else if (distance < 20000) {
            point.active = 0.4; // Increased
            if (circle) circle.active = 0.6; // Increased
          } else if (distance < 40000) {
            point.active = 0.2; // Increased
            if (circle) circle.active = 0.3; // Increased
          } else { // Default
            point.active = 0.1; // Increased default visibility
            if (circle) circle.active = 0.2; // Increased default visibility
          }

          drawLines(point);
          if (circle) circle.draw(ctx);
        }
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p: Point): void => {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "power2.inOut",
        onComplete: () => {
          shiftPoint(p);
        }
      });
    };

    // Canvas manipulation
    const drawLines = (p: Point): void => {
      if (!p.active || !ctx || !p.closest) return;
      for (let i = 0; i < p.closest.length; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(255,255,255,${p.active})`;
        ctx.lineWidth = 0.5; // Added line width
        ctx.stroke();
      }
    };

    // Utility
    const getDistance = (p1: Point | Target, p2: Point | Target): number => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    // Main
    initHeader();
    initAnimation();
    // addListeners();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []); 
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-black" 
      id="particles-container"
    >
      <canvas 
        ref={canvasRef} 
        id="particles-canvas" 
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>
    </div>
  );
};

export default ParticleNetwork;