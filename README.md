# React + TypeScript + Vite

このテンプレートは、ReactをViteで動作させるための最小限のセットアップを提供します。HMR（ホットモジュールリプレースメント）と一部のESLintルールも含まれています。
現在、以下の2つの公式プラグインが利用可能です：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)： Fast Refreshに[Babel](https://babeljs.io/)を使用します。
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)： Fast Refreshに[SWC](https://swc.rs/)を使用します。

## ESLint設定の拡張

本番向けのアプリケーションを開発する場合は、タイプチェックに対応したESLintルールを有効にすることをお勧めします。
以下のようにトップレベルの`parserOptions`プロパティを設定します：

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```
plugin:@typescript-eslint/recommended を plugin:@typescript-eslint/recommended-type-checked または plugin:@typescript-eslint/strict-type-checked に置き換えます。
必要に応じて plugin:@typescript-eslint/stylistic-type-checked を追加します。
eslint-plugin-react をインストールし、extends リストに plugin:react/recommended と plugin:react/jsx-runtime を追加します。