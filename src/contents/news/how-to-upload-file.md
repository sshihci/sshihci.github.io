---
title: ファイルのアップロード方法
date: 2021年12月24日
slug: how-to-upload-file
noIndex: true
---

### 目次

```toc

```

このファイルは、 [`src/contents/news/how-to-upload-file.md`](https://github.com/sshihci/sshihci.github.io/blob/develop/src/contents/news/how-to-upload-file.md) に対応しています。

### ファイルのアップロード方法

1. [`src/contents/data`](https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/data) フォルダーを開きます。
2. 「Add file」をクリックし、「`Upload file`」をクリックする
3. ドラッグ＆ドロップをするか、「`choose your files`」をクリックしファイルを選択します。
4. ページ下部にある緑の `Commit Changes` ボタンをクリックします。

   - その際に、ボタン上部に 2 つの入力欄とラジオボタンが表示されますが、基本的にそのままで問題ありません
   - 入力欄はどちらも空で問題ありません。
   - ラジオボタンは、「`Commit directly to the develop branch.`」を選択してください

これでアップロードは終了です。5~10 分ほどすると更新が反映されます。

### お知らせにファイルを表示させる方法

表示させたいお知らせに

```markdown
<file name="ファイルの名前"></file>
```

とすると、その場所にファイルが表示されます。

参考: [お知らせの書き方 兼 サンプル#ファイル](https://sshihci.github.io/news/how-to-create-news/#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB) も合わせてご確認ください

### 関連リンク

- [お知らせの作成方法](../how-to-create-news)
- [お知らせの更新方法](../how-to-update-news)
- [お知らせの削除方法](../how-to-delete-news)
- [ファイルの更新方法](../how-to-update-file)
- [ファイルの削除方法](../how-to-delete-file)
- [サイトの更新状態の確認方法](../how-to-check-deploy)
- [お問い合わせフォームの設定方法](../how-to-connect-contact-form)
- [秘密情報をアップロードしてしまったら](../how-to-remove-from-git-history)
