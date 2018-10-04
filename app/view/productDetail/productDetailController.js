Ext.define('ITProSenchaTest.view.productDetail.productDetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productdetail',

    onFormCancel: function (btn) {
        btn.up('window').close()
    },

    onFormSave: function (btn) {
        Ext.Msg.alert("Внимание", "Даные успешно сохранены")
        btn.up('window').close()
    }
})
