<script lang="ts">
	import type { Item } from '$lib/types';
	import { ItemType } from '$lib/constants';
	import Weapon from '$lib/Item/Weapon.svelte';
	import Advancement from '$lib/Item/Advancement.svelte';
	import Consequence from '$lib/Item/Consequence.svelte';
	import Treasure from '$lib/Item/Treasure.svelte';
	import Equipment from '$lib/Item/Equipment.svelte';

	export let options: Item[];
	export let type: ItemType = ItemType.weapon;

	let search = '';
	let list: Item[] = [];
	let results: Item[] = [];
	let isVisible = false;
	let contentOptions = [
		{ format: ItemType.weapon, component: Weapon },
		{ format: ItemType.advancement, component: Advancement },
		{ format: ItemType.consequence, component: Consequence },
		{ format: ItemType.treasure, component: Treasure },
		{ format: ItemType.equipment, component: Equipment }
	];
	let component = contentOptions.find((content) => content.format == type).component;

	function deleteItem(index: number) {
		list = list.filter((_, i) => i != index);
	}

	function addItem(item: Item) {
		list = [...list, item];
		search = '';
	}

	function toggleResultVisibility() {
		if (isVisible) {
			return setTimeout(() => {
				isVisible = false;
			}, 300);
		}

		isVisible = true;
	}

	$: if (search.length >= 2) {
		results = options.filter(({ name }) => name.toLowerCase().includes(search));
	} else {
		results = options;
	}
</script>

<div class="itemList">
	<h2 class="title">{ItemType[type]}s</h2>
	<ul class="list">
		{#each list as item, i}
			<svelte:component this={component} {item} onClick={() => deleteItem(i)} />
		{/each}
	</ul>
	<input
		class="search"
		bind:value={search}
		placeholder="search for..."
		on:focus={toggleResultVisibility}
		on:blur={toggleResultVisibility}
	/>
	{#if isVisible || search}
		<ul class="results">
			{#each results as result}
				<svelte:component this={component} item={result} onClick={() => addItem(result)} />
			{/each}
		</ul>
	{/if}
</div>

<style>
	.itemList {
		display: flex;
		flex-direction: column;
		flex: auto;
		gap: 1rem;
	}

	.title {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
		text-transform: capitalize;
	}

	.search {
		font-size: 1rem;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		width: 100%;
		height: 3rem;
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
		display: flex;
	}
</style>
