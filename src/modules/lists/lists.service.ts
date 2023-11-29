import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ListsService {
  async findAll(): Promise<Array<object>> {
    try {
      const response = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/names.json',
        {
          params: {
            'api-key': process.env.NYT_API_KEY,
          },
        },
      );

      return response.data?.results ?? [];
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  async findOne(listName: string): Promise<Array<object>> {
    const response = await axios.get(
      'https://api.nytimes.com/svc/books/v3/lists.json',
      {
        params: {
          'api-key': process.env.NYT_API_KEY,
          list: listName,
        },
      },
    );

    if (response.data?.results) {
      const books = response.data.results;

      // Create an array of promises
      const promises = books.map(this._fetchBookDetails);

      // Wait for all promises to resolve
      const updatedBooks = await Promise.all(promises);

      return updatedBooks;
    }

    return [];
  }

  /**
   * Decorate book object with its preview link
   * @param currBook
   */
  private async _fetchBookDetails(currBook) {
    if (currBook.isbns) {
      const isbn = currBook.isbns[0].isbn10 ?? currBook.isbns[0].isbn13 ?? '';
      if (isbn) {
        const res = await axios.get(
          'https://www.googleapis.com/books/v1/volumes',
          {
            params: {
              q: 'isbn:' + isbn,
            },
          },
        );
        if (res.data.items) {
          currBook.previewLink = res.data.items[0].volumeInfo.previewLink;
        }
      }
    }
    return currBook;
  }
}
