<script lang="ts">
	import type { Item } from '../types';

	export let item: Item;
	export let button: string;
	export let handleClick: () => void;

	function handleResult(item: Item) {
		return item.name;
	}
</script>

<span class="title">{handleResult(item)}</span>
<button class="button" on:click={handleClick}>{button}</button>
