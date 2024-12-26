import * as React from 'react';
import { useParams } from 'react-router-dom';
import MultiplicationTableHeader from '../../multiplicationTableHeader';
import MultiplicationTableList from '../../multiplicationTableList';
import './MultiplicationTablePage.module.scss';

export default function MultiplicationTablePage() {
	let {multiplier} = useParams();
	const num = Number(multiplier);

	return (
		<section className='content'>
			<MultiplicationTableHeader multiplier={num} />
			<MultiplicationTableList multiplier={num} />
		</section>
	)
}