import marked from 'marked';

export const markedOption = marked.setOptions({
  gfm: true,
  breaks: true,
  silent: false,
});

export const markedRender = function() {
  const renderer = new marked.Renderer();

  renderer.heading = function(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `
    <h${level} class="author" href="#${escapedText}">
    ${text}
    </h${level}>
    `;
  };
  renderer.link = function(href, title, text) {
    return `
    <a class="contentLink" href=${href} title=${title}>${text}</a>
    `;
  };
  renderer.table = function(header, body) {
    return `
    <table class="contentTable">
    <thead class="contentThead">${header}</thead>
    <tbody class="contentTbody">${body}</tbody>
    </table>
    `;
  };
  renderer.paragraph = function(text) {
    return `
    <p class="paragraph">${text}</p>
    `;
  };

  return renderer;
};
