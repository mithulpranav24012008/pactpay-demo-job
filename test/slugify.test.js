import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("lowercases and joins words with dashes", () => assert.equal(slugify("Hello World"), "hello-world"));
test("drops punctuation", () => assert.equal(slugify("PayPal + AI: Hackathon!"), "paypal-ai-hackathon"));
test("trims extra spaces", () => assert.equal(slugify("  many   spaces  "), "many-spaces"));
