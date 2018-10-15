Ext.define('ArmDeliver.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'ArmDeliver.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
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
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        bbar: [{
            xtype: 'component',
            //reference: 'loginErrorState',
            name:'loginErrorState',
            height: '100%',
            flex: 1,
            invalidText: '<span style="color:red">Логин/пароль не верны</span>'

        },{
            text: 'Login',
            name: 'login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});