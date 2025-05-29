import { useDispatch, useSelector } from "react-redux";
import useLanguage from "./useLanguage";
import usePageVisibility from "./usePageVisibility";
import useSolutions from "./useSolutions";
import useTargetMultiplier from "./useTargetMultiplier";
import useTheme from "./useTheme";
import type { AppDispatch, RootState } from "../store/store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()

export {
	useAppDispatch,
	useAppSelector,
	useLanguage,
	usePageVisibility,
	useSolutions,
	useTargetMultiplier,
	useTheme,
}