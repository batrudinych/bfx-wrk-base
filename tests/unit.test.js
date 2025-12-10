'use strict'

const { test } = require('brittle')
const Base = require('../base')

test('Base unit tests', (t) => {
  t.test('cleanFacName tests', (t) => {
    const b = new Base({}, {})

    t.comment('should replace facility names until facs-')
    t.is(b.cleanFacName('bfx-facs-db-mysql'), 'db-mysql')

    t.comment('should work with scoped packages')
    t.is(b.cleanFacName('@bitfinex/bfx-facs-db-mysql'), 'db-mysql')

    t.comment('should return fullname if package does not have facs')
    t.is(b.cleanFacName('@bitfinex/bfx-db-mysql'), '@bitfinex/bfx-db-mysql')
  })
})
