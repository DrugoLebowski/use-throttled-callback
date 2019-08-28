useThrottledCallback
====================

Install
-------
With npm

`npm i use-throttled-callback`

With Yarn

`yarn add use-throttled-callback`

Usage
-----

```javascript
import React, { useState } from "react";
import { useThrottledCallback } from "use-throttled-callback";

const FuncComp = () => {
  const [ text, setText, ] = useState("");
  const throttledCallback = useThrottledCallback((e) => {
    setText(e.target.value);
  }, 250);

  return (
    <div>
      <input onChange={throttledCallback} />
      {text}
    </div>
  );
}
```
