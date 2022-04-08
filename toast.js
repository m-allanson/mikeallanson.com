import { fetchMdxFromDisk, processMdx, sourceMdx } from "@toastdotdev/mdx";
import modifyHeadingAnchors from "./src/utils/source-transforms/modify-heading-anchors.js";

const rehypePlugins = [modifyHeadingAnchors];

export const sourceData = async ({ setDataForSlug }) => {
  const files = await fetchMdxFromDisk({ directory: "./content" });

  const allPostMeta = await Promise.all(
    files.map(async ({ filename, file: content }) => {
      const { content: compiledMdx, data } = await processMdx(content, {
        filepath: filename,
        rehypePlugins,
      });

      const meta = { ...data.exports.meta };

      await setDataForSlug(`/${meta.slug}`, {
        component: {
          mode: "source",
          value: compiledMdx,
        },
        data: meta,
      });

      return { ...meta };
    })
  );

  allPostMeta.sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return db - da;
  });

  await setDataForSlug("/", {
    data: { posts: allPostMeta, pageType: "page" },
  });

  await sourceMdx({
    setDataForSlug,
    directory: "./src/components",
    slugPrefix: "/components",
  });

  return;
};
