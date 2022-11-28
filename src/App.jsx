import "./App.css";
import { connect } from "react-redux";

function App({ posts }) {
  console.log(posts);

  return (
    <div className="App">
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
const mapToStateProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapToStateProps)(App);
