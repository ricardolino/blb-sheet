<script lang="ts">
	import { Sheet } from '$lib/components';
	import Notifications from '$lib/components/Notifications.svelte';
	import type { Sheet as SheetType } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: SheetType;
</script>

<Notifications />
<Sheet {data} isEdit={true} />
