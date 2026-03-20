"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; hue: number;
  alpha: number; pulse: number; pulseSpeed: number;
}

interface Streak { x: number; y: number; len: number; speed: number; alpha: number; active: boolean; angle: number; hue: number; }

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsLight(theme === "light");
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles: Particle[] = Array.from({ length: isLight ? 40 : 100 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.55, vy: (Math.random() - 0.5) * 0.55,
      radius: Math.random() * 2 + 0.8,
      hue: isLight ? [200, 220, 240, 260, 280][Math.floor(Math.random() * 5)] : [260, 280, 300, 200, 320, 240][Math.floor(Math.random() * 6)],
      alpha: isLight ? Math.random() * 0.3 + 0.1 : Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.018 + 0.008,
    }));

    const stars = Array.from({ length: isLight ? 0 : 160 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    const streaks: Streak[] = Array.from({ length: isLight ? 0 : 5 }, () => ({ x:0,y:0,len:0,speed:0,alpha:0,active:false,angle:0,hue:0 }));
    let streakTimer = 0;
    function spawnStreak() {
      const s = streaks.find(s => !s.active);
      if (!s) return;
      Object.assign(s, {
        x: Math.random() * W * 0.7, y: Math.random() * H * 0.35,
        len: Math.random() * 200 + 100, speed: Math.random() * 9 + 7,
        alpha: 1, active: true,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
        hue: [270, 300, 210, 180, 320][Math.floor(Math.random() * 5)],
      });
    }

    let hueShift = 0;
    const blobs = isLight ? [
      { ox: 0.08, oy: 0.12, rx: 0.55, ry: 0.55, hue: 220, alpha: 0.12, spd: 0.00030 },
      { ox: 0.88, oy: 0.82, rx: 0.50, ry: 0.50, hue: 260, alpha: 0.10, spd: 0.00025 },
      { ox: 0.50, oy: 0.40, rx: 0.42, ry: 0.42, hue: 280, alpha: 0.08, spd: 0.00020 },
    ] : [
      { ox: 0.08, oy: 0.12, rx: 0.55, ry: 0.55, hue:  0, alpha: 0.38, spd: 0.00030 },
      { ox: 0.88, oy: 0.82, rx: 0.50, ry: 0.50, hue: 55, alpha: 0.32, spd: 0.00025 },
      { ox: 0.50, oy: 0.40, rx: 0.42, ry: 0.42, hue:120, alpha: 0.22, spd: 0.00020 },
      { ox: 0.92, oy: 0.05, rx: 0.38, ry: 0.38, hue:190, alpha: 0.28, spd: 0.00028 },
      { ox: 0.10, oy: 0.90, rx: 0.36, ry: 0.36, hue:250, alpha: 0.20, spd: 0.00022 },
    ];

    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    function drawBase() {
      if (isLight) {
        const bg = ctx.createLinearGradient(0, 0, 0, H);
        bg.addColorStop(0, "#f8f5ff");
        bg.addColorStop(0.5, "#ede9fe");
        bg.addColorStop(1, "#ddd6fe");
        ctx.fillStyle = bg;
      } else {
        const bg = ctx.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.9);
        bg.addColorStop(0,   "#160b2e");
        bg.addColorStop(0.4, "#0d0720");
        bg.addColorStop(0.75,"#07051a");
        bg.addColorStop(1,   "#030310");
        ctx.fillStyle = bg;
      }
      ctx.fillRect(0, 0, W, H);
    }

    function drawBlobs(t: number) {
      if (isLight) return;
      hueShift = (hueShift + 0.05) % 360;
      blobs.forEach(b => {
        const x = b.ox * W + Math.sin(t * b.spd + b.hue) * W * 0.12;
        const y = b.oy * H + Math.cos(t * b.spd * 0.7 + b.hue) * H * 0.10;
        const hue = (b.hue + hueShift) % 360;
        const r = Math.max(b.rx * W, b.ry * H);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0,   `hsla(${hue}, 95%, 60%, ${b.alpha})`);
        g.addColorStop(0.45,`hsla(${hue+30}, 90%, 50%, ${b.alpha * 0.5})`);
        g.addColorStop(1,   `hsla(${hue+60}, 80%, 40%, 0)`);
        ctx.save();
        ctx.scale(b.rx * W / r, b.ry * H / r);
        ctx.beginPath();
        ctx.arc(x / (b.rx * W / r), y / (b.ry * H / r), r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });
    }

    function drawStars(t: number) {
      if (isLight) return;
      stars.forEach(s => {
        const a = (Math.sin(t * s.speed + s.phase) + 1) / 2 * 0.7 + 0.05;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,200,255,${a})`;
        ctx.fill();
      });
    }

    function drawGrid(t: number) {
      if (isLight) return;
      const sp = 58, shift = (t * 0.015) % sp;
      const cols = Math.ceil(W / sp) + 2, rows = Math.ceil(H / sp) + 2;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(130,90,240,0.07)";
      for (let i = 0; i <= cols; i++) { const x = i*sp-shift; ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let j = 0; j <= rows; j++) { const y = j*sp-shift; ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
      for (let i = 0; i <= cols; i++) for (let j = 0; j <= rows; j++) {
        const p = Math.sin(t * 0.002 + i*0.55 + j*0.75);
        if (p > 0.9) {
          ctx.beginPath();
          ctx.arc(i*sp-shift, j*sp-shift, 1.6, 0, Math.PI*2);
          ctx.fillStyle = `rgba(180,140,255,${(p-0.9)*8})`;
          ctx.fill();
        }
      }
    }

    function drawParticles() {
      if (isLight) return;
      const { x: mx, y: my } = mouseRef.current;
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx*dx+dy*dy);
        if (d < 120 && d > 0) {
          const f = (120-d)/120;
          p.vx += dx/d*f*0.28; p.vy += dy/d*f*0.28;
          const sp = Math.sqrt(p.vx*p.vx+p.vy*p.vy);
          if (sp > 3) { p.vx=p.vx/sp*3; p.vy=p.vy/sp*3; }
        }
        p.vx *= 0.999; p.vy *= 0.999;
        const pr = p.radius + Math.sin(p.pulse)*0.7;
        const pa = p.alpha + Math.sin(p.pulse)*0.12;
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,pr*5);
        g.addColorStop(0, `hsla(${p.hue},100%,75%,${pa*0.6})`);
        g.addColorStop(1, `hsla(${p.hue},100%,75%,0)`);
        ctx.beginPath(); ctx.arc(p.x,p.y,pr*5,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x,p.y,pr,0,Math.PI*2);
        ctx.fillStyle=`hsla(${p.hue},100%,82%,${Math.min(pa+0.25,1)})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) for (let j = i+1; j < particles.length; j++) {
        const a=particles[i], b=particles[j];
        const dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy);
        if (d < 155) {
          const al = (1-d/155)*0.4;
          const g = ctx.createLinearGradient(a.x,a.y,b.x,b.y);
          g.addColorStop(0,`hsla(${a.hue},100%,72%,${al})`);
          g.addColorStop(1,`hsla(${b.hue},100%,72%,${al})`);
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=g; ctx.lineWidth=(1-d/155)*1.3; ctx.stroke();
        }
      }
    }

    function drawStreaks() {
      if (isLight) return;
      streakTimer++;
      if (streakTimer > 130) { streakTimer = 0; spawnStreak(); }
      streaks.forEach(s => {
        if (!s.active) return;
        s.x += Math.cos(s.angle)*s.speed; s.y += Math.sin(s.angle)*s.speed;
        s.alpha -= 0.015;
        if (s.alpha <= 0 || s.x > W || s.y > H) { s.active=false; return; }
        const tx=s.x-Math.cos(s.angle)*s.len, ty=s.y-Math.sin(s.angle)*s.len;
        const g=ctx.createLinearGradient(tx,ty,s.x,s.y);
        g.addColorStop(0,`hsla(${s.hue},100%,80%,0)`);
        g.addColorStop(0.6,`hsla(${s.hue},100%,75%,${s.alpha*0.5})`);
        g.addColorStop(1,`hsla(${s.hue},100%,90%,${s.alpha})`);
        ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(s.x,s.y);
        ctx.strokeStyle=g; ctx.lineWidth=2; ctx.stroke();
        const tip=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,10);
        tip.addColorStop(0,`hsla(${s.hue},100%,90%,${s.alpha})`);
        tip.addColorStop(1,`hsla(${s.hue},100%,90%,0)`);
        ctx.beginPath(); ctx.arc(s.x,s.y,10,0,Math.PI*2); ctx.fillStyle=tip; ctx.fill();
      });
    }

    function drawVignette() {
      if (isLight) return;
      const g = ctx.createRadialGradient(W/2,H/2,H*0.25,W/2,H/2,H*0.9);
      g.addColorStop(0,"rgba(0,0,0,0)");
      g.addColorStop(1,"rgba(0,0,15,0.55)");
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    }

    let animId: number;
    function draw(t: number) {
      ctx.clearRect(0,0,W,H);
      drawBase();
      drawBlobs(t);
      if (!isLight) {
        drawStars(t);
        drawGrid(t);
        drawParticles();
        drawStreaks();
        drawVignette();
      }
      animId = requestAnimationFrame(draw);
    }
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [isLight]);

  return (
    <canvas ref={canvasRef} style={{ position:"fixed", inset:0, width:"100%", height:"100%", zIndex:0, pointerEvents:"none" }} />
  );
}
