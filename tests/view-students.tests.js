import assert from 'assert';
import fetch from 'node-fetch/lib/index.js';
import { suite, test } from 'mocha';

suite('View Students page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<h1>Registered Students</h1>"));
  });
  
  test('Students list', async function() {
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<ul><li>Steve (steve@gmail.com)</li><li>Tina (tina@yahoo.com)</li></ul>"));
  });
});
