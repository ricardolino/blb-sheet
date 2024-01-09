import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').ServerLoad} */
export function load() {
	throw redirect(302, '/sheets');
}
