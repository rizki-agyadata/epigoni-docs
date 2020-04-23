---
sidebarDepth: 3
---

# Model Data

Epigoni mendefinisikan model data yang akan digunakan dalam bentuk modul-modul yang disebut _Data Package_.

## Data Package

_Data Package_ adalah sebuah _package_ berisi satu atau lebih _Data Set_ yang saling berelasi. _Data Package_ bertindak sebagai _model_ dan _controller_ bagi modul presentasi yang dibuat.

![DataPackage](/images/dataPackage.svg)

_Data Set_ pada _Data Package_ didefinisikan secara terpisah dan mandiri. Sebuah definisi _Data Set_ dapat digunakan bersama oleh beberapa _Data Package_.

## Data Set

_Data Set_ adalah set data berbentuk matriks yang datanya berasal dari sebuah sistem _database_. Definisi _Data Set_ pada Epigoni tidak hanya mendefinisikan data apa yang ingin ditampilkan, tetapi juga mendefinisikan berbagai attribute dari data yang dihasilkan, seperti: bagaimana data ditampilkan, di-_update_ dan lain-lain.

![DataSet](/images/dataSet.svg)
