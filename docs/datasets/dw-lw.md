---
sidebarDepth: 3
---

# Draw Width Dan Label Width

![DW - LW](/images/dataset-dw-lw.png)

## Draw Width

Draw Width (DW) menentukan panjang kolom pada _grid_ dan panjang _control_ (inputan) seperti _edit box_, _combo box_, _textarea_, dsb.

Nilai awal Draw Width saat _field_ di-_generate_ atau ditambahkan adalah `0`. _Field_ akan ditampilkan dengan pembagian skala antara _field_ berdasarkan nilai `Size` (_field size_) dan juga berdasarkan hal lain seperti`Type` (tipe data), `Control Type`, dll.

![DW - Perbandingan - Size](/images/dw-perbandingan-size.png)

::: tip KETERANGAN
Pada tampilan **Preview - Form** terlihat _control_ (inputan) memiliki panjang yang sama. Pada Epigoni, _control_ yang berjajar ke bawah akan memiliki panjang yang sama mengikuti _control_ yang terpanjang pada form, kecuali untuk beberapa jenis _control_ misalnya adalah _checkbox_.

:::

Untuk menunjukan bagaimana Draw Width berpengaruh atau terlihat pada form, lakukan langkah seperti berikut:

- Beri nilai `10` untuk Draw Width pada _field_ `GENDER`.
- Hilangkan tanda ceklis `NL` (New Line) pada field `BIRTHDATE`.

![Gender - BD - DW = 10 - Uncheck](/images/gender-bd-10-uncheck.png)

Berikut adalah hasilnya:

![Gender - BD - DW = 10 - Uncheck - Preview](/images/gender-bd-10-uncheck-preview.png)

## Label Width

Label Width (LW) menentukan panjang judul _control_ (inputan) pada form.

Sebagai contoh, beri nilai `10` untuk Label Width pada _field_ `GENDER`.

![BD - LW = 10](/images/bd-LW-10.png)

Berikut adalah hasilnya:

![BD - LW = 10 - preview](/images/bd-LW-10-preview.png)
