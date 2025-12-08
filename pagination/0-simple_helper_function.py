#!/usr/bin/env python3
"""
Write a function named index_range that takes two integer
arguments page and page_size.
"""


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
