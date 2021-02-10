import { sourceMdx } from "@toastdotdev/mdx";

export const sourceData = async ({ setDataForSlug }) => {
  const posts = await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/",
  });

  const postMeta = posts.map((post) => {
    return { ...post.meta };
  });

  await setDataForSlug("/", {
    data: { posts: postMeta, pageType: "page" },
  });

  return;
};
