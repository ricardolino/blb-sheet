<script lang="ts">
	import { diff } from '$lib/helpers';

	import type { Item } from '$lib/types';
	import { ADVANCEMENTS, AFFLICTIONS, EQUIPMENTS, WEAPONS, ListType } from '$lib/constants';
	import { WithDetails, WithCustomAndSearch, WithCustom } from '$lib/components/Item';

	export let type: ListType;

	let search = '';
	let list: Item[] = [];
	let results: Item[] = [];
	let isVisible = false;
	let searchElement: HTMLElement;

	const LIST_OPTIONS = [
		{ format: ListType.advancements, component: WithDetails, options: ADVANCEMENTS },
		{ format: ListType.consequences, component: WithDetails, options: AFFLICTIONS },
		{
			format: ListType.equipments,
			component: WithCustomAndSearch,
			options: EQUIPMENTS,
			isRepeatable: true
		},
		{ format: ListType.treasures, component: WithCustom, options: [], isRepeatable: true },
		{
			format: ListType.weapons,
			component: WithCustomAndSearch,
			options: WEAPONS,
			isRepeatable: true
		}
	];
	const {
		component,
		options = [],
		isRepeatable = false
	} = LIST_OPTIONS.find(({ format }) => format == type) || {};

	function deleteItem(index: number) {
		list = list.filter((_, i) => i != index);
	}

	function addItem(item: Item) {
		list = [...list, item];
		searchElement.focus();
	}

	function show() {
		isVisible = true;
	}

	function hide() {
		isVisible = false;
		search = '';
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
		<h2 class="title">{ListType[type]}</h2>
		<div class="fieldset">
			{#if isVisible}
				<div class="overlay" on:click={hide} on:keydown={hide} />
			{/if}
			<input
				class="search"
				class:open={isVisible}
				bind:value={search}
				bind:this={searchElement}
				placeholder="search for..."
				on:focus={show}
			/>
			{#if results.length > 0 && (isVisible || search.length >= 2)}
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

	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		cursor: pointer;
		z-index: 1;
		background: rgba(0, 0, 0, 0.1);
	}

	.search {
		font-size: 1rem;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		height: 2rem;
		width: 20rem;
		border: 1px solid #555;
	}

	.search.open {
		position: relative;
		z-index: 1;
	}

	.list {
		padding: 0;
		list-style: none;
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
		display: flex;
		flex-direction: column;
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
		position: relative;
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
		cursor: pointer;
	}
</style>
