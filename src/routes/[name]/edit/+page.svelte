<script lang="ts">
	import { Sheet } from '$lib/components';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Sheet {data} isEdit={true} />
