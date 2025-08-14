# Node.js ベースイメージ
FROM node:24

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係コピー＆インストール
COPY package*.json ./
RUN npm install

# ソースコードコピー
COPY . .

# Next.js ビルド
RUN npm run build

# ポート設定
EXPOSE 3000

# 実行コマンド
CMD ["npm", "start"]
