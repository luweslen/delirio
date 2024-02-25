import Database from "bun:sqlite";
import { Command } from "commander";
import { CollaboratorCommands } from "./commands/collaborator";
import { DailyCommands } from "./commands/daily";
import { WeeklyCommands } from "./commands/weekly";
import { prepareTables } from "./db/database";
const program = new Command();

const db = new Database("./src/db/delirio.sqlite");

prepareTables(db);

program
	.name("delirio")
	.description("CLI para gerenciamento de times")
	.version("1.0.0");

CollaboratorCommands(program, db);
DailyCommands(program, db);
WeeklyCommands(program, db);

program.parse(process.argv);
