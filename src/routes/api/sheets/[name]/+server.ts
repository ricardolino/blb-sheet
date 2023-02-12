import { error } from '@sveltejs/kit';

import { deleteSheetFile, getSheetFile, saveSheetFile } from '$lib/helpers';

export async function GET({ params }: { params: { name: string } }) {
	try {
		const data = getSheetFile(params.name);

		return new Response(data.toString(), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not get character');
	}
}

export async function PUT({ params, request }: { params: { name: string }; request: Request }) {
	try {
		if (!params.name) {
			throw error(400, 'Missing character name');
		}

		await saveSheetFile(await request.json(), true);

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Character updated successfully'
			}),
			{ status: 200 }
		);
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not update character');
	}
}

export async function DELETE({ params }: { params: { name: string } }) {
	try {
		deleteSheetFile(params.name);

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Character deleted successfully'
			}),
			{ status: 200 }
		);
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not found character');
	}
}
