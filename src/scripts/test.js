/**
 * list view
 * 产品列表页
 **/

define('js/view/list', ['js/util/api/baseApi'], function(Api) {

    var view = Backbone.View.extend({

        initialize: function(options, config) {
            this.render();
        },

        render: function() {
            var self = this;
            self.$el.html(tpl('#view_list_tpl', {

            }));

            $('header.logo').show();
            self._loadData();
        }        
    });

    return view;
});