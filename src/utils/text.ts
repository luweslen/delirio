import { TCollaborator } from "../@types/collaborator.type";

export const generateMarkdown = (collaborators: TCollaborator[]) => {
	const text = collaborators
		.map(
			(collaborator) =>
				`- [ ] ${collaborator.role.toUpperCase()} [@${collaborator.name}](${
					collaborator.slack.link
				})`,
		)
		.join("\n");
	return `MARKDOWN\n${text}`;
};

export const generateSlack = (collaborators: TCollaborator[]) => {
	const text = collaborators
		.map((collaborator) => `- @${collaborator.slack.name}`)
		.join("\n");
	return `SLACK\nBora daily?\n${text}`;
};
