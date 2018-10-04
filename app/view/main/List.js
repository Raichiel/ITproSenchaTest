
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
                        componentCls: 'QGSM-filterField',
                        enableKeyEvents: true,
                        listeners: {
                            keyPress: 'onKeyPress'
                        }
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'ID',
                            name: 'id',
                            minValue:0,
                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false,
                            allowDecimals:false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Название',
                            name: 'name'

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
        {
            text: 'Quantity', dataIndex: 'quantity', flex: 2, renderer: function (val, metaData) {
                if (val === 0) {
                    metaData.tdAttr = 'bgcolor=red';

                }
                return val
            }
        }
    ],

    listeners: {
        itemdblclick: 'onItemDblClicked'
    }
});
