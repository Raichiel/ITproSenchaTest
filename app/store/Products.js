Ext.define('ITProSenchaTest.store.Products', {
    extend: 'Ext.data.Store',
    model: "ITProSenchaTest.model.Product",
    alias: 'store.products',
    data: {
        items: [
            {
                id: 1,
                name: 'Ноутбук Lenovo',
                descr: "Ноутбук ThinkPad T460 14\"FHD(1920x1080),i5-6200U(2,3GHz),4Gb",
                price: 100,
                quantity: 2
            },
            {
                id: 2,
                name: 'Клавиатура OKLICK',
                descr: "Клавиатура OKLICK 140M,  USB, черный",
                price: "50",
                quantity: 8
            },
            {
                id: 3,
                name: 'Сетевой адаптер',
                descr: "Сетевой адаптер WiFi D-Link DWA-582 DWA-582/RU",
                price: "20",
                quantity: 0
            },
        ],
    }
})
;
