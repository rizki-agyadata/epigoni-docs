---
sidebarDepth: 3
---

# Application

## Application Info

![Tombol Applications Info](/images/btn-app-info.png)

Modul ini menampilkan identitas aplikasi, mulai dari `Application ID` hingga `Icon`.

Berikut adalah contoh tampilan form **Application Info**

![Application Info](/images/app-info.png)

## Roles

![Tombol Roles](/images/btn-roles.png)

Menu **Roles** adalah untuk melakukan pengaturan hak akses setiap menu yang nantinya akan ditetapkan kepada [Users](./application.md#users).

Terdapat 2 (dua) _role_ bawaan yang telah telah tersedia, yaitu `ADMINISTRATOR` dan `DEVELOPER`.

![Roles](/images/app-roles.png)

Berikut adalah tampilan form **Role** ketika akan menambahkan _role_ baru.

![Role Form](/images/app-role-form.png)

### Role - Menu

![Tombol Role - Menu](/images/btn-role-menu.png)

**Menu** pada modul **Roles** ini adalah untuk menentukan hak ases setiap menu kepada **Role** tertentu. Pada gambar di bawah terdapat contoh gambar dimana _role_ `ADMINISTRATOR` tidak memiliki hak akses terhadap menu `Customer`.

![Role - Menu](/images/role-menu.png)

## Users

![Tombol Users](/images/btn-users.png)

Menu **Users** adalah untuk melakukan pengaturan _user_ (pengguna) aplikasi Epigoni.

Terdapat 2 (dua) _user_ bawaan yang telah tersedia, yaitu `ADMINISTRATOR` dan `DEVELOPER`.

![Users](/images/app-users.png)

Berikut adalah tampilan form **User** ketika akan menambahkan _user_ baru.

![User Form](/images/app-user-form.png)

Dan berikut adalah contoh tampilan form **User** dalam mode **Edit**.

![User Form - Edit](/images/app-user-form-edit.png)

### User - Role

![Tombol User - Role](/images/btn-user-role.png)

**Role** pada modul **Users** ini adalah untuk menentukan _role_ kepada setiap _user_. Pada gambar di bawah adalah contoh gambar dimana _user_ `USER1` memiliki _role_ `OPERATOR1`.

![User - Role - Example](/images/user-role-example.png)

### User - Reset Administrator Password

![User - Reset Administrator Password](/images/user-reset-adm-pass.png)

**Reset Administrator Password** adalah untuk men-_set_ ulang atau mengubah _password_ _user_ **Administrator**.

Gambar berikut adalah form **Reset Administrator Password**.

![Reset Administrator Password](/images/reset-adm-pass.png)

## Menus

![Tombol Menus](/images/btn-menus.png)

Melalui pengaturan **Menu**, modul-modul presentasi dapat ditampilkan ke hadapan pengguna aplikasi. Menu dapat berbasis _ribbon_ atau tanpa _ribbon_.

Terdapat 3 (tiga) jenis menu, yaitu [Ribbon Menu](../metadata/application.md#ribbon-menu), [Tool Bar Menu](../metadata/application.md#tool-bar), dan [SIde Menu](../metadata/application.md#side-menu).

### Ribbon Menu

![Menus - Ribbon](/images/app-menus-ribbon.png)

Gambar berikut adalah contoh tampilan hasil dari pengaturan **Ribbon Menu** (gambar) di atas.

![Ribbon Menu](/images/ribbon-menu-contoh.png)

### Tool Bar

![Menu Form](/images/toolbar-menu-contoh.png)

### Side Menu

![Side Menu](/images/side-menu-contoh.png)

::: details Menus Tutorials

- [Ribbon Menu](../menus/ribbon.md)
- [Tool Bar Menu](../menus/tool-bar.md)
- [Side Menu](../menus/side-menu.md)

:::

Berikut adalah tampilan form **Menu**.

![Menu Form](/images/app-menu-form.png)

## Icons

![Tombol Icons](/images/btn-icons.png)

![Icons](/images/app-icons.png)

## Keys

![Tombol Keys](/images/btn-keys.png)

![Keys](/images/app-keys.png)

## Error Messages

![Tombol Error Message](/images/btn-err-msg.png)

![Error Messages](/images/app-error-messages.png)

## Notifications

![Tombol Notifications](/images/btn-notif.png)

![Notifications](/images/app-notifications.png)
