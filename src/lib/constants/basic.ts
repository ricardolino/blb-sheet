import type { Sheet } from '$lib/types';
import { DEFAULT_EQUIPMENTS } from './equipments';

export enum ZoneRange {
	melee,
	short,
	long,
	special
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
	improvised,
	gunpowder
}

export enum ModifierType {
	conditional,
	effect
}

export enum RollType {
	againstOdds,
	upperHand
}

export enum ListType {
	advancements,
	consequences,
	equipments,
	treasures,
	weapons
}

export enum MagicCategory {
	Monstruous = 'Monstruous',
	Mortal = 'Mortal'
}

export enum Condition {
	Blinded = 'Blinded',
	Deafened = 'Deafened',
	Restrained = 'Restrained',
	Stunned = 'Stunned',
	Immobilised = 'Immobilised'
}

export const CONDITIONS = [
	{
		name: Condition.Blinded,
		description:
			'Attacks made by the creature are Against The Odds and sight based Observation Checks are Impossible.'
	},
	{
		name: Condition.Deafened,
		description: 'Sound based Observation Checks are Impossible for the creature.'
	},
	{
		name: Condition.Restrained,
		description: 'A Restrained creature can take an action but cannot move on their turn.'
	},
	{
		name: Condition.Stunned,
		description: 'A Stunned creature may move but cannot take an action on their turn.'
	},
	{
		name: Condition.Immobilised,
		description: 'An Immobilised creature can neither act or move on their turn.'
	}
];

enum Archetype {
	Believer = 'Believer',
	Cabalist = 'Cabalist',
	CutThroat = 'Cut-throat',
	Dastard = 'Dastard',
	Everyman = 'Everyman',
	Farlander = 'Farlander',
	Freeblade = 'Freeblade',
	Outcast = 'Outcast',
	Physiker = 'Physiker',
	Protagonist = 'Protagonist',
	Scholar = 'Scholar',
	Veteran = 'Veteran'
}

export const ARCHETYPES = [
	{ name: Archetype.Believer, description: '' },
	{ name: Archetype.Cabalist, description: '' },
	{ name: Archetype.CutThroat, description: '' },
	{ name: Archetype.Dastard, description: '' },
	{ name: Archetype.Everyman, description: '' },
	{ name: Archetype.Farlander, description: '' },
	{ name: Archetype.Freeblade, description: '' },
	{ name: Archetype.Outcast, description: '' },
	{ name: Archetype.Physiker, description: '' },
	{ name: Archetype.Protagonist, description: '' },
	{ name: Archetype.Scholar, description: '' },
	{ name: Archetype.Veteran, description: '' }
];

export const DEFAULT_SHEET: Sheet = {
	name: '',
	archetype: '',
	experience: 0,
	statusCondition: '',
	brawn: 0,
	wit: 0,
	will: 0,
	affluence: 0,
	currentVigor: 6,
	maxVigor: 6,
	grip: 4,
	armor: 7,
	advancements: [],
	consequences: [],
	equipments: [...DEFAULT_EQUIPMENTS],
	treasures: [],
	weapons: []
};
