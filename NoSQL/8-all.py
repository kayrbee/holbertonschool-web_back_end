#!/usr/bin/env python3
""" Write a Python function that lists all documents in a collection"""


def list_all(mongo_collection):
    """ Now it's documented"""
    data = mongo_collection.find()
    return data if data else []
