import { error } from '@sveltejs/kit';
import { sql, type QueryResult, type QueryResultRow } from '@vercel/postgres';

export async function POST({ request }: { request: Request }) {
	try {
		const sheetData = await request.json();
		const response: QueryResult<QueryResultRow> =
			await sql`INSERT INTO characters (data) VALUES (${sheetData})`;

		console.log('ROWS: ', JSON.stringify(response));

		return new Response(
			JSON.stringify({
				success: true,
				message: 'Character saved successfully'
			}),
			{ status: 200 }
		);
	} catch (err) {
		console.error(err);
		throw error(503, 'Could not save character');
	}
}
