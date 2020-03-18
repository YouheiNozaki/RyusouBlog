import turndown from 'turndown';

// HTMLをmarkdownに変更する処理
const turndownServise = new turndown();

export const renderMarkdown = (post: string) => {
  const md = turndownServise.turndown(post);
  return md;
};
