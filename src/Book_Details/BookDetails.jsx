import React from 'react';
import './BookDetails.css';

function BookDetails() {
const book = {
image: '/src/assets/Book_Image.jpeg',
title: 'The Castel in The Moonlight',
author: 'Victor Hugo',
description: 'Lorem ipsum em nostrum itaque veritatis assumenda adipisci impedit culpa magnam praesentium reprehenderit, inventore omnis. Labore maiores totam quo vel cumque, quam esse doloribus eius. Vero suscipit numquam veritatis voluptatem. Libero quis recusandae optio maiores sint, aliquid doloribus assumenda unde quo dicta temporibus illum saepe accusamus nesciunt earum voluptatum officiis dolores odit ga ducimus nam quo similique! text...',
details: {
    language: 'English',
    format: '20 x 24 cm',
    published: '1985',
    publisher: 'Victor Hugo',
    date: '1982 - 1985',
    tags: ['Crime', 'Character', 'Architecture', 'Night']
},
relatedBooks: [
    {
    image: '/src/assets/Book_Image5.jpeg',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood'
    },
    {
    image: '/src/assets/Book_Image2.jpeg',
    title: 'The Road',
    author: 'Cormac McCarthy'
    },
    {
    image: '/src/assets/Book_Image3.jpeg',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood'
    },
    {
    image: '/src/assets/Book_Image4.jpeg',
    title: 'The Road',
    author: 'Cormac McCarthy'
    }
]
};

return (
<div className="book-details-page">
    <div className="book-main flex">
        <div className='left-side'>
            <img src={book.image} alt={book.title} className="book-cover" />
            <div className="book-actions">
                <button className="save-button">Save</button>
                <button className="share-button">Share</button>
            </div>
        </div>
        <div className="book-info">
            <h1>{book.title}</h1>
            <div className='rate'>
            <i class="fa-solid fa-star "></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
            Description
            <p className="book-description">{book.description}</p>
            <div className="book-meta flex">
                <div className="flex">
                    <img src="src\assets\User.png" alt="User Profile" className="user-image" />
                    <div className="info-col">
                        <p className='Golden'>Written By</p>
                        <p>{book.author}</p>
                    </div>
                </div>
                <div className="info-col">
                        <p className='Golden'>Publisher</p>
                        <p>{book.details.publisher}</p>
                </div>
                <div className="info-col">
                        <p className='Golden'>Year</p>
                        <p>{book.details.published}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="book-extra">
    <div className="book-details">
        <h2>Book Details</h2>
        <ul>
        <li><strong>Language:</strong> {book.details.language}</li>
        <li><strong>Format:</strong> {book.details.format}</li>
        <li><strong>Date Published:</strong> {book.details.published}</li>
        <li><strong>Publisher:</strong> {book.details.publisher}</li>
        <li><strong>Date:</strong> {book.details.date}</li>
        </ul>
        <div className="book-tags">
        {book.details.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
        ))}
        </div>
    </div>
    <div className="related-books">
        <h2>Related Books</h2>
        {book.relatedBooks.map((relatedBook, index) => (
        <div key={index} className="related-book-card">
            <img src={relatedBook.image} alt={relatedBook.title} />
            <div>
            <h3>{relatedBook.title}</h3>
            <p>{relatedBook.author}</p>
            <button className="more-button">More</button>
            </div>
        </div>
        ))}
    </div>
    </div>
</div>
);
}

export default BookDetails;