<script>
	export let value;
	export let name;
	export let max = undefined;
	export let min = undefined;
	
</script>
<style>
	input {
		border: none;
		margin: 0;
		padding: 0;
		text-align: right;
		max-width: 2.1rem;
	}

	input:focus {
    outline: none;
	}

	.wrapper {
		border: 1px double;
		margin: 1rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		flex-basis: max-content;
	}
	
	.field {
		display: flex;
		justify-content: center;
		position: relative;
	}
	
	.max {
		display: inline-block;
		position: absolute;
		font-size: 0.7rem;
    transform: translateX(1.5rem);
	}

	.label {
		text-align: center;		
	}
</style>

<label class="wrapper">
	<div class="field">
		<input type=number bind:value={value} min={min} max={max} />
		<span class="max">{#if max}\ {max}{/if}</span>
	</div>
	<span class="label">{name}</span>
</label>