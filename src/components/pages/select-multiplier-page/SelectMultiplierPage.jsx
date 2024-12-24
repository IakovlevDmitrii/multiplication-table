import React from "react";
import SelectMultiplierButton from "../../selectMultiplierButton";

export default function SelectMultiplierPage() {
	const multipliers = [];
	for(let num = 2; num <=9; num++) {
		multipliers.push(num);
	}
	const multiplierList = multipliers.map(item => (
		<li key={item}>
			<SelectMultiplierButton multiplier={item} />
		</li>
	))

	return (
		<div>
			<ol>
				{multiplierList}
			</ol>
		</div>
	)
}