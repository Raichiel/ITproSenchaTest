Ext.define('ArmDeliver.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

/*    onItemDblClicked: function (sender, record) {
        Ext.create('ArmDeliver.view.productDetail.productDetail',
            {
/!*                viewModel: {
                    data: {
                        record: undefined
                    }
                },*!/
                record: record,
            })
    },*/
/*    onKeyPress: function (tfield, e, eOpts) {
        if (e.event.key === 'Enter') {
            var form = tfield.up();
            var formValues = form.getValues();
            var store = tfield.up("grid").getStore();

            if (form.isValid()) {
                var filters = []
                if (formValues.id) {
                    filters.push({property: 'id', value: formValues.id, exactMatch: true, disableOnEmpty: true})
                }
                if (formValues.name) {
                    filters.push({property: 'name', value: formValues.name, anyMatch: true, disableOnEmpty: true})
                }
                /!*            for (var key in formValues) {
                                formValues[key] ? filters.push({property: key, value: formValues[key], }) : ''
                            }*!/
                store.clearFilter();
                if(filters.length){
                    store.addFilter(filters)
                }

            }

        }
    },*/


    onLogoutClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});