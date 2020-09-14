---
sidebarDepth: 3
---

# Membuat Form Baru

Biasanya, membuat Form lebih sering dibuat dengan cara di-_generate_ dari objek metadata [Dataset](../datasets/create-datapackage-form-action.md) atau [Data Package](../datapackages/). Kemudian Form diubah lagi sehingga sesuai dengan yang dibutuhkan.

Pada tutorial kali ini akan diuraikan cara membuat Form secara manual. Berikut adalah langkah-langkahnya.

- Pertama-tama, pastikan menu Forms sudah terbuka dengan mengklik menu Forms seperti gambar di bawah.

  ![Tombol Forms](/images/btn-frm.png)

  Sehingga tampil tabel Forms seperti gambar berikut.

  ![Forms](/images/app-forms.png)

- Klik tombol **Add** sehingga tampil inputan **Form** seperti gambar berikut.

  ![Form - New](/images/form-new.png)

  - Isi inputan dengan ketentuan sebagai berikut.

    - Form Name, nama form, biasanya diawali dengan awalan `FRM_` (opsional).
    - Data Package, Data Package yang digunakan.
    - Form Title, judul form.
    - Form Type, tipe form, saat ini terdapat satu pilihan yaitu `STANDARD FORM`.
    - Description (opsional), keterangan tentang form, digunakan untuk keperluan dokumentasi.

  - Klik tombol OK jika sudah selesai mengisi inputan.

- Selanjutnya, setelah form baru sudah terbentuk, pastikan kursor aktif pada data form yang baru dibuat, kemudian klik tombol `Design`.

  ![Form - Tombol Designer](/images/form-designer-tombol.png)

  Sehingga tampil Standard Form Designer seperti berikut.

  ![Standard Form Designer - Artist](/images/standard-form-designer-artist.png)

- Klik tab `Content`.

  ![Standard Form Designer - Content - Tab](/images/standard-form-designer-content-tab.png)

- klik tombol `Add` dan pilih `Table` atau `Multi Table`.

  ![Standard Form Designer - Content - Add](/images/form-content-add-multi-table.png)

- Klik pada objek yang telah ditambahkan, yaitu `Table` atau `Multi Table`, kemudian isi **Dataset Name** dengan _dataset_ yang digunakan, pada contoh berikut adalah `QRY_ARTIST`.

  ![Standard Form Designer - Set Dtaset Name](/images/form-set-dataset-name-artist.png)

- Klik tombol `Refresh` sehingga pada bagian tab `Preview` akan tampak seperti gambar berikut.

  ![Form Artist - Refresh](/images/form-artist-refresh.png)

Atau bisa juga klik tombol `Preview Modal` untuk melihat _table_ Artist dengan tampil secara penuh pada layar.

Klik tombol **OK** pada Standard Form Designer untuk menyimpan desain form yang telah dibuat.

Pada Tahap ini pembuatan form sudah cukup, lakukan perubahan selanjutnya jika diperlukan.
