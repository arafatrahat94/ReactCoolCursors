# NProgress

A very simple, highly customisable react top progressbar component.

## Installation

Install react-nprogress-latest with npm

```bash
  npm i react-nprogress-latest
```

## Basic usage

To use your library for routing change or as a top progress bar, follow these steps:

1. **For Route Change:**
   If you want to use your library for route changes, you should import it inside your `App.js` file.

```javascript
import NProgress from "react-nprogress-latest";
import "react-nprogress-latest/dist/style.css";
function App() {
  return <NProgress options={{ OnRouteChange: true }} />;
}
```

#### `delayMs` (default: `600ms`)

The `delayMs` prop determines the delay in milliseconds before NProgress completes. This value influences the speed of progress completion when the component is triggered. A higher value for `delayMs` results in a slower progression, while a lower value speeds up the completion.

```js
<NProgress delayMs={800} options={{ OnRouteChange: true }} />
```

2. **As Top Progress Bar:**
   To use your library as a top progress bar in any part of your application, you can import it anywhere in your code where you want it to appear.(Recommended->Header)

```javascript
import NProgress from "react-nprogress-latest";
import "react-nprogress-latest/dist/style.css";
function App() {
  return <NProgress options={{ onSectionScroll: true }} />;
}
```

#### `steps` (default: `9`)

The `steps` prop determines the number of steps for progress completion when the component is triggered. The value of `steps` should not exceed 9, as the calculation (`steps * 0.1`) must not result in a value greater than 1, causing the NProgress to disappear.

```js
<NProgress steps={8} options={{ onRouteChange: true }} />
```

## Configuration

#### `minimum` (default: `0.08`)

Changes the minimum percentage used upon starting.

```js
<NProgress configure={{ minimum: 0.1 }} />
```

#### `template`

You can change the markup using the template option. To keep the progress bar working, make sure to include an element with role='bar' in the [template].

```js
<NProgress configure={{ template: "<div class='....'>...</div>" }} />
```

#### `easing` and `speed` (default: `ease` and `200`)

Adjust animation settings using the easing option (a CSS easing string) and the speed option (in milliseconds).If you are using the options prop, it is recommended not to use the speed option independently.

```js
<NProgress configure={{ easing: "ease", speed: 500 }} />
```

#### `trickle` (default: `true`)

Turn off the automatic incrementing behavior by setting the trickle option to `false`. If you are using the options prop, it is recommended not to use the trickle option independently.

```js
<NProgress configure({ trickle: false })/>
```

#### `trickleSpeed`

Adjust how often to trickle/increment, in milliseconds.If you are using the options prop, it is recommended not to use the trickleSpeed option independently.

```js
<NProgress configure={{ trickleSpeed: 200 }} />
```

#### `showSpinner` (default: `true`)

Turn off loading spinner by setting it to false.

```js
<NProgress configure={{ showSpinner: false }} />
```

#### `parent` (default: `body`)

Specify this option to change the parent container.

```js
<NProgress configure={{ parent: "#container" }} />
```
