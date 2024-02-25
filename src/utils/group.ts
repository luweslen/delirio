import { TCollaborator } from "../@types/collaborator.type";
import { ERole } from "../@types/role.enum";
import { ETeam } from "../@types/team.enum";

export const groupByRole = (team: TCollaborator[]) => {
	return team.reduce(
		(acc, curr: TCollaborator) => {
			acc[curr.role] = acc[curr.role] ? [...acc[curr.role], curr] : [curr];

			return acc;
		},
		{} as Record<ERole, TCollaborator[]>,
	);
};

export const groupByTeamType = (
	team: {
		name: string;
		type: string;
		collaborators: TCollaborator[];
	}[],
) => {
	return team.reduce(
		(acc, curr) => {
			acc[curr.type] = acc[curr.type] ? [...acc[curr.type], curr] : [curr];

			return acc;
		},
		{} as Record<
			string,
			{
				name: string;
				type: string;
				collaborators: TCollaborator[];
			}[]
		>,
	);
};
