
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
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },

        items: [{
            xtype: 'displayfield',
            name: 'id',
            fieldLabel: 'Id',
           bind:'{record.id}',
        },{
            xtype: 'displayfield',
            name: 'name',
            fieldLabel: 'Name',
            bind:'{record.name}',
        },{
        },{
            xtype: 'displayfield',
            name: 'descr',
            fieldLabel: 'Description',
            bind:'{record.descr}',
        },{
        },{
            xtype: 'numberfield',
            name: 'price',
            fieldLabel: 'Price',
            bind:'{record.price}',
        },{
        },{
            xtype: 'numberfield',
            name: 'quantity',
            fieldLabel: 'Quantity',
            decimalPrecision:0,
            minValue:0,
            bind:'{record.quantity}',
        },{
        }],

        buttons: [{
            text: 'Save',
            handler: 'onFormSave',
            formbind: true
        },{
            text: 'Cancel',
            handler: 'onFormCancel'
        } ]
    }],
/*
    initConfig: function (record) {
        var view = this;
        console.log("this", this, "arguments", arguments)
        view.down('form').loadRecord(record);
        this.callParent();

    }*/
});
