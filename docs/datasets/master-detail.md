# Master-Detail

Konsep <a href="https://en.wikipedia.org/wiki/Master–detail_interface" target="_blank">Master-Detail</a> dalam <a href="https://en.wikipedia.org/wiki/Relational_database" target="_blank">relational database</a> disebut juga dengan <a href="https://en.wikipedia.org/wiki/Relational_database" target="_blank">One-to-many</a>. Artinya satu _record_ dalam sebuah _dataset_ dapat direlasikan dengan banyak _record_ di _dataset_ lain. Ini adalah sebuah model yang menggunakan data dari satu dataset untuk memfilter data di dataset lain. Dataset yang digunakan untuk memfilter data disebut **Master** dan set data yang difilter disebut **Detail**.

Untuk mengimplementasikan konsep Master-Detail pada Epigoni, perlu dibuat dan dilakukan pengaturan-pengaturan tertentu pada tiga bagian metadata, yaitu: dataset, data package, dan form.

Seperti yang digunakan pada tutorial [Demo](../demo-app/README.md), _database_ yang digunakan pada tutorial kali ini adalah `Chinook`. Silahkan unduh file _database_ `Chinook_db.zip` yang terdapat dalam folder <a href="https://drive.google.com/open?id=0B601Tr2tSGr2T2Vyd3JhOTV4VEE" target="_blank">Epigoni 1.5</a>.

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
- Pada tab **Fields**, tentukan `PLAYLISTID` sebagai **Key**.

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
- Pada tab **Fields**, tentukan `PLAYLISTID` dan `TRACKID` sebagai **Key**.
- Pada tab **Parameters**, tambahkan atau generate _parameter_ `PLAYLISTID` dengan **Data Type**-nya adalah `INTEGER`.

## Data Package

Selanjutnya buatlah [Data Package](../datapackages/README.md) baik dengan cara [manual](../datapackages/datapackage-baru.md) atau dengan cara [generate dari dataset](../datasets/create-datapackage-form-action.md) `QRY_PLAYLIST`.

![QRY_PLAYLIST - Generate Data Package](/images/qry-playlist-generate-data-package.png)

Setelah _data package_ terbentuk, klik kanan pada dataset `QRY_PLAYLIST` kemudian klik tombol `Go To Data Package` untuk menuju _data package_ yang telah dibuat.

![Go To Data Package](/images/go-to-datapackage-playlist.png)

Edit _data package_ tersebut, kemudian pada **Data Package Editor**, klik tombol **Add Child** pada `QRY_PLAYLIST`.

![PKG_PLAYLIST - Add Child](/images/pkg_playlist-add-child.png)

Pada **Data Package Member**, klik tombol "..." pada _edit box_ **Dataset**.

![Data Package Member - Tombol - Pilih Dataset](/images/data-package-member-pilih-dataset.png)

Pilih _dataset_ `QRY_PLAYLISTTRACK`, kemudian klik tombol **OK**.

![Select Dataset QRY_PLAYLISTTRACK](/images/select-dataset-qry_playlisttrack.png)

Pada **Data Package Member**, untuk **Relation Type**-nya pilih `MASTER-DETAIL`.

![PKG_PLAYLIST Relation Type - Master Detail](/images/pkg-playlist-relation-type-master-detail.png)

Klik tombol **Generate All Link** sehingga kolom **Links** terisi dengan `PLAYLISTID=PLAYLISTID`.

![PKG_PLAYLIST - Generate All Link](/images/pkg-playlist-generate-all-link.png)

Klik tombol **OK**, sehingga terlihat hasilnya yaitu _dataset_ `QRY_PLAYLIST` dan `QRY_PLAYLISTTRACK` telah berelasi sebagai Master-Detail seperti pada gambar berikut.

![QRY_PLAYLISTTRACK - Master Detail](/images/qry-playlisttrack-master-detail.png)

Klik tombol **Close** pada **Data Package Editor** untuk menyimpan perubahan yang dilakukan.

## Form

Untuk membuat form, lakukan seperti pada langkah pembuatan _data package_ di atas, yaitu klik kanan pada _data package_ yang telah dibuat, kemudian pilih `Create Form` atau `Create Form and Action` seperti pada gambar berikut.

![PKG_PLAYLIST - Generate Form](/images/pkg-playlist-generate-form.png)

Setelah form terbentuk, klik kanan dan pilih **Go To Presentation** untuk membuka form tersebut.

![Go To Presentation](/images/go-to-presentation-frm-playlist.png)

Selanjutnya, klik tombol **Design**.

![FRM_PLAYLIST - Tombol Design](/images/frm-playlist-tombol-design.png)

Pada **Standard Form Designer**, klik tab **Content**, kemudian klik pada **MultiTable1**, selanjutnya isi **DatasetName** dengan `QRY_PLAYLIST` dan **DatasetDetailName** dengan `QRY_PLAYLISTTRACK` seperti pada gambar berikut.

![FRM_PLAYLIST - Dataset Master dan Detail](/images/form-pengaturan-dataset-master-detail.png)

_Scroll_ ke bawah dan ubah **EditorType** menjadi `dpeMasterDetail`.

![FRM_PLAYLIST - Editor Type](/images/editor-type-dpemasterdetail.png)

Sampai pada tahap ini, penerapan konsep Master-Detail telah terpenuhi. Untuk melihat hasilnya, klik tombol **Refresh Preview** atau **Preview Modal**. Form Playlist akan tampak seperti pada gambar berikut.

![FRM_PLAYLIST - Master Detail - Edit Mode](/images/form-playlist-master-detail-edit.png)

Lakukan proses tambah atau ubah untuk memastikan form Master-Detail telah berfungsi dengan baik.

---

Selain menggunakan **MultiTable**, form Master-Detail dapat juga dibuat dengan menggunakan **Table**. Prinsipnya sama dengan **MultiTable** yaitu mengatur **DatasetName** dengan dataset master (`QRY_PLAYLIST`) **DatasetDetailName** dengan dataset detail (`QRY_PLAYLISTTRACK`) dan **EditorType** menjadi `dpeMasterDetail`. Hanya saja data yang tampil pada tampilan _grid_ depan hanya data atau _grid_ master saja.

Supaya data atau _grid_ detail dapat juga ditampilkan pada bagian depan form, maka tambahkan satu **Table** lagi dengan mengatur **DatasetName** dengan dataset detail `QRY_PLAYLISTTRACK`.

Untuk membuatnya, terlebih dahulu kita hapus **Multitable1** dengan mengklik tombol **Remove**.

![Remove - Multitable1](/images/remove-multitable1.png)

Klik tombol **Add** dan pilih `Table`.

![Add - Table1](/images/add-pilih-table.png)

Isi **DatasetName** dengan dataset master yaitu `QRY_PLAYLIST` dan **EditorType** menjadi `dpeMasterDetail`.

![Table1 - Master](/images/form-add-table1-master.png)

Tambahkan lagi **Table**, kemudian isi **DatasetName** dengan dataset detail yaitu `QRY_PLAYLISTTRACK`.

![Table1 - Detail](/images/form-add-table1-detail.png)

Klik tombol **Refresh Preview** atau **Preview Modal** untuk melihat perubahan yang terjadi.

![Preview Form Playlist - Table](/images/preview-form-playlist-table.png)

Seperti yang terlihat pada gambar di atas, masin-masing _grid_ memiliki set tombol yaitu **Add**, **Edit**, dan **Delete**. Pada Kebanyakan kasus, untuk _grid_ detail biasanya tidak perlu ditampilkan set tombol kecuali pada mode tambah atau ubah pada data master.

Untuk menghilangkan tombol Add, Edit, dan Delete pada _grid_ detail, ubahlah nilai **ShowAddButton**, **ShowEditButton**, dan **ShowDeleteButton** menjadi `False` pada **Table2**.

![False Button](/images/tabel-detail-false-button.png)

Klik tombol **Refresh Preview** atau **Preview Modal** untuk melihat hasilnya.
