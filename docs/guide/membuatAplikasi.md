---
sidebarDepth: 3
---

# Membuat Aplikasi

> **Catatan**: Dokumentasi **Epigoni** versi terbaru masih dalam proses pengerjaan. Untuk **Epigoni versi 1.2** lihat di halam [berikut](/guide/membuatAplikasi-Versi-1.2.md).

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

## Menyiapkan Database

Sebelum membuat model data, Anda harus membuat koneksi ke database yang akan diakses oleh aplikasi. Sebuah proyek aplikasi Epigoni baru sudah memiliki satu buah koneksi database, yaitu koneksi ke database definisi aplikasi, bernama DEFAULT. Koneksi DEFAULT tidak ada dalam daftar koneksi, tetapi dapat digunakan.

Untuk melihat daftar koneksi database yang ada, pada tab Metadata, klik tombol Connection.

Untuk menambahkan koneksi ke database klik tombol Add. Beri nama koneksi pada edit box Connection Name dan pilih Connection Type dengan jenis RDBMS dari database yang ingin diakses.

Lengkapi parameter dari koneksi seperlunya. Misal isi Database dengan nama database atau alias dari database yang akan diakses, isi User_Name dan Password dengan nama user dan password untuk login ke database tersebut.

### Membuat Koneksi Database

Sebelum membuat model data, Anda harus membuat koneksi ke database yang akan diakses oleh aplikasi. Sebuah proyek aplikasi Epigoni baru sudah memiliki satu buah koneksi database, yaitu koneksi ke database definisi aplikasi, bernama DEFAULT. Koneksi DEFAULT tidak ada dalam daftar koneksi, tetapi dapat digunakan.

Untuk melihat daftar koneksi database yang ada, pada tab Metadata, klik tombol Connection.

Untuk menambahkan koneksi ke database klik tombol Add. Beri nama koneksi pada edit box Connection Name dan pilih Connection Type dengan jenis RDBMS dari database yang ingin diakses.

Lengkapi parameter dari koneksi seperlunya. Misal isi Database dengan nama database atau alias dari database yang akan diakses, isi User_Name dan Password dengan nama user dan password untuk login ke database tersebut.

Lakukan test koneksi dengan menekan tombol Test Connection, sebelum menekan tombol OK.

Tombol Edit digunakan untuk mengedit koneksi jika Anda ingin melakukan perubahan.

Tombol Delete digunakan untuk menghapus koneksi.

### ~~Membuat Database (khusus untuk Firebird)~~

### Membuat Obyek-Obyek Database

Pembuatan obyek-obyek database seperti membuat table, trigger, stored procedure dll, dapat dilakukan dengan menggunakan software alat bantu yang disediakan oleh masing-masing RDBMS. Epigoni sendiri akan dilengkapi dengan alat bantu untuk membuat obyek-obyek database khusus untuk Firebird.

## Membuat Model Database

### Membuat Data Set

Untuk melihat daftar definisi Data Set, pada tab Metadata, klik tombol Dataset.

Untuk membuat definisi data set baru, klik tombol Add untuk menampilkan data set editor.

Data yang diisikan:

- Dataset Name, diisi dengan nama dataset.
- Dataset Title, diisi dengan judul dataset.
- Connection, diisi dengan koneksi database yang akan diakses, dipilih dari daftar koneksi yang sudah dibuat.
- Command Type, diisi degan memilih salah satu jenis Command Type:
  - Query, Command Text diisi dengan perintah SQL Select.
  - Table, Command Text diisi dengan nama tabel.
  - Stored Procedure, Command Text diisi dengan perintah SQL Select yang mengandung selectable stored procedure.
- Update Mode, diisi dengan memilih salah satu mode update:
  - Key Fields, data set akan diupdate berdasarkan value awal dari satu atau lebih key field yang sebelumnya telah didefinisikan.
  - Change Fields, data set akan diupdate berdasarkan value awal dari field-field yang diubah nilainya oleh user pengguna aplikasi.
  - All Fields, data set akan diupdate berdasarkan value awal seluruh field dari data set.
  - Read Only, data set tidak akan diupdate.
- Update Table, diisi dengan nama tabel yang akan diupdate ketika data set diupdate.
- Packed Records, diisi dengan jumlah satuan record yang akan di-fetch dari database ketika data dibutuhkan. Jika jumlahnya -1 maka semua record akan di-fetch seluruhnya. Jika nilainya >0 maka ketika dibutuhkan, data di-fetch dengan satuan sebesar jumlah tersebut.
- Max Blob Size, diisi dengan ukuran maksimal field dengan tipe BLOB (Binary Large Object) dalam satuan KB. Jika nilainya -1, maka tidak ada batasan ukuran.
- Fetch Blobs On Demand, jika di cek, maka field BLOB yang ada pada data set tidak akan langsung di-fetch. Field tersebut hanya akan di-fetch jika diperlukan, misalnya ketika akan ditampilkan ke layar.
- Fetch Details On Demand, jika di cek, maka jika data set direlasikan dengan data set lain dengan tipe relasi Master-Detail, data yang berasal dari data set detail hanya akan di-fetch ketika diperlukan.

Ada definisi lain yang harus di-set yang berada pada tab-tab bagian bawah editor.

- Command Text, diisi sesuai dengan Command Type, seperti pada penjelasan di atas. Isi dari Command Text adalah inti dari definisi data set, mendeskripsikan data yang ingin dihasilkan. Command Type umumnya adalah berupa query, jadi Command Text lebih sering identik dengan perintah SQL Select. Di sebelah kanan editor Command Text terdapat alat bantu untuk membentuk SQL. Anda bisa mencoba men-drag salah satu tabel yang terdapat pada daftar tabel ke editor Command Text.
- Field, berisi daftar field yang dibentuk oleh Command Text. Daftar field harus dibentuk, baik secara manual satu demi satu atau secara otomatis lewat tombol Generate All Fields yang telah disediakan. Anda bisa mengeset attribut dari setiap field yang didefinisikan.
- Parameter, berisi daftar dari parameter yang dibutuhkan Command Text, akan dijelaskan kemudian.
- Index & Group, berisi definisi pengurutan dan pengelompokkan data, akan dijelaskan kemudian.
- Aggregate, berisi definisi fungsi-fungsi aggregate yang ingin dikalkulasi dari data, akan dijelaskan kemudian.
- Constraint, berisi daftar batasan-batasan nilai yang dapat dimasukkan ke dalam sebuh field, akan dijelaskan kemudian.
- Event, untuk menuliskan kode script yang akan dieksekusi ketika event tertentu dari data set terjadi, akan dijelaskan kemudian.
- Description, diisi dengan deskripsi dari data set yang bersangkutan untuk kepentingan dokumentasi.

Setelah data set didefinisikan Anda dapat melihat preview dari data set tersebut dengan meng-klik tombol Preview atau klik tombol Run jika hanya ingin mengeksekusi Command Text-nya saja.

Tampilan Preview

Tampilan Run

### Membuat Data Package

Untuk melihat daftar definisi Data Package, pada tab Metadata, klik tombol Data Package.

Untuk membuat definisi Data Package baru, klik tombol Add untuk menampilkan Data Package editor.

Disamping dengan cara diatas, untuk membuat Data Package dari Dataset yang telah dibuat, epigoni menyediakan juga cara yang lebih sederhana sebagai berikut:

1. Masuk daftar definisi Dataset
2. Sorot definisi Dataset yang akan dibuat definisi Data Package
3. Klik kanan pada definisi Dataset yang akan dibuat definisi Data Package
4. Pilih salah satu menu yang muncul, misal: Create Data Package
5. Isikan nama untuk definisi Data Package yang sedang dibuat, tekan tombol OK
6. Proses membuat definisi Data Package sudah berhasil, tekan tombol OK
7. Untuk hasilnya bisa dilihat di daftar definisi Data Package, pada tab Metadata, klik tombol Data Package.

## Membuat Presentasi

### Membuat Form

Untuk melihat daftar definisi Form, pada tab Metadata, klik menu Form.

Untuk membuat definisi form baru, klik tombol Add untuk menampilkan Form Editor.

### Membuat Report

Untuk melihat daftar definisi Report, pada tab Metadata, klik menu Report.

Untuk membuat definisi form baru, klik tombol Add untuk menampilkan Form Editor.

## Merancang Menu Aplikasi

### Membuat Action

Pembuatan action ini nantinya akan dihubungkan ke menu pada aplikasi untuk bisa dijalankan.

Untuk membuat Action ada 2 Cara, yaitu :

Cara pertama :

Jika Dataset yang akan dibuat action sudah dibuat maka pada daftar Dataset, pilih Dataset yang akan dibuat actionnya kemudian klik kanan, terus pilih Create Data Package, Form and Action.

Cara kedua :

Jika Data Package yang akan dibuat action sudah dibuat maka pada daftar Data Package, pilih Data Package yang akan dibuat actionnya kemudian klik kanan, terus pilih Create Form and Action.

Action yang telah berhasil dibuat bisa dilihat didaftar Action

Pada daftar Action ini dilengkapi dengan tombol Execute yang berfungsi untuk melihat hasil dari masing-masing Action yang ada didaftar Action

### Membuat Menu

Untuk mendefinisikan menu pada aplikasi, Epigoni menyediakan beberapa jenis menu. Pada dasarnya menu aplikasi yang dibentuk ada dua tipe menu aplikasi yaitu menu berbasis ribbon dan menu tanpa ribbon.

Epigoni menyediakan 4 buah jenis menu:

Ribbon Menu. Bila ribbon menu ada isinya berarti aplikasi akan tampil dengan menu berbasis Ribbon. Ribbon terdiri atas minimal 3 level, yaitu Tab, Group dan Menu. Dua level pertama tidak dapat diisi dengan action, melainkan membentuk Tab dan Group. Level ke tiga dan selanjutnya (tidak terbatas) dapat diisi dengan action.

Application Menu. Pada menu berbasis ribbon, application menu akan muncul sebagai application menu-nya ribbon. Pada menu tanpa ribbon, maka application menu akan menjadi Menu Bar utama dari aplikasi. Level tree Application menu tidak dibatasi.

Tool Bar. Pada menu berbasis ribbon, menu akan tampil dalam Quick Access Toolbar. Pada menu tanpa ribbon, tool bar menu akan tampil sebagai Tool Bar di bawah Menu Bar. Level tree Tool Bar tidak dibatasi.

Side Menu, adalah menu yang akan muncul disamping. Level tree Side Menu dibatasi minimal dan maksimal 2.

#### Add

Untuk menambahkan item menu yang sejajar (sibling).

Data yang diisikan adalah Caption, Hint, Action, serta Image. Untuk memilih image gunakan klik-kanan.

Bila Caption diisi dengan '-' , maka item menu akan menjadi separator.

#### Add Child

Untuk menambahkan item menu yang menjadi sub menu dari item menu yang dipilih.

#### Edit

Untuk mengubah item menu.

#### Delete

Untuk menghapus item menu.

#### Up

Untuk menggeser item menu ke atas dalam level yang sama.

#### Down

Untuk menggeser item menu ke bawah dalam level yang sama.
