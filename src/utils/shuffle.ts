import { TCollaborator } from "../@types/collaborator.type";
import { ETeam } from "../@types/team.enum";

export const shuffleTeamCollaborators = (collaborators: TCollaborator[]) => {
	return collaborators
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
};

export const shuffleTeams = (
	data: {
		name: string;
		type: string;
		collaborators: TCollaborator[];
	}[],
) => {
	return data
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
};
