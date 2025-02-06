import { writable } from "svelte/store";

export const count = writable("");

export const change = (val: any) => {
    count.set(val);
}