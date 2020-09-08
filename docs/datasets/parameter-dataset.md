---
sidebarDepth: 3
---

# Parameter Dataset

![Dataset Parameters Tab](/images/dataset-parameters-tab.png)

- Untuk membuat parameter pada dataset, kita perlu menambahkan sintaks parameter pada pernyataan SQL dataset kita. Sebagai contoh, misalnya kita memiliki [dataset](../datasets/dataset-baru.md) dengan pernyataan SQL pada **Command Text** seperti berikut :

  ```sql
  SELECT
    ALBUMID, TITLE, ARTISTID
  FROM
    ALBUM
  WHERE
    ARTISTID = :ARTISTID
  ```

- Klik tombol `Generate All Parameters`, maka kemudian parameter `:ARTISTID` akan terbentuk seperti gambar berikut.

  ![Dataset Parameter - ARTISTID](/images/dataset-parameter-artistid.png)

- Kemudian _edit_ parameter `:ARTISTID` dengan mengisi **Data Type** dan **Size** sesuai dengan tipe dan ukuran data tersebut pada _database_. Pada contoh kali ini **Data Type** = `INTEGER` dan **Size** = `0`.

  ![Dataset Parameter - ARTISTID - Edit](/images/dataset-parameter-artistid-edit.png)

  ::: details Keterangan

  - **Parameter Name**, digunakan untuk mendefinisikan nama Parameter.
  - **Data Type**, digunakan untuk mendefinisikan tipe data untuk parameter.
  - **Size**, digunakan untuk mendefinisikan ukuran parameter
  - **Precision**, digunakan untuk mendefinisikan berapa jumlah digit yang digunakan dalam parameter untuk parameter bertipe numerik.
  - **Numeric Scale**, digunakan untuk mendefinisikan berapa jumlah _digit_ di belakang koma yang digunakan dalam parameter yang bertipe numerik.
  - **Value**, nilai parameter, hanya digunakan dalam Builder.

    :::

- Jika dataset dijalankan atau _preview_, maka akan muncul dialog parameter dahulu seperti gambar berikut.

  ![Dialog Parameter - ARTISTID](/images/dialog-parameter-artistid.png)

- Isi _field_ `Artistid` dengan nilai yang tertentu, kemudian klik tombol **OK**, sehingga tampil seperti gambar berikut.

  ![Dataset Album - Preview](/images/dataset-album-parameter-preview.png)

Dengan parameter yang telah kita buat, pengguna dapat memfilter atau mencari data **Album** dengan mengisi terlebih dahulu data `ARTISTID` secara persisi, hal ini dikarenakan kondisi pada pernyataan SQL yang didefinisakan adalah `ARTISTID = :ARTISTID`.

Pada Epigoni, jika pernyataan SQL pada sintaks parameter diberi tanda `{}` maka data akan tampil tanpa harus diisi nilai parameter terlebih dahulu. Untuk melihat perbedaannya, ubah pernyataan SQL menjadi seperti berikut.

```sql
SELECT
  ALBUMID, TITLE, ARTISTID
FROM
  ALBUM
WHERE
  {ARTISTID = :ARTISTID}
```

Berikut adalah hasil tampilan _preview_.

![Dataset Album - All - Preview](/images/dataset-album-parameter-all-preview.png)
