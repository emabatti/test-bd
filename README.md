
# NestJS NY Times Books API

This NestJS application exposes two endpoints to interact with the NY Times Books API. It fetches lists of books from the NY Times database and provides information about books including their preview links from Google Books.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emabatti/test-bd.git
2. Change into the project directory:

   ```bash
   cd test-bd
3. Install dependencies:

   ```bash
   yarn install
4. Start the NestJS application:

   ```bash
   yarn start
The application will be accessible at `http://127.0.0.1:3000`.

## Endpoints

### 1. Get Lists of Books

-   **Endpoint:**
	```bash
	GET http://127.0.0.1:3000/api/v1/lists
-   **Description:** Returns a list of available book lists from the NY Times database.
-   **Example Response:**
	```json
	[
		{
			"list_name": "Combined Print and E-Book Fiction",
			"display_name": "Combined Print & E-Book Fiction",
			"list_name_encoded": "combined-print-and-e-book-fiction",
			"oldest_published_date": "2011-02-13",
			"newest_published_date": "2023-12-03",
			"updated": "WEEKLY"
		},
		{
			"list_name": "Combined Print and E-Book Nonfiction",
			"display_name": "Combined Print & E-Book Nonfiction",
			"list_name_encoded": "combined-print-and-e-book-nonfiction",
			"oldest_published_date": "2011-02-13",
			"newest_published_date": "2023-12-03",
			"updated": "WEEKLY"
		},
		{
			"list_name": "Hardcover Fiction",
			"display_name": "Hardcover Fiction",
			"list_name_encoded": "hardcover-fiction",
			"oldest_published_date": "2008-06-08",
			"newest_published_date": "2023-12-03",
			"updated": "WEEKLY"
		}
	]

### 2. Get Books from a Specific List

-   **Endpoint:**
	```bash
	GET http://127.0.0.1:3000/api/v1/lists/{list_name_encoded}
-   **Description:** Given the encoded name of a list (provided by the previous endpoint), returns all the books present inside that list. Each book includes its preview link from Google Books.
 -   **Example Request:**
		```bash
		http://127.0.0.1:3000/api/v1/lists/combined-print-and-e-book-fiction
-   **Example Response:**
	```json
	[
		{
			"list_name": "Combined Print and E-Book Fiction",
			"display_name": "Combined Print & E-Book Fiction",
			"bestsellers_date": "2023-11-18",
			"published_date": "2023-12-03",
			"rank": 1,
			"rank_last_week": 1,
			"weeks_on_list": 2,
			"asterisk": 0,
			"dagger": 0,
			"amazon_product_url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20",
			"isbns": [
				{
					"isbn10": "1649374178",
					"isbn13": "9781649374172"
				}
			],
			"book_details": [
				{
					"title": "IRON FLAME",
					"description": "The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves.",
					"contributor": "by Rebecca Yarros",
					"author": "Rebecca Yarros",
					"contributor_note": "",
					"price": "0.00",
					"age_group": "",
					"publisher": "Red Tower",
					"primary_isbn13": "9781649374172",
					"primary_isbn10": "1649374178"
				}
			],
			"reviews": [
				{
					"book_review_link": "",
					"first_chapter_link": "",
					"sunday_review_link": "",
					"article_chapter_link": ""
				}
			],
			"previewLink": "http://books.google.it/books?id=EY69EAAAQBAJ&dq=isbn:1649374178&hl=&cd=1&source=gbs_api"
		},
		{
			"list_name": "Combined Print and E-Book Fiction",
			"display_name": "Combined Print & E-Book Fiction",
			"bestsellers_date": "2023-11-18",
			"published_date": "2023-12-03",
			"rank": 2,
			"rank_last_week": 2,
			"weeks_on_list": 29,
			"asterisk": 0,
			"dagger": 0,
			"amazon_product_url": "https://www.amazon.com/dp/1649374046?tag=NYTBSREV-20",
			"isbns": [
				{
					"isbn10": "1649374046",
					"isbn13": "9781649374042"
				},
				{
					"isbn10": "1649374089",
					"isbn13": "9781649374080"
				},
				{
					"isbn10": "1705085059",
					"isbn13": "9781705085059"
				},
				{
					"isbn10": "1705085032",
					"isbn13": "9781705085035"
				},
				{
					"isbn10": "1649376162",
					"isbn13": "9781649376169"
				}
			],
			"book_details": [
				{
					"title": "FOURTH WING",
					"description": "Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.",
					"contributor": "by Rebecca Yarros",
					"author": "Rebecca Yarros",
					"contributor_note": "",
					"price": "0.00",
					"age_group": "",
					"publisher": "Red Tower",
					"primary_isbn13": "9781649374042",
					"primary_isbn10": "1649374046"
				}
			],
			"reviews": [
				{
					"book_review_link": "",
					"first_chapter_link": "",
					"sunday_review_link": "",
					"article_chapter_link": ""
				}
			],
			"previewLink": "http://books.google.it/books?id=6_CLEAAAQBAJ&dq=isbn:1649374046&hl=&cd=1&source=gbs_api"
		},
	]