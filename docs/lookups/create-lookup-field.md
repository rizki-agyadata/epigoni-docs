---
sidebarDepth: 3
---

# Create Lookup Field

::: warning
Tutorial ini masih dalam proses pengerjaan.
:::

**Create Lookup Field** adalah tombol yang terdapat dalam **Dataset Editor** pada _tab_ **Fields**, yang berfungsi untuk membuat _field lookup_.

![Button - Create Lookup Field](/images/btn-create-lookup-field.png)

Sebagai contoh, misalnya kita memiliki sebuah [dataset](../datasets/dataset-baru.md) dengan _SQL statement_ pada **Command Text** seperti berikut:

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
