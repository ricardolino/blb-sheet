<script>
	export let name;
	export let list;

	let newItem = "";

	function deleteItem (i) {
		list = list.filter(item => item !== list[i]);
	}
	
	function addItem (name) {
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