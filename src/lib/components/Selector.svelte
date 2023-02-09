<script lang="ts">
	type Selector = { name: string };

	export let placeholder = '';
	export let value = '';
	export let list: Selector[] = [] as Selector[];
	export let isRequired = false;
	export let disabled = false;
</script>

<select
	class="{$$restProps.class || ''} selector"
	class:selected={value}
	disabled={disabled || null}
	bind:value
>
	<option value="" selected disabled={isRequired || null}>{placeholder}</option>
	{#each list as item}
		<option value={item.name}>{item.name}</option>
	{/each}
</select>

<style>
	.selector,
	.selector option:first-child {
		color: #888;
	}

	.selector.selected,
	.selector option {
		color: #000;
	}
</style>
