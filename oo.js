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
	let mdn = this.data.length / 2
	if (mdn % 2 == 1) {
	    return this.data[mdn]
	}
	return (this.data[mdn] + this.data[mdn+1]) / 2
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
	return Math.max(...arr)
    }
}

console.log(DataAnalysis(data).analyze())
