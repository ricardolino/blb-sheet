<script lang="ts">
	import { diff } from '$lib/helper';

	import type { Item } from '$lib/types';
	import { ADVANCEMENTS, AFFLICTIONS, EQUIPMENTS, WEAPONS, ItemType } from '$lib/constants';
	import { Advancement, Consequence, Equipment, Treasure, Weapon } from '$lib/Item/index.js';

	export let type: ItemType;

	let search = '';
	let list: Item[] = [];
	let results: Item[] = [];
	let isVisible = false;

	const LIST_OPTIONS = [
		{ format: ItemType.advancement, component: Advancement, options: ADVANCEMENTS },
		{ format: ItemType.consequence, component: Consequence, options: AFFLICTIONS },
		{ format: ItemType.equipment, component: Equipment, options: EQUIPMENTS, isRepeatable: true },
		{ format: ItemType.treasure, component: Treasure, options: [], isRepeatable: true },
		{ format: ItemType.weapon, component: Weapon, options: WEAPONS, isRepeatable: true }
	];
	const {
		component,
		options = [],
		isRepeatable = false
	} = LIST_OPTIONS.find((content) => content.format == type) || {};

	function clearSearch() {
		search = '';
	}

	function deleteItem(index: number) {
		list = list.filter((_, i) => i != index);
	}

	function addItem(item: Item) {
		list = [...list, item];
		clearSearch();
	}

	function toggleVisibility() {
		setTimeout(() => {
			clearSearch();
			isVisible = !isVisible;
		}, 200);
	}

	function getOptions(options: Item[], list: Item[]) {
		return isRepeatable ? options : diff<Item>(options, list);
	}

	$: if (search.length >= 2) {
		results = getOptions(options, list).filter(({ name }) => name.toLowerCase().includes(search));
	} else {
		results = getOptions(options, list);
	}
</script>

<div class="wrapper">
	<div class="head">
		<h2 class="title">{ItemType[type]}s</h2>
		<div class="fieldset">
			<input
				class="search"
				bind:value={search}
				placeholder="search for..."
				on:focus={toggleVisibility}
				on:blur={toggleVisibility}
			/>
			{#if results.length > 0 && (isVisible || search)}
				<ul class="list fixed">
					{#each results as item}
						<li class="item">
							<svelte:component
								this={component}
								handleClick={() => addItem(item)}
								{item}
								button="+"
							/>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	{#if list.length > 0}
		<ul class="list full">
			{#each list as item, index}
				<li class="item">
					<svelte:component
						this={component}
						handleClick={() => deleteItem(index)}
						{item}
						button="-"
					/>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		flex: auto;
		margin-bottom: 2rem;
		padding: 0.5rem;
		border: 2px double;
	}

	.head {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: space-between;
	}

	.title {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
		text-transform: capitalize;
		min-width: 12rem;
	}

	.fieldset {
		position: relative;
	}

	.search {
		font-size: 1rem;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		height: 2rem;
		width: 20rem;
		border: 1px solid #555;
	}

	.list {
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		margin: 0;
		width: 100%;
		gap: 0.5rem;
	}

	.list.full {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin-top: 0.5rem;
	}

	.list.fixed {
		position: absolute;
		top: 2rem;
		background: white;
		z-index: 1;
		padding: 0.5rem;
		max-height: 12rem;
		overflow: auto;
		border: 1px solid #555;
		border-top: 0;
		box-sizing: border-box;
	}

	.item {
		line-height: 2rem;
		display: flex;
	}

	.list.fixed .item:nth-child(even) {
		background: #f6f6f6;
	}

	.list .item :global(.title) {
		width: 100%;
		padding-left: 0.5rem;
	}

	.list .item :global(.button) {
		width: 2rem;
		height: 2rem;
	}
</style>
