---
name: rotate-spotify-playlist
description: Use when updating the monthly Spotify playlist embedded on this repository's top page from a newly provided Spotify iframe or playlist URL.
---

# Rotate Spotify Playlist

トップページの月次 Spotify プレイリストを、既存の表示構成に合わせて更新します。

## Workflow

1. `git status --short --branch` で既存の変更を確認し、`master` / `main` に直接変更しない。
2. `src/pages/index.astro` の `Playlists` セクションを確認する。
3. 新しい iframe の `src` と表示月 `YYYY-MM` を入力として使う。月は現在日付から推測せず、ユーザーの指定または iframe に対応する明示的な月だけを使う。
4. `Playlists` セクション最初の `SpotifyPlaylist` を新しい月・URLに更新する。
5. 更新前の最新プレイリストを `Past playlists` の先頭へ移し、過去プレイリストの表示順を保つ。このとき過去プレイリストの URL 末尾にある `?theme=0` は外す。
6. `2025-12-31 ukfes#4 / DJ terfno` のような DJ 用プレイリストは変更しない。
7. 最新プレイリストの Spotify URL はユーザーが渡した `src` をそのまま使う。過去プレイリストへ移す URL では、指定された `?theme=0` だけを外し、それ以外のクエリパラメータは保持する。

既存の最新プレイリストが `Past playlists` にすでにある場合、または月と URL の対応が不明な場合は、重複や推測による変更をせず確認する。

## Verification

変更後に次を実行する。

```sh
mise exec -- npm run build
git diff --check
git diff -- src/pages/index.astro
```

ビルドが成功し、差分がトップページのプレイリスト更新だけであることを確認する。コミット・push は依頼された場合だけ行う。

## Expected shape

```astro
<SpotifyPlaylist
  additional_class="sm:h-100"
  title="YYYY-MM"
  url="<the exact Spotify embed src provided by the user>"
  loading="eager"
/>
```

過去リストには、直前の最新プレイリストを同じ `title` で先頭へ追加する。`url` は末尾の `?theme=0` を除いた値にする。
