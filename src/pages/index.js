import { h } from "preact";

export default ({ posts }) => (
  <div>
    <h1>Notes</h1>
    <ul>
      {posts &&
        posts.map((post, index) => (
          <li key={post.slug}>
            <a
              style={{ padding: "2rem", display: "block" }}
              href={`/${post.slug}`}
            >
              {post.title}
            </a>
          </li>
        ))}
    </ul>
  </div>
);
