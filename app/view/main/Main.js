Ext.define('ITProSenchaTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ITProSenchaTest.view.main.MainController',
        'ITProSenchaTest.view.main.MainModel',
        'ITProSenchaTest.view.main.List',

    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Товары',
            margin: '10 10',
            handler: 'onClickButton'
        },{
            xtype: 'button',
            text: 'Logout',
            margin: '10 10',
            handler: 'onClickButton'
        }]
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'left'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                   // textAlign: 'center',
                    width: 200,
                   // height: 50,
                },
                tall: {
                    iconAlign: 'left',
                    textAlign: 'left'
                }
            }
        }
    },


    items: [{
        title: 'Товары',
        xtype: 'mainlist'
    }]
});