<script lang="ts">
	import { goto } from '$app/navigation';

	import { SHEETS_API_PATH } from '$lib/constants';

	/** @type {import('./$types').PageData} */
	export let data;

	function deleteSheet() {
		fetch(`${SHEETS_API_PATH}/${data.name}`, {
			method: 'DELETE'
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				goto('/');
			})
			.catch(console.error);
	}
</script>

<pre class="json">{JSON.stringify(data, undefined, 4)}</pre>

{#if data.name}
	<button class="button" on:click={deleteSheet}>Delete</button>
{/if}

<style>
	.json {
		font-family: monospace;
	}
</style>
