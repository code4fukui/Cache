# Cache


JSONデータの取得と保存を行うためのシンプルなキャッシュユーティリティです。

## 特徴
- URLからJSONデータを取得し、ローカルファイルに保存します
- 利用可能な場合、ローカルファイルからキャッシュされたJSONデータを取得します
- キャッシュディレクトリが存在しない場合、自動的に作成します

## 要件
このプロジェクトには、JavaScriptおよびTypeScript向けのモダンでセキュアなランタイムであるDenoが必要です。

## 使用方法
キャッシュユーティリティを使用するには、`Cache`モジュールから`fetchJSON`関数をインポートします:

```javascript
import { Cache } from './Cache.js';

const data = await Cache.fetchJSON('https://example.com/api/data', 'example-data');
console.log(data);
```

`fetchJSON`関数は2つの引数を受け取ります:
1. `url`: 取得するJSONデータのURL
2. `key`: キャッシュデータの一意の識別子

キャッシュデータが利用可能な場合は、即座に返されます。そうでない場合は、URLからデータが取得され、キャッシュに保存された後に返されます。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
