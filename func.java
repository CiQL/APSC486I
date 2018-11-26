import java.util.Arrays;
class func {
    public static void analyze() {
        return;
    }
    public static int sum(int[] data) {
	return reduce((x, y)-> x + y);
    }
    public static int avg(int[] data) {
	return sum(data) / data.length;
    }
    public static int median(int[] data) {
	int mdn = data.length / 2;
	int[] array = data;
	Arrays.sort(array);
	if (mdn % 2 == 1) {
	    return array[mdn];
	}
	return (array[mdn] + array[mdn+1]) / 2;
    }
    public static int mode(int[] data) {

    }
    public static void main() {
	
    }
}
