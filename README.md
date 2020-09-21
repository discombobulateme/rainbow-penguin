# rainbow-penguin 🌈 🐧

An npm library to send motivational messages to developers

![Library demo running in Docker](https://user-images.githubusercontent.com/7980624/93638988-924dcf80-f9f8-11ea-91b2-f1b9c7438fca.gif)

## Why?

Coding is a stressful and exhausting task.

The nature of the work requires that we use all our intellectual capacity.

We are constantly challenged, and sometimes we feel lonely.

How cool would it be if your terminal reminded you how important you are? And remind you about how beautiful the work is that you are doing?

Coding is a difficult task and we deserve to be recognized.

Rainbow Penguin is based on the Motivational Penguin gifs and sends you messages to put a smile upon/bring a smile to your face... just to improve your day a little bit 🙃 🌈

## What is it?

It is a simple library that will send you messages in a random interval between 5 and 25 minutes.

The messages will be sent to your terminal.

Below we indicate how to ensure that it is only used in a development environment.

# Installation

```sh
$ npm i rainbow-penguin
```

# Usage

As with most npm libraries, you just need to import it in a file

```js
require('rainbow-penguin')();
```

# Enabling/Disabling

This is a suggestion on how to use only in the development environment.

You can copy and paste these two lines 🥰

```js
const rainbowPenguin = require('rainbow-penguin');

if (process.env.NODE_ENV == 'development') rainbowPenguin();
```

# Custom

This is a work in progress; soon I hope to be able to add to this feature. Or, if you want to collaborate, it's a library open to collaboration!

# LICENSE

MIT License

Copyright (c) 2020 Paloma Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
