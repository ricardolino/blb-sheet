export enum ZoneRange {
	melee,
	short,
	long
}

export enum Stat {
	brawn,
	wit,
	will,
	affluence
}

export enum Modifier {
	twoHanded,
	melee,
	improvised
}

export enum ModifierType {
	conditional,
	effect
}

export enum RollType {
	againstOdds
}

export enum ListType {
	advancements,
	consequences,
	equipments,
	treasures,
	weapons
}

export const CONDITIONS = [
	{
		name: 'Blinded',
		description:
			'Attacks made by the creature are Against The Odds and sight based Observation Checks are Impossible.'
	},
	{
		name: 'Deafened',
		description: 'Sound based Observation Checks are Impossible for the creature.'
	},
	{
		name: 'Restrained',
		description: 'A Restrained creature can take an action but cannot move on their turn.'
	},
	{
		name: 'Stunned',
		description: 'A Stunned creature may move but cannot take an action on their turn.'
	},
	{
		name: 'Immobilised',
		description: 'An Immobilised creature can neither act or move on their turn.'
	}
];

export const ARCHETYPES = [
	{
		name: 'Believer'
	},
	{
		name: 'Cabalist'
	},
	{
		name: 'Cut-throat'
	},
	{
		name: 'Dastard'
	},
	{
		name: 'Everyman'
	},
	{
		name: 'Farlander'
	},
	{
		name: 'Freeblade'
	},
	{
		name: 'Outcast'
	},
	{
		name: 'Physiker'
	},
	{
		name: 'Protagonist'
	},
	{
		name: 'Scholar'
	},
	{
		name: 'Veteran'
	}
];
