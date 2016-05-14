
Ext.define('EllasDiet.view.navigationPanel.NavigationViewController', {
    extend: 'Ext.app.ViewController',

    routes:{
        'home': '',
        'costumer': 'ttt'
    },

    ttt: function(){
        debugger;
    },
    init: function() {
        this.selectionChange();
    },
    selectionChange: function(){
        var controller = this;
        this.getView().on('selectionchange', function(tree,el){
            if(el){
                controller.redirectTo(el.get('route'),false)
            }
        })
    }
});