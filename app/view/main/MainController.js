Ext.define('ITProSenchaTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemDblClicked: function (sender, record) {
        console.log("arguments")
        Ext.create('ITProSenchaTest.view.productDetail.productDetail',
            {
                viewModel: {
                    data: {
                        record: record
                    }
                }
            })
    },


    onClickButton: function () {
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