<script lang="ts">
	import { Sheet } from '$lib/components';
	import type { Sheet as SheetType } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: SheetType;
</script>

<Sheet {data} isEdit={true} />
