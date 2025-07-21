import assert from 'assert';
import fetch from 'node-fetch/lib/index.js';
import { suite, test } from 'mocha';

suite('Home page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Students Registry</h1>"));
  });
  
  test('Students count', async function() {
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("Registered students: <b>2</b>"));
  });
});
