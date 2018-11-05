function Analyze (data) {
    return [_sum(data), _avg(data), _mdn(data), _mode(data)]
}

function _sum (data) {
    return data.reduce((x, y) => x + y)
}

function _avg (data) {
    return _sum(data) / data.length
}

function _mdn (data) {
    return 0
}

function _mode (data) {
    return data.sort((x, y) => count(data, x) > count(data, y))[0]
}

function count (arr, val) {
    return arr.filter(i => i === val).length
}

Array.prototype.flatten = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), [])

function main() {
    let data = Array.from({length: 10000}, () => Math.floor(Math.random() * 10))
    return Analyze(data)
}
console.log(main())