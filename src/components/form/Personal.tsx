import React, { FunctionComponent, useState } from "react";
import { CV, emptyCV, PersonalType } from "../utils/CV";

interface PersonalProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const Personal: FunctionComponent<PersonalProps> = (props: PersonalProps) => {
	const [state, setState] = useState({
		skills: "",
		interests: "",
	});

	function handleChange(newState: PersonalType): void {
		setState(newState);

		let newCV = Object.assign({}, props.cv) as CV;
		newCV.personal = newState;
		props.updateCV(newCV);
	}

	function handleSkillsChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as PersonalType;
		newState.skills = value;
		handleChange(newState);
	}

	function handleInterestsChange(
		event: React.FormEvent<HTMLInputElement>
	): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as PersonalType;
		newState.interests = value;
		handleChange(newState);
	}

	return (
		<section>
			<input
				type="text"
				name="skills"
				onChange={handleSkillsChange}
				placeholder={emptyCV.personal.skills}
				value={state.skills}
			/>
			<input
				type="text"
				name="interests"
				onChange={handleInterestsChange}
				placeholder={emptyCV.personal.interests}
				value={state.interests}
			/>
		</section>
	);
};

export default Personal;
