Ext.define('ArmDeliver.model.Product', {
    extend: 'Ext.data.Model',
    fields: [
        'id'
        ,'customerName'
        , 'phone'
        , 'email'
        , 'address'
        , 'deliveryDate'
        , 'comment'
        , 'orderId'
        , 'offerAccepted'
    ],
    proxy: {
        type: 'rest',
        url : 'http://localhost:8088/admin/details/all',
        reader: {
            type: 'json',
            rootProperty: 'content'
        }
    },


});
