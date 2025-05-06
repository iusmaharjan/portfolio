import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const devNotes = await getCollection('devnotes');
  return rss({
    title: 'Ayush Maharjan | Dev Notes',
    description: 'A collection of developer notes that I have documented in hope they will assist others.',
    site: context.site,
    items: devNotes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.date,
      description: note.data.description,
      link: `/dev-notes/${note.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}