import type {
	ZoneRange,
	Stat,
	Modifier,
	WeaponType as EnumWeaponType,
	AdvancementType as EnumAdvancementType,
	AfflictionType as EnumAfflictionType
} from '$lib/constants';

export interface ItemType {
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

export interface Weapon extends ItemType {
	type: WeaponType;
}

export interface Advancement extends ItemType {
	type: EnumAdvancementType[];
	description: string;
}

export interface Consequence extends ItemType {
	type: EnumAfflictionType[];
	description: string;
}
