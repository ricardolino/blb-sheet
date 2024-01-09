import type {
	ZoneRange,
	Stat,
	Modifier,
	WeaponCategory,
	AdvancementCategory,
	AfflictionCategory
} from '$lib/constants';

export interface ItemType {
	name: string;
	categories?: WeaponCategory[] | AdvancementCategory[] | AfflictionCategory[] | string[];
	description?: string;
}

export interface WeaponType {
	name: WeaponCategory;
	range: ZoneRange;
	attack: Stat[];
	damageMod: number;
	initiative: number;
	modifiers?: {
		name: Modifier;
		target: object;
	}[];
}

export interface Sheet {
	id?: number;
	name: string;
	archetype: string;
	experience: number;
	statusCondition: string;
	brawn: number;
	wit: number;
	will: number;
	affluence: number;
	currentVigor: number;
	maxVigor: number;
	grip: number;
	armor: number;
	advancements: ItemType[];
	consequences: ItemType[];
	equipments: ItemType[];
	treasures: ItemType[];
	weapons: ItemType[];
	notes: string;
}
