#!/usr/bin/env python3
""" Write a Python function that inserts a new document
 in a collection based on kwargs"""


def insert_school(mongo_collection, **kwargs):
    """ Now it's documented"""
    school_id = mongo_collection.insert(kwargs)
    return school_id
