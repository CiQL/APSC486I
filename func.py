#!/usr/bin/env python3
import functools


def analyze(data):
	return _sum(data), _avg(data), _mdn(data), _mode(data)


def _sum(data):
	return functools.reduce(lambda x, y: x + y, data)


def _avg(data):
	return _sum(data) / len(data)


def _mdn(data):
	d = sorted(data)
	mdn = len(d)//2
	if len(d) % 2 == 1:
		return (d[mdn] + d[mdn+1]) / 2
	else:
		return d[mdn]


def _mode(data):
	return max(set(data), key=data.count)


if __name__ == "__main__":
	import random
	data = [random.randint(0, 10) for _ in range(10000)]
	result = analyze(data)
	print(result)
