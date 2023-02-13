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
	const jsonData = JSON.stringify(data, undefined, 4);
	const path = getSheetsPath(data.name);
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
	const path = getSheetsPath(name);

	try {
		return fs.readFileSync(path);
	} catch (err) {
		throw error(404, 'Character not found');
	}
}

export function deleteSheetFile(name: string) {
	const path = getSheetsPath(name);

	try {
		return fs.unlinkSync(path);
	} catch (err) {
		throw error(404, 'Character not found');
	}
}
