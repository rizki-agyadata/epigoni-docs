---
sidebarDepth: 3
---

# Membuat Koneksi Database Firebird

- Klik tombol **Add** hingga tampil **Connection Editor** seperti gambar berikut.

  ![Connection Editor](/images/app-conn-editor.png)

- Isi **Connection Name** sesuai dengan keinginan, dengan aturan tanpa spasi dan simbol kecuali _underscore_.
- Pilih **Connection Type** dengan `Firebird`.
- Isi **Parameters**, terutama pada bagian `Database =`. Isi dengan nama _path_ dan nama _file_ _database_ dengan lengkap. Contoh:

  `Database = D:\Database\EMPLOYEE.FDB`

  Atau bisa juga dengan mengisi bagian _database_ dengan cara menuliskan aliasnya.

- Klik tombol **Test Connection** untuk memastikan koneksi ke _database_ sudah terhubung. Jika koneksi sudah terhubung dengan benar maka akan tampil dialog **Information** seperti gambar berikut.

  ![Connection Success](/images/connSuccess.svg)

- Klik tombol **OK** untuk menyimpan koneksi yang telah dibuat.
