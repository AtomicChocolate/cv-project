import React, { FunctionComponent, useState } from "react";
import { CV } from "../utils/CV";

interface ContactInfoProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

interface ContactInfoType {
	firstName: string;
	lastName: string;
	jobTitle: string;
	phoneNumber: string;
	emailAddress: string;
}

const ContactInfo: FunctionComponent<ContactInfoProps> = (
	props: ContactInfoProps
) => {
	const [state, setState] = useState({
		firstName: "",
		lastName: "",
		jobTitle: "",
		phoneNumber: "",
		emailAddress: "",
	});

	function handleChange(newState: ContactInfoType): void {
		setState(newState);

		let newCV = Object.assign({}, props.cv) as CV;
		newCV.contactInfo = newState;
		props.updateCV(newCV);
	}

	function handleFirstChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.firstName = value;
		handleChange(newState);
	}

	function handleLastChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.lastName = value;
		handleChange(newState);
	}

	function handleJobChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.jobTitle = value;
		handleChange(newState);
	}

	function handlePhoneChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.phoneNumber = value;
		handleChange(newState);
	}

	function handleEmailChange(event: React.FormEvent<HTMLInputElement>): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.emailAddress = value;
		handleChange(newState);
	}

	return (
		<section>
			<input
				type="text"
				name="firstName"
				onChange={handleFirstChange}
				placeholder="First name"
				value={state.firstName}
			/>
			<input
				type="text"
				name="lastName"
				onChange={handleLastChange}
				placeholder="Last name"
				value={props.cv.contactInfo.lastName}
			/>
			<input
				type="text"
				name="jobTitle"
				onChange={handleJobChange}
				placeholder="Job title"
				value={props.cv.contactInfo.jobTitle}
			/>
			<input
				type="text"
				name="phoneNumber"
				onChange={handlePhoneChange}
				placeholder="Phone number"
				value={props.cv.contactInfo.phoneNumber}
			/>
			<input
				type="text"
				name="emailAddress"
				onChange={handleEmailChange}
				placeholder="Email address"
				value={props.cv.contactInfo.emailAddress}
			/>
		</section>
	);
};

export default ContactInfo;
