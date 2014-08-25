##Throw a Butt on it!

(This is a fork of [kidicarus 's](https://github.com/kid-icarus) smiley service)

This inserts a random ascii butt face from the
[butts](https://www.npmjs.org/package/butts) module and draws it on an
image! png/jpeg/gif!

This little project is an example express app that abides by the [revist.link spec.](http://revisit.link/spec.html) and glitches out images!

##Installation:
 - `npm install -g nodemon`
 - `npm install`
 - `cp local.json-dist local.json`

##Usage:
 - `npm start`

The API provides a single `/service` endpoint to POST an image to, which
resonds with the image as modifified by [butts-gm](https://github.com/kid-icarus/lysergix-gm).

This also comes with a sample client interface for posting images to, located
at `/`.

By default the app runs on port 8000, this can be configred in local.json.

