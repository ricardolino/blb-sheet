<script lang="ts">
	import Attribute from '../lib/Attribute.svelte';
	import ItemList from '../lib/ItemList.svelte';

	let name = '';
	let archtype = '';
	let experience = 0;

	let brawn = 0;
	let wit = 0;
	let will = 0;
	let affluence = 0;

	let vigor = {
		current: 1,
		max: 9
	};
	let grip = 0;
	let armor = 7;

	let consequences = [
		{
			id: 0,
			name: 'Fear of the Dark'
		},
		{
			id: 1,
			name: 'Fear of the Light'
		}
	];
</script>

<div class="info">
	<input bind:value={name} />
	<input bind:value={archtype} />
	<Attribute name="EXP" value={experience} min={0} max={8} />
</div>

<div class="stats">
	<Attribute name="Brawn" value={brawn} />
	<Attribute name="Wit" value={wit} />
	<Attribute name="Will" value={will} />
	<Attribute name="Affluence" value={affluence} />
</div>

<div class="well-being">
    <Attribute name="Vigor" value={vigor.current} min={1} max={vigor.max} />
    <Attribute name="Grip" value={grip} min={1} />
    <Attribute name="Armor" value={armor} min={7} />
</div>

<ItemList name="Advancements" list={[]} />

<ItemList name="Consequences" list={consequences} />

<ItemList name="Equipment" list={[]} />

<ItemList name="Treasure" list={[]} />

<ItemList name="Weapons" list={[]} />

<style>
	.info,
	.stats,
	.well-being {
		display: flex;
	}
</style>
