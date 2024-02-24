import { ETeam } from "../@types/team.enum";
import { collaborators } from "./collaborator";

export const getTeamsAndCollaborators = () => {
	const teams = Object.keys(ETeam) as ETeam[];

	return teams.map((team) => ({
		name: team,
		collaborators: collaborators.filter((collaborator) =>
			collaborator.team.includes(team),
		),
	}));
};

export const getCollaboratorsByTeam = (team: ETeam) => {
	return collaborators.filter((collaborator) =>
		collaborator.team.includes(team),
	);
};
