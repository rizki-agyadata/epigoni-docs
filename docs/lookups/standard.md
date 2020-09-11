---
sidebarDepth: 3
---

# Membuat Lookup Standard

![Lookups](/images/app-lookups.png)

Pada tutorial kali ini kita akan membuat _lookup_ yang menampilkan data dari tabel `ARTIST`. Yang kemudian lookup ini akan digunakan oleh objek metadata lain misalnya _dataset_ atau _data package_.

- Klik tombol **Add** sehingga tampil **Lookup Editor** seperti gambar berikut.

  ![Lookup Editor](/images/app-lookup-editor.png)

- Isi inputan pada bagian **Dataset** seperti ketentuan berikut.

  - Lookup Name, `LKP_ARTIST` (atau nama lain sesuai dengan kebutuhan).
  - Connection, diisi dengan koneksi ke _database_ data atau bisnis proses yang digunakan.
  - Lookup Type`STANDARD`.

  ::: tip
  Jika **Command Text** sudah terisi, untuk Key Field dan Display Fields bisa dengan mengklik tombol disebelahnya masing-masing, maka akan otomatis terisi dengan `ARTISTID` dan `NAME`.
  :::

- Isi **Command Text** seperti berikut.

```SQL
SELECT
  ARTISTID, NAME
FROM
  ARTIST
```

- Isi dua inputan pada bagian **Dataset** kembali yaitu **Key Field** dan **Display Fields** secara manual atau dengan cara mengklik tombol pada bagian sebelah kanan masing-masing inputan, maka akan otomatis terisi dengan ketentuan sebagai berikut:

  - Key Field, `ARTISTID`.
  - Display Fields, `NAME`.

- Klik tombol `Preview` untuk memastikan lookup sudah berjalan dengan baik.

  ![Lookup Artist - Preview](/images/lkp_artist.png)

- Klik tombol **OK** pada **Lookup Editor** untuk menyimpan lookup yang telah dibuat.
