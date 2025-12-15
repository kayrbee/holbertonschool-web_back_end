#!/usr/bin/env python3
""" Write a Python function that returns
the list of schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """ Now it's documented"""
    search = {"topics": topic}
    schools = mongo_collection.find(search)
    return schools
