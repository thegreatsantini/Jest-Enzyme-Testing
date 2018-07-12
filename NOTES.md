## Different types of tests

#### Unit tests
- tests one piece (usually one function)
- modular and narrow scope

#### Integration tests
 - tests how multiple units work together
 - concept makes for funny gifs

#### Acceptance or E2E tests
- tests how a user would interact the app

### Primary goal when testing
 - Test behavior, NOT implementation
 - Refactors should not affect tests
--DO NOT want to rewrite tests

### Snapshot testing (Jest)
- A way to freeze a component (compare diff)
- Test fails if there are any changes
- Not TDD
- Brittle
- If used, done along side other tests
