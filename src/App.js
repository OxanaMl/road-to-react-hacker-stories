import * as React from "react";

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

  const [searchTerm, setSearchTerm] = React.useState("React");

  // this is another handleChange, but this one will be populated in console, not HTML of the page
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  // filtering which stories to populate:
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleChange} search={searchTerm} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.search}
        onChange={props.onSearch}
      />

      <p>
        Searching for <strong>{props.search}</strong>
      </p>
    </div>
  );
};

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

export default App;
