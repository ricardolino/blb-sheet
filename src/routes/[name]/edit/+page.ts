import { SHEETS_API_PATH } from '$lib/constants';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
	const response = await fetch(`${SHEETS_API_PATH}/${params.name}`);

	return await response.json();
};
