function Analyze(data) {
    return [_sum(data), _avg(data), _mdn(data), _mode(data)]
}

function 

Array.prototype.flatten = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), [])

console.log(Analyze(data))
