# Contribution Guidelines

## Config file versioning

Each config file must include a `@version` or a similar tag depending on
programming language used. If the language doesn't have a documentation
generation convention, use a commented `@version` tag.

The file version follows [SemVer](https://semver.org/) in following fashion:

1. MAJOR version when introducing incompatible changes, such as updating the
   target tool version
2. MINOR version for backwards compatible changes targeting the current version
   of the tool
3. PATCH version for formatting changes, such as reordering, comments etc.
