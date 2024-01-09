import { WeaponCategory, WEAPON_TYPE } from './constants';
import type { ItemType } from './types';

export function diff<T>(arr1: T[] = [], arr2: T[] = []): T[] {
	return arr1.filter((x) => !arr2.includes(x));
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

export function setSessionStorageMessage(message: string) {
	sessionStorage.setItem('message', message);
}

export function getSessionStorageMessage() {
	const message = sessionStorage.getItem('message');

	return message;
}

export function removeSessionStorageMessage() {
	sessionStorage.removeItem('message');
}

export function dispatchNotificationEvent(message: string) {
	setSessionStorageMessage(message);
	dispatchEvent(new CustomEvent('notification'));
}
