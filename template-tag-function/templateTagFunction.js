
function html(string) {
  return string[0];
}
function callTemplateTagFunction() {
  return html`The expression 5 &amp;gt; 4 is &amp;quot;true&amp;quot; &amp; 3 &amp;lt; 1 is false`;
}
export {
  callTemplateTagFunction,
};
