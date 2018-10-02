
Ext.define('ITProSenchaTest.view.productDetail.productDetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productdetail',

    onFormCancel: function () {
     console.log(arguments, this)
    },

    onFormSave: function () {
        console.log(arguments, this)
    }
})
