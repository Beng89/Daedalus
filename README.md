# Daedalus
A game engine built on top of MonoGame that uses the V8 JavaScript engine to provide support for dynamic scripting.

## What is V8?

V8 is the JavaScript engine that Google created for Chrome. It is lean, fast and powerful. It is also the bsae of the node.js runtime.

## How do I use Daedalus?

At its core, Daedalus uses ClearScript.V8 and as such anything you can do with ClearScript you should be able to do with Deadalus.

Main.cs
```CSharp
using System;
using Daedalus.Scripting;

namespace Test {
    public static class MainClass {
        public static void Main() {
            // Create a ModuleHost
            // root path: Environment.CurrentDirectory/JavaScript
            ModuleHost host = new ModuleHost("JavaScript");

            // path: Environment.CurrentDirectory/JavaScript/main.js
            // 1. Check for cache using the module's absolute path
            //   a. If there is a cached version, return its exports
            //   b. Else, continue
            // 2. Load the source code
            // 3. Compile the source code
            // 4. Wrap the source code in a ModuleInitializerFunction 
            // 5. Execute the ModuleInitializerFunction
            // 6. Cache the module and its exports using the module's absolute path
            System.Dynamic.ExpandoObject exports = host.Require("./main.js");
        }
    }
}
```

main.js

```JavaScript
// This will be exposed to any module that imports this file
exports.three = 3;

// Console has been exposed by Daedalus, so we can easily write to stdout.
// Will write "Hello from main.js" to the console.
Console.WriteLine("Hello from {0}", __filename);
```

- *Note: Daedalus caches module using their absolute path (this allows preservation of state for importation)*
- *Note: Daedalus exposes __filename just as node does*
- *Note: Daedalus exposes __dirname just as node does*

## Requiring Modules

Daedalus uses a module system that is similiar to node. Importing and exporting in Daedalus has the same syntax as node.

```JavaScript
// A relative module
var myModule = require("./my-module.js");
var backwardsModulle = require("../backwards-module.js);


// A module that is in the root of the ModuleHost's directory
var rootModule = require("/root-module.js);

// A module that was installed using npm in the ModuleHost's root directory.
var npmModule = require("npm-module");
```

- *Note: file extensions are required for relative and root modules (future plans may remove the extension)*
- *Note: npm module do not have a file extension. Daedalus will attempt to read a package.json file within the module root, and if that fails will default to module/index.js.*

## npm

Daedalus was built with npm in mind and supports managing modules using npm.

- *Note: Daedalus is not the node runtime environment and as such does not include node's extensive module library.*

## TypeScript Definition File

TypeScript definitions are coming!

The goal is to have them available to not only allow you to build your Adventures using TypeScript but also for intellisense in VisualStudioCode.

## Suggestions?

Do you have suggestions for features? Great, open an issue and let me know!

Did you find a bug? Please open an issue so I can fix it.

## Future Work?

1. Expose more of the MonoGame framework
2. Build and expose functionality for importing raw content (non content-processor)

This project is quite young so there is a lot of work to be done! I am always open to suggestions though, so if you have an idea please open an issue.