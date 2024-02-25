import Database from "bun:sqlite";
import chalk from "chalk";
import { Command } from "commander";
import { TCollaborator } from "../../@types/collaborator.type";
import { CollaboratorDatabase } from "../../db/collaborator";

export const CreateBulkCollaboratorCommand = (
	program: Command,
	db: Database,
) => {
	program
		.command("create-bulk")
		.requiredOption("--path <path>", "Caminho do arquivo")
		.action(async ({ path }: { path: string }) => {
			const file = Bun.file(path, { type: "application/json" });
			const collaborators: TCollaborator[] = JSON.parse(await file.text());

			for (const collaborator of collaborators) {
				console.log(chalk.bold(chalk.cyan(`>_ ${collaborator.name}`)));
				CollaboratorDatabase.create(db, collaborator);
				console.log(chalk.green("  - Criado"));
			}
		});
};
