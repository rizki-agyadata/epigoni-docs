# Master-Detail

- Buat dua buah dataset dengan query sebagai berikut:

Dataset Master

```sql
SELECT
  PLAYLISTID, NAME
FROM
  PLAYLIST
```

Dataset Detail

```sql
SELECT
  PLAYLISTID, TRACKID
FROM
  PLAYLISTTRACK
WHERE
  PLAYLISTID=:PLAYLISTID
```
