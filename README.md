# Bookshelf API
Proyek Bookshelf API untuk Submission Dicoding Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud by [@msandypr](https://msandypr.com). `UPDATED AT 17/03/2023 03:38`

## Step yang saya lakukan
1.Pertama-tama saya clone repository ini dan saya menginisialisasi project Bookshelf API ini dengan command :
```sh
npm init --y
```
2.Lalu, saya menggunakan beberapa packages untuk membantu proses development ini, antara lain :
- [Hapi Framework](https://hapi.dev/)
- [Nodemon](https://nodemon.io/)

Nodemon ini saya gunakan hanya untuk proses development.

3.Setelah itu, saya membuat folder 'src' dan menambahkan file 'server.js', yang berfungsi untuk menjalankan server localhost.

4.Setelah itu, saya menambahkan file 'routes.js' untuk testing saja apakah server kita secara localhost berjalan atau tidak.

![Readme Image 1](src/img/readme1.png)

5.Setelah itu, saya membuat file 'books.js', berfungsi untuk menyimpan data dalam bentuk array, dan membuat file 'handler.js' yang berfungsi untuk membuat fungsi seperti CRUD.

6.Saya menginstall package nanoid yang berfungsi untuk generate id secara unique untuk data - data buku.
- [Nano ID](https://github.com/ai/nanoid#readme).

7.Saya membuat fungsi 'addBookHandler' untuk create data buku baru dan mencoba testing fungsinya.

![Readme Image 2](src/img/readme2.png)

8.Saya membuat fungsi 'getAllBookHandler' dan 'getBookByIdHandler' untuk get/read data buku.

9.Saya membuat fungsi 'editBookByIdHandler' untuk edit/put data buku.

10.Saya membuat fungsi 'deleteBookByIdHandler' untuk hapus/delete data buku.

## Testing
1.[MANDATORY]Add Book With Complete Data

![Test Image 1](src/img/test1.png)

2.[MANDATORY]Add Book With Finished Reading

![Test Image 2](src/img/test2.png)

3.[MANDATORY]Add Book Without Name

![Test Image 3](src/img/test3.png)

4.[MANDATORY]Add Book With Page Read More Than Page Count

![Test Image 4](src/img/test4.png)

5.[MANDATORY]Get All Books

![Test Image 5](src/img/test5.png)

6.[MANDATORY]Get Detail Books With Correct Id, Terdapat Error book object should contain correct property and value | AssertionError: expected 'Saya Sedang Patah Hati' to equal 'Buku A'.

![Test Image 6](src/img/test6.png)
![Test Image 6 Assertion Error](src/img/test6assertionerror.png)

7.[MANDATORY]Get Detail Finished Book, Terdapat Error yang sama dengan Test ke-6, yaitu : book object should contain correct property and value | AssertionError: expected 'Saya Sedang Patah Hati' to equal 'Buku A'.

![Test Image 7](src/img/test7.png)
![Test Image 7 Assertion Error](src/img/test7assertionerror.png)

8.[MANDATORY]Get Detail Books With Invalid Id

![Test Image 8](src/img/test8.png)

9.[MANDATORY]Update Book With Complete Data

![Test Image 9](src/img/test9.png)
![Test Image 9 After](src/img/test9after.png)

10.[MANDATORY]Update Book Without Name

![Test Image 10](src/img/test10.png)

11.[MANDATORY]Update Book With Page Read More Than Page Count

![Test Image 11](src/img/test11.png)

12.[MANDATORY]Update Book With Invalid Id

![Test Image 12](src/img/test12.png)

13.[MANDATORY]Delete Book With Correct Id

![Test Image 13](src/img/test13.png)

14.[MANDATORY]Delete Finished Book

![Test Image 14](src/img/test14.png)

14.[MANDATORY]Delete Finished Book

![Test Image 14](src/img/test14.png)

15.[MANDATORY]Delete Book With Invalid Id

![Test Image 15](src/img/test15.png)


