
Ext.define('ITProSenchaTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ITProSenchaTest.store.Products',
    ],

    store: {
        type: 'products'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            componentCls: 'QGSM-ToolbarBottom',
            items: [
                {
                    xtype: 'form',
                    width: '100%',
                    componentCls: 'QGSM-filterForm',
                    defaults: {
                        componentCls: 'QGSM-filterField'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'ID',
                            name: 'id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Название',
                            name: 'name'
                        },
                        {
                            xtype: 'button',
                            text: 'Обновить',
                            handler: function () {
                                console.log("this", this, 'arguments', arguments)
                            }
                        }
                    ]
                }
            ]
        }
    ],

    columns: [
        {text: 'Id', dataIndex: 'id', flex: 2},
        {text: 'Name', dataIndex: 'name', flex: 8},
        {text: 'Descr', dataIndex: 'descr', flex: 15},
        {text: 'Price', dataIndex: 'price', flex: 2},
        {text: 'Quantity', dataIndex: 'quantity', flex: 2}
    ],

    listeners: {
        itemdblclick: 'onItemDblClicked'
    }
});
