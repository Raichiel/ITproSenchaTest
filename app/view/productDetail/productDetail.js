Ext.define('ArmDeliver.view.productDetail.productDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.productdetail',
    xtype: 'productdetail',
    reference: 'productdetail',

    requires: [
        'ArmDeliver.view.productDetail.productDetailController',
        'ArmDeliver.view.productDetail.productDetailModel',

    ],

    controller: 'productdetail',
    viewModel: {
        type: 'productdetail'
    },
    //url: "http://localhost:8080/admin/settings",
   // method:'GET',
    clientValidation: true,

    padding:'10',

    items: [{
        layout: 'vbox',
        width: 575,
        items: [
            {
                xtype: 'fieldset',
                fieldDefaults: {
                    msgTarget: 'side',
                    labelWidth: 350,
                    labelStyle: 'font-weight:bold',

                },
                padding:'13 10 10 10',
                items: [{
                        xtype: 'numberfield',
                        name: 'minDaysBeforeDelivery',
                        fieldLabel: 'Возможная ближайшая дата доставки ',
                        hideTrigger: true,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false,
                        minValue: 0
                        /* bind:'{record.id}',*/
                    },
                    {
                        xtype: 'timefield',
                        name: 'timeBorder',
                        fieldLabel: 'Максимально возможное время текущего дня ',
                        format:'H:i'
                        /*  bind:'{record.name}',*/
                    },
                    {
                        xtype: 'numberfield',
                        name: 'maxDeliveryInterval',
                        fieldLabel: 'Максимально возможный интервал доставки ',
                        hideTrigger: true,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false,
                        minValue: 0
                        /* bind:'{record.descr}',*/
                    },
                    {
                        xtype: 'numberfield',
                        name: 'maxDailyDeliveries',
                        fieldLabel: 'Максимально возможное кол-во заказов в день ',
                        minValue: 0,
                        hideTrigger: true,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false
                        /*bind:'{record.price}',*/
                    },
                    {
                        xtype: 'datefield',
                        name: 'finalDeliveryDate',
                        fieldLabel: 'Крайняя дата доставки ',
                        format:"Y.m.d"
                        /*bind:'{record.quantity}',*/
                    },
                    {

                        items:[{
                            xtype: 'button',
                            text: 'Сохранить',
                            cls: 'contactBtn',
                            handler: 'onFormSave',
                            margin:10

                        },{
                            xtype: 'button',
                            text: 'Обновить',
                            cls: 'contactBtn',
                            handler: 'onFormRefresh',
                            margin:10
                        }]

                    }]
            }],
    }],

    listeners: {
        boxready:'onFormBoxReady'
    }
});
