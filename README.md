# Cache

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple cache utility for fetching and storing JSON data.

## Features
- Fetches JSON data from a URL and stores it in a local file
- Retrieves cached JSON data from the local file if available
- Automatically creates the cache directory if it doesn't exist

## Requirements
This project requires Deno, a modern and secure runtime for JavaScript and TypeScript.

## Usage
To use the cache utility, import the `fetchJSON` function from the `Cache` module:

```javascript
import { Cache } from './Cache.js';

const data = await Cache.fetchJSON('https://example.com/api/data', 'example-data');
console.log(data);
```

The `fetchJSON` function takes two arguments:
1. `url`: the URL of the JSON data to fetch
2. `key`: a unique identifier for the cached data

If the cached data is available, it will be returned immediately. Otherwise, the data will be fetched from the URL, saved to the cache, and returned.

## License
MIT License — see [LICENSE](LICENSE).