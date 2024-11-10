# Node Modules

A module in Node.js is a collection of independent and reusable code that can be imported into any Node.js application. The Node.js runtime software comes with the
V8 JavaScript engine, bundled with a number of core modules, that perform important server-side tasks, such as managing event loop, perform file IO and operating system-specific functions etc.

command that lists all the built-in modules:

```js
const builtinModules = require('repl')._builtinLibs;
console.log(builtinModules);

//output
[
  'assert',             'assert/strict',       'async_hooks',
  'buffer',             'child_process',       'cluster',
  'console',            'constants',           'crypto',
  'dgram',              'diagnostics_channel', 'dns',
  'dns/promises',       'domain',              'events',
  'fs',                 'fs/promises',         'http',
  'http2',              'https',               'inspector',
  'inspector/promises', 'module',              'net',
  'os',                 'path',                'path/posix',
  'path/win32',         'perf_hooks',          'process',
  'punycode',           'querystring',         'readline',
  'readline/promises',  'repl',                'stream',
  'stream/consumers',   'stream/promises',     'stream/web',
  'string_decoder',     'sys',                 'timers',
  'timers/promises',    'tls',                 'trace_events',
  'tty',                'url',                 'util',
  'util/types',         'v8',                  'vm',
  'wasi',               'worker_threads',      'zlib'
]
```

1. http -an interface for creating HTTP servers and making HTTP requests.
2. fs-Provides functions for working with files and directories.
3. path-Provides functions for working with file paths.
4. url-Provides functions for parsing and building URLs.
5. util-Provides utility functions for working with data and strings.
6. crypto-Provides functions for cryptography and secure hashing.
7. process-Provides information about the current Node.js process and allows you to interact with the operating system.
8. net-Provides low-level networking functionality.
9. stream-Provides a basic framework for working with streams of data.
10. events-Provides an event emitter class for custom event handling.
11. console-Provides functions for writing to the console.
12. readline-Provides functions for reading line-by-line from a stream.
