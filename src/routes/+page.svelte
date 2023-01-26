<script lang="ts">
	import { WEAPONS, Range, WeaponType } from '../lib/constants';
	import type { Weapon } from "../lib/types";

	import Attribute from '../lib/Attribute.svelte';
	import ItemList from '../lib/ItemList.svelte';

	let info = {
		playerName: "",
		characterName: "",
		archetype: "",
		experience: 0,
	};

	let stats = {
		brawn: 0,
		wit: 0,
		will: 0,
		affluence: 0,
		vigor: {
			current: 6,
			maximum: 6,
		},
		grip: 4,
		armor: 7,
	};

	let status = {
		inFight: false,
		haveShield: false,
	};

	function weaponResult ({ name, type }: Weapon) {
		return `${name} (${WeaponType[type.name]} | ${Range[type.range]})`;
	}
</script>

<section class="head">
	<div class="info" class:hidden={status.inFight}>
		<input class="field" bind:value={info.playerName} placeholder="Player Name" />
		<input class="field" bind:value={info.characterName} placeholder="Character Name" />
		<input class="field" bind:value={info.archetype} placeholder="Archetype" />
		<Attribute name="EXP" value={info.experience} min={0} max={8} />
	</div>
	
	<div class="stats">
		<Attribute name="Brawn" value={stats.brawn} />
		<Attribute name="Wit" value={stats.wit} />
		<Attribute name="Will" value={stats.will} />
		<Attribute name="Affluence" value={stats.affluence} />
		<div class="vigor">
			<Attribute name="Current" value={stats.vigor.current} min={1} />
			<Attribute name="Max" value={stats.vigor.maximum} min={1} />
		</div>
		<Attribute name="Grip" value={stats.grip} min={1} />
		<Attribute name="Armor" value={stats.armor} min={7} />
	</div>	
</section>

<section class="lists">
	<div class="character">
		<ItemList name="Advancements" list={[]} options={[]} />

		<ItemList name="Consequences" list={[]} options={[]} />	
	</div>
	
	<div class="items">
		<ItemList name="Equipment" list={[]} options={[]} />
	
		<ItemList name="Treasure" list={[]} options={[]} />	
	</div>
	
	<ItemList name="Weapons" list={[]} options={WEAPONS} handleResult={weaponResult} />	
</section>

<style>
	.head,
	.lists {
		max-width: 999px;
    	margin-left: auto;
    	margin-right: auto;
	}

	.info {
		margin-bottom: 1rem;
	}

	.info,
	.stats {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.info .field {
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
		border: 2px double;
		min-width: 0;
	}

	.stats {
		flex-wrap: wrap;
	}

	.vigor {
		display: flex;
	}

	.character,
	.items {
		display: flex;
	}

	.hidden {
		display: none;
	}
</style>
