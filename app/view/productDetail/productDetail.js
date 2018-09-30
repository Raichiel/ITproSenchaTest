
Ext.define('ITProSenchaTest.view.productDetail.productDetail', {
    extend: 'Ext.window.Window',
    xtype: 'productDetailWindow',

    reference: 'productdetail',

    requires: [
        'ITProSenchaTest.view.productDetail.productDetailController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    title: 'Информация о товаре',
    minWidth: 300,
    layout: 'fit',
    resizable: true,
    modal: true,
    autoShow:true,
/*

    height: 500,
    width: 400,*/

    items: [{
        xtype: 'form',
        reference: 'form',
        border: false,
        bodyPadding: 10,
        layout: 'vbox',
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },

        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
           
        }],

        buttons: [{
            text: 'Cancel',
          //  handler: 'onFormCancel'
        }, {
            text: 'Send',
           // handler: 'onFormSubmit'
        }]
    }]
});
