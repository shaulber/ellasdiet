
Ext.define('EllasDiet.view.navigationPanel.viewModel', {
    extend: 'Ext.app.ViewModel',

    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Home',
                        leaf: 'true',
                        route: 'home'
                    },
                    {
                        text: 'Costumers',
                        iconCls: 'x-fa fa-user',
                        leaf: true,
                        route: 'costumer'
                    },
                    {
                        text: 'Test',
                        route: 'test'
                    }
                ]
            }
        }
    }
});