import { h } from "preact";

export default ({ posts }) => (
  <div>
    <h1>Notes</h1>
    <ul></ul>
    {posts &&
      posts.map((post, index) => (
        <li key={post.slug}>
          <a href={`/${post.slug}`}>{post.title}</a>
        </li>
      ))}
  </div>
);
