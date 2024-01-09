<script lang="ts">
	import { onMount } from 'svelte';
	import { getSessionStorageMessage, removeSessionStorageMessage } from '$lib/helpers';

	let message = '';

	function setMessage(value?: string | null) {
		if (!value) return;

		message = value;

		setTimeout(() => {
			message = '';

			removeSessionStorageMessage();
		}, 5000);
	}

	function handleNotificationEvent() {
		setMessage(getSessionStorageMessage());
	}

	onMount(() => {
		setMessage(getSessionStorageMessage());

		window.addEventListener('notification', handleNotificationEvent);

		return () => {
			window.removeEventListener('notification', handleNotificationEvent);
		};
	});
</script>

{#if message}
	<div class="notifications">
		<span>{message}</span>
	</div>
{/if}

<style>
	.notifications {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		font-size: 1rem;
		font-weight: bold;
		z-index: 1;
	}
</style>
