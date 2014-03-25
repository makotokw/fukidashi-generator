/*global fukidashiGenerator, Backbone, JST*/

fukidashiGenerator.Views = fukidashiGenerator.Views || {};

(function () {
    'use strict';

    fukidashiGenerator.Views.EditorView = Backbone.View.extend({
        events: {
            'change .form-control-serifu': 'textChanged'
        },

        template: JST['app/scripts/templates/editor.ejs'],

        render: function () {
            $(this.el).html(this.template({
                serifu: this.model.attributes
            }));
        },

        textChanged: function () {
            this.model.set('text', this.$('.form-control-serifu').val());
        }
    });

})();
