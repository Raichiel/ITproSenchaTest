
Ext.define('ITProSenchaTest.view.productDetail.productDetail', {
    extend: 'Ext.window.Window',
    xtype: 'productDetailWindow',

    reference: 'productdetail',

    requires: [
        'ITProSenchaTest.view.productDetail.productDetailController',
        'ITProSenchaTest.view.productDetail.productDetailModel',
        'Ext.form.Panel'
    ],

    controller: 'productdetail',
    viewModel: {
        type: 'productdetail'
    },

    title: 'Информация о товаре',
    minWidth: 300,
    layout: 'fit',
    resizable: true,
    modal: true,
    autoShow:true,
    items: [{
        xtype: 'form',
        border: false,
        bodyPadding: 10,
        layout: 'vbox',
        trackResetOnLoad: true,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },

        items: [{
            xtype: 'displayfield',
            name: 'id',
            fieldLabel: 'Id',
            value:''
          /* bind:'{record.id}',*/
        },{
            xtype: 'displayfield',
            name: 'name',
            fieldLabel: 'Name',
          /*  bind:'{record.name}',*/
        },{
        },{
            xtype: 'displayfield',
            name: 'descr',
            fieldLabel: 'Description',
           /* bind:'{record.descr}',*/
        },{
        },{
            xtype: 'numberfield',
            name: 'price',
            fieldLabel: 'Price',
            minValue:0.01
            /*bind:'{record.price}',*/
        },{
        },{
            xtype: 'numberfield',
            name: 'quantity',
            fieldLabel: 'Quantity',
            decimalPrecision:0,
            minValue:0,
            /*bind:'{record.quantity}',*/
        },{
        }],

        buttons: [{
            text: 'Save',
            handler: 'onFormSave'
        },{
            text: 'Cancel',
            handler: 'onFormCancel'
        } ]
    }],

    listeners: {
        boxready: function (view) {
            view.down('form').loadRecord(view.record);
        }
    }
});
