Ext.define('ArmDeliver.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (btn) {

        var loginData = btn.up('form').getValues();

        //Здесь вместо If должен быть нормальный submit()
        if (this.checkLogin(loginData.username) && this.checkPassword(loginData.password)) {

            localStorage.setItem("TutorialLoggedIn", true);

            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });

        } else {

            var errorCmp = btn.previousSibling('[name=loginErrorState]');
            errorCmp.update(errorCmp.invalidText);
        }


    },

    checkLogin: function (userName) {
        return userName === "admin"
    },

    checkPassword: function (password) {
        return password === "padmin"
    }
});