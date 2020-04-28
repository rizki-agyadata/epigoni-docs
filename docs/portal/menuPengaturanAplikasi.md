---
sidebarDepth: 3
---

# Menu dan Pengaturan Aplikasi

Berikut adalah petunjuk menu dan pengaturan aplikasi pada Portal Epigoni.

Klik kanan pada aplikasi, maka kemudian akan tampil menu pengaturan aplikasi seperti berikut.

![Circle Menu](/images/circleMenu.png)

## Run

![Button Run](/images/btnRun.png)

Menu **Run** adalah untuk menjalankan aplikasi Epigoni.

Setelah menu diklik maka akan tampil _form login_ seperti contoh gambar berikut.

![Form Login](/images/formLogin.png)

Proses **Login** bisa dilakukan secara otomatis dengan melakukan pengaturan pada menu [Config](#config) pada bagian [Auto Login](#auto-login).

## Develop

![Button Develop](/images/btnDevelop.png)

Menu **Develop** adalah untuk mejalankan aplikasi Epigoni dalam mode pengembang aplikasi.

Setelah menu diklik maka akan tampil _form login_ seperti contoh gambar berikut.

![Form Login](/images/formLogin.png)

Proses **Login** bisa dilakukan secara otomatis dengan melakukan pengaturan pada menu [Config](#config) pada bagian [Auto Login](#auto-login).

## Config

![Button Config](/images/btnConfig.png)

Menu **Config** adalah untuk melakukan pengaturan konfigurasi apikasi Epigoni.

![Form Config](/images/formConfig.png)

### Auto Login

Untuk dapat menjalankan aplikasi tanpa melakukan proses _login_ secara manual, isi bagian **Developer Auto Login** untuk mode [Develop](#develop)

![Developer Auto Login](/images/dev-aut-log.png)

Dan isi **User Auto Login** untuk mode [Run](#run)

![User Auto Login](/images/usr-aut-log.png)

## Project

![Button Project](/images/btnProject.png)

Menu **Project** adalah untuk melakukan pengaturan _project file_ Epigoni.

### System Connection

Merupakan pengaturan koneksi ke database sistem.

![Project Editor - System](/images/projectFileEditor_System.png)

### Application Connection

Merupakan pengaturan koneksi ke database aplikasi.

![Project Editor - Application](/images/projectFileEditor_App.png)

## Clone

![Button Clone](/images/btnClone.png)

Menu **Clone** adalah untuk menggandakan atau menduplikasi aplikasi Epigoni. Secara _default_ konfigurasi aplikasi akan sama persis diduplikasi, kecuali _field_ **_Description_** pada form **Clone Application** bisa diubah pada saat proses duplikasi berlangsung.

Setelah menu di-klik akan tampil form seperti berikut:

![Clone Application](/images/clone-app.png)

Kolom _Description_ terisi sesuai dengan deskripsi aplikasi yang di-_clone_, anda bisa mengubahnya, kemudian klik tombol **OK** untuk melanjutkan proses _clone_.

::: tip
Proses **Clone** hanya menduplikasi aplikasi pada portal Epigoni, tidak menduplikasi _file_ `.epf` (Epigoni Project File).
:::

## Edit

![Button Edit](/images/btnEdit.png)

Menu **Edit** adalah untuk mengubah _file_ `.epf`, deskripsi, dan icon aplikasi.

![Edit Application](/images/edit-app.png)

### Ubah Icon

Untuk mengubah **Icon** aplikasi, klik kanan pada area **Icon** kemudian pilih **Load**.

![Edit Application - Icon](/images/edit-app-icon.png)

Pilih _icon_ yang diinginkan, kemudian klik tombol **Open**.

![Edit Application - Icon - Images](/images/edit-app-icon-images.png)

## Reload

Menu **Reload** adalah untuk memuat ulang aplikasi pada portal Epigoni.

![Button Reload](/images/btnReload.png)

Klik **Ok** pada dialog konfirmasi yang muncul.

![Reload Application](/images/reload-app.png)

## Remove

Menu **Remove** adalah untuk menghapus aplikasi pada portal Epigoni.

![Button Remove](/images/btnRemove.png)

Klik **Ok** pada dialog konfirmasi yang muncul.

![Remove Application](/images/remove-app.png)
