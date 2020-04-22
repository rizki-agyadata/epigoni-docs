# Membuat Aplikasi (Versi 1.2)

## Membuat Aplikasi Baru

Untuk membuat sebuah aplikasi pada Epigoni :

- Dari tab _Builder_, Klik tombol _New Application_

Setelah tampil form dialog _Create New Application_, isi dengan informasi yang diperlukan. Proses ini akan membentuk sebuah _file project_ Epigoni (_default_-nya berekstensi **.epf**). Proses ini juga akan membuat dan/atau menyiapkan _database_ untuk definisi aplikasi.

![Create New App](/images/versi-1.2/formCreateNewApp-V1.2.svg)

Data yang harus diisikan :

### Application

- _**Application ID**_, diisi dengan kode aplikasi.
- _**Description**_, diisi dengan deskripsi aplikasi, akan tampil sebagai caption dari window utama aplikasi.
- _**Title**_, diisi dengan judul aplikasi, akan tampil pada form login aplikasi.
- _**Sub Title**_, diisi dengan sub judul aplikasi, akan tampil pada form login aplikasi sebagai sub judul.

### User Management

- _**User Management Type**_, diisi dengan salah satu pilihan yang tersedia:

  - _**Simple**_, setiap _user_ dapat didefinisikan hak akses-nya terhadap menu aplikasi Create New Database (Firebird Only) di Cek Klik disini untuk memberikan nama serta menyimpan file “Database Metadata” .
  - _**Single Role**_, setiap role dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap user dapat di-assign ke satu atau lebih role, tetapi pada saat login akan ditanya role mana yang akan digunakan.
  - _**Fixed Role**_, setiap role dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap userhanya dapat di-assign ke sebuah role saja.
  - _**Mixed Role**_, setiap role dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap user bisa di-assign ke satu atau lebih role. Hak akses user terhadap menu aplikasi adalah gabungandari hak akses semua role yang di-assign kepada user tersebut.

- _**Administrator Password**_, diisi dengan password untuk user ADMINISTRATOR. Ketikkan password tersebut dua kali sebagai konfirmasi. Password bersifat case-sensitive.

### Metadata

- _**Database Type**_, diisi dengan jenis RDBMS yang digunakan untuk menyimpan definisi aplikasi.
- _**Create New Database (Yes/No)**_, beri tanda cek untuk membuat _database_ definisi aplikasi. Hal ini hanya berlaku untuk Firebird. Untuk RDBMS lain, _database_ harus sudah dibuat terlebih dahulu menggunakan aplikasi bantu yang disediakan oleh masing-masing RDBMS. Sebaiknya berupa _database_ kosong.
- _**Database Metadata**_, nama _database_ atau alias-nya yang akan digunakan sebagai dababase definisi aplikasi. Pada Firebird, jika _database_ dibentuk oleh Epigoni, tuliskan nama file _database_ yang akan dibentuk lengkap dengan lokasinya. Gunakan tombol Browse sebelah kanan edit box untuk memudahkan pengisian nama file database.
- _**User Name**_, diisi dengan nama user untuk login ke _database_ definisi aplikasi yang akan terbentuk/sudah tersedia.
- _**Password**_, diisi dengan password untuk ke _database_ definisi aplikasi yang akan terbentuk/sudah tersedia.

Jika _database_ definisi aplikasi sudah tersedia, Anda bisa mencoba mengetes koneksi dengan menggunakan tombol **Test Connection** yang tersedia.

![Dialog Save As](/images/versi-1.2/dialogSaveAs-V1.2.svg)

### Project

- _**Project File Name**_, diisi dengan nama _file project_ yang akan dibuat. Jika Anda menggunakan tombol **Browse** pada _edit box_ **Database Metadata**, maka secara otomatis nama _file project_-nya akan terisi dengan nama dan lokasi yang sama dengan nama _file database_ definisi aplikasi, hanya dengan ekstensi yang berbeda yaitu **.epf**.

![Project EPF](/images/versi-1.2/projectEpf-V1.2.svg)

Setelah semua informasi yang diperlukan telah diisi, klik tombol OK. Epigoni akan membuat _file project_ dari aplikasi serta membentuk dan/atau menyiapkan _database_ definisi aplikasi. Setelah selesai Epigoni akan membuka project tersebut dan menampilkan Application Info.

![Project EPF](/images/versi-1.2/projectIcon-V1.2.svg)

Proses pembuatan aplikasi baru telah selesai. Anda bisa memulai pendefinisian aplikasi.

## Menyiapkan Database

### Membuat Koneksi Database

Sebelum membuat model data, Anda harus membuat koneksi ke _database_ yang akan diakses oleh aplikasi. Sebuah proyek aplikasi Epigoni baru sudah memiliki satu buah koneksi _database_, yaitu koneksi ke _database_ definisi aplikasi, bernama **DEFAULT**. Koneksi _DEFAULT_ tidak ada dalam daftar koneksi, tetapi dapat digunakan.

Untuk melihat daftar koneksi _database_ yang ada, pada tab **Metadata**, klik tombol **Connection**.

![DB Connections](/images/versi-1.2/dbConnections-V1.2.svg)

Untuk menambahkan koneksi ke _database_ klik tombol **Add**. Beri nama koneksi pada _edit box_ **Connection Name**
dan pilih **Connection Type** dengan jenis **RDBMS** dari _database_ yang ingin diakses.

Lengkapi parameter dari koneksi seperlunya. Misal isi _Database_ dengan nama _database_ atau alias dari _database_ yang akan diakses, isi **User_Name** dan **Password** dengan nama _user_ dan _password_ untuk _login_ ke _database_ tersebut.

Lakukan **test** koneksi dengan menekan tombol **Test Connection**, sebelum menekan tombol **OK**.

Tombol **Edit** digunakan untuk mengedit koneksi jika Anda ingin melakukan perubahan.

Tombol **Delete** digunakan untuk menghapus koneksi.

### Membuat Database (khusus untuk Firebird)

Epigoni menyediakan fasilitas untuk membuat _database_ **Firebird** dan sekaligus mendaftarkannya ke dalam daftar koneksi lewat tombol **Create Database**.

![Create Firebird DB](/images/versi-1.2/createFirebirdDB-V1.2.svg)

Isikan nama koneksi pada _edit box_ **Connection Name** dan nama _file database_ Firebird yang akan dibuat pada _edit box Database_. Pilih Page Size yang diinginkan. Isi **nama user** dan **password**. Klik tombol OK.

### Membuat Obyek-Obyek Database

Pembuatan obyek-obyek _database_ seperti membuat _table_, _trigger_, _stored procedure_ dll, dapat dilakukan dengan menggunakan _software_ alat bantu yang disediakan oleh masing-masing **RDBMS**. Epigoni sendiri akan dilengkapi dengan alat bantu untuk membuat obyek-obyek _database_ khusus untuk Firebird.

## Membuat Model Data

### Membuat Data Set

Untuk melihat daftar definisi **Data Set**, pada tab **Metadata**, klik tombol **Dataset**.

![Datasets](/images/versi-1.2/datasets-V1.2.svg)

Untuk membuat definisi _data set_ baru, klik tombol **Add** untuk menampilkan _data set editor_.

![Datasets](/images/versi-1.2/datasetEditor-V1.2.svg)

Data yang diisikan:

- **Dataset Name**, diisi dengan nama _dataset_.
- **Dataset Title**, diisi dengan judul _dataset_.
- **Connection**, diisi dengan koneksi _database_ yang akan diakses, dipilih dari daftar koneksi yang sudah dibuat.
- **Command Type**, diisi degan memilih salah satu jenis **Command Type**:
  - **Query**, _Command Text_ diisi dengan perintah **SQL Select**.
  - **Table**, _Command Text_ diisi dengan nama _tabel_.
  - **Stored Procedure**, _Command Text_ diisi dengan perintah _SQL Select_ yang mengandung _selectable stored procedure_.
- **Update Mode**, diisi dengan memilih salah satu _mode update_:
  - **Key Fields**, _data set_ akan di-_update_ berdasarkan _value_ awal dari satu atau lebih _key field_ yang sebelumnya telah didefinisikan.
  - **Change Fields**, _data set_ akan di-_update_ berdasarkan _value_ awal dari _field-field_ yang diubah nilainya oleh _user_ (pengguna) aplikasi.
  - **All Fields**, _data set_ akan di-_update_ berdasarkan _value_ awal seluruh _field_ dari _data set_.
  - **Read Only**, _data set_ tidak akan di-_update_.
- **Update Table**, diisi dengan nama _tabel_ yang akan di-_update_ ketika data set di-_update_.
- **Packed Records**, diisi dengan jumlah satuan _record_ yang akan di-_fetch_ dari _database_ ketika data dibutuhkan. Jika jumlahnya -1 maka semua _record_ akan di-_fetch_ seluruhnya. Jika nilainya >0 maka ketika dibutuhkan, data di-_fetch_ dengan satuan sebesar jumlah tersebut.
- **Max Blob Size**, diisi dengan ukuran maksimal _field_ dengan tipe **BLOB** _(Binary Large Object)_ dalam satuan **KB**. Jika nilainya -1, maka tidak ada batasan ukuran.
- **Fetch Blobs On Demand**, jika di cek, maka _field BLOB_ yang ada pada _data set_ tidak akan langsung di-_fetch_. _Field_ tersebut hanya akan di-_fetch_ jika diperlukan, misalnya ketika akan ditampilkan ke layar.
- **Fetch Details On Demand**, jika di cek, maka jika _data set_ direlasikan dengan _data set_ lain dengan tipe relasi **Master-Detail**, data yang berasal dari _data set detail_ hanya akan di-_fetch_ ketika diperlukan.

Ada definisi lain yang harus di-_set_ yang berada pada tab-tab bagian bawah editor.

- **Command Text**, diisi sesuai dengan _Command Type_, seperti pada penjelasan di atas. Isi dari **Command Text** adalah inti dari definisi _data set_, mendeskripsikan data yang ingin dihasilkan. _Command Type_ umumnya adalah berupa _query_, jadi **Command Text** lebih sering identik dengan perintah **SQL Select**. Di sebelah kanan _editor Command Text_ terdapat alat bantu untuk membentuk SQL. Anda bisa mencoba men-_drag_ salah satu tabel yang terdapat pada daftar tabel ke editor Command Text.
- **Field**, berisi daftar field yang dibentuk oleh Command Text. Daftar field harus dibentuk, baik secara manual satu demi satu atau secara otomatis lewat tombol Generate All Fields yang telah disediakan. Anda bisa mengeset attribut dari setiap field yang didefinisikan.

![Generate Fields](/images/versi-1.2/generateFields-V1.2.svg)

- **Parameter**, berisi daftar dari parameter yang dibutuhkan **Command Text**, akan dijelaskan kemudian.
- **Index & Group**, berisi definisi pengurutan dan pengelompokkan data, akan dijelaskan kemudian.
- **Aggregate**, berisi definisi fungsi-fungsi aggregate yang ingin dikalkulasi dari data, akan dijelaskan kemudian.
- **Constraint**, berisi daftar batasan-batasan nilai yang dapat dimasukkan ke dalam sebuh _field_, akan dijelaskan kemudian.
- **Event**, untuk menuliskan kode _script_ yang akan dieksekusi ketika event tertentu dari data set terjadi, akan dijelaskan kemudian.
- **Description**, diisi dengan deskripsi dari _data set_ yang bersangkutan untuk kepentingan dokumentasi.

Setelah _data set_ didefinisikan Anda dapat melihat _preview_ dari _data set_ tersebut dengan meng-klik tombol **Preview** atau klik tombol **Run** jika hanya ingin mengeksekusi _Command Text_-nya saja.

Tampilan _Preview_

![Dataset Preview](/images/versi-1.2/datasetPreview-V1.2.svg)

Tampilan _Run_

![Dataset Run](/images/versi-1.2/datasetRun-V1.2.svg)

### Membuat Data Package

Untuk melihat daftar definisi _Data Package_, pada tab **Metadata**, klik tombol **Data Package**.

![Datapackage](/images/versi-1.2/datapackage-V1.2.svg)

Untuk membuat definisi Data Package baru, klik tombol **Add** untuk menampilkan Data Package _editor_.

![Datapackage Editor](/images/versi-1.2/datapackageEditor-V1.2.svg)

Disamping dengan cara di atas, untuk membuat Data Package dari Dataset yang telah dibuat, epigoni menyediakan juga cara yang lebih sederhana sebagai berikut:

1. Masuk ke daftar definisi Dataset
2. Sorot definisi Dataset yang akan dibuat definisi Data Package
3. Klik kanan pada definisi Dataset yang akan dibuat definisi Data Package

![Dataset To Datapackage](/images/versi-1.2/datasetToDatapackage3-V1.2.svg)

4. Pilih salah satu menu yang muncul, misal: **Create Data Package**

![Pilih Datapackage](/images/versi-1.2/pilihCreateDatapackage-V1.2.svg)

5. Isikan nama untuk definisi Data Package yang sedang dibuat, tekan tombol OK

![Isi Nama Datapackage](/images/versi-1.2/baseNameDatapackage-V1.2.svg)

6. Proses membuat definisi Data Package sudah berhasil, tekan tombol OK

![Informasi Done](/images/informasiDone.svg)

7. Untuk hasilnya bisa dilihat di daftar definisi Data Package, pada tab Metadata, klik tombol Data Package.

![Hasil Datapackage](/images/versi-1.2/hasilDatapackage-V1.2.svg)

## Membuat Presentasi

### Membuat Form

Untuk melihat daftar definisi _Form_, pada tab _Metadata_, klik menu **Form**.

![Daftar Form](/images/versi-1.2/daftarForm-V1.2.svg)

Untuk membuat definisi _form_ baru, klik tombol **Add** untuk menampilkan **Form Editor**.

![Add New Form](/images/versi-1.2/addNewForm-V1.2.svg)

### Membuat Report

Untuk melihat daftar definisi _Report_, pada tab _Metadata_, klik menu **Report**.

![Daftar Report](/images/versi-1.2/daftarReport-V1.2.svg)

Untuk membuat definisi _form_ baru, klik tombol **Add** untuk menampilkan **Form Editor**.

![Add New Report](/images/versi-1.2/addNewReport-V1.2.svg)

## Merancang Menu Aplikasi

### Membuat Action

Pembuatan action ini nantinya akan dihubungkan ke menu pada aplikasi untuk bisa dijalankan.

Untuk membuat Action ada 2 Cara, yaitu :

Cara pertama :

Jika _Dataset_ yang akan dibuat action sudah dibuat maka pada daftar _Dataset_, pilih _Dataset_ yang akan dibuat actionnya kemudian klik kanan, terus pilih **Create Data Package, Form and Action**.

![Create Action 1](/images/versi-1.2/createAction1-V1.2.svg)

Cara kedua :

Jika _Data Package_ yang akan dibuat _action_ sudah dibuat maka pada daftar _Data Package_, pilih **Data Package** yang akan dibuat actionnya kemudian klik kanan, terus pilih **Create Form and Action**.

![Create Action 2](/images/versi-1.2/createAction2-V1.2.svg)

_Action_ yang telah berhasil dibuat bisa dilihat pada daftar _Action_

![Hasil Action](/images/versi-1.2/hasilAction-V1.2.svg)

Pada daftar _Action_ ini dilengkapi dengan tombol **Execute** yang berfungsi untuk melihat hasil dari masing-masing _Action_ yang ada didaftar Action

### Membuat Menu

Untuk mendefinisikan menu pada aplikasi, Epigoni menyediakan beberapa jenis menu. Pada dasarnya menu aplikasi yang dibentuk ada dua tipe menu aplikasi yaitu menu berbasis ribbon dan menu tanpa ribbon. Epigoni menyediakan 4 buah jenis menu:

**Ribbon Menu**. Bila _ribbon menu_ ada isinya berarti aplikasi akan tampil dengan menu berbasis _Ribbon_. _Ribbon_
terdiri atas minimal 3 level, yaitu _Tab_, _Group_ dan _Menu_. Dua level pertama tidak dapat diisi dengan _action_,
melainkan membentuk _Tab_ dan _Group_. Level ke tiga dan selanjutnya (tidak terbatas) dapat diisi dengan _action_.

![Ribbon Menu](/images/versi-1.2/ribbonMenu-V1.2.svg)

**Application Menu**. Pada menu berbasis _ribbon_, _application menu_ akan muncul sebagai _application menu_-nya
_ribbon_. Pada menu tanpa _ribbon_, maka application menu akan menjadi _Menu Bar_ utama dari aplikasi. _Level tree Application menu_ tidak dibatasi.

![Application Menu](/images/versi-1.2/applicationMenu-V1.2.svg)

**Tool Bar**. Pada menu berbasis _ribbon_, menu akan tampil dalam _Quick Access Toolbar_. Pada menu tanpa _ribbon_,
_tool bar menu_ akan tampil sebagai _Tool Bar_ di bawah _Menu Bar_. _Level tree Tool Bar_ tidak dibatasi.

![Tool Bar Menu](/images/versi-1.2/toolBarMenu-V1.2.svg)

**Side Menu**, adalah menu yang akan muncul disamping. _Level tree Side Menu_ dibatasi minimal dan maksimal 2.

![Side Menu](/images/versi-1.2/sideMenu-V1.2.svg)

**Add**

Untuk menambahkan item menu yang sejajar (sibling).

Data yang diisikan adalah _Caption_, _Hint_, _Action_, serta _Image_. Untuk memilih image gunakan klik-kanan.

![Image Menu](/images/versi-1.2/imageMenu-V1.2.svg)

Bila **Caption** diisi dengan **"-"** , maka item menu akan menjadi separator.

![Strip Menu](/images/versi-1.2/stripMenu-V1.2.svg)

![Separator Menu](/images/versi-1.2/separatorMenu-V1.2.svg)

**Add Child**

Untuk menambahkan item menu yang menjadi sub menu dari item menu yang dipilih.

![Add Child Menu](/images/versi-1.2/addChildMenu-V1.2.svg)

**Edit**

Untuk mengubah item menu.

**Delete**

Untuk menghapus item menu.

**Up**

Untuk menggeser item menu ke atas dalam level yang sama.

![Up Menu](/images/versi-1.2/upMenu-V1.2.svg)

**Down**

Untuk menggeser item menu ke bawah dalam level yang sama.

![Down Menu](/images/versi-1.2/downMenu-V1.2.svg)

## Mengatur User Pengguna Aplikasi

### Role

![Role](/images/versi-1.2/role-V1.2.svg)

Fitur ini digunakan untuk mengelola Role. User dapat menambah, mengubah atau menghapus Role. Selain itu user dapat mendefinisikan hak atas setiap menu dari role yang dipilih. Untuk aplikasi dengan user management Simple Role, maka setiap penambahan dan penghapusan user, secara otomatis role dengan nama yang sama akan ditambahkan atau dihapuskan.

Semua user bisa diubah atau dihapus, termasuk user dengan nama Administrator.

![Role List](/images/versi-1.2/roleList-V1.2.svg)

#### Add Role

Menambahkan _role_ baru dan mengisi _property_ _Name_ dan _Status_ _(Active / Inactive)_

![Form Role](/images/versi-1.2/formRole-V1.2.svg)

#### Edit Role

Mengubah _role_ dalam hal ini adalah _property_ _Name_ dan _Status_ _(Active / Inactive)_

#### Delete Role

Menghapus _Role_

##### Menu

Mengatur hak akses terhadap menu setiap _Role_.

![Menu Role](/images/versi-1.2/menuRole-V1.2.svg)

### User

![Icon User](/images/versi-1.2/iconUser-V1.2.svg)

Fitur ini digunakan untuk menambah, mengubah dan menghapus _user_.

![User List](/images/versi-1.2/userList-V1.2.svg)

#### Add

Untuk menambahkan _user_ baru, dengan _property_ **User Name**, **Password**, **Full Name**, **Status** _(Active/Inactive)_.

![Add User](/images/versi-1.2/addUser-V1.2.svg)

#### Edit

Untuk mengubah _user_, dengan _property_ **User Name**, **Password**, **Full Name**, **Status** _(Active/Inactive)_.

#### Delete

Untuk menghapus _user_.

#### Role

Untuk mendefinisikan _role_ apa saja yang di-_assign_-kan ke _user_ tersebut. Bila menggunakan _user management_ dengan tipe _fixed_, maka hanya ada satu _role_ yang bisa dipilih. Bila menggunakan _user management_ dengan tipe _simple_, maka hanya _role_ dengan nama yang sama dengan nama _user_ yang dipilih (tidak bisa diubah).

![User Role](/images/versi-1.2/userRole-V1.2.svg)

### Image Gallery

_Image gallery_ digunakan untuk mengelola _image_. Sebuah _image_ dalam _image gallery_ bisa terdiri atas 3 buah gambar, masing-masing dengan _extension_ **bitmap**, **png**, **ico**.

![Add Image](/images/versi-1.2/addImage-V1.2.svg)

#### Add

Untuk menambahkan sebuah image.

#### Edit

Untuk mengubah image.

#### Delete

Untuk menghapus image.

#### Load Image

Digunakan untuk menambahkan sebuah folder (tidak rekursif ke sub-sub foldernya) ke dalam _image gallery_. Secara otomatis gambar akan bertambah sesuai dengan nama dan tipenya. Bila gambar sudah ada maka akan muncul pertanyaan **skip**, **replace**, **skip all**, **replace all**, atau **cancel**.

![Image Gallery](/images/versi-1.2/imageGallery-V1.2.svg)

### Membuat Lookup

Lookup digunakan untuk mendefinisikan lookup

#### Lookup Editor

Ketika _user_ menambah atau mengubah _lookup_ maka akan ditampilkan _lookup editor_ yang didalamnya terdiri atas sejumlah _field_.

- **Lookup Name**, nama lookup.
- **Connection**, Koneksi yang digunakan.
- **Lookup Type** (Standard, Custom Values, Dataset, Dataset Clone, DataView)
    - **Standard** digunakan untuk mendefinisikan lookup dimana perintah sql didefinisikan disini. Command text akan berisi perintah SQL tersebut.

    ![Lookup Standard](/images/versi-1.2/lookupStandard-V1.2.svg)

    - **Custom Values** digunakan untuk mendefinisikan lookup yang didefinisikan sebagai daftar pasangan key dan value, dimana setiap pasangan akan dipisahkan dengan titik koma ";". Command text akan berisi pasangan tersebut. Contoh : 1=SATU;2=DUA. Dataset yang menggunakan custom values bisa bertipe integer atau numerik, selama isi  dari pasangan key dan value valid.

    ![Lookup Custom Value](/images/versi-1.2/lookupCustomValue-V1.2.svg)

    - **Dataset** digunakan untuk mendefinisikan lookup yang informasi query dan field-fieldnya berasal dari dataset tertentu. Dataset mana yang akan digunakan didefinisikan dalam Source Dataset

    ![Lookup Dataset](/images/versi-1.2/lookupDataset-V1.2.svg)

    - **Dataset Clone** adalah definisi lookup dimana sumbernya adalah dataset lain dalam dataview yang sedang diedit (misalnya pada kasus master-detail). Dataset mana yang akan digunakan didefinisikan dalam Source Dataset. Bila menggunakan lookup jenis ini maka Source Dataset harus terdefinisi dalam DataView.
    - **Dataview** adalah definisi lookup dimana sumbernya adalah dataview, sehingga bisa didefinisikan pencarian dll. Nama DataView ditulis dalam Source DataView.

    ![Lookup Dataview](/images/versi-1.2/lookupDataview-V1.2.svg)

- **Key Fields** berisi daftar field yang akan menjadi key (di-copy nilainya dari lookup ke dalam dataset yang sedang di-edit). KeyFields bisa lebih dari 1.
- **Display Fields** adalah field-field yang akan ditampilkan ketika dropdown list muncul. Display Fields bisa lebih dari 1.
- **Display Index** adalah indeks dari Display Fields yang akan ditampilkan ketika dropdown list tidak muncul.
- **Filter Fields** digunakan untuk melakukan filter lookup dari dataset yang diedit. Property ini berisi dafar field yang akan di-filter dan dipisahkan dengan titik koma (;). Jadi bila filter field diisi maka isi lookup akan di-filter dengan dari dataset yang diedit dengan nama yang sama.
- **Description** digunakan untuk dokumentasi.

#### Preview

Lookup Preview digunakan untuk menampilkan data lookup.

![Lookup Preview](/images/versi-1.2/lookupPreview-V1.2.svg)

#### Add

Digunakan untuk menambah lookup.

#### Edit

Digunakan untuk mengubah lookup

#### Delete

Digunakan untuk menghapus lookup

## Bekerja Dengan Data Set

Dataset akan menghasilkan _recordset_ dari _SQL Select_ atau dari _store procedure_ (yang menghasilkan _recordset_). Dataset bisa _updateable_ ke hanya satu _dataset_. Satu perintah SQL dalam satu _dataset_ hanya dapat dilakukan terhadap satu _database_.

### Dataset Editor

Dataset editor digunakan untuk mengedit _dataset_.

![Dataset Editor](/images/versi-1.2/datasetEditor2-V1.2.svg)

- **Dataset Name**, merupakan nama _dataset_

- **Dataset Title**, judul _(title)_ _dataset_ yang akan banyak digunakan dalam _user interface_.

- **Connection**, adalah nama koneksi untuk _query_ dalam _dataset_

- **Command Type**, untuk menentukan _Command Text_ akan digunakan sebagai apa.
    - **Query** &rarr; _Command Text_ berisi perintah _Select SQL_
    - **Table** &rarr; _Command Text_ berisi Nama Tabel
    - **Store Procedure** &rarr; _Command Text_ berisi perintah untuk menjalankan _store procedure_, bagaimana perintahnya akan tergantung dalam RDBMS yang digunakan.

- **Update Mode**, untuk menentukan cara melakukan _update_
    - **All Fields** &rarr; Berarti seluruh _field_ akan dijadikan dasar pencarian untuk mengupdate (dalam bagian _where_ dari perintah _update_ yang dijalankan)
    - **Changed Fields** &rarr; Berarti hanya _field_ yang berubah saja yang akan dijadikan dasar pencarian.
    - **Key Fields** &rarr; Berarti hanya _field_ yang merupakan _key_ saja yang akan dijadikan dasar pencarian.

- **Packed Record**, untuk menentukan jumlah _record_ yang di-_fetch_. Nilai **n** berarti ada **n** record yang akan di-_fetch_. Nilai **0** berarti tidak mengembalikan record Nilai **-1** berarti seluruh record akan diambil. Untuk jumlah **n > 0**, misalnya **10**, maka **10** _record_ akan di-_fetch_. Bila control (misalnya _Grid_) ternyata memerlukan **20** record pada saat pertama, maka secara otomatis **20** _record_ akan di-_fetch_. Dan selanjutnya bila control tersebut memerlukan _record_ berikutnya, maka secara otomatis _record_ berikutnya akan di-_fetch_.

- **Max Blob Size**, digunakan untuk menentukan berapa ukuran maksimum _blob_ yang akan diambil. Bila **-1** maka berapapun besar _blob_ akan ditarik. Bila **n** maka _blob_ sebesar lebih dari **n** KB tidak akan diambil.

- **Fetch Blobs On Demand**
    - Bila **True**, maka _blob_ hanya akan di-_fetch_ ketika diperlukan saja. Pada saat record di-_fetch_, _blob_ belum diambil.

- **Fetch Details On Demand**
    - Bila **True**, maka data detail (dalam __dataset field__) akan diambil ketika diperlukan saja. Pada saat record di-_fetch_, _dataset field_ belum diambil.

- **Command Text**, digunakan untuk mendefinisikan perintah sesuai definisi _Command Type_.

- **Field Tab**, digunakan untuk menampilkan daftar _field_ yang ada

- **Parameter Tab**, digunakan untuk menampilkan daftar _parameter_

- **Index & Group Tab**, digunakan untuk menampilkan daftar _Index_ dan _Group_ untuk mengurutkan dan melakukan _grouping_ terhadap _dataset_.

- **Aggregate Tab**, digunakan untuk menampilkan daftar _aggregate_, yaitu suatu nilai yang didapat dari seluruh _record_ dalam _dataset_ atau sebagian record sesuai _grouping_-nya.

- **Constraint Tab**, digunakan untuk menampilkan daftar _Contraint_, yaitu suatu pembatasan nilai yang akan dimasukkan dalam _dataset_. _Constraint_ akan diperiksa persis sebelum _post_. Bila ada yang tidak sesuai maka _error message_ muncul dan _post_ akan dibatalkan.

- **Description**, digunakan untuk dokumentasi dari _dataset_.

### Field Tab

![Field Tab](/images/versi-1.2/fieldTab-V1.2.svg)

- **Add**, digunakan untuk menambahkan _field_

- **Edit**, digunakan untuk mengedit _field_

- **Delete**, digunakan untuk menghapus _field_

- **Generate All Fields**, digunakan untuk menggenerate semua _field_ yang dihasilkan oleh perintah SQL dalam Command Text. Fungsi ini akan melakukan sinkronisasi, dimana _field-field_ yang ada tetap dipertahankan, _field_ yang tidak diperlukan akan dihapus dan _field_ yang belum ada akan ditambahkan.

- **Remove All Fields**, digunakan untuk menghapus semua _field_ dalam daftar.

- **Set Key Fields**, digunakan untuk mendefinisikan _key field_. Caranya dengan memilih beberapa _field_ dan menekan tombol ini. Semua _field_ yang dipilih akan menjadi _key field_ sedangkan field lainnya tidak.

![Set Key Fields](/images/versi-1.2/setKeyFields-V1.2.svg)

- **Set Category**, digunakan untuk mengisi category untuk semua _field_ yang dipilih.

- **Create Lookup Field**, digunakan untuk membuat _field_ baru sebagai lookup dengan _field_ yang dipilih menjadi _key_.

- **Up**, digunakan untuk menggeser _field_ ke atas

- **Down**, digunakan untuk menggeser _field_ ke bawah

- **Reset Order**, digunakan untuk mengembalikan _dataset_ seperti urutan dalam _command text_.

### Field Editor

Field Editor digunakan untuk mendefinisikan _field_.

![Field Editor](/images/versi-1.2/fieldEditor-V1.2.svg)

- **Main**

    ![Field Editor Main](/images/versi-1.2/fieldEditor-Main-V1.2.svg)
    - **Dataset**, digunakan untuk menampilkan _dataset_ yang merupakan induk dari _field_ tersebut (Display Only).
    - **Field Name**, nama _field_.
    - **Field Type**, tipe _data field_.
    - **Field Size**, ukuran _field_.
    - **Required**. Bila _true_, berarti _field_ ini harus diisi.
    - **Can Sort**. Bila _true_, berarti _field_ ini bisa di-_sort_.
    - **Can Filter**. Bila _true_, berarti _field_ ini bisa di-_filter_.
- **Appearance**

    ![Field Editor Appearance](/images/versi-1.2/fieldEditor-Appearance-V1.2.svg)
    - **Field Caption**, adalah judul _field_ dalam Grid.
    - **Hint**, digunakan untuk _hint_.
    - **Display Format**, digunakan untuk mendefinisikan _format_ tampilan.
    - **Display Width**, digunakan untuk menentukan lebar tampilan dalam satuan karakter.
    - **Display Height**, digunakan untuk menentukan tinggi tampilan dalam satuan _pixel_.
    - **Alignment**, digunakan untuk menentukan _alignment_ data dalam komponen visual.
    - **Title Alignment**, digunakan untuk menentukan _alignment_ dalam Grid.
- **Input Control**

    ![Field Editor Input Control](/images/versi-1.2/fieldEditor-InputControl-V1.2.svg)
    - **Control Type**, digunakan untuk mendefinisikan jenis kontrol untuk input data. Default berarti input kontrol yang digunakan akan disesuaikan dengan tipe data.
    - **New Line**, untuk menentukan apakah control tersebut akan diletakkan di baris baru atau tidak.
    - **Category**, digunakan untuk mendefinisikan pengelompokan _field_ dalam _form entry_.
    - **Label Caption**, digunakan untuk mendefinisikan _caption_ yang muncul untuk _field_ ini dalam _form entry_.
    - **Label Width**, digunakan untuk mendefinisikan lebar label. Nilai 0 berarti akan diatur oleh aplikasi.
    - **Edit Format**, digunakan untuk mendefinisikan format tampilan data ketika data akan diinput.
    - **Edit Mask**, digunakan untuk _mask data_ pada saat data akan diinput. Lihat _mask_-nya Delphi.
    - **Char Case**, untuk mendefinisikan apakah karakter secara otomatis diubah menjadi huruf besar (UPPERCASE), atau huruf kecil (LOWERCASE) atau tanpa perubahan (DEFAULT).
- **Enabled**    
    - **Enabled on Browse**, berati pada saat _form entry/grid_ dalam mode _browse_ maka _field_ ini akan _disabled_ atau tidak.
    - **Enabled on Insert**, berarti pada saat _form entry/grid_ dalam mode _insert_ maka _field_ ini akan _disabled_ atau tidak.
    - **Enabled on Edit**, berarti pada saat _form entry/grid_ dalam mode _edit_ maka field ini akan _disabled_ atau tidak.
- **Visible**

    ![Field Editor Visible](/images/versi-1.2/fieldEditor-Visible-V1.2.svg)
    - **Visible on Browse**, berarti _field_ ini akan dimunculkan atau tidak pada saat _form entry/grid_ dalam mode _browse_.
    - **Visible on Insert**, berarti _field_ ini akan dimunculkan atau tidak pada saat _form entry/grid_ dalam mode _insert_.
    - **Visible on Edit**, berarti _field_ ini akan dimunculkan atau tidak pada saat _form entry/grid_ dalam mode _edit_.
- **Update**
    - **Can Modify**, berarti _field_ ini bisa diubah atau tidak (_read only_ atau tidak).
    - **Updateable**, berarti _field_ ini akan di-_update_ ke _database_ atau tidak.
    - **Key Field**, untuk mendefinisikan apakah _field_ ini _key_ atau tidak untuk proses _update_.
- **Constraint**     
    Constraint digunakan untuk mendefinisikan pembatasan terhadap field di _level field_.
    - **Expression**, digunakan untuk mendefinisikan ekspresi yang akan membatasi _field_. 
    Ekspresi akan diperiksa pada saat fokus pindah dari _field_ ini.
    - **Error Message**, digunakan untuk mendefinisikan _message_ yang muncul bila _expression_ tidak dipenuhi.

    ![Field Editor Visible](/images/versi-1.2/fieldEditor-ErrorMessage-V1.2.svg)

- **Data Field**
    - **Lookup Source Type**, digunakan untuk mendefinisikan sumber _lookup_.
        - **None**, berarti _field_ ini tidak mengandung _lookup_.
        - **Lookup Definition**, berarti _lookup_ akan diambil dari definisi _lookup_.
        - **Custom Lookup value**, berarti _lookup_ akan dibentuk menggunakan daftar pasangan _key_ – _value_ yang dituliskan dalam _Lookup Values_
    - **Lookup Definition**, untuk menentukan definisi _lookup_ mana yang akan digunakan

    ![Field Editor Lookup Definition](/images/versi-1.2/fieldEditor-LookupDefinition-V1.2.svg)

    - **Update Fields**, digunakan untuk mendefinisikan _field_ apa saja dalam _dataset_ yang di-_entry_ yang akan diisi dari _dataset lookup_. Bila kosong maka hanya _key field_ saja yang akan di-_update_. Bila diisi maka akan ada pasangan _field_ yang menunjukkan _field_ mana yang akan diisi dan _field_ mana yang akan mengisikannya.
    - **Lookup Cache**, digunakan untuk mendefinisikan apakah hasil _lookup_ akan di-_cache_ atau tidak. Cocok digunakan bila data dalam _lookup_ jarang berubah.
    - **Lookup values**, digunakan bila tipe _lookup_ adalah _Custom Lookup value_, dan diisi dengan pasangan **key=value**, dimana setiap pasangan dipisahkan dengan titik koma ";".
    - **Default Value Type**, digunakan untuk mendefinisikan tipe _default_
    ![Field Editor DV](/images/versi-1.2/fieldEditor-DefaultValue-V1.2.svg)    
        - **NULL**, tanpa _default value_
        - **GENERATOR**, berarti nilai _default value_ akan diisi oleh suatu nilai unik dari _generator_ sistem.
        - **DATASET**, berarti _field_ ini akan diisi oleh nilai saat ini dari dataset yang disebutkan dan berada dalam __dataview__ dengan nama _field_ yang sama.
        - **SQLVALUE**, berarti _field_ ini akan diisi dengan nilai yang didefinisikan di SQL Value (Sebuah nilai tunggal dari SQL).
        - **First Lookup Value**, berarti _field_ ini akan diisi oleh nilai pertama dari _lookup_ bila _field_ ini punya definisi _lookup_.
        - **User Name**, _field_ ini akan diisi dengan nama _user name_ yang sedang _login_
        - **Role Name**, _field_ ini akan diisi dengan nama _role_ dari user yang sedang _login_
        - **Expression**, digunakan untuk mengisikan _field_ ini dengan suatu ekspresi sederhana.
        - **Script**, digunakan untuk mendefinisikan _default value_ dalam bentuk _script_ kode.
        - *Record No*, _field_ ini akan diisi dengan jumlah **record+1**.
    - **Execute On**, digunakan untuk mendefinisikan kapan _default value_ akan dijalankan.
        - **New**, pada saat _new record_
        - **Update**, pada saat _update_.
        - **New and Update**, pada _new record_ dan pada saat _update_
    - **Dataset**, untuk mendefinisikan _dataset_ apa yang akan digunakan sebagai _lookup_
    - **Default Value Expression**, digunakan untuk mendefinisikan ekspresi yang akan digunakan bila tipe _default value_ adalah _Expression_.
- **Calculated Field**
    - **Internal Calc**, bila _true_ maka _calculated field_ akan disimpan datanya dan dapat digunakan dalam _aggregate_. Bila _false_ _calculated field_ tidak akan disimpan datanya dan tidak dapat digunakan dalam _aggregate_, tetapi lebih cepat.
    - **Calculated Type**
        - **Script**, berarti _calculated_ yang dibuat akan menggunakan _script_
        - **Expression**, berarti _calculated_ yang dibuat akan menggunakan _expression._
    - **Calculate Script**
        - Berisi _script_ untuk _calculated field_
    - **Calculate Expression**
        - Berisi ekspresi untuk _calculated field_.   

### Parameter Tab

![Parameter Tab](/images/versi-1.2/parameterTab-V1.2.svg)

- **Add**, digunakan untuk menambahkan _parameter_.
- **Edit**, digunakan untuk mengubah _parameter_.
- **Delete**, digunakan untuk menghapus _parameter_.
- **Generate All Parameters**, digunakan untuk membentuk semua _parameter_ yang diperlukan.
- **Remove All Parameters**, digunakan untuk menghapus semua _parameter_ yang ada.

### Parameter Editor

![Parameter Editor](/images/versi-1.2/parameterEditor-V1.2.svg)

- **Parameter Name**, digunakan untuk mendefinisikan Nama Parameter.
- **Data Type**, digunakan untuk mendefinisikan tipe data untuk parameter.
- **Size**, digunakan untuk mendefinisikan ukuran parameter
- **Precision**, digunakan untuk mendefinisikan berapa jumlah digit yang digunakan dalam parameter untuk parameter bertipe numerik.
- **Numeric Scale**, digunakan untuk mendefinisikan berapa jumlah _digit_ di belakang koma yang digunakan dalam parameter yang bertipe numerik.
- **Value**, Nilai parameter, hanya digunakan dalam Builder.

### Index & Group
Digunakan untuk mengurutkan dan mengelompokkan **dataset**.

- **Add**, digunakan untuk menambah Index.
- **Edit**, digunakan untuk mengubah Index.
- **Delete**, digunakan untuk menghapus Index.
- **Free Grouping**, digunakan untuk mendefinisikan apakah dataset tersebut memiliki free grouping dimana pada saat preview user dapat menyusun group-nya sendiri.
- **Set Default Dataset Index**, digunakan untuk mendefinisikan bahwa index yang diselect akan menjadi default index.
- **Clear Default Dataset Index**, digunakan untuk mengosongkan Default index.
- **Default Index**, Tampilan yang menunjukkan index yang akan menjadi default index.
- **Index Editor**, digunakan untuk mendefinisikan Index
- **Index Name**, Nama Index
- **Index Title**, Judul Index
- **Grouping Level**, digunakan untuk mendefinisikan berapa tingkat grouping yang digunakan pada saat index tersebut aktif.
- **Field List**, daftar field yang dimiliki oleh dataset sehingga bisa dengan mudah di-addkan ke dalam Index Field List.
- **Index Field List**, daftar field yang digunakan dalam index
- **Up**, digunakan untuk menggeser field ke atas
- **Down**, digunakan untuk menggeser field ke bawah

### Aggregate
- **Add**, digunakan untuk menambah aggregate
- **Edit**, digunakan untuk mengubah aggregate
- **Delete**, digunakan untuk menghapus aggregate.
- **Aggregate Editor**, User interface yang dapat digunakan untuk mengubah aggregate.
- **Aggregate Name**
- **Apply To**
    - **Summary**, nilai aggreaget akan dihitung untuk seluruh record.
    - **Summary Group**, nilai aggregate akan dihitung untuk group dalam index tertentu.
    - **Summary Default Group**, nilai aggregate akan dihitung untuk group yang didefinisikan dengan menggunakan free grouping.
- **Dataset**, Nilai aggregate akan dihitung untuk seluruh record dan tidak dimunculkan dalam grid.
- **Expression**
    - **Field Name**, mendefinisikan nama field yang akan dihitung dalam aggregate
    - **Aggregate Function**, salah satu dari SUM, COUNT, MIN, MAX, AVG untu mendefinisikan function apa yang digunakan dalam menghitung nilai aggregate.
    - **Display Format**, digunakan untuk mendefinisikan format tampilan dari aggregate
    - **Display Column**, digunakan untuk mendefinisikan dimana letak aggregate akan ditampilkan dalam grid (dalam kolom yang mana).
    - **Expression**, ekspresi aggregat yang digunakan untuk mendefinisikan aggregate dataset. Misalnya SUM(FIELD1*100)+30.
    - **Index Name**, index Name hanya berfungsi untuk Summary Group dan Dataset yaitu index mana yang akan digunakan dalam aggregate.

### Constraint
Constraint digunakan untuk mendefinisikan batasan untuk suatu record dalam dataset. Constraint akan dieksekusi before post, bila gagal post akan dibatalkan.

- **Add**, digunakan untuk menambahkan Constraint.
- **Edit**, digunakan untuk mengubah Constraint.
- **Delete**, digunakan untuk menghapus Constraint.

### Constraint Editor
- **Constraint Name**, Nama Constraint
- **Expression**, Ekspresi untuk mendefinisikan Constraint.
- **Error Message**, Message yang muncul ketika constraint gagal.

## Bekerja Dengan Data Package

### DataView Editor

![DataView Editor](/images/versi-1.2/dataViewEditor-V1.2.svg)

- **Dataset**, Daftar Dataset yang ada dalam Dataview.
    - **Add**, Untuk menambahkan Dataset
    - **Remove**, Untuk membuang dataset dari dataview
    - **Up**, Untuk menggeser dataset ke atas
    - **Down**, Untuk menggeser dataset ke bawah
    - **Edit Dataset**, Untuk memanggil Dataset Editor
    - **Relation**, Untuk memanggil Relation Editor
- **Relation Editor**, digunakan untuk menghubungkan dua buah dataset, dimana salah satu akan berperan sebagai master dataset yang lainnya akan berperan sebagai detail dataset. Apa yang harus dilakukan oleh master dataset dan detail dataset tergantung relation type.
    - **Master Dataset**, Dataset yang berperan sebagai master.
    - **Detail Dataset**, Dataset yang berperan sebagai detail.
    - **Relation Type**, Tipe relasi yang akan menentukan peran master dan detail dataset.
    - **Param Substitution**, Detail dataset akan memiliki parameter yang disuplai dari master dataset. Dalam relasi jeins ini, mekanisme update dilakukan oleh masing-masing.
    - **List Detail**, Detail dataset akan memiliki parameter yang disuplai dari master dataset. Dalam relasi jenis ini, master tidak di-_update_, hanya detail yang di-_update_. Master bisa banyak tetapi detail tunggal untuk setiap master.
    - **Master Detail**, Detail dataset akan memiliki parameter yang disuplai dari master dataset. Dalam relasi jenis ini, detail akan menjadi bagian dari master yaitu sebagai _dataset field_. Master dan detail akan di-_update_ dalam satu _transaction_.
    - **Link**, Link adalah daftar _field_ yang menjadi penghubung antara _master_ dengan _detail_.
    - **Parameter Name**, Nama field yang merupakan parameter dari _detail dataset_
    - **Source Field Name**, Nama field yang dimiliki oleh _master dataset_
    - **Add**, Untuk menambahkan _link_
    - **Delete**, Untuk menghapus _link_
    - **Generate All Link**, Untuk menggenerate seluruh _link_ dimana nama parameter dari detail dataset diketemukan dalam _master dataset_.
    - **Remove All Link**, Digunakan untu menghapus semua link yang sudah didefinisikan.
- **Open Parameter Tab**, Daftar Open Parameter yang didefinisikan untuk _dataview_ tersebut. Untuk mengubah _open parameter_ digunakan Open Parameter Editor yang tampilannya sangat mirip dengan Field Editor. Sort dan Filter tidak ada. Update, yaitu Can Modify Updateable, Keyaq Field tidak digunakan.
    - **Add**
    - **Edit**
    - **Delete**
- **Published Field**, _published field_ yang di-_published_ keluar. Keguanaannya bisa berbagai macam, misalnya untuk _lookup_ dengan tipe DataView, atau untuk input bagi DataView Lain.
- **Published Field Tab**
    - **Add**
    - **Delete**
    - **Generate All Fields**
    - **Remove All Fields**
- **Published Field Editor**
    - **Dataset Name**, Nama _dataset_ yang akan digunakan
    - **Field Name**

## Merancang Form

### Form

![Form](/images/versi-1.2/form-V1.2.svg)

- **Add**, digunakan untuk menambahkan Form
- **Edit**, digunakan untuk melakukan perubahan Form
- **Delete**, digunakan untuk menghapus Form
- **Design** , digunakan untuk merancang bagaimana sebuah form dipresentasikan.
- **Preview**, digunakan untuk menampilkan Form
- **Close**, digunakan untuk menutup jendela Form.

![Form](/images/versi-1.2/formForm-V1.2.svg)

### Desain

![Form Desain](/images/versi-1.2/formDesign-V1.2.svg)

![Form Desain 2](/images/versi-1.2/formDesign2-V1.2.svg)

- **Form Header**
    - **Form Title** , Pemberian Judul Form
    - **Form Icon**, Untuk menampilkan icon pada Form

    ![Form Header](/images/versi-1.2/formHeader-V1.2.svg)

- **Form Footer**
    - **Additional Buttons**

        Untuk Menambahkan _button_ pada form, caranya :

        1. Pada Menu Form, Pilih Form yg akan ditambahkan button (dari grid daftar form yg ada).

        2. Klik tombol "Design"

        3. Lalu Klik tombol "Additional Buttons" (ada disebelah kiri tengah, pada kategori form footer)
        
        4. Klik tombol "Add" dan Isi Caption- nya. pilihan "From Left" jika di-_chek_, akan membuat Button ditempatkan disebelah kiri, jika tidak _button_ akan ditempatkan di sebelah kanan.

        ![Form Footer](/images/versi-1.2/formFooter-Button-V1.2.svg)
        
        5. Pada Group "On Execute", pilih salah satu dari pilihan yg ada. Ada 5 pilihan yg tersedia : Action, Data Package Batch Process, Data Package Command, Data Package Methode dan Script.

        Cara Penambahan Button Action Pada Form.

        Button bisa diisi dengan 3 macam Action, yaitu : Action Standar, Batch Proses, Command, dan Script.

        1. **Batch Proses**

        Digunakan untuk proses insert atau update sejumlah data ke tabel. Dimana data yg akan diinsertkan tsb berasal dari suatu DataSet, dengan syarat nama-nama field di DataSet itu ada juga di Tabel (DataSet) tujuan.

        2. **Command**

        Digunakan untuk mengeksekusi "Command". Misal Ada Command Untuk Menghapus Data dari Tabel X, maka _button_ yg diisi Command ini jika di-_click_ akanmengeksekusi _command_ tsb, yakni menghapus Data dari Tabel X. Command bisa mempunyai parameter, yg akan diisi oleh DataSet atau Parameter dari DataView.

        3. **Script**

        Button yg berisi _script_ akan mengeksekusi _script_. Misal Script berisi 1 baris _code_, **"ShowAppMessage('Hello Word!')";** Perhatikan apa yg terjadi jika button yg berisi script ini di-_click_.

        ![Form Script](/images/versi-1.2/formScript-V1.2.svg)

        ![Form Script](/images/versi-1.2/formScript2-V1.2.svg)

## Merancang Report

### Bekerja Dengan Report

![Report](/images/versi-1.2/report-V1.2.svg)

- **Add**, digunakan untuk menambah Report
- **Edit**, digunakan untuk merubah Report
- **Delete**, digunakan untuk menghapus Report

![Report Def](/images/versi-1.2/reportDef-V1.2.svg)

- **Report Name**, nama _report_ yg di gunakan
- **Report Title**, Judul (title) _report_ yg digunakan
- **Report Type**, Tipe Report yg di gunakan ada dua pilihan yaitu **Simple Text Report** dan **Fast Report**
- **Data Package**, Dataview yg di gunakan
- **Design**, digunakan untuk mendesain _report_.

    ![Report Design](/images/versi-1.2/reportDesign-V1.2.svg)

    Langkah-langkah untuk mendesain _report_.

    - klik menu **Report** &rarr; **Data** atau melalui klik ganda Data Tab pada **Data Tree**
    
    ![Report Design 1](/images/versi-1.2/reportDesign_1-V1.2.svg)
    
    - Pilih **Select Datasets**

    ![Report Design 2](/images/versi-1.2/reportDesign_2-V1.2.svg)

    - Klik **Insert Band** kemudian pilih **Page Header** untuk memberikan judul pada halaman _report_

    ![Report Design 3](/images/versi-1.2/reportDesign_3-V1.2.svg)

    - Kemudian **Insert Band** lagi pilih **Master Data**

    ![Report Design 4 1](/images/versi-1.2/reportDesign_4_1-V1.2.svg)

    ![Report Design 4 2](/images/versi-1.2/reportDesign_4_2-V1.2.svg)

    ![Report Design 4 3](/images/versi-1.2/reportDesign_4_3-V1.2.svg)

    ![Report Design 4 4](/images/versi-1.2/reportDesign_4_4-V1.2.svg)

    ![Report Design 4 5](/images/versi-1.2/reportDesign_4_5-V1.2.svg)

    ![Report Design 4 6](/images/versi-1.2/reportDesign_4_6-V1.2.svg)

    ![Report Design 4 7](/images/versi-1.2/reportDesign_4_7-V1.2.svg)

## Running Aplikasi

Aplikasi yang telah dibuat menggunakan Epigoni dapat dijalankan melalui tombol **Run Aplication** yang terletak
pada **Tool Bar**.

![Run App](/images/versi-1.2/runApp-V1.2.svg)

Form Aplikasi akan selalu ditampilkan setiap aplikasi dijalankan.

![Login App](/images/versi-1.2/loginApp-V1.2.svg)