#include <random>
#include <algorithm>
#include <iostream>
#include <array>
using std::array;

constexpr int dataCount = 10000;

static int sum(const array<int, dataCount> &data) {
	return std::accumulate(data.begin(), data.end(), 0);
}

static int avg(const array<int, dataCount> &data) {
	return sum(data) / dataCount;
}

static int median(const array<int, dataCount> &data) {
	auto d = data;
	std::sort(d.begin(), d.end());
	if (dataCount%2 == 1) {
		return d[dataCount/2];
	}
	return (d[dataCount/2] + d[(dataCount+1)/2]) / 2;
}

static int mode(const array<int, dataCount> &data) {
	return std::accumulate(data.begin(), data.end(), 0, [&](int a, int b) { 
		return (std::count(data.begin(), data.end(), a) > std::count(data.begin(), data.end(), b)) ? a : b;
	});

}

static array<int, 4> analyze(const array<int, dataCount> &data) {
	return array<int, 4>{sum(data), avg(data), median(data), mode(data)};
}

static void print(int &i) {
	std::cout << i << '\n';
}

int main(int, char *[]) {
	std::random_device rd;
	std::mt19937_64 mt{rd()};
	std::uniform_int_distribution<> dist{0, 10};

	array<int, dataCount> data{};
	std::generate(std::begin(data), std::end(data), [&](){ return dist(mt); });

	auto a = analyze(data);
	std::for_each(a.begin(), a.end(), print);
	return 0;
}
