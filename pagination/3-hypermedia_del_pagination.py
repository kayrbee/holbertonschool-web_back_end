#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import Dict, List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            # truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Handle data deletions from an indexed dictionary
        """
        assert isinstance(index, int)
        if index is not None:
            assert index >= 0

        dataset = self.indexed_dataset()
        if index >= len(dataset):
            raise AssertionError

        data = []

        offset = 0
        for i in range(page_size):
            reference = index + i
            if reference in dataset:
                data.append(dataset[reference + offset])
            else:
                offset += 1
                data.append(dataset[reference + offset])

        next_index = index + page_size + offset

        d = {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': next_index
        }
        return d
