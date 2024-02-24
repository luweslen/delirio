import { ERole } from "./role.enum";
import { ETeam } from "./team.enum";

export type TCollaboratorSlack = {
	name: string;
	link: string;
};

export type TCollaborator = {
	team: ETeam[];
	role: ERole;
	name: string;
	slack: TCollaboratorSlack;
};
