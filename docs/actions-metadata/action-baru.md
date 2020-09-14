---
sidebarDepth: 3
---

# Membuat Actions Baru

Pada prakteknya, membuat Action seringnya dibuat dengan cara di-_generate_ dari objek metadata misalnya [Dataset](../datasets/create-datapackage-form-action.md), [Data Package](../datapackages/), [Forms](../forms/), dsb. Pada tutorial kali ini akan diuraikan cara membuat Action secara manual dari menu Actions itu sendiri. Berikut adalah langkah-langkahnya.

- Pertama-tama, pastikan menu Actions sudah terbuka dengan menklik menu Actions seperti gambar di bawah.

  ![Tombol Forms](/images/btn-act.png)

  Sehingga tampil tabel Actions seperti gambar berikut.

  ![Forms](/images/app-actions.png)

- Klik tombol **Add** sehingga tampil form **Action** seperti gambar berikut.

  ![Action - New](/images/action-form.png)

- Untuk membuat Action dengan konfigurasi standar, cukup mengisi beberapa inputan saja diantaranya adalah.

  - Action Name, nama Action, biasanya diawali dengan awalan `ACT_` (opsional).
  - Action Type, tipe Action, pilih salah satu tipe sesuai dengan keperluan, yaitu.

    - Custom Action
    - Execute Form
    - Execute Process Dialog
    - Execute Report
    - Execute Script

  - Presentation Object, objek dari kelompok metadata - Presentation, sesuai dengan pilihan `Action Type`.

  - Description (opsional), deskripsi dari Action yang dibuat, digunakan untuk dokumentasi.

::: tip KETERANGAN
Untuk kebutuhan standar, proses pembuatan Action cukup sampai di sini.
:::

Inputan selanjutnya dapat diisi jika diperlukan.

- **_Chekc box_**:

  - Show Modal, jika diceklis presentasi akan tampil penuh pada layar.
  - Syncronize, (akan dijelaskan kemudian).
  - Post On Syncronize, (akan dijelaskan kemudian).

- **Script**, digunakan pada kasus tertentu, jika ada kebutuhan mengeksekusi _script_ pada saat Action dipanggil atau dieksekusi.
