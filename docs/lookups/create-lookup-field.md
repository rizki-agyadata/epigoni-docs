---
sidebarDepth: 3
---

# Create Lookup Field

**Create Lookup Field** adalah tombol yang terdapat pada **Dataset Editor** di _tab_ **Fields**, yang berfungsi untuk membuat sebuah _field lookup_ dari satu _field_ pada sebuah _dataset_.

![Button - Create Lookup Field](/images/btn-create-lookup-field.png)

Tidak seperti [Lookup Definition](../lookups/standard.md) dimana _field_ akan berubah dari tipe _control_ _Edit Box_ menjadi _Combo Box_, pada _lookup_ ini _field_ sumber/asli tidak akan terjadi perubahan apapun, hanya _field_ baru akan terbentuk sebagai _lookup_ dengan tampilan yang sama seperti [Lookup Definition](../lookups/standard.md).

Untuk penamaan _field lookup_ yang terbentuk adalah nama _field_ sumber + akhiran **\_DESC**, misalnya _field_ sumbarnya adalah **ARTISTID** maka _field lookup_-nya menjadi **ARTISTID_DESC**.

Pada tutorial kali ini kita akan membuat _field lookup_ dari _field_ **ARTISTID** dari sebuah [dataset](../datasets/dataset-baru.md) dengan _SQL statement_ pada **Command Text** seperti berikut:

```sql
 SELECT
   ALBUMID, TITLE, ARTISTID
 FROM
   ALBUM
```

Pada tab Fields kita memiliki 3 (tiga) buah field. Yang akan kita buatkan _lookup field_ adalah _field_ `ARTISTID`.

![Fields - Dataset Album](/images/fields-dst-album.png)

Pilih _field_ `ARTISTID`, kemudian klik tombol **Create Lookup Field**.

![Select and Click - Create Lookup Field](/images/artistid-click-create-lookup-field.png)

Pada dialog **Create Lookup Field** yang muncul, pilih **Lookup Definition** [LKP_ARTIST](../lookups/standard.md), kemudian klik tombol OK.

![Dialog - Create Lookup Field](/images/create-lookup-field-dialog.png)

_Lookup field_ yang terbentuk dengan nama **ARTISTID_DESC** seperti pada gambar berikut.

![ARTISTID_DESC - Lookup Field](/images/lookup-field-artistid-desc.png)

Lakukan **Preview** untuk melihat hasilnya.

![ARTISTID_DESC - Preview](/images/artistid_desc-preview.png)

Ketika data **ARTISTID** diubah, maka data (_lookup field_) **ARTISTID_DESC** pun berubah, begitu juga sebaliknya.

![ARTISTID and ARTISTID_DESC](/images/artisid-and-artistid_desc.png)

Supaya tampilannya menjadi lebih baik, kita dapat melakukan sedikit perubahan pada field ARTISTID dan ARTISTID_DESC pada Dataset Editor seperti berikut.

![Edit View - ARTISTID and ARTISTID_DESC](/images/edit-view-field-lookup.png)

ARTISTID

- Label Caption : Artist
- VB (Visible on Browse) : False
- DW (Draw Width) : 5

ARTISTID_DESC

- Field Caption : Artist
- Label Caption : (kosong)
- NL (New Line) : False

Berikut adalah tampilan hasilnya.

![Preview - ARTISTID and ARTISTID_DESC](/images/lookup-field-artist-preview.png)
