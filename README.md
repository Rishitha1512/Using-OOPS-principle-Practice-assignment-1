# Using-OOPS-principle-Practice-assignment-1
# Library Management System

## Project Description

This is a simple library management system built in JavaScript. It involves two main entities: `Book` and `User`. Users can borrow and return books, while each book has an availability status.

## Classes
1. **Book Class**:
   - `title`: Title of the book (string).
   - `author`: Author of the book (string).
   - `isbn`: ISBN of the book (string).
   - `isAvailable`: Boolean that shows if the book is available for borrowing (default: `true`).
   - Methods: 
     - `borrowBook()`: Marks the book as unavailable.
     - `returnBook()`: Marks the book as available.

2. **User Class**:
   - `name`: Name of the user (string).
   - `id`: User ID (number).
   - `borrowedBooks`: Array of books borrowed by the user.
   - Methods:
     - `borrow(book)`: Adds a book to `borrowedBooks` if available.
     - `return(book)`: Removes a book from `borrowedBooks`.

## Demo

1. A book is borrowed and marked as unavailable.
2. A second user tries to borrow the same book while it’s unavailable.
3. The first user returns the book, making it available for borrowing again.
4. Users can borrow and return multiple books.
