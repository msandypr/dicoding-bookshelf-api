const {
    addBookHandler,
    getAllBookHandler,
    getBookByIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Homepage @msandypr Dicoding Bookshelf API'
        }
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
]

module.exports = routes;
