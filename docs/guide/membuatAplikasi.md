---
sidebarDepth: 3
---

# Membuat Aplikasi

::: danger Catatan
Dokumentasi **Epigoni** versi 1.5.5.1 ini masih dalam proses penyesuaian. Untuk dokumentasi **Epigoni** versi sebelumnya, lihat di halaman [berikut](/guide/membuatAplikasi-Versi-1.2.md).
:::

## Membuat Aplikasi Baru

![Tombol Create New App](/images/tombolCreateNewApp.svg)

Setelah tampil form dialog **Create New Application**, isi dengan informasi yang diperlukan. Proses ini akan membentuk sebuah _file project_ Epigoni (_default_-nya berekstensi **.epf**). Proses ini juga akan membuat dan/atau menyiapkan _database_ untuk definisi aplikasi.

![Form Create New App](/images/formCreateNewApp.svg)

Data yang harus diisikan :

### Application

- _Application ID_, diisi dengan kode aplikasi.
- _Description_, diisi dengan deskripsi aplikasi, akan tampil sebagai _caption_ dari _window_ utama aplikasi.
- _Title_, diisi dengan judul aplikasi, akan tampil pada _form login_ aplikasi.
- _Sub Title_, diisi dengan sub judul aplikasi, akan tampil pada _form login_ aplikasi sebagai sub judul.

### User Management

- _User Management Type_, diisi dengan salah satu pilihan yang tersedia:
  - _Simple_, setiap _user_ dapat didefinisikan hak akses-nya terhadap menu aplikasi
  - _Single Role_, setiap _role_ dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap _user_ dapat di-assign ke satu atau lebih _role_, tetapi pada saat login akan ditanya role mana yang akan digunakan.
  - _Fixed Role_, setiap _role_ dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap _user_ hanya dapat di-assign ke sebuah _role_ saja.
  - _Mixed Role_, setiap _role_ dapat didefinisikan hak akses-nya terhadap menu aplikasi. Setiap _user_ bisa di-assign ke satu atau lebih _role_. Hak akses user terhadap menu aplikasi adalah gabungan dari hak akses semua _role_ yang di-_assign_ kepada _user_ tersebut.
- _Administrator Password_, diisi dengan _password_ untuk _user ADMINISTRATOR_. Ketikkan _password_ tersebut dua kali sebagai konfirmasi. _Password_ bersifat _case-sensitive_.
- _Developer Password_, diisi dengna _password_ untuk _user DEVELOPER_. Ketikkan _password_ tersebut dua kali sebagai konfirmasi. _Password_ bersifat _case-sensitive_.

### Primary Database

- _Database Type_, diisi dengan jenis RDBMS yang digunakan untuk menyimpan definisi aplikasi.
- _Host Name_, diisi dengan nama host atau nama komputer, misalnya _localhost_ atau _IP Address_ yang telah ditetapkan.
- _Database (Database Metadata)_, nama _database_ atau _alias_-nya yang akan digunakan sebagai _database_ definisi aplikasi. Buat terlebih dahulu _database_ kosong dengan nama apa saja sesuai keperluan dan dengan ekstensi **.emd** (_lowercase_) atau **.EMD** (_uppercase_) misalnya **namila.emd**. Kemudian gunakan tombol _Browse_ sebelah kanan _edit box_ untuk memilih _file database_ yang telah dibuat.

> Catatan: **.emd** (Epigoni Metadata)

> Untuk membuat database (firebird) baru, ikuti langkah [berikut](https://firebirdsql.org/manual/isql-create-database.html), atau bisa menggunakan aplikasi pihak ketiga seperti [IBExpert](https://www.ibexpert.net/ibe/), [FlameRobin](http://www.flamerobin.org/), [DBeaver](https://dbeaver.io/), dan sebagainya.

![Pop-Up Save As](/images/popUpSaveAs.svg)

- _User Name_, diisi dengan nama _user_ untuk _login_ ke _database_.
- _Password_, diisi dengan _password_ untuk _login_ ke _database_.
- Tombol _Advanced_, untuk melakukan pengaturan konfigurasi koneksi ke _database_ secara manual atau lebih lanjut.

![Advanced Parameters](/images/advancedParameters.svg)

Jika _database_ definisi aplikasi sudah tersedia, Anda bisa mencoba tes koneksi dengan menggunakan
tombol _Test Connection_.

![Tombol Test](/images/tombolTest.svg)

Jika tes koneksi berhasil, maka akan muncul dialog seperti berikut.

![Connection Success](/images/connSuccess.svg)

### Project

- _Project File Name_, diisi dengan nama _file project_ yang akan dibuat. Jika Anda menggunakan tombol _Browse_ pada _edit box Database (metadata)_, maka secara otomatis nama file _project_-nya akan terisi dengan nama dan lokasi yang sama dengan nama _file database_ definisi aplikasi, hanya dengan ekstensi yang berbeda yaitu **.epf**.

![epf](/images/projectEpf.svg)

Setelah semua informasi yang diperlukan telah diisi, klik tombol **OK**. Epigoni akan membuat _file project_ dari aplikasi serta membentuk _database_ definisi aplikasi. Setelah selesai, akan tampil aplikasi yang telah dibuat pada **Epigoni Application Portal**, seperti gambar berikut.

![List App.](/images/listApp.svg)

~~Proses pembuatan aplikasi baru telah selesai. Anda bisa memulai pendefinisian aplikasi.~~

## Register Application

Pada **Epigoni Application Portal**, klik tombol **Register Application**

![Button Reg. App.](/images/btnRegApp.svg)

Pilih _file_ ".epf" pada direktori komputer, kemudian klik tombol **Open**.

![Open .epf](/images/openEpf.svg)

Aplikasi sudah terdaftar pada **Epigoni Application Portal**

![Chinook App](/images/contoh-chinook-app.png)

Klik kanan pada aplikasi, kemudian klik menu **Develop**.

![Button Develop](/images/btnDevelop.png)

Lakukan proses login dengan **User Name**: `DEVELOPER` dan **Password**: `dev`.

![Form Login](/images/formLogin.png)

## Menyiapkan Database

### Membuat Koneksi Database

Sebelum membuat model data, Anda harus membuat koneksi ke _database_ yang akan diakses oleh aplikasi. Sebuah proyek aplikasi Epigoni baru sudah memiliki satu buah koneksi _database_, yaitu koneksi ke _database_ definisi aplikasi, bernama **DEFAULT**. Koneksi _DEFAULT_ tidak ada dalam daftar koneksi, tetapi dapat digunakan.

Untuk melihat daftar koneksi _database_ yang ada, pada tab **Metadata**, klik menu **Connection**.

![Tombol Connections](/images/btn-con.png)

![Connections](/images/app-connections.png)

Untuk menambahkan koneksi ke _database_ klik tombol **Add**. Beri nama koneksi pada _edit box_ **Connection Name** dan pilih **Connection Type** dengan jenis **RDBMS** dari _database_ yang ingin diakses.

Lengkapi parameter dari koneksi seperlunya. Misal isi _Database_ dengan nama _database_ atau alias dari _database_ yang akan diakses.

![Connection Editor](/images/app-conn-editor.png)

Lakukan test koneksi dengan menekan tombol **Test Connection**, sebelum menekan tombol **OK**.

### Membuat Obyek-Obyek Database

Pembuatan obyek-obyek _database_ seperti membuat _table_, _trigger_, _stored procedure_ dll, dapat dilakukan dengan menggunakan _software_ alat bantu yang disediakan oleh masing-masing **RDBMS**. Epigoni sendiri akan dilengkapi dengan alat bantu untuk membuat obyek-obyek _database_ khusus untuk Firebird.

## Membuat Model Database

### Membuat Data Set

Untuk melihat daftar definisi **Data Set**, pada tab **Metadata**, klik tombol **Dataset**.

![Tombol Datasets](/images/btn-dts.png)

![Datasets](/images/app-datasets.png)

Untuk membuat definisi _data set_ baru, klik tombol **Add** untuk menampilkan _data set editor_.

![Dataset Emp.](/images/dst-emp.png)

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
- **Field**, berisi daftar field yang dibentuk oleh Command Text. Daftar field harus dibentuk, baik secara manual satu demi satu atau secara otomatis lewat tombol **Generate All Fields** yang telah disediakan. Anda bisa mengeset attribut dari setiap field yang didefinisikan.

![Tombol Generate All Fileds](/images/btn-gen-all-fields.png)

- **Parameter**, berisi daftar dari parameter yang dibutuhkan **Command Text**, akan dijelaskan kemudian.
- **Index & Group**, berisi definisi pengurutan dan pengelompokkan data, akan dijelaskan kemudian.
- **Aggregate**, berisi definisi fungsi-fungsi aggregate yang ingin dikalkulasi dari data, akan dijelaskan kemudian.
- **Constraint**, berisi daftar batasan-batasan nilai yang dapat dimasukkan ke dalam sebuh _field_, akan dijelaskan kemudian.
- **Event**, untuk menuliskan kode _script_ yang akan dieksekusi ketika event tertentu dari data set terjadi, akan dijelaskan kemudian.
- **Data Exchanges**
- **Description**, diisi dengan deskripsi dari _data set_ yang bersangkutan untuk kepentingan dokumentasi.

Setelah _data set_ didefinisikan Anda dapat melihat _preview_ dari _data set_ tersebut dengan meng-klik tombol **Preview** atau klik tombol **Run** jika hanya ingin mengeksekusi _Command Text_-nya saja.

Tampilan _Preview_

![Dataset Preview](/images/dataset-preview.png)

Tampilan _Run_

![Dataset Run](/images/dataset-run.png)

### Membuat Data Package

Untuk melihat daftar definisi _Data Package_, pada tab **Metadata**, klik menu **Data Package**.

![Tombol Data Packages](/images/btn-dat-pckg.png)

![Data Packages](/images/app-data-packages.png)

Untuk membuat definisi Data Package baru, klik tombol **Add**, kemudia isi nama _Data Package_ pada form muncul, kemudian klik tomol **OK**.

![Create Data Package ](/images/create-data-package.png)

Setelah nama Data Package baru telah terbentuk, kemudian pilih dan klik tombol **Edit** atau _double click_ pada Data Package tersebut, akan kemudian akan tampil **Data Package Editor** seperti gambar di bawah.

![Data Package Editor](/images/data-package-editor.png)

Untuk menambahkan atau mendaftarkan **Dataset** ke **Data Package**, klik tombol **Add** pada tab **Members**, maka kemudian akan tampil form **Data Package Member** seperti berikut.

![Data Package Member](/images/data-package-member.png)

Klik tombol [...] pada _edit box_ **Dataset**, kemudian pilih _dataset_ yang dimaksud, kemudian klik tombol **OK** atau klik ganda pada _dataset_ yang dipilih.

![Select Dataset](/images/select-dataset.png)

Pastikan _edit box_ **Dataset** telah terisi dengan nama _dataset_ yang dipilih pada **Data Package Member**, klik tombol **OK**.

Kemudian klik tombol **Close** pada **Data Package Editor**.

:::tip
Disamping dengan cara di atas, untuk membuat **Data Package** dari **Dataset** yang telah dibuat, epigoni menyediakan juga cara yang lebih sederhana sebagai berikut:
:::

1. Masuk ke daftar definisi _dataset_
2. Sorot definisi _dataset_ yang akan dibuat definisi _data package_
3. Klik kanan pada definisi _dataset_ yang akan dibuat definisi _data package_

![Create Datapackage From Dataset](/images/create-datapackage-from-dataset.png)

4. Pilih salah satu menu yang muncul, misal: **Create Data Package**

![Menu Dataset Klik Kanan](/images/menu-dataset-klik-kanan.png)

5. Isikan nama untuk definisi Data Package yang sedang dibuat, tekan tombol OK

![Create Datapackage Base Name](/images/create-datapackage-base-name.png)

6. Proses membuat definisi Data Package sudah berhasil, tekan tombol OK

![Informasi Done](/images/dialog-done.png)

7. Untuk hasilnya bisa dilihat di daftar definisi Data Package.

![Hasil Datapackage](/images/list-data-package.png)

## Membuat Presentasi

### Membuat Form

Untuk melihat daftar definisi _Form_, pada tab _Metadata_, klik menu **Form**.

![Forms](/images/app-forms.png)

Untuk membuat definisi _form_ baru, klik tombol **Add** untuk menampilkan **Form Editor**.

![Add New Form](/images/add-new-form.png)

## Merancang Menu Aplikasi

### Membuat Action

Pembuatan action ini nantinya akan dihubungkan ke menu pada aplikasi untuk bisa dijalankan.

Untuk membuat Action ada 2 Cara, yaitu :

Cara pertama :

Jika _Dataset_ yang akan dibuat action sudah dibuat maka pada daftar _Dataset_, pilih _Dataset_ yang akan dibuat actionnya kemudian klik kanan, terus pilih **Create Data Package, Form and Action**.

![Create Action From Dataset](/images/create-action-from-dataset.png)

Cara kedua :

Jika _Data Package_ yang akan dibuat _action_ sudah dibuat maka pada daftar _Data Package_, pilih **Data Package** yang akan dibuat actionnya kemudian klik kanan, terus pilih **Create Form and Action**.

![Create Action From Data Package](/images/create-action-from-datapackage.png)

_Action_ yang telah berhasil dibuat bisa dilihat pada daftar _Action_

![Hasil Action](/images/result-create-action.png)

Pada daftar _Action_ ini dilengkapi dengan tombol **Execute** yang berfungsi untuk melihat hasil dari masing-masing _Action_ yang ada didaftar Action

### Membuat Menu

Untuk mendefinisikan menu pada aplikasi, Epigoni menyediakan beberapa jenis menu. Pada dasarnya menu aplikasi yang dibentuk ada dua tipe menu aplikasi yaitu menu berbasis ribbon dan menu tanpa ribbon. Epigoni menyediakan 3 buah jenis menu:

#### Ribbon Menu

Bila _ribbon menu_ ada isinya berarti aplikasi akan tampil dengan menu berbasis _Ribbon_. _Ribbon_
terdiri atas minimal 3 level, yaitu _Tab_, _Group_ dan _Menu_. Dua level pertama tidak dapat diisi dengan _action_,
melainkan membentuk _Tab_ dan _Group_. Level ke tiga dan selanjutnya (tidak terbatas) dapat diisi dengan _action_.

![Ribbon Menu](/images/ribbon-menu-example.png)

#### Tool Bar

Pada menu berbasis _ribbon_, menu akan tampil dalam _Quick Access Toolbar_. Pada menu tanpa _ribbon_,
_tool bar menu_ akan tampil sebagai _Tool Bar_ di bawah _Menu Bar_. _Level tree Tool Bar_ tidak dibatasi.

![Tool Bar Menu](/images/toolbar-menu-example.png)

#### Side Menu

Slide Menu adalah menu yang akan muncul disamping. _Level tree Side Menu_ dibatasi minimal dan maksimal 2.

![Side Menu](/images/side-menu-example.png)

#### Navigasi Menu

![Navigasi Menu](/images/navigasi-menu.png)

##### Add

Untuk menambahkan item menu yang sejajar (sibling). Data yang diisikan adalah _Caption_, _Hint_, _Action_, serta _Image_.

Untuk memilih _image_ lakukan klik-kanan pada area **Image** kemudian klik **Load**.

![Menu - Load Image](/images/menu-load-image.png)

::: tip
Bila **Caption** diisi dengan **"-"** , maka item menu akan menjadi separator.
:::

![Menu - Caption Strip](/images/menu-caption-separator.png)
