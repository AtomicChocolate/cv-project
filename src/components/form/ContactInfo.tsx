import { throws } from "assert";
import React, { FunctionComponent } from "react";
import { CV } from "../utils/CV";

interface ContactInfoProps {
	cv: CV;
	onChange: () => {};
}

const ContactInfo: FunctionComponent<ContactInfoProps> = (
	props: ContactInfoProps
) => {
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		
	};

	return (
		<section>
			<input
				type="text"
				name="firstName"
				onChange={this.onInputChange(props.cv.contactInfo.firstName)}
				placeholder="First name"
				value={props.cv.contactInfo.firstName}
			/>
			<input
				type="text"
				name="lastName"
				onChange={this.onInputChange}
				placeholder="Last name"
				value={props.cv.contactInfo.lastName}
			/>
			<input
				type="text"
				name="jobTitle"
				onChange={this.onInputChange}
				placeholder="Job title"
				value={props.cv.contactInfo.jobTitle}
			/>
			<input
				type="text"
				name="phoneNumber"
				onChange={this.onInputChange}
				placeholder="Phone number"
				value={props.cv.contactInfo.phoneNumber}
			/>
			<input
				type="text"
				name="emailAddress"
				onChange={this.onInputChange}
				placeholder="Email address"
				value={props.cv.contactInfo.emailAddress}
			/>
		</section>
	);
};

export default ContactInfo;
