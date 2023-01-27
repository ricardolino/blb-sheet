<script lang="ts">
	import { WEAPONS, AFFLICTIONS, ZoneRange, WeaponType, ADVANCEMENTS, EQUIPMENTS, DEFAULT_EQUIPMENTS } from '$lib/constants';
	import type { Weapon, Item } from "$lib/types";

	import Attribute from '$lib/Attribute.svelte';
	import ItemList from '$lib/ItemList.svelte';

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

	function defaultResult({ name }: Item) {
		return name;
	}

	function weaponResult ({ name, type }: Weapon) {
		return `${name} (${WeaponType[type.name]} | ${ZoneRange[type.range]})`;
	}
</script>

<section class="head container">
	<div class="flex spacer" class:hidden={status.inFight}>
		<div class="half">
			<input class="field" bind:value={info.playerName} placeholder="Player" />
			<input class="field" bind:value={info.characterName} placeholder="Character" />
		</div>
		<div class="half">
			<input class="field" bind:value={info.archetype} placeholder="Archetype" />
			<Attribute name="EXP" value={info.experience} min={0} max={8} />
		</div>
	</div>
	
	<div class="flex">
		<div class="half">
			<Attribute name="Brawn" value={stats.brawn} />
			<Attribute name="Wit" value={stats.wit} />
			<Attribute name="Will" value={stats.will} />
			<Attribute name="Affluence" value={stats.affluence} />
		</div>
		<div class="half">
			<div class="vigor">
				<Attribute name="Current" value={stats.vigor.current} min={1} />
				<Attribute name="Max" value={stats.vigor.maximum} min={1} />
			</div>
			<Attribute name="Grip" value={stats.grip} min={1} />
			<Attribute name="Armor" value={stats.armor} min={7} />
		</div>
	</div>	
</section>

<section class="container">
	<div class="flex spacer">
		<div class="half">
			<ItemList name="Advancements" options={ADVANCEMENTS} handleResult={defaultResult} />
		</div>
		<div class="half">
			<ItemList name="Consequences" options={AFFLICTIONS} handleResult={defaultResult} />			
		</div>
	</div>
	<div class="flex spacer">
		<div class="half">
			<ItemList name="Equipments" defaultList={DEFAULT_EQUIPMENTS} options={EQUIPMENTS} handleResult={defaultResult} />
		</div>
		<div class="half">
			<ItemList name="Treasures" options={[]} />	
		</div>	
	</div>
	<div class="flex">
		<div class="half">
			<ItemList name="Weapons" options={WEAPONS} handleResult={weaponResult} />	
		</div>
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

	.field {
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
		border: 2px double;
		width: 100%;
	}

	.vigor {
		display: flex;
	}

	.hidden {
		display: none;
	}
</style>
