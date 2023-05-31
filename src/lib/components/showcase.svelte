<script>
	export let name = '';
	export let description = '';
	export let hint = '';
</script>

<div class="border-b pb-3 mb-3 last:border-none last:p-0 last:mb-0">
	<h5 class="font-bold">{name}</h5>
	<p class="leading-none mb-2">{description}</p>
	<p class="font-bold text-sm italic">{hint}</p>
</div>
