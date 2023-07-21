<script>
	import { onMount } from 'svelte';
	import { utilidad } from './stores';

	let precio;
	let costo;

	$: valorUtilidad = precio - costo;
	$: utilidad.set(valorUtilidad);
</script>

<table>
	<tr>
		<th>Precio</th>
		<th>Costo</th>
		<th>Utilidad</th>
	</tr>

	<tr>
		<td><input type="number" bind:value={precio} /></td>
		<td><input type="number" bind:value={costo} /> = </td>
		{#if isNaN(valorUtilidad)}
			<td />
		{:else}
			<td>{valorUtilidad}</td>
		{/if}
	</tr>
</table>

<style>
	table {
		margin: 0 auto;
	}
</style>
