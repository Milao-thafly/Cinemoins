import { useState, useCallback } from "react";

export function useCarousel<T>(items: T[], visibleCount: number) {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
        setIndex((prev) => (prev + visibleCount ) % items.length);

    }, [items.length, visibleCount]);
    
    const prev = useCallback(() => {
        setIndex((prev) => {
            const newIndex = prev - visibleCount;
            return newIndex < 0 ? (items.length + newIndex) % items.length : newIndex;
        });
    }, [items.length, visibleCount])


    return { start: index, end: index + visibleCount,  next, prev};
}