import { writable, derived } from 'svelte/store';

export const utilidad = writable(0);
export const gastos = writable([]);
export const promedioMes = derived(
	[gastos, utilidad],
	([$gastos, $utilidad], set) => {
		const totalGastos = $gastos.reduce((sum, gasto) => sum + gasto, 0);
		set(totalGastos / $utilidad);
	},
);
