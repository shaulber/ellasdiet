/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('EllasDiet.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    title: 'Navigation',
    requires: [
        'EllasDiet.view.main.MainController',
        'EllasDiet.view.main.MainModel',
        'EllasDiet.view.main.List',
        'EllasDiet.view.navigationPanel.NavigationPanel',
    ],
    layout: 'border',
    header: {
        items:[
            {}
        ]
    },
    items:[
        {
            region: 'west',
            width: 250,
            split: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            scrollable: 'y',
            items: [{
                xclass: 'EllasDiet.view.navigationPanel.NavigationPanel'
            }]
        }
    ]

});
