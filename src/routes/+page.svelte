<script lang="ts">
	import type { Item } from '../lib/types';

	import Attribute from '../lib/Attribute.svelte';
	import ItemList from '../lib/ItemList.svelte';

	let player = '';
	let name = '';
	let archtype = '';
	let experience = 0;

	let brawn = 0;
	let wit = 0;
	let will = 0;
	let affluence = 0;

	let currentVigor = 1;
	let maxVigor = 9;

	let grip = 0;
	let armor = 7;
	let inFight = false;

	let consequences:Item[] = [];
</script>

<div class="info" class:hidden={inFight}>
	<input class=textField bind:value={player} />
	<input class=textField bind:value={name} />
	<input class=textField bind:value={archtype} />
	<Attribute name="EXP" value={experience} min={0} max={8} />
</div>

<div class="stats">
	<Attribute name="Brawn" value={brawn} />
	<Attribute name="Wit" value={wit} />
	<Attribute name="Will" value={will} />
	<Attribute name="Affluence" value={affluence} />
	<input type="checkbox" bind:checked={inFight} />
</div>

<div class="well-being">
	<div class="vigor">
		<Attribute name="Current" value={currentVigor} min={1} />
		<Attribute name="Max" value={maxVigor} min={1} />
	</div>
    <Attribute name="Grip" value={grip} min={1} />
    <Attribute name="Armor" value={armor} min={7} />
</div>

<ItemList name="Advancements" list={[]} />

<ItemList name="Consequences" list={consequences} />

<ItemList name="Equipment" list={[]} />

<ItemList name="Treasure" list={[]} />

<ItemList name="Weapons" list={[]} />

<style>
	.textField {
		box-sizing: border-box;
		padding: 0.5rem;
		font-size: 2rem;
		border: 2px double;
		min-width: 0;
	}

	.info,
	.stats,
	.well-being {
		display: flex;
		gap: 1rem;
	}

	.vigor {
		display: flex;
	}

	:global(.hidden) {
		display: none;
	}
</style>
