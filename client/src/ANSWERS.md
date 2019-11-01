Why would you use class component over function components (removing hooks from the question)?

You might use Class components because you have access to the lifecycle methods from React.Component, have state built in, and has "this". Easier to test.

 Name three lifecycle methods and their purposes.

The render method simply renders your component to the UI
componentDidMount is used to initiate API calls or the use of setState.
componetnDidUpdate is used for updating the DOM in response to prop or state changes. Its invoked soon as update happens.

 What is the purpose of a custom hook?

Custom Hooks allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. Good for handling controlled inputs, or event listeners.

 Why is it important to test our apps?

 Testing is pretty much just used to catch unexpected bugs.