import type { Weapon } from './types';

export enum range {
	melee,
	short,
	long
}

export enum stat {
	brawn,
	wit,
	will,
	affluence
}

export enum modifier {
	twoHanded,
	melee,
	improvised
}

export enum modifierType {
	conditional,
	effect
}

export enum rollType {
	againstOdds
}

const WEAPON_TYPE = {
	hand: {
		range: range.melee,
		attack: [stat.brawn],
		damageMod: 0,
		initiative: 0,
		modifiers: [
			{
				name: modifier.twoHanded,
				type: modifierType.conditional,
				target: {
					damageMod: 1
				}
			}
		]
	},
	heavy: {
		range: range.melee,
		attack: [stat.brawn],
		damageMod: 1,
		initiative: -1
	},
	light: {
		range: range.melee,
		attack: [stat.wit],
		damageMod: -1,
		initiative: 0,
		modifiers: [
			{
				name: modifier.twoHanded,
				type: modifierType.conditional,
				target: {
					initiative: 1
				}
			}
		]
	},
	long: {
		range: range.short,
		attack: [stat.brawn],
		damageMod: 0,
		initiative: -1,
		modifiers: [
			{
				name: modifier.twoHanded,
				type: modifierType.conditional,
				target: {
					damageMod: 1
				}
			}
		]
	},
	throwing: {
		range: range.short,
		attack: [stat.wit, stat.brawn],
		damageMod: 0,
		initiative: 0,
		modifiers: [
			{
				name: modifier.melee,
				type: modifierType.conditional,
				target: {
					damageMod: -1
				}
			}
		]
	},
	ranged: {
		range: range.long,
		attack: [stat.wit],
		damageMod: 0,
		initiative: 0
	},
	improvised: {
		range: range.melee,
		attack: [stat.brawn],
		damageMod: -2, // TODO: change to half damage
		initiative: 0,
		modifiers: [
			{
				name: modifier.improvised,
				type: modifierType.effect,
				target: {
					rollType: rollType.againstOdds
				}
			}
		]
	}
};

export const WEAPONS: Weapon[] = [
	{
		id: 0,
		name: 'broadsword',
		type: WEAPON_TYPE.hand
	},
	{
		id: 1,
		name: 'hand axe',
		type: WEAPON_TYPE.hand
	},
	{
		id: 2,
		name: 'mace',
		type: WEAPON_TYPE.hand
	},
	{
		id: 3,
		name: 'greatsword',
		type: WEAPON_TYPE.heavy
	},
	{
		id: 4,
		name: 'battleaxe',
		type: WEAPON_TYPE.heavy
	},
	{
		id: 5,
		name: 'warhammer',
		type: WEAPON_TYPE.heavy
	},
	{
		id: 6,
		name: 'dagger',
		type: WEAPON_TYPE.light
	},
	{
		id: 7,
		name: 'rapier',
		type: WEAPON_TYPE.light
	},
	{
		id: 8,
		name: 'scimitar',
		type: WEAPON_TYPE.light
	}
];
