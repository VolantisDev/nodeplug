## Introduction

Nodeplug is an attempt to create a lightweight, easily-maintainable wrapper around existing Node.js and NPM concepts which allows 
users to install plugins for a Node.js application either via installation from NPM, or via downloading to a specified plugins directory.

Plugins follow a simple API involving exporting a standard signature allowing it to hook into existing points in your application without
being tightly coupled with your application.

Your application can expose a set of core plugins, and all plugins can depend on other plugins, which they will receive via dependency
injection and a simple event registration system, which together give you the resources you need without worrying about where they 
come from.

## Status

Nodeplug is under heavy development internally as a core part of ConfigPi. It will be split off into this repository and maintained 
independently soon, but the exact timeline for this isn't yet defined.

Watch out for further status updates and an official release soon!
