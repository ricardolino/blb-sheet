<script lang="ts">
	import type { Item } from './types';

	export let name: Item['name'];
	export let list: Item[];
	export let options: Item[];

	export let handleResult = (result: any) => String;

	let search = '';
	let results: Item[] = [];

	function deleteItem(item: Item) {
		const index = list.findIndex(({ name }) => name === item.name);

		list = list.filter((_, i) => i != index);
	}

	function addItem(item: Item) {
		list = [...list, item];
		search = '';
		results = [];
	}

	$: if (search.length >= 3) {
		results = options.filter(({ name }) => name.includes(search));
	}
</script>

<div class="itemList">
	<h2 class="title">{name}</h2>
	<ul class="list">
		{#each list as item}
			<li>
				{item.name}
				<button on:click={() => deleteItem(item)}>x</button>
			</li>
		{/each}
		<li>
			<input class="search" bind:value={search} placeholder="search for..." />
			{#if search.length >= 3 && results.length > 0}
				<ul class="results">
					{#each results as result}
						<li>
							<span>{handleResult(result)}</span>
							<button disabled={!search} on:click={() => addItem(result)}>+</button>
						</li>
					{/each}
				</ul>
			{/if}
		</li>
	</ul>	
</div>

<style>
	.itemList {
		display: flex;
		flex-direction: column;
		flex: auto;
		margin-top: 1rem;
		gap: 1rem;
	}

	.title {
		margin: 0;
	}

	.search {
		font-size: 1rem;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
	}

	.list,
	.results {
		padding: 0;
		list-style: none;
		display: flex;
    	flex-direction: column;
    	gap: 0.5rem;
		margin: 0;

	}

	.results {
		margin-top: 0.5rem;
	}
</style>