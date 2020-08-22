---
sidebarDepth: 3
---

# Data

## Connections

![Tombol Connections](/images/btn-con.png)

Menu **Connections** adalah untuk mengelola koneksi _database_ transaksi.

Berikut adalah tampilan modul **Connections**

![Connections](/images/app-connections.png)

Berikut adalah tampilan form **Connection Editor**

![Connection Editor](/images/app-conn-editor.png)

- Connection:
  - Connection Name : Nama koneksi
  - Connection Type : Tipe koneksi, disesuaikan dengan _database_ yang digunakan
- Parameters: Konfigurasi parameter _database_
- Test Connection (tombol) : Untuk melakukan _test_ koneksi

## Datasets

![Tombol Datasets](/images/btn-dts.png)

Menu **Datasets** adalah untuk melakukan pengelolaan **Data Set**.

**Data Set** adalah set data berbentuk matriks yang datanya berasal dari sebuah sistem _database_. Definisi **Data Set** pada **Epigoni** tidak hanya mendefinisikan data apa yang ingin ditampilkan, tetapi juga mendefinisikan berbagai _attribute_ dari data yang dihasilkan, seperti: bagaimana data ditampilkan, diubah dan lain-lain.

Berikut adalah tampilan depan atau _data grid_ Datasets.

![Datasets](/images/app-datasets.png)

Berikut adalah tampilan Dataset Editor.

![Dataset Editor](/images/app-dataset-editor.png)

- Dataset
  - **Dataset Name** : Nama _dataset_, bersifat unik - tidak boleh sama antara satu _dataset_ dengan _dataset_ yang lain.
  - **Dataset Title** : Judul _dataset_.
  - **Connection** : Koneksi _database_ yang akan diakses, dipilih dari daftar koneksi yang sudah dibuat.
  - **Command Type** : Jenis perintah yang digunakan. Terdapat 3 (tiga) pilihan, yaitu:
    - `SQL`, _Command Text_ diisi dengan perintah **SQL Select**.
    - `TABLE`, _Command Text_ diisi dengan nama _tabel_.
    - `STORED PROCEDURE`, _Command Text_ diisi dengan perintah _SQL Select_ yang mengandung _selectable stored procedure_.
  - **Update Mode** : Mode _update_. Terdapat 4 (empat) pilihan, yaitu : `READONLY`, `UPDATEABLE`, `CUSTOM`, dan `NON-UPDATEABLE`.
  - **Update Table** : nama _tabel_ yang akan di-_update_ ketika data set di-_update_.
  - **Packed Records** : Jumlah satuan _record_ yang akan di-_fetch_ dari _database_ ketika data dibutuhkan. Jika jumlahnya -1 maka semua _record_ akan di-_fetch_ seluruhnya. Jika nilainya >0 maka ketika dibutuhkan, data di-_fetch_ dengan satuan sebesar jumlah tersebut.
  - **Max Blob Size** : Ukuran maksimal _field_ dengan tipe **BLOB** _(Binary Large Object)_ dalam satuan **KB**. Jika nilainya -1, maka tidak ada batasan ukuran.
  - **Fetch Blobs On Demand** : Jika di cek, maka _field BLOB_ yang ada pada _data set_ tidak akan langsung di-_fetch_. _Field_ tersebut hanya akan di-_fetch_ jika diperlukan, misalnya ketika akan ditampilkan ke layar.
  - **Fetch Details On Demand** : Jika di cek, maka jika _data set_ direlasikan dengan _data set_ lain dengan tipe relasi **Master-Detail**, data yang berasal dari _data set detail_ hanya akan di-_fetch_ ketika diperlukan.
- **Command Text** : Area untuk menuliskan teks perintah dimana jenisnya tergantung pada pilihan **Command Type**. Isi dari **Command Text** adalah inti dari definisi _data set_, mendeskripsikan data yang ingin dihasilkan. **Command Type** umumnya adalah berupa _query_, jadi **Command Text** lebih sering identik dengan perintah **SQL Select**. Di sebelah kanan _editor Command Text_ terdapat alat bantu untuk membentuk SQL. Anda bisa mencoba men-_drag_ salah satu tabel yang terdapat pada daftar tabel ke editor Command Text.
- **Fields** : Berisi daftar _field_ yang dibentuk oleh **Command Text**. Daftar _field_ harus dibentuk, baik secara manual satu demi satu atau secara otomatis lewat tombol `Generate All Fields` yang telah disediakan. Anda bisa mengeset attribut dari setiap _field_ yang didefinisikan.
- **Parameters** : Berisi daftar dari parameter yang dibutuhkan **Command Text**.
- **Indexes & Groups** : Berisi definisi pengurutan dan pengelompokkan data.
- **Aggregate** : Berisi definisi fungsi-fungsi _aggregate_ yang ingin dikalkulasi dari data.
- **Constrains** : Berisi daftar batasan-batasan nilai yang dapat dimasukkan ke dalam sebuh _field_.
- **Events** : Untuk menuliskan kode _script_ yang akan dieksekusi ketika event tertentu dari data set terjadi.
- **Data Exchanges** : -
- **Description** : Deskripsi dari _data set_ yang bersangkutan untuk kepentingan dokumentasi.

## Commands

![Tombol Commands](/images/btn-cmd.png)

![Commands](/images/app-commands.png)

![Command Editor](/images/app-command-editor.png)

## Lookups

![Tombol Lookups](/images/btn-lkp.png)

![Lookups](/images/app-lookups.png)

![Lookup Editor](/images/app-lookup-editor.png)

## SQL Values

![Tombol SQL Values](/images/btn-sql-val.png)

![SQL Values](/images/app-sql-values.png)

![SQL Value Editor](/images/app-sql-value-editor.png)
