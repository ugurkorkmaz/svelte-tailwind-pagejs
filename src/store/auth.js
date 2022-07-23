import { writable } from "svelte/store";

export const user = writable(null);
export const token = writable(null);
export const auth = writable(true);
