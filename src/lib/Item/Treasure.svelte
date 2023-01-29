<script lang="ts">
	import type { Item } from '../types';

	export let item = {} as Item;
	export let button = '';
	export let handleClick = () => undefined;

	function handleResult(item: Item) {
		return item.name;
	}
</script>

<span class="title">{handleResult(item)}</span>
<button class="button" on:click={handleClick}>{button}</button>
