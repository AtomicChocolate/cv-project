import { FunctionComponent } from "react";
import { CV } from "../utils/CV";
import uniqid from "uniqid";
import dateFormat from "dateformat";

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
				<h3 className="profession-preview">
					{props.cv.contactInfo.profession}
				</h3>
				<h3 className="location-preview">{props.cv.contactInfo.location}</h3>
				<h3 className="phone-preview">{props.cv.contactInfo.phoneNumber}</h3>
				<h3 className="email-preview">{props.cv.contactInfo.emailAddress}</h3>
			</section>
			<section>
				{props.cv.jobHistory.experience.map((experienceEntry) => (
					<section key={uniqid()}>
						<p className="companyname-preview">{experienceEntry.companyName}</p>
						<p className="jobtitle-preview">{experienceEntry.title}</p>
						<p className="date-preview">
							{dateFormat(experienceEntry.startDate, "mmm yyyy")} {" - "}
							{dateFormat(experienceEntry.endDate, "mmm yyyy")}
						</p>
						<p className="location-preview">{experienceEntry.location}</p>

						<ul>
							<li className="jobdescription-preview">
								{experienceEntry.description1}
							</li>
							<li className="jobdescription-preview">
								{experienceEntry.description2}
							</li>
							<li className="jobdescription-preview">
								{experienceEntry.description3}
							</li>
						</ul>
					</section>
				))}
			</section>
			<section>
				<p className="universityname-preview">
					{props.cv.education.universityName}
				</p>
				<p className="degreemajor-preview">{props.cv.education.degreeMajor}</p>
				<p className="graduationdate-preview">
					{dateFormat(props.cv.education.graduationDate, "mmm yyyy")}
				</p>
				<p className="location-preview">{props.cv.education.location}</p>
				<p className="honors-preview">{props.cv.education.honors}</p>
				<p className="extracurriculars-preview">
					{props.cv.education.extracurriculars}
				</p>
			</section>
			<section>
				<p className="skills-preview">{props.cv.personal.skills}</p>
				<p className="interests-preview">{props.cv.personal.interests}</p>
			</section>
		</div>
	);
};

export default Preview;
