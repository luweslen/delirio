import { ETeam } from "../@types/team.enum";
import { groupByRole } from "../utils/group";
import { shuffleTeamCollaborators } from "../utils/shuffle";
import { getCollaboratorsByTeam } from "../utils/team";
import { generateMarkdown, generateSlack } from "../utils/text";

export const daily = (team: ETeam) => {
	const collaborators = getCollaboratorsByTeam(team);
	const shuffledTeam = shuffleTeamCollaborators(collaborators);

	const groupCollaboratorByRole = groupByRole(shuffledTeam);

	const dailyOrder = Object.values(groupCollaboratorByRole).flat();

	const textMarkdown = generateMarkdown(dailyOrder);
	const messageSlack = generateSlack(dailyOrder);

	return `${textMarkdown}\n\n${messageSlack}`;
};
