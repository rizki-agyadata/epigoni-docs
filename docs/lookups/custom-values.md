---
sidebarDepth: 3
---

# Membuat Lookup Custom Values

![Lookups](/images/app-lookups.png)

Pada tutorial kali ini kita akan membuat _lookup_ yang bertipe `Custom Values` dengan contoh menampilkan nama-nama bulan.

- Klik tombol **Add** sehingga tampil **Lookup Editor** seperti gambar berikut.

  ![Lookup Editor](/images/app-lookup-editor.png)

- Isi inputan pada bagian **Dataset** seperti ketentuan berikut.

  - Lookup Name, `LKP_REFBULAN` (atau nama lain sesuai dengan kebutuhan).
  - Lookup Type, `CUSTOM VALUES`.

- Isi **Command Text** seperti berikut.

```SQL
1=Januari;
2=Februari;
3=Maret;
4=April;
5=Mei;
6=Juni;
7=Juli;
8=Agustus;
9=September;
10=Oktober;
11=November;
12=Desember;
```

- Klik tombol `Preview` untuk memastikan lookup sudah berjalan dengan baik.

  ![Lookup Ref. Bulan - Preview](/images/lkp_refbulan-preview.png)

- Klik tombol **OK** pada **Lookup Editor** untuk menyimpan lookup yang telah dibuat.
