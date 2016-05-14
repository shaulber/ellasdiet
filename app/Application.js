/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('EllasDiet.Application', {
    extend: 'Ext.app.Application',
    
    name: 'EllasDiet',

    stores: [
        // TODO: add global / shared stores here
    ],
    enableQuickTips: true,
    glyphFontFamily: 'FontAwesome',
    defaultToken: 'home',
    launch: function () {
        // TODO - Launch the application
    }
});
