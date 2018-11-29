#include <random>
#include <algorithm>
#include <iostream>
#include <vector>
static std::vector<int> analyze(int data[]) {
	return std::vector<int>();
}
int main(int, char *[]) {
	int data[10000];
	std::generate(std::begin(data), std::end(data), rand() % 10);
	std::cout << analyze(data) << "\n";
	return 0;
}