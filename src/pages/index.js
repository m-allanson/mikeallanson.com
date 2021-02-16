import { h } from "preact";

const variantStyles = [
  "variant-1",
  "variant-2",
  "variant-3",
  "variant-4",
  "variant-5",
];

// loop through an array, reverse direction when array bounds are reached
function* bounce(values) {
  let step = -1;
  let size = values.length;
  let current = 0;

  while (true) {
    if (size < 2) {
      yield values[0];
    } else {
      yield values[current];
      // reverse direction at array boundary
      if (current === size - 1 || current === 0) step *= -1;
      current += step;
    }
  }
}

const styleIterator = bounce(variantStyles);

const IndexPage = ({ posts }) => {
  return (
    <div is="notes">
      <h1>Notes</h1>
      {posts &&
        posts.map((post) => (
          <article is="note-link" key={post.slug}>
            <a class={styleIterator.next().value} href={`/${post.slug}`}>
              <span>{post.title}</span>
            </a>
          </article>
        ))}
    </div>
  );
};

export default IndexPage;
