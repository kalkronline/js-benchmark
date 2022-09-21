
export let state: any[] = [];

export let hmr_skip = {ct: 0};

export function push(item: any) {
    state.push(item)
    state = state;
}
