import Database from "bun:sqlite";
import chalk from "chalk";
import { Command } from "commander";
import { ETeam } from "../@types/team.enum";
import { CollaboratorDatabase } from "../db/collaborator";
import { groupByTeamType } from "../utils/group";
import { shuffleTeams } from "../utils/shuffle";
import { generateMarkdownWeekly, generateSlackWeekly } from "../utils/text";

export const WeeklyCommands = (program: Command, db: Database) => {
	const weekly = program.command("weekly");

	weekly.action(() => {
		const allTeams = Object.entries(ETeam);

		const teamsWithCollaborators = allTeams.map(([key, value]) => ({
			name: key,
			type: key.includes("SQUAD") ? "SQUAD" : "TEAM",
			collaborators: CollaboratorDatabase.getByTeam(db, value),
		}));

		const shuffledTeams = shuffleTeams(teamsWithCollaborators);

		const teams = Object.values(groupByTeamType(shuffledTeams)).flat();

		console.log(chalk.bold(chalk.magenta("Markdown")));
		console.log(generateMarkdownWeekly(teams));

		console.log("");

		console.log(chalk.bold(chalk.magenta("Mensagem Slack")));
		console.log(`Bora Weekly?\n${generateSlackWeekly(teams)}`);
	});
};
