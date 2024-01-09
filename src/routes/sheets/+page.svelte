<script lang="ts">
	import Notifications from '$lib/components/Notifications.svelte';
	import type { Sheet as SheetType } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: { sheets: SheetType[] } = { sheets: [] };
</script>

<Notifications />

<a class="action" href="/new">Create New Character</a>

<ul class="grid">
	{#each data.sheets as sheet}
		<li class="item">
			<a href={`/sheets/${sheet.id}`}>
				<h3 class="character">{sheet.name} ({sheet.archetype})</h3>
				<div class="stats">
					<div class="flex">
						<span>Brawn: {sheet.brawn}</span>
						<span>Wit: {sheet.wit}</span>
						<span>Will: {sheet.will}</span>
						<span>Affluence: {sheet.affluence}</span>
					</div>
					<div class="flex">
						<span>Vigor: {sheet.currentVigor}/{sheet.maxVigor}</span>
						<span>Grip: {sheet.grip}</span>
						<span>Armor: {sheet.armor}</span>
					</div>
				</div>
				<div class="traits">
					{#if sheet.advancements.length > 0}
						<div>
							<span class="title">Advancements:</span>
							<div class="flex">
								{#each sheet.advancements as advancement}
									<span>{advancement.name}</span>
								{/each}
							</div>
						</div>
					{/if}
					{#if sheet.consequences.length > 0}
						<div>
							<span class="title">Consequences:</span>
							<div class="flex">
								{#each sheet.consequences as consequence}
									<span>{consequence.name}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
				<div class="storeable">
					{#if sheet.equipments.length > 0}
						<div>
							<span class="title">Equipments:</span>
							<div class="flex">
								{#each sheet.equipments as equipment}
									<span>{equipment.name}</span>
								{/each}
							</div>
						</div>
					{/if}
					{#if sheet.treasures.length > 0}
						<div>
							<span class="title">Treasures:</span>
							<div class="flex">
								{#each sheet.treasures as treasure}
									<span>{treasure.name}</span>
								{/each}
							</div>
						</div>
					{/if}
					{#if sheet.weapons.length > 0}
						<div>
							<span class="title">Weapons:</span>
							<div class="flex">
								{#each sheet.weapons as weapon}
									<span>{weapon.name}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		list-style: none;
		padding: 0;
		gap: 1rem;
	}

	.item a {
		padding: 1rem;
		border: 1px solid;
		display: block;
		text-decoration: none;
	}

	.character {
		font-size: 1.3rem;
		margin: 0 0 0.5rem;
	}

	.title {
		display: block;
		font-weight: bold;
		line-height: 2rem;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.flex > span {
		display: inline-block;
		padding: 0 0.3rem;
		border: 1px solid;
		border-radius: 3px;
	}

	.stats > .flex {
		margin-bottom: 0.5rem;
	}

	.traits .flex,
	.storeable .flex {
		font-size: 0.8rem;
	}

	.action {
		padding: 1rem;
		border: 1px solid;
		border-radius: 3px;
		text-decoration: none;
		background-color: #eee;
		color: #000;
		display: inline-block;
	}
</style>
