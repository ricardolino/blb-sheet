<script lang="ts">
	import { ItemType } from '$lib/constants';

	import Attribute from '$lib/Attribute.svelte';
	import List from '$lib/List.svelte';

	let info = {
		playerName: '',
		characterName: '',
		archetype: '',
		experience: 0
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
				<Attribute name="Current" value={stats.vigor.current} min={1} max={stats.vigor.maximum} />
				<Attribute name="Max" value={stats.vigor.maximum} min={1} />
			</div>
			<Attribute name="Grip" value={stats.grip} min={1} />
			<Attribute name="Armor" value={stats.armor} min={7} />
		</div>
	</div>
</section>

<section class="container">
	<List type={ItemType.advancement} />
	<List type={ItemType.consequence} />
	<List type={ItemType.equipment} />
	<List type={ItemType.treasure} />
	<List type={ItemType.weapon} />
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
