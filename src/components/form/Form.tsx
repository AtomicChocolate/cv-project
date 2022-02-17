import { FunctionComponent } from "react";
import { CV } from "../utils/CV";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import JobHistory from "./JobHistory";
import Personal from "./Personal";

interface FormProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const Form: FunctionComponent<FormProps> = (props: FormProps) => {
	return (
		<div className="form">
			<ContactInfo cv={props.cv} updateCV={props.updateCV} />
			<JobHistory cv={props.cv} updateCV={props.updateCV} />
			<Education cv={props.cv} updateCV={props.updateCV} />
			<Personal cv={props.cv} updateCV={props.updateCV} />
		</div>
	);
};

export default Form;
