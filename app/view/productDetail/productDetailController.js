Ext.define('ArmDeliver.view.productDetail.productDetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productdetail',

    onFormSave: function (btn) {
        Ext.Ajax.request({
            method: 'POST',
            url: "http://localhost:8088/admin/settings",
            jsonData: btn.up("productdetail").getValues(),
            paramsAsJson: true,
            success: function (response) {
                 Ext.Msg.alert("Внимание", "Данные успешно загружены");
            },
            failure: function (response) {
                console.log('Bad request', response);
            }
        });
    },
    onFormBoxReady: function (view) {
        view.load({
            url: "http://localhost:8088/admin/settings/last",
            method: 'GET'
        })
    },
    onFormRefresh: function (btn) {
        this.onFormBoxReady(btn.up("productdetail"))
    }
});
