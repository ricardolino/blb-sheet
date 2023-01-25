<script lang="ts">
    import type { Item } from './types';

	export let name:Item["name"];
	export let list:Item[];

	let newItem = "";

	function deleteItem (i:number) {
		list = list.filter(item => item !== list[i]);
	}

	function addItem (name:Item["name"]) {
		list = [...list, {id: list.length, name}];
        newItem = "";
	}
</script>

<h2>{name}</h2>
<ul>
	{#each list as { name }, index}
		<li>
			{name}
			<button on:click={() => deleteItem(index)}>x</button>
		</li>
	{/each}
	<li><input bind:value={newItem}><button disabled={!newItem} on:click={() => addItem(newItem)}>+</button></li>
</ul>