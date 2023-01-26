<script lang="ts">
	import type { Item } from './types';

	export let name: Item['name'];
	export let list: number[];

	let search = '';
	let results:Item[];

	function deleteItem(i: number) {
		list = list.filter((item) => item !== list[i]);
	}

	function addItem(i: number) {
		list = [...list, i];
		search = '';
	}

	const options:Item[] = [
		{
			id: 0,
			"name": "sword"
		},
		{
			id: 1,
			"name": "dagger"
		}
	];

	$: if (search.length >= 3) {
		results = options.filter(({ name }) => name === search);
	}
</script>

<h2>{name}</h2>
<ul>
	{#each list as i}
		<li>
			{options[i]}
			<button on:click={() => deleteItem(i)}>x</button>
		</li>
	{/each}
	<li>
		<input bind:value={search} />
		{#if search }
			<ul>
				{#each results as result, i }
					<span>{result.name}</span>
					<button disabled={!search} on:click={() => addItem(i)}>+</button>
				{/each}
			</ul>
		{/if}
	</li>
</ul>
