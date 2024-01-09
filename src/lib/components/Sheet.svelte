<script lang="ts">
	import { goto } from '$app/navigation';

	import { ListType, CONDITIONS, ARCHETYPES, DEFAULT_SHEET, SHEETS_API_PATH } from '$lib/constants';

	import { Attribute, List, Selector, Notes } from '$lib/components';
	import type { Sheet } from '$lib/types';
	import { dispatchNotificationEvent } from '$lib/helpers';

	export let isEdit = false;
	export let data: Sheet = { ...DEFAULT_SHEET };

	async function saveSheet() {
		try {
			const response = await fetch(SHEETS_API_PATH, { method: 'POST', body: JSON.stringify(data) });
			const { body } = await response.json();

			dispatchNotificationEvent('Sheet created successfully!');

			goto(`/${body?.id}`);
		} catch (error) {
			console.error(error);
		}
	}

	async function updateSheet() {
		try {
			await fetch(`${SHEETS_API_PATH}/${data.id}`, { method: 'PUT', body: JSON.stringify(data) });

			dispatchNotificationEvent('Sheet updated successfully!');

			goto(`/${data.id}`);
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteSheet() {
		try {
			await fetch(`${SHEETS_API_PATH}/${data.id}`, { method: 'DELETE' });

			dispatchNotificationEvent('Sheet deleted successfully!');

			goto('/');
		} catch (error) {
			console.error(error);
		}
	}

	function handleDeleteButton() {
		if (confirm('Are you sure you want to delete this sheet?')) {
			deleteSheet();
		}
	}
</script>

<section class="head container">
	<div class="flex spacer">
		<div class="half">
			<input class="field" bind:value={data.name} placeholder="Character" />
			<Selector
				class="field"
				placeholder="Archetype"
				list={ARCHETYPES}
				bind:value={data.archetype}
				isRequired={true}
				disabled={isEdit}
			/>
		</div>
		<div class="half">
			<Selector
				class="field"
				placeholder="No Condition"
				list={CONDITIONS}
				bind:value={data.statusCondition}
			/>
			<Attribute name="EXP" bind:value={data.experience} min={0} max={8} />
		</div>
	</div>
	<div class="flex">
		<div class="half">
			<Attribute name="Brawn" bind:value={data.brawn} />
			<Attribute name="Wit" bind:value={data.wit} />
			<Attribute name="Will" bind:value={data.will} />
			<Attribute name="Affluence" bind:value={data.affluence} />
		</div>
		<div class="half">
			<div class="vigor">
				<Attribute name="Current" bind:value={data.currentVigor} min={1} max={data.maxVigor} />
				<Attribute name="Max" bind:value={data.maxVigor} min={1} />
			</div>
			<Attribute name="Grip" bind:value={data.grip} min={1} />
			<Attribute name="Armor" bind:value={data.armor} min={7} />
		</div>
	</div>
</section>
<section class="container">
	<List type={ListType.advancements} bind:list={data.advancements} />
	<List type={ListType.consequences} bind:list={data.consequences} />
	<List type={ListType.equipments} bind:list={data.equipments} />
	<List type={ListType.treasures} bind:list={data.treasures} />
	<List type={ListType.weapons} bind:list={data.weapons} />
	<Notes bind:value={data.notes} />
</section>
<section class="container">
	<div class="actions">
		{#if isEdit}
			<button class="delete" on:click={handleDeleteButton}>Delete</button>
		{/if}
		{#if data.name && data.archetype}
			<button on:click={isEdit ? updateSheet : saveSheet}>
				{isEdit ? 'Update' : 'Save'}
			</button>
		{/if}
	</div>
</section>

<style>
	.container {
		max-width: 864px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 2rem;
	}

	.flex {
		display: flex;
		gap: 1rem;
	}

	.half {
		display: flex;
		flex: auto;
		justify-content: space-between;
		gap: 0.5rem;
		width: 50%;
	}

	.spacer {
		margin-bottom: 1rem;
	}

	.field,
	:global(.field.selector) {
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
		border: 2px double #000;
		width: 100%;
	}

	.field:focus,
	:global(.field.selector:focus) {
		outline: none;
	}

	.vigor {
		display: flex;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}

	.actions button {
		height: 2rem;
		cursor: pointer;
	}

	.actions button.delete {
		color: #f00;
	}
</style>
