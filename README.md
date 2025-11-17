# **README – JWT Auth Express**

Project ini menerapkan autentikasi menggunakan **Express.js**, **MySQL**, dan **JSON Web Token (JWT)**.
User dapat melakukan **register**, **login**, dan mengakses **endpoint yang dilindungi** menggunakan token.

Saat user login, server membuat token JWT berisi data user. Token tersebut harus dikirim kembali melalui header `Authorization` untuk mengakses route yang membutuhkan autentikasi. Password disimpan dalam bentuk **hash** menggunakan `bcrypt` agar lebih aman.

Fitur utama:

* Registrasi user (menyimpan username dan password hash ke database)
* Login user dan menghasilkan JWT
* Middleware untuk mengecek validitas token
* Protected route `/user/profile` yang hanya bisa diakses jika sudah login

Proses testing dilakukan melalui Postman dengan:

1. Register user
2. Login untuk mendapatkan token
3. Mengakses profile menggunakan header:
   `Authorization: Bearer <token>`

Project dibuat sebagai latihan implementasi autentikasi pada Express menggunakan JWT.

---
