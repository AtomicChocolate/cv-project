import React, { FunctionComponent, useState } from "react";
import { CV, emptyCV, ExperienceEntryType, JobHistoryType } from "../utils/CV";
import dateFormat from "dateformat";
import uniqid from "uniqid";

interface JobHistoryProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const JobHistory: FunctionComponent<JobHistoryProps> = (
	props: JobHistoryProps
) => {
	const [state, setState] = useState({
		experience: [] as ExperienceEntryType[],
	});
	const [entries, setEntriesState] = useState([] as JSX.Element[]);

	function handleChange(newState: JobHistoryType): void {
		setState(newState);

		let newCV = Object.assign({}, props.cv) as CV;
		newCV.jobHistory = newState;
		props.updateCV(newCV);
	}

	// function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
	// 	const { name, value } = event.currentTarget;

	// 	let newState = Object.assign({}, state) as ExperienceEntryType;
	// 	newState[name] = value;
	// 	handleChange(newState);
	// }

	function newExperienceEntry() {
		let newEntry = {
			companyName: "",
			startDate: new Date(),
			endDate: new Date(),
			title: "",
			location: "",
			description1: "",
			description2: "",
			description3: "",
		} as ExperienceEntryType;
		const newState = Object.assign({}, state);
		newState.experience.concat(newEntry);
		handleChange(newState);

		const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
			const { name, value } = event.currentTarget;
			//const entryProperty = name as keyof ExperienceEntryType;

			let newState = Object.assign({}, newEntry) as ExperienceEntryType;
			newState[name] = value;

			handleChange(state);
		};

		const removeEntry = () => {
			console.log("todo");
		};

		let pushed = entries.concat(
			<section>
				<input
					type="text"
					name="companyName"
					onChange={handleInputChange}
					placeholder="Company name"
					value={"aaa"}
				/>
				<input
					type="date"
					name="startDate"
					onChange={handleInputChange}
					placeholder="Start date"
					value={dateFormat(newEntry.endDate, "yyyy-mm-dd")}
				/>
				<input
					type="date"
					name="endDate"
					onChange={handleInputChange}
					placeholder="End date"
					value={dateFormat(newEntry.endDate, "yyyy-mm-dd")}
				/>
				<input
					type="text"
					name="title"
					onChange={handleInputChange}
					placeholder="Title"
					value={newEntry.title}
				/>
				<input
					type="text"
					name="location"
					onChange={handleInputChange}
					placeholder="Location"
					value={newEntry.location}
				/>
				<input
					type="text"
					name="description1"
					onChange={handleInputChange}
					placeholder={emptyCV.jobHistory.experience[1].description1}
					value={newEntry.description1}
				/>
				<input
					type="text"
					name="description2"
					onChange={handleInputChange}
					placeholder={emptyCV.jobHistory.experience[1].description2}
					value={newEntry.description2}
				/>
				<input
					type="text"
					name="description3"
					onChange={handleInputChange}
					placeholder={emptyCV.jobHistory.experience[1].description3}
					value={newEntry.description3}
				/>
				<button className="add" onClick={removeEntry}>
					-
				</button>
			</section>
		);
		setEntriesState(pushed);
	}

	return (
		<section>
			{entries.map((section) => {
				return <div key={uniqid()}>{section}</div>;
			})}
			<button className="add" onClick={newExperienceEntry}>
				+
			</button>
		</section>
	);
};

export default JobHistory;
