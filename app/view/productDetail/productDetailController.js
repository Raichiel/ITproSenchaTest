Ext.define('ITProSenchaTest.view.productDetail.productDetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productdetail',

    onFormCancel: function (btn) {
        btn.up('window').close()
    },

    onFormSave: function (btn) {
        var window = btn.up('window');
        var curForm = window.down('form');
        if (curForm.isDirty() && curForm.isValid()) {
            Ext.MessageBox.confirm(
                "Внимание!"
                , "Данные были изменены, продолжить?"
                , function (stance) {
                    if (stance === "yes") {
                        var formRecord = curForm.getForm().getRecord();
                        var fromValues = curForm.getValues();
                        formRecord.set(fromValues)
                    }
                    window.close();
                    Ext.Msg.alert("Внимание", "Даные успешно сохранены")
                })
        } else {
            if(!curForm.isValid()){
                Ext.Msg.alert("Внимание", "Форма невалидна, отправка запроса невозможна")
            } else {
                window.close();
            }


        }
    }
});
