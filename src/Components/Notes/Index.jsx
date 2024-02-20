// React is a JavaScript library created by Facebook
// React is a User Interface (UI) library
// React is a tool for building UI components


// Creating and nesting components

// React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
// React components are JavaScript functions that return markup:

// Notice that <Button /> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.

// Writing markup with JSX
// The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

// JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

// Adding styles
// In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

// Conditional rendering
// In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

// useState
// useState is a React Hook that lets you add a state variable to your component.

// const [state, setState] = useState(initialState);

// Reference
// useState(initialState)
// Call useState at the top level of your component to declare a state variable.

// Parameters
// initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions.

// The current state. During the first render, it will match the initialState you have passed.
// The set function that lets you update the state to a different value and trigger a re-render.


// UseRef
// useRef is a hook in React that provides a way to create mutable references to elements or values that persist across renders. It's a versatile hook used for various purposes, such as interacting with the DOM or keeping track of values between renders.

// Common Use Cases: useRef is often used for the following purposes:

// DOM Interaction: To directly manipulate or access DOM elements.
// Preserving Values: To preserve values between renders without causing re-renders.
// Managing Focus: For managing focus in input elements.
// Storing Previous Values: For storing the previous value of a state variable to compare it with the current value.
// Overall, useRef is a powerful tool in React for working with both the DOM and state in a way that doesn't trigger re-renders when the referenced value changes, making it efficient for certain use cases.



// useEffect is a fundamental hook in React that allows you to perform side effects in your functional components.Side effects refer to any code that needs to interact with the outside world, Side effects can include data fetching, DOM manipulation, or subscribing to external data sources. It's called "useEffect" because it helps you manage the side effects of your components.

//i, Common Use Cases: useEffect is commonly used for various tasks, including:

// Data fetching and API calls.
// Managing subscriptions, timers, or event listeners.
// Updating the DOM or triggering animations.
// Synchronizing state with external data sources.

// In summary, useEffect is a key hook in React for managing side effects and interactions with the outside world in functional components. It promotes clean and predictable code by controlling when side effects occur and providing mechanisms for cleanup when the component unmounts or dependencies change.

//  Dependencies (Optional): You can also pass a second argument to useEffect in the form of an array of dependencies. These dependencies are variables or values from your component's scope. The effect will only re-run when one or more of these dependencies change. For example:

// useEffect(() => {
//   // Side effect code goes here
// }, [dependency1, dependency2]);


