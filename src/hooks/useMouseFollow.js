import { useEffect, useRef } from 'react';

export const useMouseFollow = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const handleMouseMove = (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    };

    const handleMouseLeave = () => {
      box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    box.addEventListener('mousemove', handleMouseMove);
    box.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      box.removeEventListener('mousemove', handleMouseMove);
      box.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return boxRef;
}; 