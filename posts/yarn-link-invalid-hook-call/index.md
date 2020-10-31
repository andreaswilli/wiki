---
path: /yarn-link-invalid-hook-call
title: "Yarn link: invalid hook call"
date: "2020-10-31"
tags: ["React", "NPM / Yarn", "Coding"]
source: "https://github.com/facebook/react/issues/14257#issuecomment-595183610"
---

## Problem

The following error can occur when linking a React library with a React app using NPM or Yarn if these projects do not use the same React version:

```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```

## Solution

The packages `react` and `react-dom` need to be linked as well:

```shell
cd PACKAGE_YOU_DEBUG_LOCALLY
yarn link
yarn install
cd node_modules/react
yarn link
cd ../../node_modules/react-dom
yarn link
cd YOUR_PROJECT
yarn link PACKAGE_YOU_DEBUG_LOCALLY
yarn link react
yarn link react-dom
```
