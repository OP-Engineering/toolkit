// @ts-ignore
global.marker = (i = 0) => {
    // @ts-ignore
    debug(`🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷 MARK ${i} 🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷`);
};
// @ts-ignore
global.debug = (input) => {
    console.debug(new Date().toLocaleTimeString(), JSON.stringify(input, null, 2));
};
