---
sidebarDepth: 3
---

# Demo Pembuatan Aplikasi

::: danger Catatan
Konten pada halaman **Demo** ini sudah dapat diikuti tahapan-tahapannya, namun masih dalam penyempurnaan redaksi kalimat dan lain-lain.
:::

## Skenario

Kita akan membuat sebuah aplikasi sederhana untuk mendemonstrasikan secara singkat bagaimana bekerja dengan Epigoni.

## Prasyarat

- Sistem Operasi Windows, minimal Windows 7 ke atas
- <a href="https://firebirdsql.org/" target="_blank">Firebird</a>, minimal versi 2.5
- Epigoni
- _Database_ contoh (yang telah disiapkan)

## Persiapan

- Pastikan <a href="https://firebirdsql.org/" target="_blank">Firebird</a> telah terinstal dengan baik.
- Unduh file **Epigoni 1.5.rar** dan **Chinook_db.zip** pada tautan berikut:

> <a href="https://drive.google.com/open?id=0B601Tr2tSGr2T2Vyd3JhOTV4VEE" target="_blank">Epigoni 1.5</a>

- _Extract_ file `Epigoni 1.5.rar` yang telah diunduh.
- Buka folder `Epigoni 1.5`, kemudian jalankan `epigoni.exe` sehingga akan tampil Epigoni Application Portal seperti berikut:

  ![App Portal Blank](/images/appPortalArea.svg)

## Membuat Aplikasi Baru

- Klik menu Create New Application

  ![Button Create New App.](/images/btnCreateApp.svg)

- Isi form **Create New Application** seperti gambar berikut.

  ![Chinook - Create New App.](/images/chinook-create-new-app.png)

Klik **OK** untuk melanjutkan proses.

Aplikasi akan terbentuk pada portal Epigoni seperti berikut.

![Chinook - New App. Icon](/images/chinook-icon-portal.png)

- Klik pada aplikasi yang telah dibuat, kemudian _login_ sebagai **Developer**.

  ![Chinook - Login Dev](/images/chinook-login-dev.png)

  Kemudian akan masuk ke area **Metadata** seperti gambar berikut.

  ![Metadata Developer Mode](/images/metadata-dev-mode.png)

## Membuat koneksi

- Klik menu **Connections**

  ![Tombol Connections](/images/btn-con.png)

- Klik tombol **Add** kemudian isi konfigurasi _Connection_ seperti berikut

::: tip Konfigurasi

- Connection Name : `CHINNOOK`
- Connection tYPE : `Firebird`
- Parameters : Pada bagian _database_, isi dengan nama _path_ dan nama _file_ _database_ dengan lengkap.

  (Opsional) Anda bisa mengisi bagian _database_ dengan cara menuliskan aliasnya.
  :::

![Chinook Connection](/images/chinook-connection.png)

- Klik tombol **Test Connection** untuk memastikan koneksi ke _database_ sudah terhubung. Gambar di bawah adalah tampilan jika koneksi sudah terhubunng dengan benar.

  ![Connection Success](/images/connSuccess.svg)

## Membuat Dataset

- Klik menu **Datasets**

  ![Tombol Datasets](/images/btn-dts.png)

- Klik tombol **Add** dan isi form **Dataset** sebagai berikut:

  ::: tip Catatan
  Yang perlu diperhatikan pada gambar di bawah adalah bagian **Dataset** dan **Command Text**.

  **Dataset**:

  - Dataset Name : `QRY_EMPLOYEE`
  - Dataset Title : `Employee`
  - Connection : `CHINOOK`
  - Command Type : `QUERY`
  - Update Mode : `UPDATEABLE`
  - Update Table : `EMPLOYEE`

  **Command Text**:

  ```sql
  SELECT
    EMPLOYEEID, LASTNAME, FIRSTNAME, GENDER, TITLE, REPORTSTO, BIRTHDATE, HIREDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, PHONE, FAX, EMAIL, PHOTO
  FROM
    EMPLOYEE

  ```

  :::

  Berikut adalah gambaran lengkapnya.

  ![Chinook Datset Employee](/images/chinook-dataset-employee.png)

- Klik tab **Fields** kemudian klik tombol **Generate All Fields** untuk men-_generate_ semua _field_ yang telah didefiniskan pada bagian **Command Text**.

  ![Chinook Datset Employee - Generate](/images/chinook-dataset-employee-generate.png)

- Klik (pilih) _field_ **employeeid**, kemudian klik tombol **Set Key Field** untuk men-_set_ _field_ **employeeid** sebagi _primary key_.

  ![Chinook Datset Employee - Set Key Field](/images/chinook-dataset-set-key.png)

  - Kemudian klik **OK** pada dialog konfirmasi.

  ![Dialog Set Key Field](/images/dialog-set-key-fields.png)

- Klik tombol **Preview** dan klik **OK** untuk men-_save_ _dataset_ pada dialog konfirmasi yang muncul.

  ::: tip Catatan
  **Preview** dan **Save Dataset** bersifat opsional, anda bisa melewati tahapan ini dan memilih **Cancel** pada dialog konfirmasi.

  Pada mode **Preview** sudah bisa melakukan proses <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank">CRUD</a> (manipulasi data)
  :::

  ![Dialog Save Dataset](/images/dialog-save-dataset.png)

  Berikut adalah tampilan **Preview** _dataset_ **Employee**

  ![Preview Employee Dataset](/images/chinook-preview-employee-dataset.png)

- Sesuaikan **Field Caption** menjadi seperti berikut:

  ![Dataset Employee - Field Caption](/images/chinook-emp-field-caption.png)

- Klik **Label Caption**, kemudian klik **OK** pada dialog **Confirmation** seperti gambar di bawah.

  ![Dataset Employee - Label Caption](/images/chinook-emp-label-caption.png)

  ![Dialog Copy Form Field Captions](/images/dialog-copy-from-field-captions.png)

  Hasilnya akan tampak seperti gambar berikut:

  ![Dataset Employee - Field dan Label Caption](/images/chinook-emp-field-dan-label-caption.png)

- Klik tombol **Preview** dan klik **OK** untuk men-_save_ perubahan _dataset_ pada dialog konfirmasi yang muncul.

  Berikut adalah tampilan hasil **Field Caption** dan **Label Caption** yang telah disesuaikan.

  ![Dataset Employee - Preview Field Caption](/images/chinook-emp-preview-field-caption.png)

  ![Dataset Employee - Preview Label Caption](/images/chinook-emp-preview-label-caption.png)

- Pilih _field_ ID, Last Name, First Name, Gender, dan Birth Date, kemudian klik tombol **Set Category**.

  ![Dataset Employee - Pilih dan Set Category](/images/pilih-dan-set-category.png)

- Isikan "Personal" pada _edit box_ **Category ?** pada form **Set Category**, kemudian klik **OK**.

  ![Dataset Employee - Form Set Category - Personal](/images/form-set-category-personal.png)

  Hasilnya akan terlihat seperti berikut:

  ![Dataset Employee - Set Category - Personal](/images/set-category-personal.png)

- Lakukan **Preview**, untuk melihat perubahan yang terjdi pada form **Employee** seperti pada gambar berikut.

  ![Dataset Employee - Preview - Category - Personal](/images/chinook-dataset-preview-personal-category.png)

::: tip Opsional
Sesuaikan urutan _field_ **BIRTHDATE** dengan tombol **Up** atau **Down**.

![Dataset Employee - Sesuaikan Urutan Field](/images/chinook-sesuaikan-urutan-field.png)
:::

- Sesuaikan **Category** _field_ lain seperti gambar berikut.

  ![Dataset Employee - Set Field Category](/images/chinook-set-field-category.png)

- Pilih dan _edit_ field **PHONE**, kemudian pada **Field Editor** pilih **New Column** pada _combo box_ **Control Position**.

  ![Dataset Employee - Set Field New Column](/images/chinook-set-field-new-column.png)
  Lakukan **Preview** untuk melihat perubahan yang terjadi. Berikut adalah tampilan form **Employee**.

  ![Dataset Employee - New Column](/images/chinook-dataset-employee-new-column.png)

- Ubah ukuran **DW** (Draw Width) pada _field_ **PHONE**, **FAX**, dan **EMAIL** menjadi "20".

  ![Dataset Employee - DW - Contact Info 20](/images/chinook-dataset-employee-dw-contact-20.png)

  Lakukan **Preview** untuk melihat perubahan yang terjadi. Berikut adalah tampilan hasilnya.

  ![Dataset Employee - DW - Contact Info 20- preview](/images/chinook-dataset-employee-dw-contact-20-grid-preview.png)

  ![Dataset Employee - DW - Contact Info 20- preview](/images/chinook-dataset-employee-dw-contact-20-preview.png)

- Kosongkan **Label Caption** pada _field_ **PHOTO**

  ![Dataset Employee - Kosongkan Label Caption - Photo](/images/chinook-kosongkan-label-caption-photo.png)

  Berikut adalah hasil tampilan perubahan pada form **Employee**.

  ![Dataset Employee - Kosongkan Label Caption - Photo - Preview](/images/chinook-kosongkan-label-caption-photo-preview.png)

- Hilangkan tanda centang **VB** (Visible Browse) pada beberapa _field_, yaitu REPORTSTO, HIREDATE, ADDRESS, CITY, STATE, COUNTRY, POSTALCODE, dan PHOTO.

  ![Dataset Employee - Uncheck VB](/images/chinook-uncheck-vb.png)

  Jika di-_preview_ hasilnya adalah _field_ yang tidak diceklis akan tidak tampil pada _grid_ data Employee.

- Hilangkan tanda ceklis pada EE (Enable Edit) pada _field_ ID.

  ![Dataset Employee - Uncheck EE](/images/chinook-uncheck-ee.png)

  Hasilnya adalah _field_ atau _edit box_ ID tidak dapat diubah dan berwarna abu-abu seperti gambar berikut.

  ![Dataset Employee - Uncheck EE - Preview](/images/chinook-uncheck-ee-preview.png)

Pastikan perubahan pada _dataset_ telah tersimpan. Kemudian kita akan mel

## Generate Data Package, Form, dan Action

Klik menu **Data Packages**, kemudian pada modul **Datasets**, klik kanan pada _dataset_ yang telah kita buat yaitu QRY_EMPLOYEE, kemudian pilih **Create Data Package, Form, and Action**

![Steps - Create Data Package, Form, and Action](/images/chinook-steps-gen-dp-f-a.png)

Pada _dialog_ yang muncul klik tombol **OK**.

![Dialog - Create Data Package, Form, and Action](/images/chinook-dialog-create-datapackage-form-action.png)

::: tip Opsional
Anda bisa mengubah **Base Name** sesuai dengan keinginan.
:::

Tunggu hingga muncuk dialog **Information** seperti berikut.

![Dialog - Done](/images/dialog-done.png)

Data Package, Form, dan Action telah terbentuk. Untuk memastikannya, klik pada setiap menu dan lakukan **Preview** pada jika perlu.

![Menu - Data Package, Form, Actions](/images/menu-dp-f-a.png)

## Membuat Menu

Klik menu **Menus**

![Tombol Menus](/images/btn-menus.png)

klik tombol **Add**.

![Menus - Add](/images/chinook-menus-add.png)

Kemudian pada form **Menu** yang muncul, isi **Caption** dengan "Digital Media Store" atau sesuai dengan yang anda inginkan. Jika telah selesai, klik tombol **OK**.

![Menus - Add - Caption](/images/chinook-menu-caption.png)

Kemudian klik tombol **Add Child**.

![Menus - Add Child](/images/chinook-menus-add-child.png)

Pada form **Menu** yang muncul, isi **Caption** dengan "Store" atau sesuai dengan yang anda inginkan.

![Menus - Add Child 1 - Caption](/images/chinook-menu-caption-child-1.png)

Pastikan kursor berada pada _menu child_ **Store** kemudian klik tombol **Add Child**.

![Menus - Add Child 1](/images/chinook-menus-add-child-1.png)

Pada form **Menu** yang muncul, isi **Caption** dengan "Employee" atau sesuai dengan yang anda inginkan dan pada _combo box_ **Action** pilih **ACT_FRM_EMPLOYEE**, yaitu action yang telah dibuat sebelumnya.

![Menus - Add Child 2 - Caption](/images/chinook-menu-caption-child-2.png)

Masih pada form **Menu**, klik kanan pada daerah **Image** kemudian klik **Load**.

![Menus - Add Child 2 - Image](/images/chinook-menus-add-child-2-image.png)

Pada **Image Gallery** yang muncul pilih gambar yang diinginkan, kemudian klik **Ok**.

Berikut adalah tampilan akhir menu yang akan dibuat.

![Menus - Add Child 2 - End](/images/chinook-menu-child-2-end.png)

Klik **OK** jika semua perubahan telah selesai dilakukan.

::: tip Opsional
Kolom **Hint** dapat diisi jika diperlukan.
:::

Berikut adalah tampilan susunan menu yang telah dibuat.

![Menus - Final](/images/chinook-menus-final.png)

## Menjalankan Aplikasi

Sejauh ini, dengan menu yang telah dibuat, aplikasi telah siap dijalankan.

Untuk menjalankan aplikasi, klik tombol **Run**.

![Button Run](/images/btnRun.png)

Maka kemudian tampilan hasil menu yang telah dibuat akan terlihat seperti berikut.

![Menus - Preview](/images/chinook-menus-preview.png)

Berikut adalah tampilan modul Employees yang telah kita buat.

![Menus - Run](/images/chinook-run.png)

Pada tahap ini aplikasi sudah bisa digunakan untuk melakukan proses <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank">CRUD</a>. Selanjutnya kita akan melakukan beberapa penyempurnaan pada aplikasi atau modul Employees ini.

## Form Icon

- Klik ganda pada _icon_ form Employees

  ![Klik Ganda Icon Form](/images/chinook-klik-ganda-icon.png)

- Pada **Metadata Objets** pilih _object form_ yaitu FRM_EMPLOYEE, kemudian klik tombol **OK**.

  ![Metadata Object Employees](/images/metada-object-employees.png)

- klik tombol "..." pada bagian **Icon** pada **Standar Form Designer**.

  ![Standar Form Designer - Change Icon](/images/chinook-std-frm-designer-change-icon.png)

- Kemudian pilih gambar yang diinginkan pada **Image Gallery**, kemudian klik tombol OK, sehingga tampil gambar icon seperti gambar berikut.

  ![Standar Form Designer - Change Icon - hasil](/images/chinook-std-frm-designer-change-icon-1.png)

- Klik tombol OK pada Standar Form Designer, sehingga modul Employees tertutup dengan sendirinya. Kemudian klik kembali menu Employees untuk membuka dan melihat perubahan yang terjadi pada modul Employees.

  ![New Icon Form](/images/chinook-new-icon-form.png)

## Custom Lookup

Selanjutnya kita akan membuat **Custom Lookup** untuk field GENDER.

![Gender Field](/images/chinook-gender.png)

- Klik ganda pada _icon_ form Employees untuk membuka **Metadata Objets**

  ![Klik Ganda Icon Form 1](/images/chinook-klik-ganda-icon-1.png)

- Pilih _object dataset_ yaitu QRY_EMPLOYEE, kemudian klik tombol **OK**.

  ![Metadata Object Employees - QRY_EMPLOYEE](/images/metada-object-employees-qry.png)

- Pada **Dataset Editor**, edit _field_ GENDER sehingga tampil **Field Editor** GENDER.

  ![Edit Gender Field](/images/chinook-edit-gender.png)

- Pada **Lookup Source Type** pilih `CUSTOM LOOKUP VALUE` dan pada **Lookup Values** isi dengan nilai `M=Male; F=Female;`seperti gambar di bawah ini.

  ![Edit Gender Field - Lookup](/images/chinook-edit-gender-lookup.png)

- Setelah selesai, klik tombol OK pada **Field Editor** dan **Dataset Editor**, kemudian buka ulang modul Employees. Hasilnya akan terlihat seperti gambar berikut.

  ![Gender Field - Finish](/images/chinook-gender-finish.png)

## Lookup Definition

Selanjutnya kita akan membuat **Lookup Definition** untuk field REPORTSTO.

![Reports To - Field](/images/chinook-reports-to.png)

- Keluar dari mode **Run**, kemudian buka menu **Lookups** pada **Metadata**.

  ![Tombol Lookups](/images/btn-lkp.png)

- Klik tombol Add untuk membuat **Lookup Definition** dengan mengisi inputan pada bagian **Dataset** dan **Command Text**.

  Bagian **Dataset**

  - Lookup Name : `LKP_EMPLOYEE`
  - Connection : `CHINNOOK`
  - Lookup Type : `STANDARD`
  - Key Fiels : `EMPLOYEEID`
  - Display Fiels : `FIRSTNAME`

  Bagian **Command Text** dengan menggunakan sintaks **SQL**.

  ```sql
  SELECT EMPLOYEEID, FIRSTNAME FROM EMPLOYEE
  ```

  Berikut adalah contoh gambarannya.

  ![LKP_EMPLOYEE](/images/chinook-lkp_employee.png)

  Untuk memastikan **Lookup** sudah berjalan dengan benar, lakukan **Preview**, dan hasilnya akan tampak seperti gambar berikut.

  ![LKP_EMPLOYEE - Preview](/images/chinook-lkp_employee-preview.png)

  Klik tombol OK pada **Lookup Editor** untuk menyimpan **Lookup** yang telah dibuat.

- Klik menu Datasets.

  ![Tombol Datasets](/images/btn-dts.png)

- Edit _dataset_ LKP_EMPLOYEE.
- Edit _field_ REPORTSTO dengan mengisi bagian **Lookup** seperti berikut.

  - Lookup Source Type : `LOOKUP DEFINITION`
  - Lookup Definition : `LKP_EMPLOYEE`

  Berikut adalah contoh gambarannya.

  ![Lookup Definition](/images/chinook-lkp_definition.png)

  Klik tombol OK pada **Field Editor** dan **Dataset Editor** untuk menyimpan perubahan yang telah dilakukan.

- Jalankan aplikasi, dan buka modul **Employees** untuk melihat perubahannya.

  ![Reports To - Lookup Field](/images/chinook-reports-to-finnish.png)

## Lookup Definition - Concatenate

- Ubah _lookup_ LKP_EMPLOYEE dengan ketentuan sebagai berikut

  - Bagian **Command Text**

    ```sql
    SELECT EMPLOYEEID, LASTNAME || ', ' || FIRSTNAME AS EMPLOYEENAME FROM EMPLOYEE
    ```

  - Bagian **Dataset**

    Display Field : `EMPLOYEENAME`

  Berikut adalah contoh gambarannya.

  ![LKP_EMPLOYEE - Concat](/images/chinook-lkp_employee-concate.png)

  Dan berikut adalah tampilan Preview dari perubahan yang dilakukan.

  ![LKP_EMPLOYEE - Concat - Preview](/images/chinook-lkp_employee-concat-preview.png)

## Tambah Tombol Export dan Print

- Pada **Metadata**, buka _form_ FRM_EMPLOYEE dan lakukan perubahan pada objek **Multitable1** pada bagian **Navigator** seperti berikut.

  - ShowExportButton : `True`
  - ShowPrintButton : `True`

![Form - Export & Print](/images/chinook-form-export-print.png)

Berikut adalah tampilan hasilnya.

![Form - Export & Print - Result](/images/chinook-form-export-print-1.png)
