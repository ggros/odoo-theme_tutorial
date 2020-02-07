odoo.define(function (require) {
    var options = require('web_editor.snippets.options');
    console.log(options);
    options.registry.snippet_testimonial_options = options.Class.extend({
        onFocus: function () {
            alert("On focus!")
        },
    });
});