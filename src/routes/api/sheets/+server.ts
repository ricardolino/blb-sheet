import { error } from '@sveltejs/kit';
import { sql, type QueryResult, type QueryResultRow } from '@vercel/postgres';

export async function POST({ request }: { request: Request }) {
	try {
		const data = await request.json();

		const { rows }: QueryResult<QueryResultRow> =
			await sql`INSERT INTO characters (data) VALUES (${JSON.stringify(data)}) RETURNING id`;

		const body = { id: rows[0].id };

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Character saved successfully',
				body
			}),
			{ status: 200 }
		);
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not save character');
	}
}
