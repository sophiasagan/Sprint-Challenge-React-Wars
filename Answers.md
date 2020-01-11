# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React breaks up parts of the application into components. When data/information changes it allows for easy updates. 

1. What does it mean to think in react?

To mentally break down each piece of the the page/app as a component

1. Describe state.

State keeps the data that we store within the app that changes

1. Describe props.

Props pass data form child to parent

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects is anything that is going on outside the function execution. Sync effects in react component with useEffect hook. The hook creates a side effect that is also know as a dependency which is an array that helps the effect stop firing once the optional argument is done, without the dependency we can run into an infinite loop because it will continue to run after every change. 