/*global fukidashiGenerator, _, Backbone, JST*/

fukidashiGenerator.Views = fukidashiGenerator.Views || {};

(function () {
    'use strict';

    fukidashiGenerator.Views.FukidashiView = Backbone.View.extend({
        template: JST['app/scripts/templates/fukidashi.ejs'],

        initialize: function () {
            _.bindAll(this, 'textChanged');
            this.listenTo(this.model, 'change:text', this.textChanged);
        },

        textChanged: function () {
            this.render();
        },

        render: function () {
            var contents = this.model.get('text').split(/\r\n|\r|\n/);
            var textWidth = 0;
            _.each(contents, function (text) {
                textWidth = Math.max(textWidth, this.calcTextWidth(text));
            }, this);

            // add suffix for padding-right
            _.each(contents, function (text, index, list) {
                var width = this.calcTextWidth(text);
                if (width < textWidth) {
                    list[index] = text + this.repeatChar('　', textWidth - width);
                }
            }, this);

            textWidth = Math.min(18, textWidth);
            $(this.el).html(this.template({
                top: this.repeatChar('人', textWidth),
                contents: contents,
                bottom: this.repeatChar('^Y', textWidth / 1.15)
            }));
        },

        calcTextWidth: function (text) {
            var width = 0;
            for (var i = 0; i < text.length; i++) {
                var c = text.charCodeAt(i);
                width += ((c < 256 || (c >= 0xff61 && c <= 0xff9f)) ? 0.5 : 1);
            }
            return width;
        },

        repeatChar: function (char, count) {
            var s = '';
            for (var i = 0; i < Math.floor(count + 0.5); i++) {
                s += char;
            }
            return s;
        }
    });

})();
