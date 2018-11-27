import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;
class oo {
    private int[] data;
    oo(int[] data) {
        this.data = data;
    }
    public List<Object> analyze() {
        return new ArrayList<Object>(
	    Arrays.asList(this.sum(), this.avg(), this.median(), this.mode())
		);
    }
    public int sum() {
	int s = 0;
	for (int i: this.data) {
	    s += i;
	}
	return s;
    }
    public double avg() {
	return this.sum() / this.data.length;
    }
    public int median() {
	int mdn = data.length / 2;
	int[] array = data;
	Arrays.sort(array);
	if (mdn % 2 == 1) {
	    return array[mdn];
	}
	return (array[mdn] + array[mdn+1]) / 2;
    }
    public int mode() {
		return 0;
    }
    public static void main(String[] args) {
	Random r = new Random();
	int[] dataset = r.ints(0,10).limit(10000).toArray();
	oo dataAnalysis = new oo(dataset);
	System.out.println(dataAnalysis.analyze());
    }
}
