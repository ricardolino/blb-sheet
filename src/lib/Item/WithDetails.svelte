<script lang="ts">
	import type { Item } from '../types';
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
		return type.join(' | ');
	}
</script>

<span
	class:open={isVisible}
	class="title"
	on:click={toggleVisibility}
	on:keydown={toggleVisibility}
>
	<span class="name">{item.name}</span>
	<span class="type">({handleResult(item.type)})</span>
	<span class="description">{item.description}</span>
</span>
<button class="button" on:click={handleClick}>{button}</button>

<style>
	.title:hover {
		cursor: help;
	}

	.title.open {
		background: #f6f6f6;
		line-height: normal;
		z-index: 1;
		padding: 0.5rem;
		position: absolute;
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
