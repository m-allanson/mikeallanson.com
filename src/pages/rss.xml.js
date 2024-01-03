import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  let items = (await getCollection("notes")).sort(
    (a, b) => a.data.date.valueOf() - b.data.date.valueOf(),
  );

  items = items.map((note) => ({
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
