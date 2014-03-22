/*global fukidashiGenerator, $*/


window.fukidashiGenerator = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var model = new this.Models.SerifuModel({
            text: 'な、なんだってー'
        });
        var editorView = new this.Views.EditorView({
            el: $('#editorView'),
            model: model
        });
        var fukidashiView = new this.Views.FukidashiView({
            el: $('#fukidashiView'),
            model: model

        });
        editorView.render();
        fukidashiView.render();
    }
};

$(document).ready(function () {
    'use strict';
    fukidashiGenerator.init();
});
