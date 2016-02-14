---
title:     Meet REAPP
subtitle:  the fastest way I know to write a ReactJS Single Page App
author:    Marco Pegoraro
layout:    medium-news
---

I am dealing with [ReactJS][3] since one year. I have run through a great deal 
of _WTFs_ and teached a good deal of people how to avoid the worst ones.

> [REAPP][1] is an opinionated setup served to you as a Yeoman generator;  
> its goal is to have you working on a ReactJS App in 5 minutes from now.

<div class="embed-video">
<iframe width="480" height="360" src="https://www.youtube.com/embed/1cwB47-6OJc" frameborder="0" allowfullscreen></iframe>
</div>

## What's the problem?

When it comes to [ReactJS][3] the most difficult thing to do is **getting it 
up and running with a simple and efficient setup**. It's tough as there is
so much to know and to learn around this argument:

- [ReactJS][3]
- ES5 / JSX / JS6 / [Babel][12]
- [webpack][4] boundling service
- [webpack dev server][10]
- [hot module reload][11]
- [flux][5] / [redux][6]
- [router][7] / url state
- testing: [karma][8] / [mocha][9]
- folder structure

Each of those thing is not a big deal, but when you try to put things together
you have to face poor documentation, incompatible beta versions and _NPM_.



## Why is REAPP that good?

REAPP is an opinionated setup crafted for development speed.

**Do you like to write modern _ES6_?**  
REAPP ships with a complete [Babel][12] configuration for _ES6_ and _ES7_.

**Do you like to write _SASS_ or _LESS_ when it comes to CSS?**  
REAPP let you write modern CSS right out of the box.  
You choose the language!

**Do you need a router?**  
REAPP ships with [React Router][7].  
<small>(but you can also implement your own solution)</small>

**Do you need to handle your app's State?**  
REAPP ships with [Redux][6].  
<small>You can easily access _Redux Devtools_ panel by `Cmd+space`.</small>

**Do you need asynchronous actions?**  
REAPP provides you [services][13].

**Do you need hot module reload?**  
REAPP provides hot module reload for both Javascript and CSS with no configuration overhead.

**Do you need a lightweight production minified bundle?**  
REAPP ships with develompent and production profiles.

**Do you need source maps for both Javascript and CSS?**  
REAPP provides source maps to facilitate debugging.

**Do you need to test your software?**  
REAPP provides you a [KarmaJS][8] environment which supports ES6 and _code coverage_.

**Do you need to proxy to your server side APIs?**  
REAPP let you configure your api end points in [Webpack Dev Server][10].

**Do you need to build your own fake APIs locally?**  
REAPP ships with a simple [ExpressJS][14] setup for this purpose.


## Why should you choose REAPP?

Because I did, and you should do the same ;-)

At the end of the story it just a pre-cooked setup of great open source projects. 
Nothing more than that. **You just shouldn't waste time wiring up those
services** when the job was already done.

> I didn't reinvent the wheel:  
> I based my work upon other people work!

I have been collaborating with different teams in different companies, from
a small 2 devs startup to a big enterprise. I have faced different challenges
like the _"need for speed"_ (in a startup) and long term maintainability.

> REAPP is the outcome of long hours spent doing meetings gathering a large 
> amount of different opinions about "how things should be done".

I think the way you work on a _Single Page App_ in REAPP is simple and well
structured to the point to suit the most of your engineering needs.

**And you should use it as well** :-)




[1]: https://github.com/marcopeg/generator-reapp       "REAPP Source on GitHub"
[2]: http://marcopeg.com/react/reapp/index.html        "REAPP Documentation"
[3]: https://facebook.github.io/react/                 "ReactJS"
[4]: http://webpack.github.io/                         "Webpack Module Bundler"
[5]: https://facebook.github.io/flux/                  "Flux"
[6]: http://redux.js.org/                              "Redux"
[7]: https://github.com/reactjs/react-router           "React Router"
[8]: https://karma-runner.github.io                    "Karma Test Runner"
[9]: https://mochajs.org/                              "MochaJS"
[10]: https://webpack.github.io/docs/webpack-dev-server.html "Webpack Dev Server"
[11]: https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack "Webpack Hot Module Reload"
[12]: https://babeljs.io/                              "ES2015 Transpiler"
[13]: http://marcopeg.com/react/react-redux/services.html "Redux Services"
[14]: http://expressjs.com/                            "ExpressJS"