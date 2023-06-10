# @sghere/is-active

The `@sghere/is-active` package provides a React component called `IsActive` that allows you to monitor user activity and trigger a callback function when the user has been inactive for a specified period of time.

## Installation

Install the package using npm:

npm install @sghere/is-active

## Usage

Import the `IsActive` component into your React application and include it in your JSX markup. The component accepts two props: `timer` and `callback`.

```jsx
import React from "react";
import IsActive from "@sghere/is-active";

const Layout = () => {
  const handleInactive = () => {
    // Perform actions when user becomes inactive
    console.log("User is inactive");
    // Additional code...
  };

  return (
    <div>
      {/* Other components */}
      <IsActive timer={60000} callback={handleInactive} />
    </div>
  );
};

export default Layout;
```

In the example above, the IsActive component is used within the Layout component. The timer prop is set to 60000 milliseconds (1 minute), indicating that the user will be considered inactive if there is no mouse movement within this time frame. The callback prop is set to the handleInactive function, which will be executed when the user becomes inactive.

## Functionality

The IsActive component sets up an event listener for the mousemove event using the useEffect hook. This event listener detects when the user moves their mouse. If there is no mouse movement for the specified timer duration, the component considers the user inactive and triggers the callback function.

After executing the callback function, the current timestamp is stored in the browser's localStorage under the key "isactivestate," indicating an update in user activity.

When the component unmounts, the event listener is removed to clean up resources.

## License

This package is MIT licensed.
