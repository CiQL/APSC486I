#include <random>
#include <algorithm>
#include <iostream>
#include <array>
#include <unordered_map>
using std::array;

constexpr int dataCount = 10000;
class DataAnalysis {
	private:
		array<int, dataCount> data;
	public:
	DataAnalysis(const array<int, dataCount> &d): data(d)
	{}
	int sum() {
		int sum = 0;
		for (int i = 0; i < dataCount; ++i) {
			sum += data[i];
		}
		return sum;
	}
	int avg() {
		return sum() / dataCount;
	}
	int median() {
		auto d = data;
		std::sort(d.begin(), d.end());
		if (dataCount % 2 == 1) {
			return d[dataCount / 2];
		}
		return (d[dataCount/2] + d[(dataCount+1)/2]) / 2;
	}
	int mode() {
		array<int, dataCount> counts {0};
		std::for_each(data.begin(), data.end(), [&](int i) { counts[i] += 1; });
		int max = 0;
		for (int i = 0; i < dataCount; ++i) {
			if (counts[i] > counts[max]) {
				max = i;
			}
		}
		return max;
	}
	array<int, 4> analyze() {
		return {sum(), avg(), median(), mode()};
	}

};

void print(int &i) {
	std::cout << i << '\n';
}

int main(int, char *[]) {
	std::random_device rd;
	std::mt19937_64 mt{rd()};
	std::uniform_int_distribution<> dist{0, 10};

	array<int, dataCount> data{};
	std::generate(data.begin(), data.end(), [&](){ return dist(mt); });

	DataAnalysis d{data};

	auto a = d.analyze();

	std::for_each(a.begin(), a.end(), print);
	return 0;
}
