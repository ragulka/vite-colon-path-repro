# Vite: files with `:` in their path return 403

```sh
pnpm install
pnpm dev
```

Open http://localhost:5173. The page shows `failed: Failed to fetch dynamically imported module: http://localhost:5173/src/route:name/index.js`.

The file can also be requested directly:

```sh
curl -i http://localhost:5173/src/route:name/index.js
# HTTP/1.1 403 Forbidden
```

A project whose own folder has a `:` in its name gets 403 for every file, including `index.html`:

```sh
git clone https://github.com/ragulka/vite-colon-path-repro.git 'my:app'
cd 'my:app' && pnpm install && pnpm dev
curl -i http://localhost:5173/
# HTTP/1.1 403 Forbidden
```
