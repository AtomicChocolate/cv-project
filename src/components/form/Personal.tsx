import React, { FunctionComponent, useState } from "react";
import { CV, ContactInfoType } from "../utils/CV";

interface ContactInfoProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const ContactInfo: FunctionComponent<ContactInfoProps> = (
	props: ContactInfoProps
) => {
	const [state, setState] = useState({
		firstName: "",
		lastName: "",
		profession: "",
		location: "",
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

	function handleProfessionChange(
		event: React.FormEvent<HTMLInputElement>
	): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.profession = value;
		handleChange(newState);
	}

	function handleLocationChange(
		event: React.FormEvent<HTMLInputElement>
	): void {
		const { value } = event.currentTarget;

		let newState = Object.assign({}, state) as ContactInfoType;
		newState.location = value;
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
				name="profession"
				onChange={handleProfessionChange}
				placeholder="Profession"
				value={props.cv.contactInfo.profession}
			/>
			<input
				type="text"
				name="location"
				onChange={handleLocationChange}
				placeholder="Location"
				value={props.cv.contactInfo.location}
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
