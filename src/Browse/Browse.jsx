import React from 'react';
import './browse.css';

function SearchBar() {
    return (
        <div className='flex S-Box'>
            <i class="fa-brands fa-searchengin S-Icon"></i>
            <div className='vertical-line'/>
            <input
            type="text"
            placeholder="Search a book"
            className="search-bar "
            />
        </div>
    );
}

function BookCard({ book }) {
    return (
        <div className="book-card">
        <img src={book.image} alt={book.title} className="book-image" />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div className='rate'>
            <i class="fa-solid fa-star "></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        </div>
    );
}

function CategorySection({ category, books }) {
    return (
        <div className="category-section">
        <h2>{category}</h2>
        <div className="book-list">
            {books.map((book, index) => (
            <BookCard key={index} book={book} />
            ))}
        </div>
        </div>
    );
}

function Browse() {
    const recentlyAdded = [
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
    ];
    const Popular = [
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'Castle The Moonlight',
        author: 'J.K. Rowling'
        },
        {
        image: '/src/assets/Book_Image.jpeg',
        title: 'The Hunger Games',
        author: 'Suzanne Collins'
        },
    ]


    return (
        <div className="browse container">
        <SearchBar />
        <CategorySection category="Recently Added" books={recentlyAdded} />
        <CategorySection category="Popular" books={Popular} />
        </div>
    );
}

export default Browse;