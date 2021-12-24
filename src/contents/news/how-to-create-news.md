---
title: お知らせの書き方 兼 サンプル
date: 2021年12月24日
attachment:
  - sample.pdf
  - sample.xlsx
slug: how-to-create-news
noIndex: true
---

### 目次

```toc
exclude:
  - (大|中|小|より小さい|さらに小さい|一番小さい)見出し
```

このファイルは、 [`src/contents/news/how-to-create-news.md`](https://github.com/sshihci/sshihci.github.io/blob/develop/src/contents/news/how-to-create-news.md) に対応しています。

### 関連リンク

- [お知らせの更新方法](../how-to-update-news)
- [お知らせの削除方法](../how-to-delete-news)
- [ファイルのアップロード方法](../how-to-upload-file)
- [ファイルの更新方法](../how-to-update-file)
- [ファイルの削除方法](../how-to-delete-file)
- [サイトの更新状態の確認方法](../how-to-check-deploy)
- [お問い合わせフォームの設定方法](../how-to-connect-contact-form)
- [秘密情報をアップロードしてしまったら](../how-to-remove-from-git-history)

### お知らせについて

お知らせは、 [`src/contents/news`](https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/news) に `.md` で終わるファイルを作成することで、お知らせを作成することができます。

お知らせは後述の `markdown` という記法を使って作成することができます。

### 新しくお知らせを作成する方法

1.  https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/news へアクセスする
2.  「Add file」をクリックし、「`Create new file`」をクリックする
3.  `.md` で終わるような適当なファイル名を入力する（表示したい URL や、作成日にすると管理しやすいと思います）
4.  内容を入力する

    - [このファイルの原本](https://raw.githubusercontent.com/sshihci/sshihci.github.io/develop/src/contents/news/how-to-create-news.md) を開いて、コピーしてから編集すると楽かもしれません。

5.  必要であれば入力欄の上部にある「`Preview`」ボタンを押して簡易的なプレビューを表示することができます。
6.  ページ下部の緑色の「`Commit new file`」ボタンをクリックする

    - その際に、ボタン上部に 2 つの入力欄とラジオボタンが表示されますが、基本的にそのままで問題ありません
    - 入力欄はどちらも空で問題ありません。
    - ラジオボタンは、「`Commit directly to the develop branch.`」を選択してください

これで更新は終了です。5~10 分ほどすると更新が反映されます。

### メタ情報について

「メタ情報」とは、このファイルの上部にあるような追加の情報のことです。公開されているページから見ている場合は、このメタ情報は見えませんが、すぐ下に同じ内容を記載しています。

書式は `---` で始まり、`---` で終わります。

```yaml
---
title: お知らせのサンプル 兼 書き方
date: 2021年11月30日
attachment:
  - sample.pdf
  - sample.xlsx
slug: how-to-create-news
noIndex: true
---
```

その内部には、以下のような情報が含まれています。

| 名前         | 説明                                                                                                                                                                                                                                                           | 必須かどうか |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `title`      | タイトル                                                                                                                                                                                                                                                       | 必須         |
| `date`       | 日付                                                                                                                                                                                                                                                           | 必須         |
| `attachment` | 添付ファイルです。[`src/contents/data`](https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/data) 内のファイルを複数指定することができる。<br/>ここに指定されたファイルはこのページの上部にあるように資料セクションに表示されることになる。 | 必須ではない |
| `slug`       | URL になります。指定しない場合はファイル名が `slug` に該当するようになります。                                                                                                                                                                                 | 必須ではない |
| `noIndex`    | このページを検索エンジンとお知らせ一覧から除外するかどうか。基本的には指定する必要はありません。指定しない場合は値と `false` とするか、その行自体を削除してください。                                                                                          | 必須ではない |

### お知らせの書き方

このファイルも含め、お知らせは [markdown](https://qiita.com/kamorits/items/6f342da395ad57468ae3) を使って書くことができます

https://qiita.com/kamorits/items/6f342da395ad57468ae3 を参考にしてもらえると幸いですが、よく使いそうな記法についてあらかじめ説明します。

#### 見出し

見出しはそのレベルの大きさ分 `#` を先頭につけると書けます。

例）

```markdown
# 大見出し <- 非推奨
```

# 大見出し <- 非推奨

```markdown
## 中見出し <- 非推奨
```

## 中見出し <- 非推奨

```markdown
### 小見出し
```

### 小見出し

```markdown
#### より小さい見出し
```

#### より小さい見出し

```markdown
##### さらに小さい見出し
```

##### さらに小さい見出し

```markdown
###### 一番小さい見出し
```

###### 一番小さい見出し

ただ、サイトの構成として見出しのレベルは 3 以上を使ってもらえるとバランスが取れると思います。

#### 箇条書き

箇条書きは `-` を先頭につけると書けます。

例）

```markdown
- 箇条書き 1
- 箇条書き 2
- 箇条書き 3
```

- 箇条書き 1
- 箇条書き 2
- 箇条書き 3

#### 順番ありの箇条書き

順番ありの箇条書きは `1.` を先頭につけると書けます。

例）

```markdown
1. 箇条書き 1
2. 箇条書き 2
3. 箇条書き 3
```

1. 箇条書き 1
2. 箇条書き 2
3. 箇条書き 3

#### 表

表は少し特殊な書き方になるのですが、以下のように書きます。

```markdown
| 行 1 | 行 2 | 行 3 | 中央揃え | 左揃え(デフォルトです) | 右揃え |
| ---- | ---- | ---- | :------: | :--------------------- | -----: |
| 値 1 | 値 2 | 値 3 |   値 4   | 値 5                   |   値 6 |
| 値 1 | 値 2 | 値 3 |   値 4   | 値 5                   |   値 6 |

※ みやすさのため、スペースが多いですが、なくても大丈夫です。
```

| 行 1 | 行 2 | 行 3 | 中央揃え | 左揃え(デフォルトです) | 右揃え |
| ---- | ---- | ---- | :------: | :--------------------- | -----: |
| 値 1 | 値 2 | 値 3 |   値 4   | 値 5                   |   値 6 |
| 値 1 | 値 2 | 値 3 |   値 4   | 値 5                   |   値 6 |

#### 目次

目次を挿入することもできます。ただし、一つのファイルにつき一つの目次を挿入することができます。

````markdown
```toc
exclude:
  - 目次に含めたくない見出し
  - ...
```

※ exclude は指定しなくても大丈夫です。その場合は

```toc

```

となります。
````

※ 目次はこのファイルの先頭に挿入されているためここでは省略しています。

#### 数式

数式は `Tex` を使って書くことができます。

```markdown
$$
r = \sqrt{a^2 + b^2}
$$
```

$$
r = \sqrt{a^2 + b^2}
$$

```markdown
ただし、$a$は長辺、$b$は短辺です。
```

ただし、$a$は長辺、$b$は短辺です。

#### リンクの挿入

リンクは `[text](url)` のように書くことができます。

```markdown
[Google](https://www.google.com/) はこちらです
```

[Google](https://www.google.com/) はこちらです

#### 装飾

- 太字は `**text**` のように書くことができます。
- 斜体は `*text*` または `_text_` のように書くことができます。
- 太字斜体は `***text***` または `**_text_**` のように書くことができます。
- 取り消し線は `~~text~~` のように書くことができます。

```markdown
- **太字**
- _斜体_
- **_太字斜体_**
- ~~取り消し線~~
```

- **太字**
- _斜体_
- **_太字斜体_**
- ~~取り消し線~~

#### 引用

引用は `> text` のように書くことができます。

```markdown
> これは引用です。
```

> これは引用です。

#### 画像

画像は `![](url)` のように書くことができます。

```markdown
![](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
```

![](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

また、[`src/contents/images`](https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/images) に画像を置いておくと、以下のように書くこともできます。

```markdown
![](./images/icon.png)
```

![](./images/icon.png)

#### ファイル

[`src/contents/data`](https://github.com/sshihci/sshihci.github.io/tree/develop/src/contents/data) 配下にあるファイルを表示したい場合は以下のように書きます。

```markdown
<file name="sample.xlsx"></file>

※ 後半部分が `</file>` であることに注意してください。
```

<file name="sample.xlsx"></file>
