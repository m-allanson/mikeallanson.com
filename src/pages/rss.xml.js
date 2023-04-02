import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  const items = await getCollection("notes").map((note) => ({
    ...note.data,
    pubDate: note.data.date,
    link: `/notes/${note.slug}/`,
  }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
