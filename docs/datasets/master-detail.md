# Master-Detail

Konsep <a href="https://en.wikipedia.org/wiki/Master–detail_interface" target="_blank">Master-Detail</a> dalam <a href="https://en.wikipedia.org/wiki/Relational_database" target="_blank">relational database</a> disebut juga dengan <a href="https://en.wikipedia.org/wiki/Relational_database" target="_blank">One-to-many</a>. Artinya satu _record_ dalam sebuah _dataset_ dapat direlasikan dengan banyak _record_ di _dataset_ lain.

Untuk mengimplementasikan konsep Master-Detail pada Epigoni, perlu dibuatkan dan dilakukan pengaturan-pengaturan tertentu pada tiga bagian metadata, yaitu: dataset, data package, dan form.

Pada tutorial pembuatan Master-Detail ini, _database_ yang digunakan adalah `Chinook`, yaitu seperti yang digunakan pada tutorial [Demo](../demo-app/README.md). Silahkan unduh file _database_ `Chinook_db.zip` yang terdapat dalam folder <a href="https://drive.google.com/open?id=0B601Tr2tSGr2T2Vyd3JhOTV4VEE" target="_blank">Epigoni 1.5</a>.

## Dataset

Langkah pertama adalah membuat [dataset](../datasets/README.md) Master dan [dataset](../datasets/README.md) Detail, dengan konfigurasi masing-masing sebagai berikut.

### Dataset Master

- Dataset Name: `QRY_PLAYLIST` (opsional)
- Dataset Title: `Playlist` (opsional)
- Connection: [koneksi](../connections/README.md) ke database Chinook
- Command Type: `QUERY`
- Update Mode: `UPDATEABLE`
- Update Table: `PLAYLIST`
- Command Text:
  ```sql
  SELECT
    PLAYLISTID, NAME
  FROM
    PLAYLIST
  ```

Selanjutnya, pada tab **Fields**, tentukan _field_ **Key** adalah `PLAYLISTID`.

### Dataset Detail

- Dataset Name: `QRY_PLAYLISTTRACK` (opsional)
- Dataset Title: `Playlist Track` (opsional)
- Connection: [koneksi](../connections/README.md) ke database Chinook
- Command Type: `QUERY`
- Update Mode: `UPDATEABLE`
- Update Table: `PLAYLISTTRACK`
- Command Text:
  ```sql
  SELECT
    PLAYLISTID, TRACKID
  FROM
    PLAYLISTTRACK
  WHERE
    PLAYLISTID=:PLAYLISTID
  ```

Selanjutnya, pada tab **Fields**, tentukan _field_ **Key** adalah `PLAYLISTID` dan `TRACKID`. Dan yang terakhir, pada tab **Parameters**, tambahkan atau generate _parameter_ `PLAYLISTID` dengan Data Type adalah `INTEGER`.

## Data Package

Setelah _dataset_ dibuat, selanjutnya buat [Data Package](../datapackages/README.md) baik dengan cara [manual](../datapackages/datapackage-baru.md) atau dengan cara [generate dari dataset](../datasets/create-datapackage-form-action.md) `QRY_PLAYLIST`.

![QRY_PLAYLIST - Generate Data Package](/images/qry-playlist-generate-data-package.png)

Setelah _data package_ terbentuk, klik tombol **Add Child** pada `QRY_PLAYLIST` pada Data Package Editor.

![PKG_PLAYLIST - Add Child](/images/pkg_playlist-add-child.png)

Pada Data Package Member, klik tombol "...".

![Data Package Member - Tombol - Pilih Dataset](/images/data-package-member-pilih-dataset.png)

Pilih _dataset_ `QRY_PLAYLISTTRACK`, kemudian klik tombol **OK**.

![Select Dataset QRY_PLAYLISTTRACK](/images/select-dataset-qry_playlisttrack.png)

Pada Data Package Member, pilih `MASTER-DETAIL` untuk **Relation Type**.

![PKG_PLAYLIST Relation Type - Master Detail](/images/pkg-playlist-relation-type-master-detail.png)

Klik tombol **Generate All Link** sehingga kolom **Links** terisi dengan `PLAYLISTID=PLAYLISTID`.

![PKG_PLAYLIST - Generate All Link](/images/pkg-playlist-generate-all-link.png)

Klik tombol **OK**, sehingga hasilnya _dataset_ `QRY_PLAYLIST` dan `QRY_PLAYLISTTRACK` telah berelasi sebagai Master-Detail seperti pada gambar berikut.

![QRY_PLAYLISTTRACK - Master Detail](/images/qry-playlisttrack-master-detail.png)

Klik tombol **Close** pada Data Package Editor untuk menyimpan perubahan yang dilakukan. Selanjutnya anda bisa melakukan **Preview** jika diperlukan.

## Form

Untuk membuat form, kita lakukan seperti pada langkah membuat Data Package, yaitu dengan cara di-_generate_.

![PKG_PLAYLIST - Generate Form](/images/pkg-playlist-generate-form.png)

Kemudian pada form yang telah terbentuk, klik tombol **Design**.

![FRM_PLAYLIST - Tombol Design](/images/frm-playlist-tombol-design.png)

Pada Standard Form Designer, klik tab **Content**, kemudian klik pada **MultiTable1**, kemudian isi **DatasetName** dengan `QRY_PLAYLIST` dan **DatasetDetailName** dengan `QRY_PLAYLISTTRACK`.

![FRM_PLAYLIST - Dataset Master dan Detail](/images/form-pengaturan-dataset-master-detail.png)

Selanjutnya pada **EditorType** pilih `dpeMasterDetail`.

![FRM_PLAYLIST - Editor Type](/images/editor-type-dpemasterdetail.png)
