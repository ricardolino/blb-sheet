import type { range, stat, modifier } from './constants';

export interface WeaponTypeModifier {
	name: modifier;
	target: object;
}

export interface WeaponType {
	range: range;
	attack: stat[];
	damageMod: number;
	initiative: number;
	modifiers?: WeaponTypeModifier[];
}

export interface Item {
	id: number;
	name: string;
}

export interface Weapon extends Item {
	type: WeaponType;
}
