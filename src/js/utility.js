export function range(start, end, step) {
    let temp = [];
    while (start < end) {
        temp.push(start);
        start += step;
    }
    return temp;
}

export function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sumObjectValues(obj) {
    return Object.values(obj).reduce((a, b) => { a + b; });
}