import assert from 'assert';
import fetch from 'node-fetch/lib/index.js';
import { suite, test } from 'mocha';

suite('About page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});
