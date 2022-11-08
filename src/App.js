import * as React from "react";

function List(props) {
  return (
    <ul>
      {props.list.map(function (item) {
        return <Item item={item} />;
      })}
    </ul>
  );
}

const Item = (props) => {
  const item = props.item;

  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
};

function Search(props) {
  //added props argument
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event); //this is in the child component we are calling on parent
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // this is another handleChange, but this one will be populated in console, not HTML of the page
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleChange} />{" "}
      {/* added a prop in the parent component*/}
      <hr />
      <List list={stories} />
    </div>
  );
}

export default App;
