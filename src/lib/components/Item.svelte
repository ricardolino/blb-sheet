<script lang="ts">
	import type { Item } from '$lib/types';
	import type { AdvancementType, AfflictionType } from '$lib/constants';

	export let item: Item;
	export let button: string;
	export let handleClick: () => void;

	type ItemType = AdvancementType | AfflictionType;

	let isVisible = false;

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	function handleResult(type: ItemType[]) {
		return `(${type.join(' | ')})`;
	}
</script>

<span
	class:open={isVisible}
	class="title"
	on:click={toggleVisibility}
	on:keydown={toggleVisibility}
>
	<span class="name">{item.name}</span>
	{#if item.type && item.type.length > 0}
		<span class="type">{handleResult(item.type)}</span>
	{/if}
	{#if item.description}
		<span class="description">{item.description}</span>
	{/if}
</span>
{#if !isVisible}
	<button class="button" on:click={handleClick}>{button}</button>
{/if}

<style>
	.title:hover {
		cursor: help;
	}

	.title.open {
		background: #f6f6f6;
		line-height: normal;
		padding: 0.5rem;
		border: 1px solid #555;
		box-sizing: border-box;
	}

	.title.open:hover {
		cursor: alias;
	}

	.title .type,
	.title .description {
		display: none;
	}

	.title.open .name {
		font-weight: bold;
	}

	.title.open .type {
		font-style: italic;
	}

	.title.open .type,
	.title.open .description {
		display: block;
		font-size: small;
	}

	.title.open .description {
		margin-top: 0.5rem;
	}
</style>
