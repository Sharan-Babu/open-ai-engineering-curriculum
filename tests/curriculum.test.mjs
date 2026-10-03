import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { courses, fields, updates } from '../src/curriculum.ts';
const groups = [...courses, ...fields];
const resources = groups.flatMap(group => group.resources);
const audit = JSON.parse(readFileSync(new URL('../docs/resource-link-audit.json', import.meta.url)));

test('curriculum routes are distinct and each has a usable learning sequence', () => {
  assert.equal(courses.length, 6); assert.equal(fields.length, 6);
  assert.equal(new Set(groups.map(group => group.id)).size, groups.length);
  for (const course of courses) { assert.ok(course.prerequisite); assert.ok(course.outcome); assert.ok(course.resources.length >= 3); }
  for (const field of fields) { assert.ok(field.question); assert.ok(field.project); assert.ok(field.resources.length >= 3); }
});
test('every curated resource is a valid, distinct verified AI Engineer link', () => {
  const ids = new Set(resources.map(resource => resource.id));
  assert.equal(ids.size, 43); assert.equal(resources.length, 43);
  for (const resource of resources) {
    assert.match(resource.id, /^[A-Za-z0-9_-]{11}$/);
    assert.ok(resource.title && resource.speaker && resource.note);
    const evidence = audit.resources.find(item => item.id === resource.id);
    assert.ok(evidence, resource.id); assert.equal(evidence.channel, 'AI Engineer');
    assert.equal(new URL(evidence.url).hostname, 'www.youtube.com');
  }
});
test('historical update selections remain part of the actual curriculum', () => {
  assert.equal(updates.length, 5);
  for (const update of updates) assert.ok(resources.some(resource => resource.id === update.resource.id));
});
test('the public page preserves the independence and accreditation boundary', () => {
  const source = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  assert.match(source, /Not affiliated with or accredited by AI Engineer/);
  assert.doesNotMatch(source, /new decisions this month/);
});
