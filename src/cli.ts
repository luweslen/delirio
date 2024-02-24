import { Command } from "commander";
import { ETeam } from "./@types/team.enum";
import { daily } from "./commands/daily";
const program = new Command();

program
	.name("delirio")
	.description("CLI que gera ordem aleatória de apresentação")
	.version("1.0.0");

program
	.command("daily")
	.description("Gerar ordem aleatória para Daily")
	.requiredOption("--team <team-name>", "Time selecionado")
	.action((options: { team: ETeam }) => {
		console.log(daily(options.team));
	});

program.parse(process.argv);
