import { writable, type Writable } from 'svelte/store';

type Theme = 'light' | 'dark' | 'system';

export const openMobileMenu: Writable<boolean> = writable(false);
export const theme: Writable<Theme> = writable<Theme>();
export const searchOpen: Writable<boolean> = writable(false);
export const currentHeadingId: Writable<string> = writable('');
export const mermaidRendered: Writable<boolean> = writable(false);
