#!/usr/bin/env python3
class DataAnalysis:
	def __init__(self, data):
		self.data = data

	def analyze(self):
		return self.sum(), self.avg(), self.median(), self.mode()

	def sum(self):
		s = 0
		for i in self.data:
			s += i
		return s

	def avg(self):
		return self.sum() / len(self.data)

	def median(self):
		d = sorted(self.data)
		mdn = len(d) // 2
		if (len(d) % 2 == 1):
			return d[mdn]
		else:
			return (d[mdn] + d[mdn+1]) / 2

	def mode(self):
		d = {}
		for i in self.data:
			if i in d:
				d[i] += 1
			else:
				d[i] = 1
		return max(d)


if __name__ == "__main__":
	import random
	data = [random.randint(0, 10) for _ in range(10000)]
	result = DataAnalysis(data).analyze()
	print(result)
