# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Increased required ESLint version to `6.0.1`.
- Relaxed identifier length requirement.
  - Object properties are now ignored to permit an easier time using external libraries.
  - Rule downgraded from error to warning.
  - Identifier limit increased from 12 to 20.

## [0.2.0]

### Changed

- Sorting of imports is now case insensitive.

## [0.1.2] - 2019-04-14

### Fixed

- Misconfiguration in `.npmignore`.

## [0.1.1] - 2019-04-13

### Added

- Dog-feeding config against itself.

### Removed

- TypeScript to facilitate more effective dog-fooding.

## [0.1.0] - 2019-03-12

Initial developmental release.
