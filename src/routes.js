const {addBookHandler} = require('./handler');

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
    }
]

module.exports = routes;
