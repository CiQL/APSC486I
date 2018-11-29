#include <random>
#include <algorithm>
#include <iostream>
#include <iterator>

class DataAnalysis {
	private:
		int data[];
	public:
	DataAnalysis(int d[]) {
		data = d;
	}
	int analyze() {
		return;
	}
};

int main(int, char *[]) {
	int data[10000];
	std::generate(std::begin(data), std::end(data), rand() % 10);
	DataAnalysis d = new DataAnalysis(data);
	std::cout << d.analyze() << "\n";
	return 0;
}
