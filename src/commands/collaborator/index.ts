import Database from "bun:sqlite";
import { Command } from "commander";
import { NewCollaboratorCommand as CreateCollaboratorCommand } from "./create";
import { CreateBulkCollaboratorCommand } from "./create-bulk";

export const CollaboratorCommands = (program: Command, db: Database) => {
	const collaborator = program.command("collaborator");

	CreateCollaboratorCommand(collaborator, db);
	CreateBulkCollaboratorCommand(collaborator, db);
};
