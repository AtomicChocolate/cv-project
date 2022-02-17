import React, { FunctionComponent, useState } from "react";
import { CV, emptyCV, EducationType } from "../utils/CV";
import dateFormat from "dateformat";

interface EducationProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const Education: FunctionComponent<EducationProps> = (
	props: EducationProps
) => {
	const [state, setState] = useState({
		universityName: "",
		degreeMajor: "",
		graduationDate: new Date(),
		location: "",
		honors: "",
		extracurriculars: "",
	});

	function handleChange(newState: EducationType): void {
		setState(newState);

		let newCV = Object.assign({}, props.cv) as CV;
		newCV.education = newState;
		props.updateCV(newCV);
	}

	function handleNameChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as EducationType;
		newState.universityName = value;
		handleChange(newState);
	}

	function handleDegreeChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as EducationType;
		newState.degreeMajor = value;
		handleChange(newState);
	}

	function handleDateChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as EducationType;
		newState.graduationDate = new Date(value);
		handleChange(newState);
	}

	function handleLocationChange(
		event: React.FormEvent<HTMLInputElement>
	): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as EducationType;
		newState.location = value;
		handleChange(newState);
	}

	function handleHonorsChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as EducationType;
		newState.honors = value;
		handleChange(newState);
	}

	function handleExtrasChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as EducationType;
		newState.extracurriculars = value;
		handleChange(newState);
	}

	return (
		<section>
			<input
				type="text"
				name="universityName"
				onChange={handleNameChange}
				placeholder="University name"
				value={state.universityName}
			/>
			<input
				type="text"
				name="degreeMajor"
				onChange={handleDegreeChange}
				placeholder={emptyCV.education.degreeMajor}
				value={state.degreeMajor}
			/>
			<input
				type="date"
				name="graduationDate"
				onChange={handleDateChange}
				placeholder="Graduation date"
				value={dateFormat(props.cv.education.graduationDate, "yyyy-mm-dd")}
			/>
			<input
				type="text"
				name="location"
				onChange={handleLocationChange}
				placeholder="Location"
				value={state.location}
			/>
			<input
				type="text"
				name="honors"
				onChange={handleHonorsChange}
				placeholder={emptyCV.education.honors}
				value={state.honors}
			/>
			<input
				type="text"
				name="extracurriculars"
				onChange={handleExtrasChange}
				placeholder={emptyCV.education.extracurriculars}
				value={state.extracurriculars}
			/>
		</section>
	);
};

export default Education;
