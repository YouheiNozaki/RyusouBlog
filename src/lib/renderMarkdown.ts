import turndown from 'turndown';

// turndownの設定
const turndownServise = new turndown({
  codeBlockStyle: 'fenced',
  fence: '```',
});

// HTMLをmarkdownに変更する処理
export const renderMarkdown = (markdown: string) => {
  const md = turndownServise.turndown(markdown);
  return md;
};
