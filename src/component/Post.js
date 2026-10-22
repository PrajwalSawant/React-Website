import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(`response`, response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(`error`, error);
        this.setState({ error: "error in data" });
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        List Of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default Post;
