
Ext.define('ArmDeliver.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
      //  'ArmDeliver.store.Products',
        'ArmDeliver.view.productDetail.productDetail'
    ],

    store: {
        type: 'products'
    },

    columns: [
        {text: 'Id', dataIndex: 'id', flex: 1},
        {text: 'customerName', dataIndex: 'customerName', flex: 2},
        {text: 'phone', dataIndex: 'phone', flex: 2},
        {text: 'email', dataIndex: 'email', flex: 2},
        {text: 'address', dataIndex: 'address', flex: 2},
        {text: 'deliveryDate', dataIndex: 'deliveryDate', flex: 2},
        {text: 'comment', dataIndex: 'comment', flex: 2},
        {text: 'orderId', dataIndex: 'orderId', flex: 2},
        {text: 'offerAccepted', dataIndex: 'offerAccepted', flex: 2},

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Показаны заказы {0} - {1} из {2}',
        emptyMsg: "Заказы отсутствуют",
        store: {
            type: 'products'
        },
    }
});
