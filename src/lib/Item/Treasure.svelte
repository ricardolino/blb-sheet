<script lang="ts">
	import type { Item } from '../types';

	export let item = {} as Item;
	export let onClick = () => undefined;

	function handleResult(item: Item) {
		return item.name;
	}
</script>

<li class="result">
	<span>{handleResult(item)}</span>
	<button on:click={onClick}>+</button>
</li>

<style>
	.result {
		height: 2rem;
		display: flex;
		align-items: center;
	}
</style>
