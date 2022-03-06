---
title: データのアップロード方法
date: 2022年3月6日
slug: how-to-upload-data
noIndex: true
---

### 目次

```toc

```

このファイルは、 [`src/contents/news/how-to-upload-data.md`](https://github.com/sshihci/sshihci.github.io/blob/develop/src/contents/news/how-to-upload-data.md) に対応しています。

### データを管理しているファイル

データは [`src/contents/data/config.yml`](https://github.com/sshihci/sshihci.github.io/blob/develop/src/contents/data/config.yml) というファイルで管理されています

この `config.yml` は以下のような形式となっています

```yml
- year: <年度>
  files:
    - name: データの名前
      date: <日付>
      pdf: ./<config.yml からみたファイルへの相対パス>.pdf
      excel: ./<config.yml からみたファイルへの相対パス>.xlsx

# 具体例
- year: 2019
  files:
    - name: 全国保険医療機関（病院・診療所）一覧（平成30年度版）
      date: 2019/10/23
      pdf: ./hosp_pha/2018/HOSP2018.pdf
      excel: ./hosp_pha/2018/HOSP2018.xlsx
    - name: 郵便番号・二次医療圏対応表（平成30年度版）
      date: 2019/10/21
      pdf: ./post/2018/POST2018.pdf
      excel: ./post/2018/POST2018.xlsx
```

実際はどのように表示されるかについては、 [/data/2019](/data/2019) などを参照してください。

### `config.yml` 内の設定順序は表示に影響します

1. `year` を含むブロックは年度順になるように並べてください。

   ```yml
   # 上から順に新しくなるようにする
   - year: 2019
     # ...

   - year: 2018
     # ...
   - year: 2017
     # ...
   # ...
   ```

2. `files` を含むブロックは上から順に表示されます

   以下のようにした場合、`データ 1`、`データ 2` の順に表示されるので、順番が重要な場合（日付が同じではない場合）は注意をしてください

   ```yml
   - year: 2019
     files:
       - name: データ1
         # ...
       - name: データ2
   ```

### 関連リンク

- [ファイルのアップロード方法](../how-to-upload-file)
- [ファイルの更新方法](../how-to-update-file)
- [ファイルの削除方法](../how-to-delete-file)
- [秘密情報をアップロードしてしまったら](../how-to-remove-from-git-history)
