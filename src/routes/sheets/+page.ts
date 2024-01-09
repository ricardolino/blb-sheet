import { SHEETS_API_PATH } from '$lib/constants';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const response = await fetch(SHEETS_API_PATH);

	return {
		sheets: await response.json()
	};
};
