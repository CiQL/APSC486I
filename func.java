import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;
class func {
    public static List<Object> analyze(int[] data) {
        return new List<Object>(
	    sum(data), avg(data), median(data), mode(data)
		);
    }
    public static int sum(int[] data) {
		return Arrays.toList(data).reduce((x, y)-> x + y);
    }
    public static double avg(int[] data) {
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
return 0;
    }
    public static void main() {
	Random r = new Random();
	int[] dataset = r.ints(0,10).limit(10000).toArray();
	System.out.println(analyze(dataset));
    }
}
