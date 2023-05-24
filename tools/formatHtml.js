const fs = require('fs');
import { hasCommandFlag } from './utils';

function formatHtml() {
  let formattedHtml;

  fs.readFile('./dist/index.html', 'utf8', (err, htmlString) => {
    if (err) {
      throw err;
    }

    function removeHeaderTags(formattedHtml) {
      return formattedHtml.replace('<head>', '').replace('</head>', '');
    }

    function formatPythonTags(formattedHtml) {
      return formattedHtml.replace(/<!--#/gi, '').replace(/#-->/gi, '');
    }

    function insertPythonTags(formattedHtml) {
      const topPythonTags = {
        oglobo:
          '{% extends "pagina_info.html" %} {% block include_head_template %}',
        epoca:
          '{% extends "epoca/pagina.html" %} {% block include_head_template %}',
      };

      const channel = process.env.INFO_CHANNEL || 'oglobo';

      return `${topPythonTags[channel] + formattedHtml}{% endblock %}`;
    }

    formattedHtml = removeHeaderTags(htmlString);
    if (!hasCommandFlag('--embed')) {
      formattedHtml = formatPythonTags(formattedHtml);
      formattedHtml = insertPythonTags(formattedHtml);
    }

    fs.writeFile('./dist/index.html', formattedHtml, (err) => {
      if (err) {
        console.log(err);
      }

      if (hasCommandFlag('--embed')) {
        fs.readFile('./dist/embed.txt', 'utf8', (err, htmlString) => {
          if (err) {
            throw err;
          }

          const comment = '<!--# {% endblock include_head_template %} #-->';
          const comment2 = '<!--# {% block mainContent %} #-->';

          formattedHtml = htmlString.replace(comment, '').replace(comment2, '');
          formattedHtml = removeHeaderTags(htmlString);

          fs.writeFile('./dist/embed.txt', formattedHtml, (err) => {
            if (err) {
              console.log(err);
            }
          });
        });
      }
    });
  });
}

formatHtml();
