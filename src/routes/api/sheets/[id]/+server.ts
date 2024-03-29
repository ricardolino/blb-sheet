import { error } from '@sveltejs/kit';
import { sql, type QueryResult, type QueryResultRow } from '@vercel/postgres';

export async function GET({ params }: { params: { id: number } }) {
	try {
		const { rows }: QueryResult<QueryResultRow> =
			await sql`SELECT data FROM characters WHERE id = ${params.id}`;

		const body = {
			...rows[0].data,
			id: params.id
		};

		return new Response(JSON.stringify({ ...body }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not get character');
	}
}

export async function PUT({ params, request }: { params: { id: number }; request: Request }) {
	try {
		if (!params.id) {
			throw error(400, 'Missing character id');
		}

		const data = await request.json();

		await sql`UPDATE characters SET data = ${JSON.stringify(data)} WHERE id = ${params.id}`;

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

export async function DELETE({ params }: { params: { id: number } }) {
	try {
		await sql`DELETE FROM characters WHERE id = ${params.id}`;

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
