<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';

	import type { Item } from '$lib/types';
	import { ItemListType } from "$lib/constants";
	import WeaponResult from "$lib/WeaponResult.svelte";
	import AdvancementResult from './AdvancementResult.svelte';
	import ConsequenceResult from './ConsequenceResult.svelte';
	import TreasureResult from './TreasureResult.svelte';
	import EquipmentResult from './EquipmentResult.svelte';

	export let name: Item['name'];
	export let options: Item[];
	export let type: ItemListType;

	let search = '';
	let list: Item[] = [];
	let results: Item[] = [];
	let component: SvelteComponentTyped<WeaponResult>;
	let isVisible = false;

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

	$: switch(type) {
		case ItemListType.weapon:
			component = WeaponResult;
			break;
		case ItemListType.advancement:
			component = AdvancementResult;
			break;
		case ItemListType.consequence:
			component = ConsequenceResult;
			break;
		case ItemListType.treasure:
			component = TreasureResult;
			break;
		case ItemListType.equipment:
			component = EquipmentResult;
			break;
	}

	$: if (search.length >= 2) {
		results = options.filter(({ name }) => name.toLowerCase().includes(search));
	} else {
		results = options;
	}
</script>

<div class="itemList">
	<h2 class="title">{ItemListType[type]}</h2>
	<ul class="list">
		{#each list as item, i}
			<li>
				{item.name}
				<button on:click={() => deleteItem(i)}>x</button>
			</li>
		{/each}
	</ul>
	<input class="search" bind:value={search} placeholder="search for..." on:focus={toggleResultVisibility} on:blur={toggleResultVisibility} />
	{#if isVisible || search }
		<ul class="results">
			{#each results as result }
				<svelte:component this={component} item={result} addItem={addItem} />
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
		font-family:'Times New Roman', Times, serif;
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