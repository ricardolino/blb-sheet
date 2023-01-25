<script lang="ts">
	import Attribute from '../lib/Attribute.svelte'
	import ItemList from '../lib/ItemList.svelte'

	let name = "Fulano";
	let archtype = "Dastard";
	let experience = 0;

	let brawn = 2;
	let wit = 3;
	let will = 1;
	let affluence = 1;

	let vigor = {
		current: 9,
		max: 9,
	};
	let grip = 1;
	let armor = 7;
	
	let consequences = [
		{
			id: 0,
			name: "Fear of the Dark"
		},
		{
			id: 1,
			name: "Fear of the Light"
		},
	];
</script>

<style>
	.head {
		display: flex;
	}
</style>

<div class="head">
	<input bind:value={name} />
	<input bind:value={archtype} />
	<Attribute name="EXP" value={experience} min={0} max={8}></Attribute>	
</div>

<div>
	<Attribute name="Brawn" value={brawn}></Attribute>
	<Attribute name="Wit" value={wit}></Attribute>
	<Attribute name="Will" value={will}></Attribute>
	<Attribute name="Affluence" value={affluence}></Attribute>
</div>

<Attribute name="Vigor" value={vigor.current} min={1} max={vigor.max}></Attribute>
<Attribute name="Grip" value={grip} min={1}></Attribute>
<Attribute name="Armor" value={armor} min={7}></Attribute>

<ItemList name="Advancements" list={[]}></ItemList>
<ItemList name="Consequences" list={consequences}></ItemList>
<ItemList name="Equipment" list={[]}></ItemList>
<ItemList name="Treasure" list={[]}></ItemList>
<ItemList name="Weapons" list={[]}></ItemList>