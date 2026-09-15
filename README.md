# Moo Reviews

An interactive map of Rahul’s restaurant reviews and photographs.

## Development

```sh
npm ci
npm run dev
```

## Hosting

GitHub Pages deploys automatically when main is updated. Enable GitHub Actions as the Pages source in repository settings. Use an organization site repository named `<organization>.github.io` to serve the app at the root of its own free hostname.

Only published reviews and their referenced photographs are included. The complete Instagram archive and deferred admin/backend remain in the original local project. Instagram sync is not enabled in this static version.
