<script lang="ts">
	import { goto } from '$app/navigation';

	import { ListType, CONDITIONS, ARCHETYPES, DEFAULT_SHEET, SHEETS_API_PATH } from '$lib/constants';

	import { Attribute, List, Selector, Notes } from '$lib/components';
	import type { Sheet } from '$lib/types';

	export let isEdit = false;
	export let data: Sheet = { ...DEFAULT_SHEET };

	function handleResponse(response: Response) {
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		goto(`/${data.name}`);
	}

	async function saveSheet() {
		fetch(SHEETS_API_PATH, {
			method: 'POST',
			body: JSON.stringify(data)
		})
			.then(handleResponse)
			.catch(console.error);
	}

	async function updateSheet() {
		fetch(`${SHEETS_API_PATH}/${data.name}`, {
			method: 'PUT',
			body: JSON.stringify(data)
		})
			.then(handleResponse)
			.catch(console.error);
	}
</script>

<section class="head container">
	<div class="flex spacer">
		<div class="half">
			<input
				class="field"
				bind:value={data.name}
				placeholder="Character"
				disabled={isEdit || null}
			/>
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
	<button on:click={isEdit ? updateSheet : saveSheet}>{isEdit ? 'Update' : 'Save'}</button>
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
</style>
