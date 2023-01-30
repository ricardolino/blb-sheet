<script lang="ts">
	import type { Item } from '../types';

	export let item = {} as Item;
	export let button = '';
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let handleClick = () => {};

	function handleResult(item: Item) {
		return item.name;
	}
</script>

<span class="title">{handleResult(item)}</span>
<button class="button" on:click={handleClick}>{button}</button>
