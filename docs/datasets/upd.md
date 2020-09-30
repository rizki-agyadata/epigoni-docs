---
sidebarDepth: 3
---

# Updateable

![Upd](/images/upd.png)

**Updateable** (Upd), pada **Dataset Editor** adalah _check box_ yang berfungsi untuk menentukan apakah suatu _field_ bersifat (_updateable_) (dapat diperbarui) atau tidak.

Untuk menentukan Updateable pada sebuah _field_, dapat dilakukan pada _check box_ **Upd** seperti pada gambar di atas, atau pada _check box_ Updateable pada Field Editor seperti pada gambar di bawah.

![Update - Group Box](/images/update-group-box.png)

Ketika menambahkan sebuah _field_, baik dengan cara manual atau dengan **Generate All Field**, secara bawaan _check box_ Updateable dalam keadaan terceklis, baik _field_ dari _table_ utama atau bukan.

Misalnya kita memiliki definisi SQL seperti berikut.

```sql
SELECT
  A.ALBUMID, A.TITLE, A.ARTISTID, B.NAME
FROM
  ALBUM A
  LEFT JOIN ARTIST B ON B.ARTISTID=A.ARTISTID
```

Karena _field_ `NAME` bukan bagian dari table utama, maka jika kita membiarkan _field_ `NAME` Updateable, kemudian misalnya _field_ tersebut diinput saat melakukan proses tambah atau ubah, maka akan muncul _error_ seperti berikut.

![Contoh Error Field Name](/images/contoh-error-field-name.png)

Maka perlu diperhatikan agar menghilangkan tanda ceklis Updateable pada setiap _field_ yang bersifat tidak _updateable_ seperti pada contoh diatas.
