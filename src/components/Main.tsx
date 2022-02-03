import { FunctionComponent, useEffect, useState } from "react";
import Form from "./form/Form";
import Preview from "./preview/Preview";
import { emptyCV } from "./utils/CV";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
	const [cv] = useState(emptyCV);

	

	useEffect(() => {
		return () => {
			<main>
				<Form cv={cv} />
				<Preview cv={cv} />
			</main>;
		};
	});

	return (
		<main>
			<Form cv={cv} />
			<Preview cv={cv} />
		</main>
	);
};

export default Main;
