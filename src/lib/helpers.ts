import fs from 'fs';
import { error } from '@sveltejs/kit';

import { SHEETS_PATH, WeaponCategory, WEAPON_TYPE } from './constants';
import type { ItemType, Sheet } from './types';

export function diff<T>(arr1: T[] = [], arr2: T[] = []): T[] {
	return arr1.filter((x) => !arr2.includes(x));
}

export function saveSheetFile(data: Sheet, update = false) {
	const path = `${SHEETS_PATH}/${data.name}.json`;
	const jsonData = JSON.stringify(data, undefined, 4);
	const hasFile = fs.existsSync(path);
	const hasFolder = fs.existsSync(SHEETS_PATH);

	if (!hasFolder) {
		fs.mkdirSync(SHEETS_PATH);
	}

	if (!update && hasFile) {
		throw error(409, 'Character already exists');
	}

	if (update && !hasFile) {
		throw error(404, 'Character not found');
	}

	fs.writeFileSync(path, jsonData, 'utf-8');
}

export function getSheetFile(name: string) {
	const path = `${SHEETS_PATH}/${name}.json`;

	try {
		return fs.readFileSync(path);
	} catch (err) {
		throw error(404, 'Character not found');
	}
}

export function deleteSheetFile(name: string) {
	const path = `${SHEETS_PATH}/${name}.json`;

	try {
		return fs.unlinkSync(path);
	} catch (err) {
		throw error(404, 'Character not found');
	}
}

export function withSign(value: number) {
	return value > 0 ? `+${value}` : value;
}

export const withBrackets = (value: any[]): string =>
	value.length > 1 ? `[${value.join(' / ')}]` : `${value}`;

export function handleWeapon({ categories = [] as ItemType[] }) {
	const { Gunpowder } = WeaponCategory;

	const getAttr = (attr: string, noGunpowder = false) => {
		const filterGunpowder = (category: WeaponCategory) =>
			noGunpowder ? category !== Gunpowder : category === Gunpowder;
		const mapCategory = (category: WeaponCategory) => withSign(WEAPON_TYPE[category][attr]);

		return categories.includes(Gunpowder)
			? categories.filter(filterGunpowder).map(mapCategory)
			: categories.map(mapCategory);
	};

	const attack = `[${getAttr('attack').join(' / ')}]`.toUpperCase();
	const range = `${withBrackets(getAttr('range', true))} range`;
	const damageMod = `dmg modifier ${withBrackets(getAttr('damageMod'))}`;
	const initiative = `initiative ${withBrackets(getAttr('initiative'))}`;

	return `(${categories.join(' / ')} ${attack} | ${range} | ${damageMod} | ${initiative})`;
}
