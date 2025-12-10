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
        """
        get_page is used to return the rows of the dataset which
         are in the pagination_range. Returns an empty list if the range is
         out of bounds.
        """
        # Required to use assert
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0 and page_size > 0

        pagination_range = index_range(page, page_size)
        return self.dataset()[pagination_range[0]:pagination_range[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        get_hyper is used to return a dictionary of information
          about pagination
        """
        # Required to use assert
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0 and page_size > 0

        try:
            data = self.get_page(page, page_size)
            total_pages = math.ceil(len(self.__dataset) / page_size)
            prev_page = page - 1 if page > 1 else None
            next_page = page + 1 if page < total_pages and data else None

            d = {
                'page_size': page_size,
                'page': page, 'data': data,
                'prev_page': prev_page,
                'next_page': next_page,
                'total_pages': total_pages
            }

            return d
        except ValueError as e:
            print(f'Invalid pagination parameters: {e}')


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
