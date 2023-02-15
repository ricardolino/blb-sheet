import { ZoneRange, Modifier, ModifierType, Stat, RollType } from '$lib/constants';
import type { ItemType } from '$lib/types';

export enum WeaponCategory {
	Hand = 'Hand',
	Heavy = 'Heavy',
	Light = 'Light',
	Long = 'Long',
	Throwing = 'Throwing',
	Ranged = 'Ranged',
	Improvised = 'Improvised',
	Gunpowder = 'Gunpowder'
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
	},
	[WeaponCategory.Gunpowder]: {
		range: ZoneRange.special,
		attack: [Stat.wit],
		damageMod: 0,
		initiative: 0,
		modifiers: [
			{
				name: Modifier.gunpowder,
				type: ModifierType.effect,
				target: {
					RollType: RollType.upperHand
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
		description: 'A thin, light sharp-pointed sword used for thrusting.'
	},
	{
		name: 'Scimitar',
		categories: [WeaponCategory.Light],
		description: 'A  single-edged sword with a convex curved blade.'
	},
	{
		name: 'Spear',
		categories: [WeaponCategory.Long],
		description: 'A long, thin, two-handed polearm with a sharp point.'
	},
	{
		name: 'Halberd',
		categories: [WeaponCategory.Long],
		description: 'A two-handed axe blade topped with a spike mounted on a long shaft.'
	},
	{
		name: 'Guisarme',
		categories: [WeaponCategory.Long],
		description:
			'A shafted weapon having as a head a curved, double-edged blade with a beak at the back.'
	},
	{
		name: 'Throwing Dagger',
		categories: [WeaponCategory.Throwing],
		description: 'A small, sharp blade used for throwing. 3 units.'
	},
	{
		name: 'Throwing Axe',
		categories: [WeaponCategory.Throwing],
		description: 'A small axe used for throwing. 3 units.'
	},
	{
		name: 'Javelin',
		categories: [WeaponCategory.Throwing],
		description: 'A long, thin, pointed spear used for throwing. 3 units.'
	},
	{
		name: 'Crossbow',
		categories: [WeaponCategory.Ranged],
		description: 'A bow mounted on a stock that is used to shoot projectiles. 10 ammunitions.'
	},
	{
		name: 'Longbow',
		categories: [WeaponCategory.Ranged],
		description: 'A bow with a long handle and a flexible bowstring. 10 ammunitions.'
	},
	{
		name: 'Shortbow',
		categories: [WeaponCategory.Ranged],
		description: 'A bow with a short handle and a flexible bowstring. 10 ammunitions.'
	},
	{
		name: 'Pistol',
		categories: [WeaponCategory.Throwing, WeaponCategory.Gunpowder],
		description:
			'A small, portable firearm with a single barrel and a short stock. Require a full minute reloading and are usually only be fired once per combat. 5 ammunitions.'
	},
	{
		name: 'Musket',
		categories: [WeaponCategory.Ranged, WeaponCategory.Gunpowder],
		description:
			'A long barrel firearm, typically smooth-bored and fired from the shoulder. Require a full minute reloading and are usually only be fired once per combat. 5 ammunitions.'
	},
	{
		name: 'Blunderbuss',
		categories: [WeaponCategory.Heavy, WeaponCategory.Gunpowder],
		description:
			'An obsolete short musket with large bore and flared muzzle, used to scatter shot at short range. Require a full minute reloading and are usually only be fired once per combat. 5 ammunitions.'
	}
];
