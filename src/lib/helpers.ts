import fs from 'fs';
import { error } from '@sveltejs/kit';

import { SHEETS_PATH } from './constants';

export function diff<T>(arr1: T[] = [], arr2: T[] = []): T[] {
	return arr1.filter((x) => !arr2.includes(x));
}

function getSheetsPath(name: string) {
	return `${SHEETS_PATH}/${name}.json`;
}

export function saveSheetFile(data = {}, update = false) {
	if (!fs.existsSync(SHEETS_PATH)) {
		fs.mkdirSync(SHEETS_PATH);
	}

	if (!update && fs.existsSync(getSheetsPath(data.name))) {
		throw error(409, 'Character already exists');
	}

	if (update && !fs.existsSync(getSheetsPath(data.name))) {
		throw error(404, 'Character not found');
	}

	fs.writeFileSync(getSheetsPath(data.name), JSON.stringify(data, undefined, 4), 'utf-8');
}

export function getSheetFile(name: string) {
	try {
		return fs.readFileSync(getSheetsPath(name));
	} catch (err) {
		throw error(404, 'Character not found');
	}
}

export function deleteSheetFile(name: string) {
	try {
		return fs.unlinkSync(getSheetsPath(name));
	} catch (err) {
		throw error(404, 'Character not found');
	}
}
