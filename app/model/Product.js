Ext.define('ITProSenchaTest.model.Product', {
    extend: 'Ext.data.Model',

  //  entityname: 'model.product',

    fields: [
        'name', 'email', 'phone'
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});
