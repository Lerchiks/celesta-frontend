'use client';
import { useEffect, useRef, useState } from 'react';

export function useScrollProgress() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const scrolledInside = -rect.top;
            const totalScrollable = rect.height - window.innerHeight;
            const value = Math.min(
                Math.max(scrolledInside / totalScrollable, 0),
                1,
            );

            setProgress(value);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { sectionRef, progress };
}
