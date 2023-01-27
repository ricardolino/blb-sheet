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
		text-align: center;
		font-size: 2rem;
		width: 80%;
		transform: translateX(8px);
		background: transparent;
	}

	input:focus {
		outline: none;
	}

	.wrapper {
		border: 2px double;
		padding: 0.3rem;
		display: flex;
		flex-direction: column;
		min-width: 3.5rem;
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
