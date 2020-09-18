# rainbow-penguin 🌈 🐧

An npm library to send motivational messages to developers

![Library demo running in Docker](https://user-images.githubusercontent.com/7980624/93634676-477c8980-f9f1-11ea-8750-23f5a3c5705c.gif)

## Why?

Code is a stressful and exhausting task. <br>
The nature of the labor requires that we use all our intellectual capacity.<br>
We are constantly challenged, and sometimes we feel lonely.<br>
How cool would it be if your terminal reminded you how important you are? And remind about how beautiful is the work you are doing?<br>
Coding is a difficult task and we deserve to be recognized.<br>
Rainbow Penguin is based on the Motivational Penguin gifs and sends you messages to bring a smile upon your face... just to improve your day a little bit 🙃 🌈

## What is it?

It is a simple library that will send you messages in a random interval between 5 and 25 minutes <br>
The messages will be sent in your terminal <br>
Below we indicate how to ensure that it is only used in the development environment

# Installation

```sh
$ npm i rainbow-penguin
```

# Usage

As most of the nom libraries, you just need to import it in a file

```js
require('rainbow-penguin')();
```

# Enabling/Disabling

This is a suggestion on how to use only in the development environment <br>
You can copy and paste these two lines 🥰

```js
const rainbowPenguin = require('rainbow-penguin');

if (process.env.NODE_ENV == 'development') rainbowPenguin();
```

# Custom

This is a work in progress, soon I hope to be able to add this feature <br>
Or, if you want to collaborate, it's a library open to collaboration
