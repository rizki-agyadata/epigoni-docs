---
sidebarDepth: 3
---

# Control Position

![Control Position](/images/control-position.png)

**Control Position** berfungsi untuk mengatur tata letak sebuah _control_ atau _field_ pada form.

Nilai _default_ Control Position setiap _field_ adalah `NEW LINE`. Dengan begitu setiap _field_ atau _control_ akan tampak berjajar ke bawah sesuai dengan urutan _field_ pada Dataset Editor, seperti pada contoh gambar berikut:

![Field - New Line - Preview](/images/preview-field-new-line.png)

Pengaturan Control Position dengan nilai `NEW LINE` atau "tidak", dapat di lakukan juga pada _check box_ `NL` seperti pada contoh gambar berikut.

![Fields - New Line - Checkbox](/images/ds-new-line.png)

Sebagai contoh, kita hilangkan ceklis `NL` pada _field_ `FIRST NAME`, maka, _field_ `FIRST NAME` akan sejajar dengan _field_ `LAST NAME` seperti pada contoh gambar berikut.

![Fields - New Line - Uncheck](/images/new-line-uncheck.png)

Seperti yang terlihat pada gambar di atas, perubahan tata letak _field_ `FIRST NAME` menjadikan ukuran (tampilan) _field_ yang lainnya menjadi lebih panjang. Untuk mengatasi hal ini, diantaranya dengan mengatur nilai [Draw Width](../datasets/dw-lw.md) pada _field_ `FIRST NAME` atau _field_ `LAST NAME`.

Selanjutnya, pada Control Position juga terdapat pilihan `NEW COLUMN`. Ini hanya berfungsi pada _field_ yang berada pada urutan awal dalam sebuah _Category_.

Sebagai contoh, kita atur Control Position _field_ `TITLE` menjadi `NEW COLUMN`, maka kemudian akan tampak seperti pada contoh gambar berikut.

![Example - New Column](/images/example-new-column.png)

Pada contoh di atas, _category_ **Address** berada di bawah sejajar dengan _category_ **Job**. Hal ini dikarenakan urutan _category_ **Address** berada setelah _category_ **Job**.
