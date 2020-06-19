---
sidebarDepth: 3
---

# Demo Pembuatan Aplikasi

::: danger Catatan
Konten pada halaman **Demo** ini masih dalam proses pengerjaan.
:::

## Skenario

Kita akan membuat aplikasi sederhana dengan maksud untuk mendemonstrasikan secara singkat bagaimana bekerja dengan Epigoni.

## Prasyarat

- Sistem Operasi Windows, minimal Windows 7 ke atas
- <a href="https://firebirdsql.org/" target="_blank">Firebird</a>, minimal versi 2.5
- Epigoni
- _Database_ contoh (yang telah disiapkan)

## Persiapan

- Pastikan <a href="https://firebirdsql.org/" target="_blank">Firebird</a> telah terinstal dengan baik.
- Unduh file **Epigoni 1.5.rar** dan **Chinook_db.zip** pada tautan berikut:

> <a href="https://drive.google.com/open?id=0B601Tr2tSGr2T2Vyd3JhOTV4VEE" target="_blank">Epigoni 1.5</a>

- _Extract_ file `Epigoni 1.5.rar` yang telah diunduh.
- Buka folder `Epigoni 1.5`, kemudian jalankan `epigoni.exe` sehingga akan tampil Epigoni Application Portal seperti berikut:

![App Portal Blank](/images/appPortalArea.svg)

## Membuat Aplikasi Baru

- Klik menu Create New Application

![Button Create New App.](/images/btnCreateApp.svg)

- Isi form **Create New Application** seperti gambar berikut.

![Chinook - Create New App.](/images/chinook-create-new-app.png)

Klik **OK** untuk melanjutkan proses.

Aplikasi akan terbentuk pada portal Epigoni seperti berikut.

![Chinook - New App. Icon](/images/chinook-icon-portal.png)

- Klik pada aplikasi, kemudian login sebagai **Developer**

![Chinook - Login Dev](/images/chinook-login-dev.png)

## Membuat koneksi

- Klik menu **Connections**

  ![Tombol Connections](/images/btn-con.png)

- Klik tombol **Add** dan isi konfigurasi _Connection_ seperti berikut

  ![Chinook Connection](/images/chinook-connection.png)

- Klik tombol **Test Connection** untuk memastikan koneksi ke _database_ sudah terhubung.

  ![Connection Success](/images/connSuccess.svg)

- Klik tombol **OK**.

## Membuat Dataset

- Klik menu **Datasets**

  ![Tombol Datasets](/images/btn-dts.png)

- Klik tombol **Add** dan isi form dataset seperti gambar berikut:

  ::: tip Catatan
  Yang perlu diperhatikan pada gambar di bawah adalah bagian **Dataset** dan **Command Text**.
  :::

  ![Chinook Datset Employee](/images/chinook-dataset-employee.png)

- Klik tab **Fields** kemudian klik tombol **Generate All Fields** untuk men-_generate_ semua _field_ yang telah didefiniskan pada bagian **Command Text**.

  ![Chinook Datset Employee - Generate](/images/chinook-dataset-employee-generate.png)

- Klik (pilih) _field_ **employeeid**, kemudian klik tombol **Set Key Field** untuk men-_set_ _field_ **employeeid** sebagi _primary key_.

  ![Chinook Datset Employee - Set Key Field](/images/chinook-dataset-set-key.png)

  - Kemudian klik **OK** pada dialog konfirmasi.

  ![Dialog Set Key Field](/images/dialog-set-key-fields.png)

- Klik tombol **Preview** dan klik **OK** untuk men-_save_ _dataset_ pada dialog konfirmasi yang muncul.

  ::: tip Catatan
  **Preview** dan **Save Dataset** bersifat opsional, anda bisa melewati tahapan ini dan memilih **Cancel** pada dialog konfirmasi.

  Pada mode **Preview** sudah bisa melakukan proses <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank">CRUD</a> (manipulasi data)
  :::

  ![Dialog Save Dataset](/images/dialog-save-dataset.png)

  Berikut adalah tampilan **Preview** _dataset_ **Employee**

  ![Preview Employee Dataset](/images/chinook-preview-employee-dataset.png)

- Sesuaikan **Field Caption** menjadi seperti berikut:

  ![Dataset Employee - Field Caption](/images/chinook-emp-field-caption.png)

- Klik **Label Caption**, kemudian klik **OK** pada dialog **Confirmation** seperti gambar di bawah.

  ![Dataset Employee - Label Caption](/images/chinook-emp-label-caption.png)

  ![Dialog Copy Form Field Captions](/images/dialog-copy-from-field-captions.png)

  Hasilnya akan tampak seperti gambar berikut:

  ![Dataset Employee - Field dan Label Caption](/images/chinook-emp-field-dan-label-caption.png)

- Klik tombol **Preview** dan klik **OK** untuk men-_save_ perubahan _dataset_ pada dialog konfirmasi yang muncul.

  Berikut adalah tampilan hasil **Field Caption** dan **Label Caption** yang telah disesuaikan.

![Dataset Employee - Preview Field Caption](/images/chinook-emp-preview-field-caption.png)

![Dataset Employee - Preview Label Caption](/images/chinook-emp-preview-label-caption.png)

-
