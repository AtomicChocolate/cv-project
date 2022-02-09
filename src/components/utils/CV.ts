interface ContactInfoType {
	firstName: string;
	lastName: string;
	profession: string;
	location: string;
	phoneNumber: string;
	emailAddress: string;
}

interface ExperienceEntry {
	companyName: string;
	startDate: Date;
	endDate: Date;
	title: string;
	location: string;
	description: string[];
}
interface ExperienceType {
	experience: ExperienceEntry[];
}
interface EducationType {
	universityName: string;
	degreeMajor: string;
	graduationDate: Date;
	location: string;
	honors: string;
	extracurriculars: string;
}

interface PersonalType {
	skills: string;
	interests: string;
}

interface CV {
	contactInfo: ContactInfoType;
	jobHistory: ExperienceType;
	education: EducationType;
	personal: PersonalType;
}

const emptyCV: CV = {
	contactInfo: {
		firstName: "Jobby",
		lastName: "McJobface",
		profession: "Your profession (e.g, Senior V.P.)",
		location: "City, ST",
		phoneNumber: "555-555-5555",
		emailAddress: "jobby@example.org",
	},
	jobHistory: {
		experience: [
			{
				companyName: "C.O.G.S. Incorporated",
				startDate: new Date(),
				endDate: new Date(),
				title: "Senior V.P.",
				location: "Toontown",
				description: [
					"C.O.G.S. Incorporated is a business that does business things.",
					"As Senior Vice President of Sales, I oversee our marketing, fundraising, and product outreach.",
					"Tens of thousands of cogs have been promoted under my management, helping expand the business considerably.",
				],
			},
			{
				companyName: "Company Name",
				startDate: new Date(),
				endDate: new Date(),
				title: "Job Title",
				location: "City, ST",
				description: [
					"Core responsibility #1.",
					"Core responsibility #2.",
					"Core responsibility #3.",
				],
			},
		],
	},
	education: {
		universityName: "University Name",
		degreeMajor: "Degree (e.g, BS), Majors (e.g, Sales)",
		graduationDate: new Date(),
		location: "City, ST",
		honors:
			"List your honors like *summa cum laude* or Economics Honors Society; 3.X/4.0 GPA",
		extracurriculars:
			"Other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color",
	},
	personal: {
		skills:
			"Skills, for example: Strategic planning, revenue modeling & forecasting, sales, Amazon marketing, crowdfunding",
		interests:
			"Interests, for example: Puns, sleeping, yoga, traveling, hiking, Seinfeld, video games, breakfast",
	},
};

export { emptyCV };
export type {
	ContactInfoType,
	ExperienceEntry,
	ExperienceType,
	EducationType,
	PersonalType,
	CV,
};
