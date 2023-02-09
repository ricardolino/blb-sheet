<script lang="ts">
	import { ListType, CONDITIONS, ARCHETYPES } from '$lib/constants';

	import { Attribute, List, Selector } from '$lib/components';

	let sheet = {
		characterName: '',
		archetype: undefined,
		experience: 0,
		statusCondition: undefined,
		brawn: 0,
		wit: 0,
		will: 0,
		affluence: 0,
		vigor: {
			current: 6,
			maximum: 6
		},
		grip: 4,
		armor: 7,
		advancements: [],
		consequences: [],
		equipments: [],
		treasures: [],
		weapons: []
	};
</script>

<section class="head container">
	<div class="flex spacer">
		<div class="half">
			<input class="field" bind:value={sheet.characterName} placeholder="Character" />
			<Selector
				class="field"
				placeholder="Archetype"
				list={ARCHETYPES}
				bind:value={sheet.archetype}
				isRequired={true}
			/>
		</div>
		<div class="half">
			<Selector
				class="field"
				placeholder="No Condition"
				list={CONDITIONS}
				bind:value={sheet.statusCondition}
			/>
			<Attribute name="EXP" bind:value={sheet.experience} min={0} max={8} />
		</div>
	</div>
	<div class="flex">
		<div class="half">
			<Attribute name="Brawn" bind:value={sheet.brawn} />
			<Attribute name="Wit" bind:value={sheet.wit} />
			<Attribute name="Will" bind:value={sheet.will} />
			<Attribute name="Affluence" bind:value={sheet.affluence} />
		</div>
		<div class="half">
			<div class="vigor">
				<Attribute
					name="Current"
					bind:value={sheet.vigor.current}
					min={1}
					max={sheet.vigor.maximum}
				/>
				<Attribute name="Max" bind:value={sheet.vigor.maximum} min={1} />
			</div>
			<Attribute name="Grip" bind:value={sheet.grip} min={1} />
			<Attribute name="Armor" bind:value={sheet.armor} min={7} />
		</div>
	</div>
</section>
<section class="container">
	<List type={ListType.advancements} bind:list={sheet.advancements} />
	<List type={ListType.consequences} bind:list={sheet.consequences} />
	<List type={ListType.equipments} bind:list={sheet.equipments} />
	<List type={ListType.treasures} bind:list={sheet.treasures} />
	<List type={ListType.weapons} bind:list={sheet.weapons} />
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

	.field:focus {
		outline: none;
	}

	.vigor {
		display: flex;
	}
</style>
