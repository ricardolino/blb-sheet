import { ZoneRange, Modifier, ModifierType, Stat, RollType } from '$lib/constants';
import type { Weapon } from '$lib/types';

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
		range: ZoneRange.melee,
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
		range: ZoneRange.melee,
		attack: [Stat.brawn],
		damageMod: 1,
		initiative: -1
	},
	light: {
		name: WeaponType.light,
		range: ZoneRange.melee,
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
		range: ZoneRange.short,
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
		range: ZoneRange.short,
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
		range: ZoneRange.long,
		attack: [Stat.wit],
		damageMod: 0,
		initiative: 0
	},
	improvised: {
		name: WeaponType.improvised,
		range: ZoneRange.melee,
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
		name: 'Broadsword',
		type: WEAPON_TYPE.hand
	},
	{
		id: 1,
		name: 'Hand Axe',
		type: WEAPON_TYPE.hand
	},
	{
		id: 2,
		name: 'Mace',
		type: WEAPON_TYPE.hand
	},
	{
		id: 3,
		name: 'Greatsword',
		type: WEAPON_TYPE.heavy
	},
	{
		id: 4,
		name: 'Battleaxe',
		type: WEAPON_TYPE.heavy
	},
	{
		id: 5,
		name: 'Warhammer',
		type: WEAPON_TYPE.heavy
	},
	{
		id: 6,
		name: 'Dagger',
		type: WEAPON_TYPE.light
	},
	{
		id: 7,
		name: 'Rapier',
		type: WEAPON_TYPE.light
	},
	{
		id: 8,
		name: 'Scimitar',
		type: WEAPON_TYPE.light
	}
];
