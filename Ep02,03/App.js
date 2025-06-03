
import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement(
//     "h1",
//      {id: "heading", xyz:"abc"}, // Attributes
//      "Hello World front React!"  // Children
// );

//Q. How to create nested element in react?
// <div id="parent">
//      <div id="child1">
//          <h1>I am h1 tag</h1>
//          <h2>I am h2 tag</h2>
//      </div>
//      <div id="child2">
//          <h1>I am h1 tag</h1>
//          <h2>I am h2 tag</h2>
//      </div>
// </div>

// To create more children convert third agrument
//into an array

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [React.createElement(
//         "div", 
//         {id: "child1"}, 
//         [React.createElement("h1",{}, "I am h1 tag"),
//          React.createElement("h2",{}, "I am h2 tag")]
//     ),React.createElement(
//         "div", 
//         {id: "child2"}, 
//         [React.createElement("h1",{}, "I am h1 tag"),
//          React.createElement("h2",{}, "I am h2 tag")]
//     )]

// );

// What is reactElement ?
// It is just Javascript object;

//console.log(heading); //Return an object

// Creating heading tag in jsx

// const jsxHeading = (
//     <h1 id="heading" className="head"> Namste react by Akshay saini</h1>
// );

// console.log(jsxHeading);

// #Creating React Functional Components

// Must start with capital letter

// Nesting one component with other known as Component composition

const Title = () => (
    <h1>Title using another functinal component</h1>
)

const HeadindComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading1">This is heading1 from React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // It takes js object 

//root.render(parent)

//root.render(jsxHeading)

// render method is responsible of converting this object
//into a h1 tag and put it inside root;


//# Now How to render React Component

root.render(<HeadindComponent/>)


//There is something called jsx
