<script lang="ts">
	import type { ItemType } from '$lib/types';

	export let item: ItemType;
	export let button: string;
	export let handleClick: () => void;

	let isVisible = false;

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	function handleResult({ categories = [] }: ItemType) {
		return `(${categories.join(' | ')})`;
	}
</script>

<span
	class:open={isVisible}
	class="title"
	on:click={toggleVisibility}
	on:keydown={toggleVisibility}
>
	<span class="name">{item.name}</span>
	{#if item.categories && item.categories.length > 0}
		<span class="categories">{handleResult(item)}</span>
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

	.title .categories,
	.title .description {
		display: none;
	}

	.title.open .name {
		font-weight: bold;
	}

	.title.open .categories {
		font-style: italic;
	}

	.title.open .categories,
	.title.open .description {
		display: block;
		font-size: small;
	}

	.title.open .description {
		margin-top: 0.5rem;
	}
</style>
