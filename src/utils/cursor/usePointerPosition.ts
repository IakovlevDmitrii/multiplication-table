import { useState, useEffect } from 'react';

interface PointerPosition {
	x: number;
	y: number;
}

export function usePointerPosition(): PointerPosition {
	const [
		position,
		setPosition] = useState<PointerPosition>({ x: 0, y: 0 });

	useEffect((): () => void => {
		function handleMove(event: PointerEvent): void {
			setPosition({ x: event.clientX, y: event.clientY });
		}

		window.addEventListener('pointermove', handleMove);
		return (): void => window.removeEventListener('pointermove', handleMove);
	}, []);

	return position;
}