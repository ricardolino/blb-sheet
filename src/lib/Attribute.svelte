<script lang="ts">
	export let value: number;
	export let name: string;
	export let max: number | undefined = undefined;
	export let min: number | undefined = undefined;
</script>

<label class="wrapper">
	<div class="field">
		<input type="number" bind:value {min} {max} />
		<span class="max"
			>{#if max}\ {max}{/if}</span
		>
	</div>
	<span class="label">{name}</span>
</label>

<style>
	input {
		border: none;
		margin: 0;
		padding: 0;
		text-align: right;
		max-width: 3.1rem;
		font-size: 2rem;
	}

	input:focus {
		outline: none;
	}

	.wrapper {
		border: 2px double;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		flex-basis: max-content;
		min-width: 5rem;
		border-radius: 0.1rem;
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
