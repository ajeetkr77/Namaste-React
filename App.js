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

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div", 
        {id: "child1"}, 
        [React.createElement("h1",{}, "I am h1 tag"),
         React.createElement("h2",{}, "I am h2 tag")]
    ),React.createElement(
        "div", 
        {id: "child2"}, 
        [React.createElement("h1",{}, "I am h1 tag"),
         React.createElement("h2",{}, "I am h2 tag")]
    )]

);

// What is reactElement ?
// It is just Javascript object;

//console.log(heading); //Return an object

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // It takes js object 

root.render(parent)

// render method is responsible of converting this object
//into a h1 tag and put it inside root;


//There is something called jsx