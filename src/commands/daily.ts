import Database from "bun:sqlite";
import chalk from "chalk";
import { Command } from "commander";
import { ETeam } from "../@types/team.enum";
import { CollaboratorDatabase } from "../db/collaborator";
import { groupByRole } from "../utils/group";
import { shuffleTeamCollaborators } from "../utils/shuffle";
import { generateMarkdownDaily, generateSlackDaily } from "../utils/text";

export const DailyCommands = (program: Command, db: Database) => {
	const daily = program.command("daily");

	daily
		.requiredOption("--team <team>", "Time")
		.action(({ team }: { team: ETeam }) => {
			const collaborators = CollaboratorDatabase.getByTeam(db, team);

			const shuffledTeam = shuffleTeamCollaborators(collaborators);

			const groupCollaboratorByRole = groupByRole(shuffledTeam);

			const dailyOrder = Object.values(groupCollaboratorByRole).flat();

			const textMarkdown = generateMarkdownDaily(dailyOrder);
			console.log(chalk.bold(chalk.magenta("Markdown")));
			console.log(textMarkdown);

			console.log("");

			const messageSlack = generateSlackDaily(dailyOrder);
			console.log(chalk.bold(chalk.magenta("Mensagem Slack")));
			console.log(messageSlack);
		});
};
