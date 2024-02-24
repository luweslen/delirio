import { TCollaborator } from "../@types/collaborator.type";

export const shuffleTeamCollaborators = (collaborators: TCollaborator[]) => {
	return collaborators
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
};
