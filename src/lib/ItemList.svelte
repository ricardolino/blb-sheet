<script lang="ts">
	import type { Item } from './types';

	export let name: Item['name'];
	export let list: Item[];
	export let options: Item[];

	let search = '';
	let results: Item[] = [];

	function deleteItem(item: Item) {
		const index = list.findIndex(({ name }) => name === item.name);

		list = list.filter((_, i) => i != index);
	}

	function addItem(item: Item) {
		console.log('### item', JSON.stringify(item));
		list = [...list, item];
		search = '';
		results = [];
	}

	$: if (search.length >= 3) {
		results = options.filter(({ name }) => name.includes(search));
	}
</script>

<h2>{name}</h2>
<ul>
	{#each list as item}
		<li>
			{item.name}
			<button on:click={() => deleteItem(item)}>x</button>
		</li>
	{/each}
	<li>
		<input bind:value={search} />
		{#if search.length >= 3}
			<ul>
				{#each results as result}
					<li>
						<span>{result.name}</span>
						<button disabled={!search} on:click={() => addItem(result)}>+</button>
					</li>
				{/each}
			</ul>
		{/if}
	</li>
</ul>
