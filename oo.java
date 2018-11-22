class oo {
    private int[] data;
    oo(int[] data) {
        this.data = data;
    }
    public int sum() {
	int s = 0;
	for (int i: this.data) {
	    s += i;
	}
	return s;
    }
    public int avg() {
	return this.sum() / this.data.length();
    }
    public String toString() {
        return this.data;
    }
}
