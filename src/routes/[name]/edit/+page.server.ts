import { getCharacterFile } from '$lib/helpers';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return getCharacterFile(params.name);
}
