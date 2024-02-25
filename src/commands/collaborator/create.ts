import Database from "bun:sqlite";
import chalk from "chalk";
import { Command } from "commander";
import inquirer from "inquirer";
import { ERole } from "../../@types/role.enum";
import { ETeam } from "../../@types/team.enum";
import { CollaboratorDatabase } from "../../db/collaborator";

export const NewCollaboratorCommand = (program: Command, db: Database) => {
	program.command("create").action(async () => {
		const answers = await inquirer.prompt<{
			name: string;
			role: ERole;
			team: ETeam[];
			slackName: string;
			slackLink: string;
		}>([
			{
				type: "input",
				name: "name",
				message: "Qual é o nome do colaborador?",
			},
			{
				type: "list",
				choices() {
					return [
						{ name: "Desenvolvedor", value: ERole.DEVELOPER },
						{ name: "Quality Assurance", value: ERole.QUALITY_ASSURANCE },
						{ name: "Product Owner", value: ERole.PRODUCT_OWNER },
						{ name: "Designer", value: ERole.DESIGNER },
						{ name: "DevOps", value: ERole.DEVOPS },
					];
				},
				name: "role",
				message: "Qual é o papel do colaborador?",
			},
			{
				type: "checkbox",
				name: "team",
				message: "Qual time está participando?",
				choices: [
					{ name: "Squad 1", value: ETeam.SQUAD1 },
					{ name: "Squad 2", value: ETeam.SQUAD2 },
					{ name: "Squad 3", value: ETeam.SQUAD3 },
					{ name: "Squad 4", value: ETeam.SQUAD4 },
					{ name: "QA", value: ERole.QUALITY_ASSURANCE },
					{ name: "Designer", value: ERole.DESIGNER },
					{ name: "DevOps", value: ERole.DEVOPS },
				],
			},
			{
				type: "input",
				name: "slackName",
				message: "Qual é o username no slack do colaborador?",
			},
			{
				type: "input",
				name: "slackLink",
				message: "Qual é o link do slack do colaborador?",
			},
		]);

		const collaborator = {
			name: answers.name,
			role: answers.role,
			team: answers.team,
			slack: {
				name: answers.slackName,
				link: answers.slackLink,
			},
		};
		CollaboratorDatabase.create(db, collaborator);

		console.log(chalk.green("Colaborador criado com sucesso!"));
	});
};
