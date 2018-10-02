Ext.define('ITProSenchaTest.model.Product', {
    extend: 'Ext.data.Model',
    fields: [
        'id'
        ,'name'
        , 'descr'
        , 'price'
        , 'quantity'
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});
