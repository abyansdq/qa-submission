# TEST SUMMARY REPORT

## Informasi Pengujian

**Aplikasi yang diuji**

* SauceDemo (Web UI)
* Restful Booker (REST API)

**Tester**

* Muhammad Abyan Shidqi

**Periode Pengujian**

* Juni 2026

---

## Ringkasan Hasil Testing

### Manual Testing (SauceDemo)

Total test case yang dijalankan: **28 (positif: 16, negatif 12)**

| Status  | Jumlah |
| ------- | ------ |
| Pass    | 26     |
| Fail    | 2      |
| Blocked | 0      |

Sebagian besar fitur utama seperti login, logout, sorting produk, keranjang belanja, dan checkout dapat berjalan dengan baik pada akun standard_user. Namun, ditemukan beberapa bug pada fitur tertentu yang menyebabkan beberapa test case berstatus fail.

---

### API Testing (Restful Booker)

Total test case yang dijalankan: **11**

| Status  | Jumlah |
| ------- | ------ |
| Pass    | 11      |
| Fail    | 0      |
| Blocked | 0      |

Seluruh endpoint yang diuji memberikan response sesuai dengan dokumentasi yang tersedia. Skenario positif maupun negatif dapat dijalankan dengan hasil yang sesuai.

Endpoint yang diuji:

* POST /auth
* GET /booking
* POST /booking
* GET /booking/{id}
* PUT /booking/{id}
* DELETE /booking/{id}

Skenario negatif yang diuji:

* Token tidak valid
* Booking ID tidak ditemukan
* Request body tidak lengkap
* Update Booking Tanpa Token
* Delete Booking Tanpa Token

---

### Automation Testing (Playwright)

Total automation test yang dibuat: **11** dengan environment chrome dan msedge total **22**

| Status  | Jumlah |
| ------- | ------ |
| Pass    | 22     |
| Fail    | 0      |
| Blocked | 0      |

Automation dibuat menggunakan Playwright dengan pendekatan Page Object Model (POM). Test yang diotomasi mencakup proses login, logout, inventory, sorting produk, keranjang belanja, checkout, validasi field checkout, serta validasi akun locked_out_user.

---

## Bug yang Ditemukan

Selama proses eksplorasi dan pengujian, ditemukan beberapa bug dengan tingkat severity yang berbeda.
- standar_user : 2 bug critical
- problem_user : 7 bug critical, 2 bug high
- performance_glitch_user : 9 bug medium

### Critical

* Beberapa produk pada akun problem_user tidak dapat ditambahkan ke keranjang.
* Gambar produk yang ditampilkan tidak sesuai dengan produk yang dipilih pada akun problem_user.
* Data keranjang tidak konsisten pada akun tertentu.
* Field Last Name tidak dapat diisi pada proses checkout.
* User dapat melanjutkan proses checkout meskipun keranjang kosong.

### High

* Fitur sorting tidak berjalan dengan baik pada akun problem_user.
* Menu About mengarah ke halaman error pada akun problem_user.
* Informasi checkout yang ditampilkan tidak konsisten antar halaman.

### Medium

* Ditemukan beberapa fitur terjadi keterlambatan respon saat menggunakan akun performance_glitch_user.

---

## Area yang Belum Diuji

Karena waktu pengerjaan terbatas dan aplikasi yang digunakan merupakan aplikasi demo, ada beberapa area yang belum sempat diuji lebih lanjut, di antaranya:

- Pengujian pada browser Firefox dan Safari/WebKit
- Pengujian pada perangkat mobile
- Pengujian accessibility (aksesibilitas)
- Pengujian performa pada koneksi internet yang berbeda
- Exploratory testing yang lebih mendalam pada seluruh akun demo SauceDemo
---

## Rekomendasi

### SauceDemo

Berdasarkan hasil pengujian, ditemukan beberapa defect dengan severity Critical dan High yang dapat mempengaruhi proses pembelian produk. Apabila defect tersebut ditemukan pada aplikasi production, maka disarankan untuk dilakukan perbaikan sebelum proses release.

### Restful Booker API

Berdasarkan hasil pengujian yang dilakukan, endpoint yang tersedia berjalan sesuai dengan dokumentasi dan tidak ditemukan masalah yang menghambat proses utama. Oleh karena itu API ini layak untuk dirilis.

---

## Jika Memiliki Waktu Lebih Banyak

Jika diberikan waktu tambahan, saya akan melakukan beberapa hal berikut:

- Menambah coverage automation test untuk seluruh skenario utama.
- Menambahkan lebih banyak negative test case.
- Melakukan pengujian pada browser tambahan seperti Firefox.
- Menambahkan validasi yang lebih detail pada automation test.
- Melakukan exploratory testing lebih mendalam pada fitur checkout dan keranjang.
- Menambahkan dokumentasi hasil pengujian yang lebih lengkap.

---

## Kesimpulan

Dari hasil pengujian yang telah dilakukan, fitur utama pada SauceDemo secara umum dapat berjalan dengan baik. Namun masih ditemukan beberapa bug dengan severity Critical dan High yang perlu diperbaiki sebelum aplikasi siap digunakan pada lingkungan production.

Untuk Restful Booker API, seluruh endpoint yang diuji berjalan sesuai dengan dokumentasi dan tidak ditemukan kendala yang mempengaruhi fungsi utama API.
