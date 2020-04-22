# Arsitektur

## Development

Pada saat development, definisi aplikasi disimpan dalam bentuk database. Beberapa developer dapat bekerja membentuk sebuah aplikasi secara bersama-sama dengan mengakses database definisi aplikasi yang sama.  

![Arsitektur development](/images/arsitektur-development.svg)

Database yang digunakan untuk menyimpan definisi aplikasi juga dapat digunakan sekaligus sebagai database aplikasi.

Epigoni juga dapat mengakses lebih dari satu database dari berbagai jenis RDBMS untuk diakses oleh sebuah aplikasi. Saat development, dalam pembentukan model data, data dari berbagai database dapat direlasikan satu dengan yang lain.

## Deployment

Setelah aplikasi selesai didefinisikan, aplikasi dapat di deploy dalam beberapa bentuk.

1. **Definisi aplikasi disimpan sebagai database.** Definisi aplikasi disimpan dengan bentuk yang sama dengan saat development. Epigoni executor akan membaca definisi aplikasi di database dan menjalankan aplikasi. Karena definisi aplikasi disimpan terpusat, jika ada perubahan definisi aplikasi pada server, seluruh aplikasi client secara instan langsung merasakan perubahannya.

2. **Definisi aplikasi disimpan sebagai database di komputer server dan sebagai file yang diletakkan pada masing-masing komputer client.** Epigoni executor yang dijalankan di komputer client membaca definisi aplikasi di komputer masing-masing. Di awal aplikasi berjalan, dilakukan pengecekan apakah definisi aplikasi di server ada perubahan. Jika ada perubahan, maka definisi lokal di komputer client akan di update. Metode ini membuat aplikasi selalu mutakhir tanpa harus membaca definisi aplikasi ke server.

![Deployment 2](/images/deployment-2.svg)

3. **Definisi aplikasi disimpan sebagai file.** Definisi aplikasi diletakkan pada masing-masing komputer client. Sama seperti metode deployment sebelumnya tetapi tanpa keberadaan definisi aplikasi di server. Jadi tidak ada proses pengecekan atau peng-update-an definisi aplikasi.

![Deployment 3](/images/deployment-3.svg)

4. **Definisi aplikasi tersimpan pada file executable yang dihasilkan oleh Epigoni.** Berbeda dengan semua metode deployment sebelumnya, untuk menjalankan aplikasi tidak lagi menggunakan Epigoni executor. Pada metode deployment ini, Epigoni executor digantikan oleh sebuah file executable yang yang didalamnya sudah berisi definisi aplikasi.

![Deployment 4](/images/deployment-4.svg)
