#!/usr/bin/env python3
""" Write a Python script that provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client["logs"]
    collection = db["nginx"]

    # Num logs
    count = collection.count_documents({})
    print(f'{count} logs')

    # Methods
    print('Methods:')
    methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"    method {method}: {count}")
