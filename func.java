import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;
class func {
    public static List<Object> analyze(int[] data) {
        return new ArrayList<Object>(
	    Arrays.asList(sum(data), avg(data), median(data), mode(data))
	);
    }
    public static int sum(int[] data) {
	return Arrays.stream(data).reduce(0, (x, y)-> x + y);
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
	dataStream = Arrays.stream(data);
	return dataStream.reduce(0, (a, b) -> (count(data, a) > count(data, b)) ? a : b);
    }
    public static int count(int[] data, int value) {
	return Arrays.stream(data).filter(i -> i == value).toArray().length;
    }
    public static void main(String[] args) {
	Random r = new Random();
	int[] dataset = r.ints(0,10).limit(10000).toArray();
	System.out.println(analyze(dataset));
    }
}
