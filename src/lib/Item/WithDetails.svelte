<script lang="ts">
	import type { Item } from '../types';
	import type { AdvancementType, AfflictionType } from '$lib/constants';

	export let item: Item;
	export let button: string;
	export let handleClick: () => void;

	let isVisible = false;

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	function handleResult(item: Item) {
		return `${item.name} (${item.type
			.map((t: AdvancementType & AfflictionType) => t)
			.join(' | ')})`;
	}
</script>

<span
	class:open={isVisible}
	class="title"
	on:click={toggleVisibility}
	on:keydown={toggleVisibility}
>
	{handleResult(item)}
	{#if isVisible}
		<span class="description">{item.description}</span>
	{/if}
</span>
<button class="button" on:click={handleClick}>{button}</button>

<style>
	.title:hover {
		cursor: help;
	}

	.title.open:hover {
		cursor: alias;
	}

	.description {
		display: block;
		background: #f6f6f6;
		line-height: normal;
		z-index: 1;
		border: 1px solid #555;
		padding: 0.5rem;
		font-size: small;
		margin-top: 0.5rem;
	}
</style>
