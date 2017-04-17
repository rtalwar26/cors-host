// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\" class=\"no-js\"><head></head><body><div style=\"width:400px;height: 500px;margin:200px auto;background: green\" data-conf-id=\"" +
    marko_escapeXmlAttr(data.conf_id) +
    "\" data-screen-name=\"" +
    marko_escapeXmlAttr(data.screen_name) +
    "\" id=\"ce_content\"></div><script src=\"http://localhost:8000/public/app-root-async-2946cb32.js\"></script><script>\n        $_mod.ready();\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/components/taglib/init-components-tag",
      "marko/taglibs/async/await-reorderer-tag"
    ]
  };
