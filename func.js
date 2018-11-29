function Analyze(data) {
	return [_sum(data), _avg(data), _mdn(data), _mode(data)]
}

function _sum(data) {
	return data.reduce((x, y) => x + y)
}

function _avg(data) {
	return _sum(data) / data.length
}

function _mdn(data) {
	let sort = data.sort((a, b) => a - b)
	let mdn = data.length / 2
	if (mdn % 2 == 1) {
		return sort[mdn]
	}
	return (sort[mdn] + sort[mdn + 1]) / 2
}

function _mode(data) {
	return data.reduce((x,y) => (count(data, x) > count(data, y)) ? x : y)
}

function count(arr, x) {
	return arr.filter(i => i === x).length
}

function main() {
	let data = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10))
	return Analyze(data)
}

console.log(main())
