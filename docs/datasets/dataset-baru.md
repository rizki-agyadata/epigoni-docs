---
sidebarDepth: 3
---

# Membuat Dataset Baru

Untuk membuat _dataset_, pastikan [Connection](../connections/) sudah dibuat terlebih dahulu. Jika sudah dibuat, berikut adalah langkah-langkah membuat _dataset_ baru.

- Klik menu **Datasets**.

  ![Tombol Datasets](/images/btn-dts.png)

  Sehinggga tampil modul **Datasets** seperti gambar berikut.

  ![Datasets](/images/app-datasets.png)

- Klik tombol **Add** sehingga muncul **Dataset Editor**.

  ![Dataset Editor](/images/app-dataset-editor.png)

- Isi bagian **Dataset** dengan ketentuan sebagai berikutnya.
  - **Dataset Name** : nama _dataset_, bersifat unik - tidak boleh sama antara satu _dataset_ dengan _dataset_ yang lain.
  - **Dataset Title** : judul _dataset_.
  - **Connection** : koneksi _database_ yang akan diakses, dipilih dari daftar koneksi yang sudah dibuat.
  - **Command Type** : jenis perintah yang digunakan. Terdapat 3 (tiga) pilihan, yaitu:
    - `SQL`, _Command Text_ diisi dengan perintah **SQL Select**.
    - `TABLE`, _Command Text_ diisi dengan nama _tabel_.
    - `STORED PROCEDURE`, _Command Text_ diisi dengan perintah _SQL Select_ yang mengandung _selectable stored procedure_.
  - **Update Mode** : mode _update_. Terdapat 4 (empat) pilihan, yaitu : `READONLY`, `UPDATEABLE`, `CUSTOM`, dan `NON-UPDATEABLE`.
  - **Update Table** : nama _tabel_ yang akan di-_update_ ketika data set di-_update_.
  - **Packed Records** : Jumlah satuan _record_ yang akan di-_fetch_ dari _database_ ketika data dibutuhkan. Jika jumlahnya -1 maka semua _record_ akan di-_fetch_ seluruhnya. Jika nilainya >0 maka ketika dibutuhkan, data di-_fetch_ dengan satuan sebesar jumlah tersebut.
  - **Max Blob Size** : Ukuran maksimal _field_ dengan tipe **BLOB** _(Binary Large Object)_ dalam satuan **KB**. Jika nilainya -1, maka tidak ada batasan ukuran.
  - **Fetch Blobs On Demand** : Jika di cek, maka _field BLOB_ yang ada pada _data set_ tidak akan langsung di-_fetch_. _Field_ tersebut hanya akan di-_fetch_ jika diperlukan, misalnya ketika akan ditampilkan ke layar.
  - **Fetch Details On Demand** : Jika di cek, maka jika _data set_ direlasikan dengan _data set_ lain dengan tipe relasi **Master-Detail**, data yang berasal dari _data set detail_ hanya akan di-_fetch_ ketika diperlukan.
