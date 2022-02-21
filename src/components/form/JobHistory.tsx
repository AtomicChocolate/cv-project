import React, { FunctionComponent, useState } from "react";
import { CV, emptyCV, ExperienceEntryType } from "../utils/CV";
import dateFormat from "dateformat";
import uniqid from "uniqid";

interface EntryDataType {
	newEntry: ExperienceEntryType;
	handleInputChange: Function;
	removeEntry: Function;
}
interface JobHistoryProps {
	cv: CV;
	updateCV: (newCV: CV) => void;
}

const JobHistory: FunctionComponent<JobHistoryProps> = (
	props: JobHistoryProps
) => {
	const [state, setState] = useState([] as ExperienceEntryType[]);
	const [entries, setEntriesState] = useState([] as EntryDataType[]);

	function handleChange(newState: ExperienceEntryType[]): void {
		setState(newState);

		let newCV = Object.assign({}, props.cv) as CV;
		newCV.jobHistory = { experience: newState };
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
			entryId: uniqid(),
			companyName: "",
			startDate: new Date(),
			endDate: new Date(),
			title: "",
			location: "",
			description1: "",
			description2: "",
			description3: "",
		} as ExperienceEntryType;
		let newState = state.concat(newEntry);
		setState(newState);

		const handleInputChange = (
			event: React.FormEvent<HTMLInputElement>,
			index: number
		) => {
			const { name, value } = event.currentTarget;
			//const entryProperty = name as keyof ExperienceEntryType;

			newEntry[name] = value;
			const updatedState = [...state];
			updatedState[index] = newEntry;

			handleChange(updatedState);
		};

		const removeEntry = () => {
			console.log("todo");
		};

		let pushed = entries.concat({
			newEntry: newEntry,
			handleInputChange: handleInputChange,
			removeEntry: removeEntry,
		});
		setEntriesState(pushed);
	}

	return (
		<section>
			{entries.map((entryData) => {
				const index = state.findIndex(
					(entry) => entry.entryId === entryData.newEntry.entryId
				);
				return (
					<div key={uniqid()}>
						<section>
							<input
								type="text"
								name="companyName"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder="Company name"
								value={state[index].companyName}
							/>
							<input
								type="date"
								name="startDate"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder="Start date"
								value={dateFormat(state[index].endDate, "yyyy-mm-dd")}
							/>
							<input
								type="date"
								name="endDate"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder="End date"
								value={dateFormat(state[index].endDate, "yyyy-mm-dd")}
							/>
							<input
								type="text"
								name="title"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder="Title"
								value={state[index].title}
							/>
							<input
								type="text"
								name="location"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder="Location"
								value={state[index].location}
							/>
							<input
								type="text"
								name="description1"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder={emptyCV.jobHistory.experience[1].description1}
								value={state[index].description1}
							/>
							<input
								type="text"
								name="description2"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder={emptyCV.jobHistory.experience[1].description2}
								value={state[index].description2}
							/>
							<input
								type="text"
								name="description3"
								onChange={(e) => entryData.handleInputChange(e, index)}
								placeholder={emptyCV.jobHistory.experience[1].description3}
								value={state[index].description3}
							/>
							<button className="add" onClick={(e) => entryData.removeEntry()}>
								-
							</button>
						</section>
					</div>
				);
			})}
			<button className="add" onClick={newExperienceEntry}>
				+
			</button>
		</section>
	);
};

export default JobHistory;
