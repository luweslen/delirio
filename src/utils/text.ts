import { TCollaborator } from "../@types/collaborator.type";

export const generateMarkdownDaily = (collaborators: TCollaborator[]) => {
	const text = collaborators
		.map(
			(collaborator) =>
				`- [ ] ${collaborator.role.toUpperCase()} [@${collaborator.name}](${
					collaborator.slack.link
				})`,
		)
		.join("\n");
	return `${text}`;
};

export const generateSlackDaily = (collaborators: TCollaborator[]) => {
	const text = collaborators
		.map((collaborator) => `- @${collaborator.slack.name}`)
		.join("\n");
	return `Bora daily?\n${text}`;
};

export const generateMarkdownWeekly = (
	data: {
		name: string;
		collaborators: TCollaborator[];
	}[],
) => {
	const text = data
		.map(
			(item) =>
				`- [ ] ${item.name} [${item.collaborators
					.map((i) => `@${i.slack.name}`)
					.join(", ")}]`,
		)
		.join("\n");
	return text;
};

export const generateSlackWeekly = (
	data: {
		name: string;
		collaborators: TCollaborator[];
	}[],
) => {
	const text = data
		.map(
			(item) =>
				`- ${item.name} [${item.collaborators
					.map((i) => `@${i.slack.name}`)
					.join(", ")}]`,
		)
		.join("\n");
	return text;
};
