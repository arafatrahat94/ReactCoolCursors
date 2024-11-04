# ReactCoolCursors

![Version](https://img.shields.io/npm/v/react-cool-cursors.svg)

A simple npm package for React that offers smooth, customizable cursors.

![Project Logo](./logo.png)

![NPM Downloads](https://img.shields.io/npm/dt/react-cool-cursors.svg) ![Stars](https://img.shields.io/github/stars/arafatrahat94/ReactCoolCursors.svg?style=social)

## Installation

You can install `react-cool-cursors` using npm:

```bash
npm install react-cool-cursors
```

## Cursor Styles

As `react-cool-cursors` expands, you can easily switch between different cursor styles. The current options are:

| Cursor Style    | Import Code                                             | Demo Button                                                       |
| --------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| SimpleCursor    | `import { SimpleCursor } from "react-cool-cursors";`    | [View Demo](./src/Components/SimpleCursor/SimpleCursor.gif)       |
| FluidCursor     | `import { FluidCursor } from "react-cool-cursors";`     | [View Demo](./src/Components/FluidCursor/FluidCursor.gif)         |
| PieCursor       | `import { PieCursor } from "react-cool-cursors";`       | [View Demo](./src/Components/PieCursor/PieCursor.gif)             |
| ElasticCursor   | `import { ElasticCursor } from "react-cool-cursors";`   | [View Demo](./src/Components/ElasticCursor/ELasticCursor.gif)     |
| DonutCursor     | `import { DonutCursor } from "react-cool-cursors";`     | [View Demo](./src/Components/DonutCursor/donutCursor.gif)         |
| CustomPngCursor | `import { CustomPngCursor } from "react-cool-cursors";` | [View Demo](./src/Components/CustomPngCursor/CustomPngCursor.gif) |

### Basic Usage

To use the cursors from the library, follow these steps:

1. **Import the Component**: In your main file (e.g., `App.js` or `index.js`), add the following imports:

```javascript
import { SimpleCursor } from "react-cool-cursors"; // or FluidCursor
import "react-cool-cursors/dist/style.css";
```

2. **Add the Cursor Component**: Place the desired cursor component in your render method:

```javascript
<SimpleCursor />
// or
<FluidCursor />
```

### Customization

You can customize the cursor's appearance using the following attributes:

| Attribute           | Description                                                                          | Default Value                                        |
| ------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `size`              | Set the size of the cursor                                                           | `30`                                                 |
| `color`             | Change the cursor color                                                              | `black`                                              |
| `opacity`           | Adjust the cursor's opacity                                                          | `1`                                                  |
| `border`            | Set the cursor's border using CSS syntax                                             | `none`                                               |
| `TransitionTime`    | Set the cursor's transition time using number values in seconds                      | `0.2`                                                |
| `InnerBorderColor`  | Set the color (its for only pie cursor)                                              | `black`                                              |
| `Icon`              | pass the icon url or location path for `CustomPngCursor` (only for CustomPngCursor ) | `"https://i.ibb.co.com/ts3cf3j/Untitled-design.png"` |
| `hideDefaultCursor` | Set `true` to hide default cursor or `false` to show default cursor                  | `true`                                               |

### Example

Here’s an example of how to use the SimpleCursor with a custom styling:

```javascript
import React from "react";
import { SimpleCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";

const App = () => {
  return (
    <div>
      <SimpleCursor
        size={30} ~*control the cursor overall size*~
        color="red" ~*control or change the bg-color of the cursor*~
        opacity={0.5} ~*control the opacity of the cursor keep value from (0-1)*~
        border="1px dotted blue" ~*border styling and adding*~
        TransitionTime={0.5} ~*control the transition time of cursor overall animation*~
        hideDefaultCursor={false} ~*false means the default cursor will show*~
      />
      {/* Your other components */}
    </div>
  );
};

export default App;
```

## Changing Cursor Types

To change the cursor type in the future, simply import the desired cursor component:

```javascript
import { [NewCursorStyle] } from "react-cool-cursors";
```

Then use it in your component:

```javascript
<NewCursorStyle
  size={30}
  color="red"
  opacity={1}
  border="1px solid green"
  TransitionTime={0.5}
  hideDefaultCursor={false}
/>
```

### Example of Changing Type

For instance, if a new cursor Type called `SparkleCursor` is added:

```javascript
import { SparkleCursor } from "react-cool-cursors";

const App = () => {
  return (
    <div>
      <SparkleCursor
        size={30}
        color="red"
        opacity={1}
        border="1px solid green"
        TransitionTime={0.5}
        hideDefaultCursor={false}
      />
      {/* Your other components */}
    </div>
  );
};
```

## Conclusion

`react-cool-cursors` provides an easy way to implement customizable cursors in your React applications. Enjoy smooth, interactive cursors that enhance user experience!

## Contributions

If you want to contribute to this project, fork the [repository](https://github.com/arafatrahat94/ReactCoolCursors) and clone it to your local machine. Commit your changes and push your changes to your forked repository. Finally, open a pull request with a detailed description of your changes to the dev branch.I highly appreciate any contributions.

## Issues

If you are facing any problem, feel free to share [here](https://github.com/arafatrahat94/ReactCoolCursors/issues).

## Changelog

```markdown
### [2.1.1] - 2024-11-04

- Elastic Cursor added.
- Added Custom Image cursor.
- Fixed some issues with the pie cursor.
- Updated README.
- Added attribute to control show or hide the default cursor.
- Code optimization done.
- New Todo added.
- Added Donut style cursor.
- Custom Cursor transition time issue solved.

### [2.0.0] - 2024-10-25

- Transition time control attribute added.
- Pie Cursor style added.
- Pie Cursor style code optimization done.

### [1.1.4] - 2024-10-24

- Todo added.
- Fluid cursor design improved.

### [1.1.3] - 2024-10-21

- README instruction improved.
- Code optimization done.

### [1.1.2] - 2024-10-20

- Issue fixed with cursor positioning on fluid cursor.

### [1.1.1] - 2024-10-20

- Switched to TypeScript method so that it works on both JS and TS.
- Added Border Styling Method.
- Improved code for TypeScript.
- Made sure the component works on both TypeScript and JavaScript.

### [1.0.4] - 2024-10-19

- Issue fixed with scroll bar and fluid cursor z-index issue.
- Fixed issues with the fluid cursor props.
- Improved performance for cursor movement tracking.

### [1.0.1] - 2024-10-19

- Enhanced cursor animation on click for both cursor types.
- Fixed issues with cursor position during scaling on click.
- Improved performance for cursor movement tracking.

### [1.0.0] - 2024-10-19

- Initial release of `react-cool-cursors`.
- Added `SimpleCursor` and `FluidCursor` components.
- Included basic usage examples in the documentation.

### [Unreleased]

- Features and improvements are being developed.
```

This version starts with the most recent changes and works backward to the initial release. Let me know if you need further adjustments!

## Contact Me

❒ [Gmail](mailto:arafatrahat94@gmail.com) <br>
❒ [WhatsApp](https://wa.me/+8801980389400) <br>
❒ [Linkedin](https://www.linkedin.com/in/MdArafathHossain)<br>
❒ [FaceBook](https://www.facebook.com/md.arafathhossainrahat)<br>
❒ [Telegram](https://t.me/ArafathSensei94)

## Todo

- ~~Add method to control transition time.~~
- ~~Add Pie cursor style.~~
- ~~Add attribute to hide default cursor.~~
- Add magic color effect on cursor move.
- Add click style effect on cursor click.
- ~~Add Emoji cursor style-> use CustomPngCursor and pass emoji~~
- Add Fire cursor style.
- ~~Add Custom cursor style.~~
- ~~Add Elastic cursor style.~~
- Add click effect for Elastic cursor style.
- Add Bubble effect while cursor moving.
- Add Neon cursor style.
- Add Ripple effect cursor moving.
- Add Snake effect cursor moving.
- ~~Add Donut Cursor Style.~~
- Add click event scale up and opacity reduce

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for more details.

![License](https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg)

---
