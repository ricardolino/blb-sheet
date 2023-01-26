import type { Weapon } from './types';

export enum Range {
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

export enum WeaponType {
	hand,
	heavy,
	light,
	long,
	throwing,
	ranged,
	improvised
}

const WEAPON_TYPE = {
	hand: {
		name: WeaponType.hand,
		range: Range.melee,
		attack: [Stat.brawn],
		damageMod: 0,
		initiative: 0,
		modifiers: [
			{
				name: Modifier.twoHanded,
				type: ModifierType.conditional,
				target: {
					damageMod: 1
				}
			}
		]
	},
	heavy: {
		name: WeaponType.heavy,
		range: Range.melee,
		attack: [Stat.brawn],
		damageMod: 1,
		initiative: -1
	},
	light: {
		name: WeaponType.light,
		range: Range.melee,
		attack: [Stat.wit],
		damageMod: -1,
		initiative: 0,
		modifiers: [
			{
				name: Modifier.twoHanded,
				type: ModifierType.conditional,
				target: {
					initiative: 1
				}
			}
		]
	},
	long: {
		name: WeaponType.long,
		range: Range.short,
		attack: [Stat.brawn],
		damageMod: 0,
		initiative: -1,
		modifiers: [
			{
				name: Modifier.twoHanded,
				type: ModifierType.conditional,
				target: {
					damageMod: 1
				}
			}
		]
	},
	throwing: {
		name: WeaponType.throwing,
		range: Range.short,
		attack: [Stat.wit, Stat.brawn],
		damageMod: 0,
		initiative: 0,
		modifiers: [
			{
				name: Modifier.melee,
				type: ModifierType.conditional,
				target: {
					damageMod: -1
				}
			}
		]
	},
	ranged: {
		name: WeaponType.ranged,
		range: Range.long,
		attack: [Stat.wit],
		damageMod: 0,
		initiative: 0
	},
	improvised: {
		name: WeaponType.improvised,
		range: Range.melee,
		attack: [Stat.brawn],
		damageMod: -2, // TODO: change to half damage
		initiative: 0,
		modifiers: [
			{
				name: Modifier.improvised,
				type: ModifierType.effect,
				target: {
					RollType: RollType.againstOdds
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
