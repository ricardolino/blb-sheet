import type { ZoneRange, Stat, Modifier, WeaponType as EnumWeaponType } from '$lib/constants';

export interface Item {
	id: number;
	name: string;
}

export interface WeaponType {
	name: EnumWeaponType;
	range: ZoneRange;
	attack: Stat[];
	damageMod: number;
	initiative: number;
	modifiers?: {
		name: Modifier;
		target: object;
	}[];
}

export interface Weapon extends Item {
	type: WeaponType;
}

export type HandleResult = (result: Item | Weapon) => string;
