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
		throw error(500, 'Could not save character');
	}
}

export async function GET() {
	try {
		const { rows }: QueryResult<QueryResultRow> = await sql`SELECT * FROM characters`;
		const body = rows.map((row) => ({ ...row.data, id: row.id }));

		return new Response(JSON.stringify(body), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(err);
		throw error(500, 'Could not get characters');
	}
}
