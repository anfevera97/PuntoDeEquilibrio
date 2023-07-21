<script>
	import { gastos } from './stores';
	let listaGastos = [];

	function agregarGasto() {
		listaGastos = [...listaGastos, { gasto: '', monto: '' }];
	}
	function eliminarGasto(index) {
		listaGastos = listaGastos.filter((_, i) => i !== index);
	}
	$: gastos.set(listaGastos.map((gasto) => gasto.monto));
</script>

<table>
	<tr>
		<th>Gasto Mensual</th>
		<th>Monto</th>
	</tr>
	{#each listaGastos as gasto, index}
		<tr>
			<td><input type="text" bind:value={gasto.gasto} /></td>
			<td><input type="number" bind:value={gasto.monto} /></td>
			<td><button on:click={() => eliminarGasto(index)}>X</button></td>
		</tr>
	{/each}
</table>

<button on:click={agregarGasto}>Agregar Gasto</button>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
	}
	th,
	td {
		border: 1px solid black;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: #f2f2f2;
	}
</style>
