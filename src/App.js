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

// destructuring used in the func signature below:
const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />

    <p>
      Searching for <strong>{search}</strong>
    </p>
  </div>
);

// destructuring below:
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

// nested destructuring below:
const Item = ({ item: { title, url, author, num_comments, points } }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

export default App;
