import Database from "bun:sqlite";
import { TCollaborator } from "../@types/collaborator.type";
import { ETeam } from "../@types/team.enum";

const prepareCollaboratorTable = (db: Database) =>
	db.prepare(`
    CREATE TABLE IF NOT EXISTS collaborator (
      id INTEGER PRIMARY KEY,
      name TEXT,
			email TEXT UNIQUE,
      role TEXT,
      team TEXT ARRAY,
      slack JSONB
    )
`);

function createCollaborator(db: Database, collaborator: TCollaborator): void {
	const query = db.query(
		"INSERT INTO collaborator (name, role, email, team, slack) VALUES (?, ?, ?, ?, ?)",
	);
	query.run(
		collaborator.name,
		collaborator.role,
		collaborator.email,
		JSON.stringify(collaborator.team),
		JSON.stringify(collaborator.slack),
	);
}

function getCollaborator(db: Database): TCollaborator[] {
	const query = db.query("SELECT * FROM collaborator");
	return query.all() as TCollaborator[];
}

function getCollaboratorByTeam(db: Database, team: ETeam): TCollaborator[] {
	const query = db.query(
		`SELECT * FROM collaborator WHERE team LIKE '%"${team}"%'`,
	);
	const collaborators = query.all() as {
		team: string;
		slack: string;
	}[];

	const parsedResults = collaborators.map((collaborator) => {
		return {
			...collaborator,
			slack: JSON.parse(collaborator.slack),
			team: JSON.parse(collaborator.team),
		};
	});
	return parsedResults as TCollaborator[];
}

export const CollaboratorDatabase = {
	prepare: prepareCollaboratorTable,
	create: createCollaborator,
	get: getCollaborator,
	getByTeam: getCollaboratorByTeam,
};
