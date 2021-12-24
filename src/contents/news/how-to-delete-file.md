---
title: ファイルの削除方法
date: 2021年12月24日
slug: how-to-delete-file
noIndex: true
---

### 目次

```toc

```

このファイルは、 [`src/contents/news/how-to-delete-file.md`](https://github.com/sshihci/sshihci.github.io/blob/develop/src/contents/news/how-to-delete-file.md) に対応しています。

### 関連リンク

- [お知らせの作成方法](../how-to-create-news)
- [お知らせの更新方法](../how-to-update-news)
- [お知らせの削除方法](../how-to-delete-news)
- [ファイルのアップロード方法](../how-to-upload-file)
- [ファイルの更新方法](../how-to-update-file)
- [サイトの更新状態の確認方法](../how-to-check-deploy)
- [お問い合わせフォームの設定方法](../how-to-connect-contact-form)
- [秘密情報をアップロードしてしまったら](../how-to-remove-from-git-history)

### ファイルの削除方法

※ 削除したいファイルに秘密情報が含まれる場合は [秘密情報をアップロードしてしまったら](../how-to-remove-from-git-history) も合わせてご確認ください

1. [`data`](https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/data) フォルダーを開き、削除したいファイルを選択しクリックします。
2. ファイルの内容が表示されている部分の上部にある `ゴミ箱` ボタンをクリックします。
3. ページ下部にある緑の `Commit Changes` ボタンをクリックします。

   - その際に、ボタン上部に 2 つの入力欄とラジオボタンが表示されますが、基本的にそのままで問題ありません
   - 入力欄はどちらも空で問題ありません。
   - ラジオボタンは、「`Commit directly to the develop branch.`」を選択してください

これで削除は終了です。5~10 分ほどすると更新が反映されます。
