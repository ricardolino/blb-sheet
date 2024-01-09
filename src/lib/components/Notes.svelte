<script lang="ts">
	export let value = '';

	let notesRef: HTMLElement;
</script>

<textarea class="notes" bind:this={notesRef} bind:value placeholder="Notes" />

<style>
	.notes {
		border: 2px double;
		width: 100%;
		font-size: 1rem;
		padding: 0.5rem;
		box-sizing: border-box;
	}
</style>
