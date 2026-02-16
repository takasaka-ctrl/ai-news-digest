# AI News Digest

AIニュースのダイジェストを自動生成・配信するプロジェクト

## ディレクトリ構成

```
ai-news-digest/
├── README.md                   # プロジェクト説明
├── .gitignore                  # 除外設定
│
├── docs/                       # GitHub Pages公開ディレクトリ
│   └── index.html             # 最新版（毎日上書き）
│
├── archive/                    # 過去版保存
│   ├── 2026-02-16.html
│   └── ...
│
├── data/                       # JSONデータ保存
│   ├── 2026-02-16.json
│   └── ...
│
└── scripts/                    # 生成スクリプト
    ├── generate.js
    └── deploy.sh
```

## 使い方

```bash
# ニュースダイジェストを生成
node scripts/generate.js

# デプロイ
./scripts/deploy.sh
```
