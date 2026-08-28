# Contributing

The full guide lives in [README.md](README.md#contributing). The short version:

**Every claim needs a source.** A pull request that adds or changes a fact without a
link to reporting will be asked for one before merging.

## Quick start

```sh
git clone https://github.com/nuclearconditioning/killedbybendingspoons.git
cd killedbybendingspoons
open index.html          # no build step, no dependencies
```

To change an entry:

1. Edit the object in `data.js`. Add your source to the `S` map at the top and
   reference it by key.
2. Put the figure in `facts`, each with its own source, not only in the prose.
3. Run `node build.js` to regenerate the pages in `p/`.
4. Commit `data.js` and the regenerated `p/*.html` together.

## House style

- Report the figure. Let it carry the weight, without adjectives.
- Where sources disagree, show both numbers rather than picking one.
- Where the company has responded on the record, include the response.
- No scores, ratings or estimates. Where nothing is reported, say so.
- No em dashes.
