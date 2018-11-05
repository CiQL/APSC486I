#!/usr/bin/env python3
# functional version
import functools
import random

def Analyze(data):
    return _sum(data), _count(data), _avg(data)

def _sum(data):
    return data[0] + _sum(data[1:])

def _avg(data):
    return _sum(data) / _count(data)

def _count(data):
    if not data:
        return 0
    else:
        return _count(data[1:]) + 1

if __name__ == "__main__":
    data = [random.random() for _ in range(100000)]
    result = Analyze(data)
    print(result)
