import { error } from '@sveltejs/kit';
import { sql, type QueryResult, type QueryResultRow } from '@vercel/postgres';

export async function POST({ request }: { request: Request }) {
	try {
		const sheetData = await request.json();
		const { rows }: QueryResult<QueryResultRow> =
			await sql`INSERT INTO characters (data) VALUES (${sheetData})`;

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Character saved successfully',
				data: rows[0].data
			}),
			{ status: 200 }
		);
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not save character');
	}
}
