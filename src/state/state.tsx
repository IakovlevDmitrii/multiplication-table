import React, {createContext, useReducer, useContext, ReactNode, Context} from "react";
import {createArrayRange} from '../utils';
import type {Answer, ActionType, TrainingContextType} from "../types";

const multiplierList: number[] = createArrayRange(2, 9, 1);

const initialTraining: TrainingContextType = {
	answers: [],
	multiplierList,
	remainingMultiplierList: multiplierList,
	subjectOfRepetition: 2,
};

const TrainingContext: Context<TrainingContextType> = createContext<TrainingContextType>(initialTraining);
const TrainingDispatchContext: Context<any> = createContext<ActionType | any>(null);

interface TrainingProviderType {
	children?: ReactNode,
}

export function TrainingProvider({children}: TrainingProviderType): React.JSX.Element {
	const [training, dispatch] = useReducer(
		trainingReducer,
		initialTraining,
	);

	return (
		<TrainingContext.Provider value={training}>
			<TrainingDispatchContext.Provider value ={dispatch}>
				{children}
			</TrainingDispatchContext.Provider>
		</TrainingContext.Provider>
	)
}

export function useTraining(): TrainingContextType {
	return useContext(TrainingContext);
}

export function useTrainingDispatch(): React.Dispatch<any> {
	return useContext(TrainingDispatchContext);
}

function trainingReducer(training: TrainingContextType, action: ActionType) {
	switch (action.type) {
		case 'answer': {
			const newAnswerList: Answer[] = training.answers;
			newAnswerList.push({
				multiplier: action.payload.multiplier,
				result: action.payload.result,
			});

			return {
				...training,
				answers: newAnswerList,
				remainingMultiplierList: training
					.remainingMultiplierList
					.filter((multiplier: number): boolean => multiplier !== action.payload.multiplier),
			}
		}
		case 'changeSubjectOfRepetition': {
			return {
				...initialTraining,
				subjectOfRepetition: action.payload.subjectOfRepetition,
			}
		}
		default: {
			return {
				...training,
			}
		}
	}
}
