const test = require('ava')

const {contenanceToSurface} = require('../surfaces')

test('should return square metres', t => {
  const result = contenanceToSurface(42)
  t.is(result, '42 m²')
})

test('should return ares', t => {
  const result = contenanceToSurface(420)
  t.is(result, '4,20 a')
})

test('should return hectares', t => {
  const result = contenanceToSurface(42896)
  t.is(result, '4,29 ha')
})

test('should be a number', t => {
  const result = contenanceToSurface('banana')
  t.is(result, '')
})

test('should not be negative ', t => {
  const result = contenanceToSurface(-1)
  t.is(result, '')
})
