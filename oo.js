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

    }
    mode() {

    }
}

console.log(DataAnalysis(data).analyze())
