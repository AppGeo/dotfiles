dotfiles
========

Dot files and other defaults.

### Available Defaults

* `.jshintrc` - Default config for [JSHint][jshint], see [available options][jshint-options] for further customization.

### Project Structures

Node related project folder structure for web apps and libraries.

#### Web Application

```
project-root/
|_ client/
|_ server/
|_ static/
|_ dist/
|_ test/
|_ node_modules/
|_ package.json
|_ README.md
|_ .gitignore
|_ ..
```

* client - where client-side source code resides
* server - server source code (run from here)
* static - static assets served to the public
* dist - processed/compiled client-side code (can be wiped and rebuilt)
* test - unit/integration test source

#### Library

```
project-root/
|_ bin/
|_ lib/
|_ dist/
|_ test/
|_ node_modules/
|_ index.js
|_ package.json
|_ README.md
|_ LICENSE.md
|_ .gitignore
|_ ..
```

* bin - optional, used if writing cli library
* lib - library source code
* dist - processed/compiled library code (can be wiped and rebuilt)
* test - unit/integration test source
* index.js - entry point to library

[jshint]: http://www.jshint.com/
[jshint-options]: http://www.jshint.com/docs/options/
