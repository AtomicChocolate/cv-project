import { FunctionComponent } from "react";
import { CV } from "../utils/CV";

interface PreviewProps {
	cv: CV;
}

const Preview: FunctionComponent<PreviewProps> = (props: PreviewProps) => {
	return (
		<div className="preview">
			<section>
				<h2>
					{props.cv.contactInfo.firstName} {props.cv.contactInfo.lastName}
				</h2>
				<h3>{props.cv.contactInfo.jobTitle}</h3>
			</section>
		</div>
	);
};

export default Preview;
