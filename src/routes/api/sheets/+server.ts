import { saveSheetFile } from '$lib/helpers';

export async function POST({ request }: { request: Request }) {
	await saveSheetFile(await request.json());

	return new Response(
		JSON.stringify({
			success: true,
			message: 'Character saved successfully'
		}),
		{ status: 200 }
	);
}
