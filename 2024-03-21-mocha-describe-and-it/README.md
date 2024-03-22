```sh
git diff 46f6d1afe6e46fa8a96e602d140a7d840baa3212 4a0380d532b9bf8329a3a99a23b419af24ab412d
```

# The Point

If you try to run `test.js` using any version of Node, it will fail with an error like this:

```text
describe('Test', function() {
^

ReferenceError: describe is not defined
    at Object.<anonymous> (/Users/achillesschmelzer/repos/projects/magic/2024-03-21-mocha-describe-and-it/test.js:1:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
```

because the names `describe` and `it` are not part of JavaScript's default global environment.

But if you run the script with `mocha`, it will succeed:

`npx mocha test.js`

_So, why does that work?_

It works because the `mocha` script injects those names, among a bunch of others, into the global environment. The `./mocha.js` file in this repository stubs out a wildly simple version of mocha which also injects these names. If you now require our stubbed `mocha`, everything should work:

```sh
node -r ./mocha.js test.js
```