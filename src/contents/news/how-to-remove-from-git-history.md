---
title: 秘密情報が含まれたお知らせ・ファイルを作成してしまった場合。
date: 2021年12月24日
slug: how-to-remove-from-git-history
noIndex: true
---

### 目次

```toc

```

このファイルは、 [`src/contents/news/how-to-remove-from-git-history.md`](https://github.com/sshihci/sshihci.github.io/blob/develop/src/contents/news/how-to-remove-from-git-history.md) に対応しています。

### 関連リンク

- [お知らせの作成方法](../how-to-create-news)
- [お知らせの更新方法](../how-to-update-news)
- [お知らせの削除方法](../how-to-delete-news)
- [ファイルのアップロード方法](../how-to-upload-file)
- [ファイルの更新方法](../how-to-update-file)
- [ファイルの削除方法](../how-to-delete-file)
- [サイトの更新状態の確認方法](../how-to-check-deploy)
- [お問い合わせフォームの設定方法](../how-to-connect-contact-form)

### なぜ秘密情報を含むファイルを削除・修正するだけではダメか

GitHub で管理しているファイルなどは `git` というバージョン管理ツールを用いて更新履歴などの管理がされています。

そのため、一度でも GitHub 上に秘密情報をアップロードしてしまった場合、そのファイルを削除・修正しても サイトからは見えなくなりますが、 GitHub の履歴には残り続けてしまいます。

また、この GitHub は公開されているので、履歴から誰でもその情報にアクセスすることができてしまうため、単に削除・修正するだけではいけないということになります。

### 実際に秘密情報を含むファイルを削除・修正してしまった場合

これらのことを行ってください。

1. 開発者（`YutaUra<yuuta3594@outlook.jp>`）にご連絡ください。履歴からも削除するようにします。
2. GitHub 上のファイルを削除・修正してください。
3. クレジットカードやパスワード、アクセストークンなどの類のものである場合は、それの利用を止めるように各所に連絡してください。

ひとまず以上の対応を迅速に行えれば被害は最小になると期待できます。

また、必要があれば GitHub に対して、その情報の閲覧履歴などを請求できるかもしれませんが、ほとんど場合それは難しいです。
