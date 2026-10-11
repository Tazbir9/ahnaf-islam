import { useEffect, useRef } from 'react';

/** Custom cursor (fine pointers only) + scroll progress bar. */
export function PortfolioMotion() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const fine = window.matchMedia('(pointer: fine)').matches;
    let raf = 0;
    let x = -100, y = -100, rx = -100, ry = -100;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      document.documentElement.classList.add('cursor-on');
      const hit = (e.target as Element | null)?.closest('a,button,summary,input,textarea,[role="button"]');
      ring.current?.classList.toggle('is-hover', !!hit);
    };
    const onDown = () => ring.current?.classList.add('is-down');
    const onUp = () => ring.current?.classList.remove('is-down');
    const onLeave = () => document.documentElement.classList.remove('cursor-on');
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    if (fine) {
      document.documentElement.classList.add('custom-cursor');
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mousedown', onDown);
      window.addEventListener('mouseup', onUp);
      document.addEventListener('mouseleave', onLeave);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('custom-cursor', 'cursor-on');
    };
  }, []);

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
