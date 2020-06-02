---
sidebarDepth: 3
---

::: danger Catatan
Konten pada halaman **Demo** ini masih dalam proses pengerjaan.
:::

# Demo Pembuatan Aplikasi

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

- Klik menu Connections

  ![Tombol Connections](/images/btn-con.png)

- Klik tombol **Add** dan isi konfigurasi _Connection_ seperti berikut

  ![Chinook Connection](/images/chinook-connection.png)

- Klik tombol **Test Connection** untuk memastikan koneksi ke _database_ sudah terhubung.
- Klik tombol **OK**.

## Membuat Dataset
