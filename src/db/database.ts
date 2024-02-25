import { Database } from "bun:sqlite";
import { CollaboratorDatabase } from "./collaborator";

const prepareTables = (db: Database) => {
	CollaboratorDatabase.prepare(db).run();
};

export { prepareTables };
