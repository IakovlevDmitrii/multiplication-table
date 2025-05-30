import gsap from 'gsap';
import variables from '../styles/abstracts/_variables.scss';

const { bgColor_regular } = variables;
export default function bgAnimation() {
	function bg() {
		document.body.style.backgroundColor = bgColor_regular;
	}

	bg();

	const snapEdges = gsap.utils.snap({
			values:[0, window.innerWidth],
			radius: 10
		}),
		widthToProgress = gsap.utils.mapRange(0, window.innerWidth, 0, 1),
		interpColor = gsap.utils.interpolate("rgb(32,32,32)", "rgb(48,48,48)"),
		widthToColor = gsap.utils.pipe(
			snapEdges,
			widthToProgress,
			interpColor
		);

	function onMove(mouseX) {
		document.body.style.backgroundColor = widthToColor(mouseX);
	}

	const eventType = document.onmspointerdown
		? "MSPointerMove" : document.PointerEvent
			? "pointermove" : document.ontouchstart
				? "touchmove" : "mousemove";
	document.addEventListener(eventType, function(e) {
		e = (e.changedTouches || [e])[0];
		onMove((e.pageX + e.pageY)/2)
	});
}
