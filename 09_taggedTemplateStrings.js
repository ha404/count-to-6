var html = (pieces, ...substitutions) => {
  var result = pieces[0];
  for (var i = 0; i < substitutions.length; i++) {
    result += escapeHtmlEntities(substitutions[i]) + pieces[i + 1];
  }
  return result;
};

var escapeHtmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
};

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);