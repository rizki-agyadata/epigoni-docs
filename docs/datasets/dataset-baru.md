---
sidebarDepth: 3
---

# Membuat Dataset Baru

Untuk membuat _dataset_, pastikan [Connection](../connections/) sudah dibuat terlebih dahulu. Jika sudah tersedia, ikuti langkah-langkah sebagai berikut.

- Pertama-tama, pastikan menu **Datasets** sudah terbuka dengan mengklik menu **Datasets** seperti gambar di bawah.

  ![Tombol Datasets](/images/btn-dts.png)

  Sehingga tampil tabel **Datasets** seperti gambar berikut.

  ![Datasets](/images/app-datasets.png)

- Klik tombol **Add** sehingga muncul **Dataset Editor** seperti gambar berikut.

  ![Dataset Editor](/images/app-dataset-editor.png)

## Dataset

Pada bagian atas **Dataset Editor** terdapat kelompok inputan yang bernama **Dataset**. Isilah inputan-inputan tersebut dengan ketentuan sebagai berikut.

- **Dataset Name** : nama _dataset_, bersifat unik - tidak boleh sama antara satu _dataset_ dengan _dataset_ yang lain.

::: tip
Biasanya jumlah _dataset_ pada sebuah aplikasi akan berjumlah banyak, maka untuk tujuan pengelompokan dan memudahkan pencarian _dataset_, hendaknya penamaan diberikan awalan, misalnya `QRY_` kemudian diikuti dengan nama tabel misalnya `EMPLOYEE`, atau nama modul dan nama lain sesuai dengan kebutuhannya, sehingga nama _dataset_ menjadi `QRY_EMPLOYEE`.
:::

- **Dataset Title** : judul _dataset_.
- **Connection** : koneksi _database_ yang akan diakses, dipilih dari daftar koneksi yang sudah dibuat.
- **Command Type** : jenis perintah yang digunakan. Terdapat 3 (tiga) pilihan, yaitu:
  - `SQL`, _Command Text_ diisi dengan perintah **SQL Select**.
  - `TABLE`, _Command Text_ diisi dengan nama _tabel_.
  - `STORED PROCEDURE`, _Command Text_ diisi dengan perintah _SQL Select_ yang mengandung _selectable stored procedure_.
- **Update Mode** : mode _update_. Terdapat 4 (empat) pilihan, yaitu : `READONLY`, `UPDATEABLE`, `CUSTOM`, dan `NON-UPDATEABLE`.
- **Update Table** : nama _tabel_ yang akan di-_update_ ketika data set di-_update_.

::: tip
Untuk keperluan standar, inputan bagian **Dataset** cukup sampai di sini, sedangkan sisanya yaitu: `Packed Records`, `Max Blob Size`, `Fetch Blobs On Demand`, dan `Fetch Details On Demand` bisa diatur atau diubah nilainya jika diperlukan saja.
:::

- **Packed Records** : Jumlah satuan _record_ yang akan di-_fetch_ dari _database_ ketika data dibutuhkan. Jika jumlahnya -1 maka semua _record_ akan di-_fetch_ seluruhnya. Jika nilainya >0 maka ketika dibutuhkan, data di-_fetch_ dengan satuan sebesar jumlah tersebut.
- **Max Blob Size** : Ukuran maksimal _field_ dengan tipe **BLOB** _(Binary Large Object)_ dalam satuan **KB**. Jika nilainya -1, maka tidak ada batasan ukuran.
- **Fetch Blobs On Demand** : Jika di cek, maka _field BLOB_ yang ada pada _data set_ tidak akan langsung di-_fetch_. _Field_ tersebut hanya akan di-_fetch_ jika diperlukan, misalnya ketika akan ditampilkan ke layar.
- **Fetch Details On Demand** : Jika di cek, maka jika _data set_ direlasikan dengan _data set_ lain dengan tipe relasi **Master-Detail**, data yang berasal dari _data set detail_ hanya akan di-_fetch_ ketika diperlukan.

## Command Text

Selanjutnya adalah mengisi bagian **Command Text** sesuai dengan jenis **Command Type** yang dipilih pada bagian **Dataset** di atas. Umumnya **Command Type** adalah `SQL`. Berikut adalah contoh pernyataan SQL _select_ dari tabel EMPLOYEE:

```sql
SELECT
  EMPLOYEEID, LASTNAME, FIRSTNAME, GENDER, TITLE, REPORTSTO, BIRTHDATE, HIREDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, PHONE, FAX, EMAIL, PHOTO
FROM
  EMPLOYEE
```

::: warning
Hindari menulis sintaks dengan menuliskan tanda \* (_all_) seperti contoh berikut:

```sql
SELECT * FROM EMPLOYEE
```

Hendaknya setiap _field_ yang dibutuhkan dituliskan pada perintah SQL _select_ pada area **Command Text**.
:::

::: tip

Untuk menyingkat pengetikan perintah SQL, bisa dilakukan _drag_ & _drop_ dari area **Table List** seperti gambar berikut.

![Dataset Drag & Drop](/images/dataset-drag-drop.png)

**Command Text** akan terisi dengan baris perintah SQL _select_ dari tabel yang bersangkutan.

:::

::: details Opsional
Klik tombol `Run` untuk memastikan perintah SQL berjalan dengan benar.
:::

## Fields

Langkah selanjutnya adalah menambahkan atau men-_generate_ setiap _field_ yang telah didefinisikan sebelumnya pada **Command Text** ke bagian (tab) **Fields**.

- Klik tombol **Generate All Fields**.

  ![Tombol Generate All Fileds](/images/btn-gen-all-fields.png)

  Tunggu beberapa saat hingga semua _field_ dihasilkan.

  ![Generate All Fileds - Berhasil](/images/dataset-fields-ter-generate.png)

## Key Fields

Selanjutnya adalah menentukan _key field_.

- Pilih satu _field_ yang dimaksud, atau jika _key field_ lebih dari satu, tekan tombol `CTRL` pada _keyboard_ bersamaan dengan memilih _field-field_ yang dimaksud.

- Klik tombol `Set Key Fields`.

  ![Chinook Datset Employee - Set Key Field](/images/chinook-dataset-set-key.png)

- Kemudian klik **OK** pada dialog konfirmasi.

  ![Dialog Set Key Field](/images/dialog-set-key-fields.png)

Pada tahap ini _dataset_ sudah bisa melakukan proses manipulasi data - <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank">(CRUD)</a>. Lakukan _preview_ untuk dapat mencobanya.

- Klik tombol **Preview**.
- Klik **OK** pada dialog konfirmasi yang muncul.

  ![Dialog Save Dataset](/images/dialog-save-dataset.png)

  Berikut adalah tampilan **Preview** _dataset_ **Employee**

  ![Preview Employee Dataset](/images/chinook-preview-employee-dataset.png)

Sejauh ini, secara minimal proses pembuatan _dataset_ sudah selesai. Selanjutnya ikuti tutorial lain yang berkenaan tentang **Datasets** untuk menyempurnakan _dataset_ menjadi seperti yang diharapkan.
