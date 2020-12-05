import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { getBookSearch } from '../api/GBookStore';
import ShopItem from './ShopItem';
import ShopPages from './ShopPages';

const ShopList = ({ term }) => {

    const [books, setBooks] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        getBookSearch(term, page * 12).then(res => setBooks(res.data))
    }, [term, page]);
    useEffect(() => {
        setPage(0);
    }, [term]);

    const bookList = books && books.items.map((book) => {

        return (
            <Col className="col-lg-4 d-flex align-items-stretch" key={book.id} xs="4">
                <ShopItem id={book.id} item={book.volumeInfo} />
            </Col>
        );
    })

    return (
        <div>
            <ShopPages setPage={setPage} page={page}/>
            <Row>
                {bookList}
            </Row>
            <ShopPages setPage={setPage} page={page}/>
        </div>
    );
}

export default ShopList;