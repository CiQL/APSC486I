class DataAnalysis {
	constructor(data) {
		this.data = data
	}
	analyze() {
		return [this.sum(), this.average(), this.median(), this.mode()]
	}
	sum() {
		let i = 0
		for (let item of this.data) {
			i += item
		}
		return i
	}
	average() {
		return this.sum() / this.data.length
	}
	median() {
		let sorted = this.data.sort((x, y) => x - y);
		let mdn = this.data.length / 2
		if (mdn % 2 == 1) {
			return sorted[mdn]
		}
		return (sorted[mdn] + sorted[mdn + 1]) / 2
	}
	mode() {
		let counts = {}
		for (let item of this.data) {
			if (item in counts) {
				counts[item]++
			}
			else {
				counts[item] = 1
			}
		}
		let arr = Object.values(counts)
		let key = Object.keys(counts)
		let max = Math.max(...arr)
		for (let i of key) {
			if (counts[i] === max) {
				return i
			}
		}
	}
}

function main() {
	let data = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10))
	return new DataAnalysis(data).analyze()
}

console.log(main())
