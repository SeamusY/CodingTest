const arr = [[1,2],[3,[4,[5, [[6]]]]]];

function flatten(array) {
    return array.reduce((accumulation, current) => accumulation.concat(Array.isArray(current) ? flatten(current) : current), []);
}

console.log(flatten(arr));