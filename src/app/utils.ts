
export async function wait(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    })
}

export async function test(run) {
    await wait(-1);
    let beginning = window.performance.now();
    run();
    return window.performance.now() - beginning;
}