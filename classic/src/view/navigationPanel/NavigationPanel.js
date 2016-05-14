
Ext.define('EllasDiet.view.navigationPanel.NavigationPanel', {
    extend: 'Ext.list.Tree',
    require:[
        'EllasDiet.view.navigationPanel.viewModel',
        'EllasDiet.view.navigationPanel.NavigationViewController'
    ],
    viewModel: {
        xclass: 'EllasDiet.view.navigationPanel.viewModel'
    },
    controller: {
        xclass: 'EllasDiet.view.navigationPanel.NavigationViewController'
    },
    ui: 'nav',
    reference: 'classic_src_view_main_treelist',
    bind: '{navItems}'
});