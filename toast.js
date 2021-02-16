import { sourceMdx } from "@toastdotdev/mdx";

export const sourceData = async ({ setDataForSlug }) => {
  const posts = await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/",
  });

  const postMeta = posts
    .map((post) => {
      return { ...post.meta };
    })
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });

  await setDataForSlug("/", {
    data: { posts: postMeta, pageType: "page" },
  });

  return;
};
