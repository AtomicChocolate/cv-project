import { FunctionComponent } from "react";
import { CV } from "../utils/CV";

interface PreviewProps {
	cv: CV;
}

const Preview: FunctionComponent<PreviewProps> = (props: PreviewProps) => {
	return (
		<div className="preview">
			<section>
				<h2 className="firstlast-preview">
					{props.cv.contactInfo.firstName} {props.cv.contactInfo.lastName}
				</h2>
				<h3 className="jobtitle-preview">{props.cv.contactInfo.jobTitle}</h3>
				<h3 className="phone-preview">{props.cv.contactInfo.phoneNumber}</h3>
				<h3 className="email-preview">{props.cv.contactInfo.emailAddress}</h3>
			</section>
		</div>
	);
};

export default Preview;
