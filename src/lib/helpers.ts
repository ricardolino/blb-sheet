import { error } from '@sveltejs/kit';
import fs from 'fs';

export function diff<T>(arr1: T[] = [], arr2: T[] = []): T[] {
	return arr1.filter((x) => !arr2.includes(x));
}

export function getCharacterFile(name: '') {
	try {
		const json = fs.readFileSync(`./.characters/${name}.json`);

		return JSON.parse(json);
	} catch (err) {
		console.error(err);
		throw error(404, 'Not found');
	}
}
