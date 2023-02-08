<script lang="ts">
	import { ListType, CONDITIONS, ARCHETYPES } from '$lib/constants';

	import Attribute from '$lib/Attribute.svelte';
	import List from '$lib/List.svelte';

	let info = {
		characterName: '',
		archetype: '',
		experience: 0,
		statusCondition: ''
	};

	let stats = {
		brawn: 0,
		wit: 0,
		will: 0,
		affluence: 0,
		vigor: {
			current: 6,
			maximum: 6
		},
		grip: 4,
		armor: 7
	};

	let status = {
		inFight: false,
		haveShield: false
	};
</script>

<section class="head container">
	<div class="flex spacer" class:hidden={status.inFight}>
		<div class="half">
			<input class="field" bind:value={info.characterName} placeholder="Character" />
			<select class="field selector" class:selected={info.archetype} bind:value={info.archetype}>
				<option value="" selected disabled>Archetype</option>
				{#each ARCHETYPES as archetype}
					<option value={archetype.name}>{archetype.name}</option>
				{/each}
			</select>
		</div>
		<div class="half">
			<select
				class="field selector"
				class:selected={info.statusCondition}
				bind:value={info.statusCondition}
			>
				<option value="" selected>No Condition</option>
				{#each CONDITIONS as condition}
					<option value={condition.name}>{condition.name}</option>
				{/each}
			</select>
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
				<Attribute name="Current" value={stats.vigor.current} min={1} max={stats.vigor.maximum} />
				<Attribute name="Max" value={stats.vigor.maximum} min={1} />
			</div>
			<Attribute name="Grip" value={stats.grip} min={1} />
			<Attribute name="Armor" value={stats.armor} min={7} />
		</div>
	</div>
</section>

<section class="container">
	<List type={ListType.advancements} />
	<List type={ListType.consequences} />
	<List type={ListType.equipments} />
	<List type={ListType.treasures} />
	<List type={ListType.weapons} />
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
		border: 2px double #000;
		width: 100%;
	}

	.field:focus {
		outline: none;
	}

	.selector,
	.selector option:first-child {
		color: #888;
	}

	.selector.selected,
	.selector option {
		color: #000;
	}

	.vigor {
		display: flex;
	}

	.hidden {
		display: none;
	}
</style>
