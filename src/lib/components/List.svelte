<script lang="ts">
	import { diff, handleWeapon } from '$lib/helpers';
	import type { ItemType } from '$lib/types';
	import {
		ADVANCEMENTS,
		AFFLICTIONS,
		EQUIPMENTS,
		WEAPONS,
		ListType,
		AdvancementCategory,
		AfflictionCategory,
		ItemCategory,
		WeaponCategory
	} from '$lib/constants';

	import { Item } from '$lib/components';

	export let type: ListType;
	export let list: ItemType[] = [];

	let search = '';
	let filter = '';
	let results: ItemType[] = [];
	let isVisible = false;
	let searchRef: HTMLElement;
	let filterRef: HTMLElement;

	const LIST_OPTIONS = [
		{
			format: ListType.advancements,
			options: ADVANCEMENTS,
			placeholder: 'Search a Advancement',
			categories: Object.values(AdvancementCategory)
		},
		{
			format: ListType.consequences,
			options: AFFLICTIONS,
			placeholder: 'Search a Consequence',
			categories: Object.values(AfflictionCategory)
		},
		{
			format: ListType.equipments,
			options: EQUIPMENTS,
			isRepeatable: true,
			placeholder: 'Search or Add a New Equipment',
			categories: Object.values(ItemCategory)
		},
		{
			format: ListType.treasures,
			options: [],
			isRepeatable: true,
			placeholder: 'Add Treasure',
			empty: 'Add a New Treasure'
		},
		{
			format: ListType.weapons,
			options: WEAPONS,
			isRepeatable: true,
			handleResult: handleWeapon,
			placeholder: 'Search or Add a New Weapon',
			categories: Object.values(WeaponCategory)
		}
	];

	const {
		options = [],
		isRepeatable = false,
		handleResult,
		placeholder,
		empty = 'No Results',
		categories = []
	} = LIST_OPTIONS.find(({ format }) => format == type) || {};

	function deleteItem(index: number) {
		list = list.filter((_, i) => i != index);
	}

	function addItem(item: ItemType) {
		list = [...list, item];
		searchRef.focus();
	}

	function show() {
		isVisible = true;
	}

	function hide() {
		isVisible = false;
		search = '';
		filter = '';
	}

	function getOptions(options: ItemType[], list: ItemType[]) {
		return isRepeatable ? options : diff<ItemType>(options, list);
	}

	$: if (search.length >= 2) {
		results = getOptions(options, list).filter(({ name }) =>
			name.toLowerCase().includes(search.toLowerCase())
		);
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
				<input
					class="input-item"
					class:open={isVisible}
					bind:value={search}
					bind:this={searchRef}
					{placeholder}
				/>
			{:else}
				<button class="add button" on:click={show}>+ {ListType[type]}</button>
			{/if}
			<ul class="list fixed" class:open={isVisible}>
				{#if categories.length > 0 && search.length === 0}
					<label class="filter">
						Filter by:
						<select bind:value={filter} bind:this={filterRef}>
							<option />
							{#each categories as item}
								<option value={item}>
									{item}
								</option>
							{/each}
						</select>
					</label>
				{/if}
				{#if results.length > 0 && (isVisible || search.length >= 2)}
					{#each filter ? results.filter( (item) => item.categories.includes(filter) ) : results as item}
						<li class="item">
							<Item handleClick={() => addItem(item)} button="+" {item} {handleResult} />
						</li>
					{/each}
				{:else if results.length === 0 && search.length >= 2 && isRepeatable}
					<li class="item">
						<Item
							handleClick={() => addItem({ name: search, description: 'Custom item' })}
							button="+"
							item={{ name: `Add "${search}"` }}
						/>
					</li>
				{:else if results.length === 0}
					<li class="item">
						{empty}
					</li>
				{/if}
			</ul>
		</div>
	</div>
	{#if list.length > 0}
		<ul class="list full">
			{#each list as item, index}
				<li class="item">
					<Item
						handleClick={() => deleteItem(index)}
						button="-"
						isVisible={true}
						{item}
						{handleResult}
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

	.input-item {
		font-size: 1rem;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		height: 2rem;
		width: 20rem;
		border: 1px solid #555;
	}

	.input-item.open {
		position: relative;
		z-index: 1;
	}

	.filter {
		display: flex;
		align-self: end;
		gap: 0.5rem;
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
		display: none;
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

	.list.fixed.open {
		display: flex;
	}

	.list.fixed .item:nth-child(even) {
		background: #f6f6f6;
	}

	.list .item :global(.title) {
		width: 100%;
		padding-left: 0.5rem;
	}

	.list .item :global(.button),
	.add.button {
		height: 2rem;
		cursor: pointer;
	}

	.list .item :global(.button) {
		width: 2rem;
	}

	.list .item {
		line-height: 2rem;
		display: flex;
		position: relative;
	}
</style>
