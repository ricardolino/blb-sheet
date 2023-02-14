import { ZoneRange, Modifier, ModifierType, Stat, RollType } from '$lib/constants';
import type { ItemType } from '$lib/types';

export enum WeaponCategory {
	Hand = 'Hand',
	Heavy = 'Heavy',
	Light = 'Light',
	Long = 'Long',
	Throwing = 'Throwing',
	Ranged = 'Ranged',
	Improvised = 'Improvised'
}

const WEAPON_TYPE = {
	[WeaponCategory.Hand]: {
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
	[WeaponCategory.Heavy]: {
		range: ZoneRange.melee,
		attack: [Stat.brawn],
		damageMod: 1,
		initiative: -1
	},
	[WeaponCategory.Light]: {
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
	[WeaponCategory.Long]: {
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
	[WeaponCategory.Throwing]: {
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
	[WeaponCategory.Ranged]: {
		range: ZoneRange.long,
		attack: [Stat.wit],
		damageMod: 0,
		initiative: 0
	},
	[WeaponCategory.Improvised]: {
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

export const WEAPONS: ItemType[] = [
	{
		name: 'Broadsword',
		categories: [WeaponCategory.Hand],
		description: 'A long, single-edged sword with a wide blade.'
	},
	{
		name: 'Hand Axe',
		categories: [WeaponCategory.Hand],
		description: 'A small axe with a short handle.'
	},
	{
		name: 'Mace',
		categories: [WeaponCategory.Hand],
		description: 'A heavy often spiked staff or club used for breaking armor.'
	},
	{
		name: 'Greatsword',
		categories: [WeaponCategory.Heavy],
		description:
			'A straight-bladed double-edged sword large enough to require the use of two hands to wield it effectively.'
	},
	{
		name: 'Battle axe',
		categories: [WeaponCategory.Heavy],
		description: 'A long-handled weapon with a heavy, sharp blade on one end.'
	},
	{
		name: 'Warhammer',
		categories: [WeaponCategory.Heavy],
		description:
			'A long-handled weapon with a solid hammerhead at one side and a pike-head at the other side.'
	},
	{
		name: 'Dagger',
		categories: [WeaponCategory.Light],
		description: 'A small, sharp blade with a handle.'
	},
	{
		name: 'Rapier',
		categories: [WeaponCategory.Light],
		description: 'A long, thin, single-edged sword with a narrow blade.'
	},
	{
		name: 'Scimitar',
		categories: [WeaponCategory.Light],
		description: 'A curved, single-edged sword with a narrow blade.'
	}
];
