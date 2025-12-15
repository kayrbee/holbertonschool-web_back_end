#!/usr/bin/env python3
""" Write a Python function that changes all topics of a
 school document based on the name"""


def update_topics(mongo_collection, name, topics):
    """ Now it's documented"""
    search = {"name": name}
    new_values = {"$set": {"topics": topics}}
    school_id = mongo_collection.update(search, new_values, {"multi": True})
    return school_id
