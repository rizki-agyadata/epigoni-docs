---
sidebarDepth: 3
---

# Membuat SQL Value Baru

![SQL Values](/images/app-sql-values.png)

- Klik tombol **Add** hingga tampil **SQL Value Editor** seperti gambar berikut.

  ![SQL Value Editor](/images/app-sql-value-editor.png)

- Isi inputan pada bagian **SQL Value** sesuai dengan kebutuhan.

  - **SQL Value Name**, nama SQL Value, biasanya diawali dengan awalan `SQV_` (opsional).
  - **Connection** nama koneksi _database_ yang digunakan.
  - **Field Type**, tipe _field_ atau nilai yang dihasilkan.
  - **Execute Once**, pilihan, apakah akan dijalankan sekali atau dapat dijalankan berulang kali.

- Isi bagian **Command Text** dengan pernyataan SQL dengan nilai tunggal, misal contoh berikut.

  - Mengetahui jumlah Customer.

  ```sql
  SELECT COUNT(*) FROM CUSTOMER
  ```

  - Mengetahui tanggal saat ini, pada contoh _database_ Firebird.

  ```sql
  SELECT CURRENT_DATE FROM RDB$DATABASE
  ```

  - Dan sebagainya...

- Klik tombol `Execute` untuk menjalankan (menguji) SQL Value yang telah dibuat.

- Klik tombol **OK** pada **SQL Value Editor** untuk menyimpan SQL Value yang telah dibuat.
