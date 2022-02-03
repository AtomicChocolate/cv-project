// import uniqid from "uniqid";

interface CV {
	contactInfo: {
		firstName: string;
		lastName: string;
		jobTitle: string;
		phoneNumber: string;
		emailAddress: string;
	};
}

const emptyCV: CV = {
	contactInfo: {
		firstName: "",
		lastName: "",
		jobTitle: "",
		phoneNumber: "",
		emailAddress: "",
	},
};

export { emptyCV };
export type { CV };
