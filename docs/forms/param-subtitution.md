---
sidebarDepth: 3
---

# Parameter Subtitution

Pada tutorial sebelumnya, yaitu [Master-Detail](../datasets/master-detail.md), ketika menentukan `Relation Type` pada bagian _data package_, selain terdapat pilihan `Master-Detail` terdapat juga pilihan tipe relasi **Parameter Subtitution**.

![PKG_PLAYLIST Relation Type - Param. Sub.](/images/pkg-playlist-relation-type-param-sub.png)

Pada tipe relasi [Master-Detail](../datasets/master-detail.md), mekanisme atau proses simpan dan batal pada data _master_ dan _detail_ terjadi secara bersamaan. Sedangkan pada tipe relasi **Parameter Subtitution** proses simpan dan batal data _master_ dan _detail_ terjadi secara terpisah.

Perbedanaan mekanisme atau proses simpan dan batal antara tipe relasi [Master-Detail](../datasets/master-detail.md) dan **Parameter Subtitution** ini dapat terlihat pada bagian _form_, dengan catatan **EditorType** pada _form_ sama-sama `dpeMasterDetail`.

![FRM_PLAYLIST - Editor Type](/images/editor-type-dpemasterdetail.png)

Pada saat data Master telah terisi, kemudian klik tombol tambah pada grid Detail, maka secara otomatis data Master akan tersimpan ke database, meskipun belum meng-klik tombol **Save**.

![Param. Sub. - Add Detail](/images/param-sub-add-detail.png)

Namun pada saat batal menambah data Detail, atau data Detail dikosongkan, kemudian klik _cancel_ (dibatalkan), maka data Master masih tetap tersimpan.

![Param. Sub. - Master - Cancel](/images/param-sub-master-cancel.png)
