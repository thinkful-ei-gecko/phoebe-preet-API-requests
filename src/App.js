import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import PrintType from './PrintType';
import Filter from './Filter';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // books: [
      //   {
      //    "kind": "books#volume",
      //    "id": "9CATYYof8TIC",
      //    "etag": "yjQMxpVJov4",
      //    "selfLink": "https://www.googleapis.com/books/v1/volumes/9CATYYof8TIC",
      //    "volumeInfo": {
      //     "title": "Henry Hikes to Fitchburg",
      //     "authors": [
      //      "D.B. Johnson",
      //      'Test Author'
      //     ],
      //     "publisher": "Houghton Mifflin Harcourt",
      //     "publishedDate": "2006-10-30",
      //     "description": "Inspired by a passage from Henry David Thoreau’s Walden, the wonderfully appealing Henry Hikes to Fitchburg follows two friends who have very different approaches to life. When the two agree to meet one evening in Fitchburg, which is thirty miles away, each decides to get there in his own way, and the two have surprisingly different days.",
      //     "industryIdentifiers": [
      //      {
      //       "type": "ISBN_10",
      //       "identifier": "0547531206"
      //      },
      //      {
      //       "type": "ISBN_13",
      //       "identifier": "9780547531205"
      //      }
      //     ],
      //     "readingModes": {
      //      "text": true,
      //      "image": true
      //     },
      //     "pageCount": 32,
      //     "printType": "BOOK",
      //     "categories": [
      //      "Juvenile Fiction"
      //     ],
      //     "averageRating": 4.0,
      //     "ratingsCount": 7,
      //     "maturityRating": "NOT_MATURE",
      //     "allowAnonLogging": true,
      //     "contentVersion": "2.6.5.0.preview.3",
      //     "panelizationSummary": {
      //      "containsEpubBubbles": false,
      //      "containsImageBubbles": false
      //     },
      //     "imageLinks": {
      //      "smallThumbnail": "http://books.google.com/books/content?id=9CATYYof8TIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      //      "thumbnail": "http://books.google.com/books/content?id=9CATYYof8TIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      //     },
      //     "language": "en",
      //     "previewLink": "http://books.google.com/books?id=9CATYYof8TIC&printsec=frontcover&dq=henry&hl=&cd=1&source=gbs_api",
      //     "infoLink": "https://play.google.com/store/books/details?id=9CATYYof8TIC&source=gbs_api",
      //     "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9CATYYof8TIC"
      //    },
      //    "saleInfo": {
      //     "country": "US",
      //     "saleability": "FOR_SALE",
      //     "isEbook": true,
      //     "listPrice": {
      //      "amount": 4.99,
      //      "currencyCode": "USD"
      //     },
      //     "retailPrice": {
      //      "amount": 4.99,
      //      "currencyCode": "USD"
      //     },
      //     "buyLink": "https://play.google.com/store/books/details?id=9CATYYof8TIC&rdid=book-9CATYYof8TIC&rdot=1&source=gbs_api",
      //     "offers": [
      //      {
      //       "finskyOfferType": 1,
      //       "listPrice": {
      //        "amountInMicros": 4990000.0,
      //        "currencyCode": "USD"
      //       },
      //       "retailPrice": {
      //        "amountInMicros": 4990000.0,
      //        "currencyCode": "USD"
      //       },
      //       "giftable": true
      //      }
      //     ]
      //    },
      //    "accessInfo": {
      //     "country": "US",
      //     "viewability": "PARTIAL",
      //     "embeddable": true,
      //     "publicDomain": false,
      //     "textToSpeechPermission": "ALLOWED",
      //     "epub": {
      //      "isAvailable": true,
      //      "acsTokenLink": "http://books.google.com/books/download/Henry_Hikes_to_Fitchburg-sample-epub.acsm?id=9CATYYof8TIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      //     },
      //     "pdf": {
      //      "isAvailable": true,
      //      "acsTokenLink": "http://books.google.com/books/download/Henry_Hikes_to_Fitchburg-sample-pdf.acsm?id=9CATYYof8TIC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      //     },
      //     "webReaderLink": "http://play.google.com/books/reader?id=9CATYYof8TIC&hl=&printsec=frontcover&source=gbs_api",
      //     "accessViewStatus": "SAMPLE",
      //     "quoteSharingAllowed": false
      //    },
      //    "searchInfo": {
      //     "textSnippet": "Inspired by a passage from Henry David Thoreau’s Walden, the wonderfully appealing Henry Hikes to Fitchburg follows two friends who have very different approaches to life."
      //    }
      //   },
      //   {
      //    "kind": "books#volume",
      //    "id": "TRMaCAAAQBAJ",
      //    "etag": "o9ABTCkGz88",
      //    "selfLink": "https://www.googleapis.com/books/v1/volumes/TRMaCAAAQBAJ",
      //    "volumeInfo": {
      //     "title": "Henry I",
      //     "authors": [
      //      "C. Warren Hollister"
      //     ],
      //     "publisher": "Yale University Press",
      //     "publishedDate": "2008-10-01",
      //     "description": "Henry I, son of William the Conqueror, ruled from 1100 to 1135, a time of fundamental change in the Anglo-Norman world. This long-awaited biography, written by one of the most distinguished medievalists of his generation, offers a major reassessment of Henry’s character and reign. Challenging the dark and dated portrait of the king as brutal, greedy, and repressive, it argues instead that Henry’s rule was based on reason and order. C. Warren Hollister points out that Henry laid the foundations for judicial and financial institutions usually attributed to his grandson, Henry II. Royal government was centralized and systematized, leading to firm, stable, and peaceful rule for his subjects in both England and Normandy. By mid-reign Henry I was the most powerful king in Western Europe, and with astute diplomacy, an intelligence network, and strategic marriages of his children (legitimate and illegitimate), he was able to undermine the various coalitions mounted against him. Henry strove throughout his reign to solidify the Anglo-Norman dynasty, and his marriage linked the Normans to the Old English line. Hollister vividly describes Henry’s life and reign, places them against the political background of the time, and provides analytical studies of the king and his magnates, the royal administration, and relations between king and church. The resulting volume is one that will be welcomed by students and general readers alike.",
      //     "industryIdentifiers": [
      //      {
      //       "type": "ISBN_13",
      //       "identifier": "9780300143720"
      //      },
      //      {
      //       "type": "ISBN_10",
      //       "identifier": "0300143729"
      //      }
      //     ],
      //     "readingModes": {
      //      "text": true,
      //      "image": true
      //     },
      //     "pageCount": 576,
      //     "printType": "BOOK",
      //     "categories": [
      //      "History"
      //     ],
      //     "averageRating": 5.0,
      //     "ratingsCount": 1,
      //     "maturityRating": "NOT_MATURE",
      //     "allowAnonLogging": false,
      //     "contentVersion": "0.0.1.0.preview.3",
      //     "panelizationSummary": {
      //      "containsEpubBubbles": false,
      //      "containsImageBubbles": false
      //     },
      //     "imageLinks": {
      //      "smallThumbnail": "http://books.google.com/books/content?id=TRMaCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      //      "thumbnail": "http://books.google.com/books/content?id=TRMaCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      //     },
      //     "language": "en",
      //     "previewLink": "http://books.google.com/books?id=TRMaCAAAQBAJ&printsec=frontcover&dq=henry&hl=&cd=2&source=gbs_api",
      //     "infoLink": "https://play.google.com/store/books/details?id=TRMaCAAAQBAJ&source=gbs_api",
      //     "canonicalVolumeLink": "https://play.google.com/store/books/details?id=TRMaCAAAQBAJ"
      //    },
      //    "saleInfo": {
      //     "country": "US",
      //     "saleability": "FOR_SALE",
      //     "isEbook": true,
      //     "listPrice": {
      //      "amount": 50.0,
      //      "currencyCode": "USD"
      //     },
      //     "retailPrice": {
      //      "amount": 40.0,
      //      "currencyCode": "USD"
      //     },
      //     "buyLink": "https://play.google.com/store/books/details?id=TRMaCAAAQBAJ&rdid=book-TRMaCAAAQBAJ&rdot=1&source=gbs_api",
      //     "offers": [
      //      {
      //       "finskyOfferType": 1,
      //       "listPrice": {
      //        "amountInMicros": 5.0E7,
      //        "currencyCode": "USD"
      //       },
      //       "retailPrice": {
      //        "amountInMicros": 4.0E7,
      //        "currencyCode": "USD"
      //       },
      //       "giftable": true
      //      }
      //     ]
      //    },
      //    "accessInfo": {
      //     "country": "US",
      //     "viewability": "PARTIAL",
      //     "embeddable": true,
      //     "publicDomain": false,
      //     "textToSpeechPermission": "ALLOWED",
      //     "epub": {
      //      "isAvailable": true,
      //      "acsTokenLink": "http://books.google.com/books/download/Henry_I-sample-epub.acsm?id=TRMaCAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      //     },
      //     "pdf": {
      //      "isAvailable": true,
      //      "acsTokenLink": "http://books.google.com/books/download/Henry_I-sample-pdf.acsm?id=TRMaCAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      //     },
      //     "webReaderLink": "http://play.google.com/books/reader?id=TRMaCAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      //     "accessViewStatus": "SAMPLE",
      //     "quoteSharingAllowed": false
      //    },
      //    "searchInfo": {
      //     "textSnippet": "The resulting volume is one that will be welcomed by students and general readers alike."
      //    }
      //   }
      //  ],
      books: [],
      search: '',
      printType:'', 
      filter: ''
    }
  }

  setSearch = term => {
    this.setState ({search:term});
    console.log(this.state.search)
  }

  setBooks = array => {
    this.setState({books:array})
    console.log(this.state.books)
  }

  render() {
    return (
      <div className="app">
        <h1>Book Search</h1>
        <SearchBar 
          books={this.state.books}
          setSearch={(term) => this.setSearch(term)}
          setBooks={(array) => this.setBooks(array)}
          search={this.state.search}
          //setSearch={this.setSearch}
        />
        <PrintType />
        <Filter />
        <BookList 
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
