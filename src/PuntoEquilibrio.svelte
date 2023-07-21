<script>
	import { gastos, utilidad } from './stores';

	let puntoEquilibrioMes;
	$: puntoEquilibrioDia = Math.round(puntoEquilibrioMes / 30);

	function calcularPuntoEquilibrio() {
		const arrayGastos = $gastos;
		const sumGastos = arrayGastos.reduce((sum, gasto) => sum + gasto, 0);
		console.log(sumGastos);
		puntoEquilibrioMes = Math.round(sumGastos / $utilidad);
	}
</script>

<h2>Punto de Equilibrio Mensual:</h2>
<br />
{#if puntoEquilibrioMes}
	<p>{puntoEquilibrioMes} unidades</p>
{:else}
	<p />
{/if}

<h2>Punto de Equilibrio Diario:</h2>
<br />
{#if isNaN(puntoEquilibrioDia)}
	<p />
{:else}
	<p>{puntoEquilibrioDia} unidades</p>
{/if}

<button on:click={calcularPuntoEquilibrio}
	>Calcula el Punto de equilibrio</button
>
