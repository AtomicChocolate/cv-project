import { FunctionComponent } from "react";
import { CV } from "../utils/CV";
import ContactInfo from "./ContactInfo";

interface FormProps {
	cv: CV;
}

const Form: FunctionComponent<FormProps> = (props: FormProps) => {
    

	return (
		<div className="form">
			<ContactInfo cv={props.cv} onChange={this.onChange} />
		</div>
	);
};

export default Form;
