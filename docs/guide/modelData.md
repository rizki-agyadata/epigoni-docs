# Model Data

Epigoni mendefinisikan model data yang akan digunakan dalam bentuk modul-modul yang disebut *Data Package*.

## Data Package

*Data Package* adalah sebuah *package* berisi satu atau lebih *Data Set* yang saling berelasi. *Data Package* bertindak sebagai *model* dan *controller* bagi modul presentasi yang dibuat.

![DataPackage](/images/dataPackage.svg)

*Data Set* pada *Data Package* didefinisikan secara terpisah dan mandiri. Sebuah definisi *Data Set* dapat digunakan bersama oleh beberapa *Data Package*.

## Data Set

*Data Set* adalah set data berbentuk matriks yang datanya berasal dari sebuah sistem *database*. Definisi *Data Set* pada Epigoni tidak hanya mendefinisikan data apa yang ingin ditampilkan, tetapi juga mendefinisikan berbagai attribute dari data yang dihasilkan, seperti: bagaimana data ditampilkan, di-*update* dan lain-lain.

![DataSet](/images/dataSet.svg)