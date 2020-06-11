useThrottledCallback
====================

Prerequisites
-------------
NPM

`npm install react react-dom`

Yarn

`yarn install use-throttled-callback`

Install
-------
With npm

`npm install use-throttled-callback`

With Yarn

`yarn add use-throttled-callback`

Usage
-----

```typescript
import React, { ChangeEvent, useState } from 'react'
import { useThrottledCallback } from 'use-throttled-callback'

const FuncComp = () => {
  const [text, setText] = useState('')

  const { flush, result: handleThrottledChange } = useThrottledCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
    },
    10000,
    [],
  )

  return (
    <div>
      <button onClick={flush}>Click me to reset the callback throttling!</button>

      <input onChange={handleThrottledChange} />

      {text}
    </div>
  )
}
```
