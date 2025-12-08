#!/usr/bin/env python3
"""
Copy index_range from the previous task and the following class into your code
"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        # Use assert to verify that both arguments are integers greater than 0.
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0 and page_size > 0

        # Use index_range to find the correct indexes to paginate the dataset correctly
        #  and return the appropriate page of the dataset (i.e. the correct list of rows).
        pagination_range = index_range(page, page_size)
        # dataset = self.dataset()
        # Read the dataset from start row to end row
        # dataset is a list - return the items between the start_index and the end_index values
        # print(dataset[pagination_range[0]:pagination_range[1]])
        return self.dataset()[pagination_range[0]:pagination_range[1]]

        # If the input arguments are out of range for the dataset,
        #  an empty list should be returned.


def index_range(page: int, page_size: int):
    """
    The function should return a tuple of size two containing a start index
    and an end index corresponding to the range of indexes to return in a
    list for those particular pagination parameters.

    Page numbers are 1-indexed, i.e. the first page is page 1.
    """
    if page < 1 or page_size < 1:
        raise ValueError("Page and page size must be > 0")
    start_index = (page - 1) * page_size
    end_index = page * page_size
    index = (start_index, end_index)
    return index
