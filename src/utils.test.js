const test = require("ava");
import { convertWildcardToRegex } from "./utils.js";

function makeRegExp(string) {
  const reString = convertWildcardToRegex(string);
  return new RegExp(reString.slice(1, -1));
}

test("Generates regular expression strings", (t) => {
  let reString = convertWildcardToRegex("http://example.com");
  t.is(reString, "/^http:\\/\\/example\\.com$/");

  reString = convertWildcardToRegex("example.com");
  t.is(reString, "/^https?:\\/\\/example\\.com$/");

  reString = convertWildcardToRegex("example.com/*");
  t.is(reString, "/^https?:\\/\\/example\\.com\\/.*$/");
});

test("Regular expressions", (t) => {
  let re = makeRegExp("http://example.com");

  t.true(re.test("http://example.com"));
  t.false(re.test("https://example.com"));

  re = makeRegExp("example.com");
  t.true(re.test("http://example.com"));
  t.true(re.test("https://example.com"));

  re = makeRegExp("https://example.com");
  t.false(re.test("http://example.com"));
  t.true(re.test("https://example.com"));
});

test("Wildcards", (t) => {
  let re = makeRegExp("http://example.com/*");

  t.true(re.test("http://example.com/abcdefghijklmnopq"));
  t.false(re.test("https://example.comabcdefg"));

  re = makeRegExp("something.*.com*");
  t.true(re.test("http://something.example.comst"));
  t.true(re.test("https://something.example.com/test?abc=123#124"));
  t.true(re.test("https://something.example.net/.com/test?abc=123#124"));
  t.false(re.test("https://somethingexample.net/.com/test?abc=123#124"));
});
