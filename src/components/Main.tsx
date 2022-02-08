import { FunctionComponent, useEffect, useState } from "react";
import Form from "./form/Form";
import Preview from "./preview/Preview";
import { CV, emptyCV } from "./utils/CV";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
	const [cv, setState] = useState(emptyCV);

	function updateCV(newCV: CV): void {
		console.log("update cv", newCV);
		setState(newCV);
	}

	// useEffect(() => {
	// 	return () => {
	// 		<main>
	// 			<Form cv={cv} updateCV={updateCV} />
	// 			<Preview cv={cv} />
	// 		</main>;
	// 	};
	// });

	return (
		<main>
			<Form cv={cv} updateCV={updateCV} />
			<Preview cv={cv} />
		</main>
	);
};

export default Main;
