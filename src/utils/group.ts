import { TCollaborator } from "../@types/collaborator.type";
import { ERole } from "../@types/role.enum";

export const groupByRole = (team: TCollaborator[]) => {
	return team.reduce(
		(acc, curr: TCollaborator) => {
			acc[curr.role] = acc[curr.role] ? [...acc[curr.role], curr] : [curr];

			return acc;
		},
		{} as Record<ERole, TCollaborator[]>,
	);
};
