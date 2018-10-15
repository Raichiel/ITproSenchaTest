Ext.define('ArmDeliver.store.Products', {
    extend: 'Ext.data.Store',
    model: "ArmDeliver.model.Product",
    alias: 'store.products',
    autoSync: true,
    autoLoad:true
})
;
