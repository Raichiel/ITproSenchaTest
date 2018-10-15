Ext.define('ArmDeliver.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'ArmDeliver.view.main.MainController',
        'ArmDeliver.view.main.MainModel',
        'ArmDeliver.view.main.List',
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
            text: 'Logout',
            margin: '10 10',
            handler: 'onLogoutClickButton'
        }]
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
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
        title: 'Заказы',
        xtype: 'mainlist'
    }, {
        title: 'Настройки',
        xtype: 'productdetail'
    }]
});