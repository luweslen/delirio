import { TCollaborator } from "../@types/collaborator.type";
import { ERole } from "../@types/role.enum";
import { ETeam } from "../@types/team.enum";

export const collaborators: TCollaborator[] = [
	{
		team: [ETeam.SQUAD2, ETeam.SQUAD3, ETeam.SQUAD4],
		role: ERole.DEVELOPER,
		name: "Mateus Godinho",
		slack: { name: "Godinho", link: "https://zrp.slack.com/team/U60N4P143" },
	},
	{
		team: [ETeam.SQUAD2],
		role: ERole.DEVELOPER,
		name: "Moises Junior",
		slack: {
			name: "Moises Junior",
			link: "https://zrp.slack.com/team/U035ZL1E9E0",
		},
	},
	{
		team: [ETeam.SQUAD4],
		role: ERole.DEVELOPER,
		name: "Kainan Guerra",
		slack: {
			name: "Kainan Guerra",
			link: "https://zrp.slack.com/team/U04EUBPGRHD",
		},
	},
	{
		team: [ETeam.SQUAD4],
		role: ERole.DEVELOPER,
		name: "Gabriel Clayton",
		slack: {
			name: "Gabriel Clayton",
			link: "https://zrp.slack.com/team/U03DNJ0FB5K",
		},
	},
	{
		team: [ETeam.SQUAD3],
		role: ERole.DEVELOPER,
		name: "Luciano",
		slack: { name: "Lu", link: "https://zrp.slack.com/team/U039VDK0TU5" },
	},
	{
		team: [ETeam.SQUAD3],
		role: ERole.DEVELOPER,
		name: "Lucas Estevão",
		slack: {
			name: "Lucas Estevão",
			link: "https://zrp.slack.com/team/U024EDB8AQ4",
		},
	},
	{
		team: [ETeam.SQUAD3],
		role: ERole.DEVELOPER,
		name: "Pedro Henrique",
		slack: {
			name: "Pedro Henrique",
			link: "https://zrp.slack.com/team/U0326GKG6NA",
		},
	},
	{
		team: [ETeam.SQUAD4],
		role: ERole.DEVELOPER,
		name: "Cleberton Junior",
		slack: {
			name: "Cleberton Junior",
			link: "https://zrp.slack.com/team/U02HMFHJYD8",
		},
	},
	{
		team: [ETeam.SQUAD1],
		role: ERole.DEVELOPER,
		name: "Enrico",
		slack: { name: "Enrico", link: "https://zrp.slack.com/team/U02FZM440LU" },
	},
	{
		team: [ETeam.QA, ETeam.SQUAD2],
		role: ERole.QUALITY_ASSURANCE,
		name: "Ana Peres",
		slack: {
			name: "Ana Peres",
			link: "https://zrp.slack.com/team/U035D9GCGDT",
		},
	},
	{
		team: [ETeam.QA, ETeam.SQUAD4],
		role: ERole.QUALITY_ASSURANCE,
		name: "Nicoly Santos",
		slack: {
			name: "Nicoly Santos",
			link: "https://zrp.slack.com/team/U04FYJSNK4G",
		},
	},
	{
		team: [ETeam.QA, ETeam.SQUAD1, ETeam.SQUAD3],
		role: ERole.QUALITY_ASSURANCE,
		name: "Lucas Pereira",
		slack: {
			name: "Lucas Pereira",
			link: "https://zrp.slack.com/team/U02PEC6HSBG",
		},
	},
	{
		team: [ETeam.SQUAD3, ETeam.SQUAD4],
		role: ERole.PRODUCT_OWNER,
		name: "Laura",
		slack: { name: "Laura", link: "https://zrp.slack.com/team/UH4RZ979C" },
	},
	{
		team: [ETeam.DEVOPS],
		role: ERole.DEVOPS,
		name: "João Lucas",
		slack: { name: "Giga", link: "https://zrp.slack.com/team/U03UC7G1CP2" },
	},
];
