import { FunctionComponent } from "react";
import { CV } from "../utils/CV";
import ContactInfo from "./ContactInfo";

interface FormProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const Form: FunctionComponent<FormProps> = (props: FormProps) => {
	return (
		<div className="form">
			<ContactInfo cv={props.cv} updateCV={props.updateCV} />
		</div>
	);
};

export default Form;
