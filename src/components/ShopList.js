import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { getBookSearch } from '../api.js/GBookStore';
import ShopItem from './ShopItem';

const ShopList = () => {

    const [books, setBooks] = useState();

    useEffect(() => {
        getBookSearch("Japan").then(res => setBooks(res.data))
    }, []);

    const bookList = books && books.items.map((book) => {

        return (
            <Col key={book.id} xs="4">
                <ShopItem item={book.volumeInfo} />
            </Col>
        );
    })

    return (
        <div>
            <Row>
                {bookList}
            </Row>
        </div>
    );
}

export default ShopList;