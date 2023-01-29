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

	$: if (search.length >= 2) {
		results = options.filter(({ name }) => name.toLowerCase().includes(search));
	} else {
		results = options;
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
