import type { Range, Stat, Modifier, WeaponType as EnumWeaponType } from './constants';

export interface Item {
	id: number;
	name: string;
}

export interface WeaponType {
	name: EnumWeaponType;
	range: Range;
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

export type HandleResult = (result: Item | Weapon) => String;
