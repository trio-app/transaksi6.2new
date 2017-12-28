Ext.define('Almindo.view.Tpackinglist.WINtcustomer',{
    extend: 'Ext.window.Window',
    alias: 'widget.WINtcustomer',
    reference:'WINtcustomer',
    title   : 'Pilih Customer',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.view.Mcustomer.GRIDmcustomer',{
            title: '',
            border: 0,
            store: Ext.create('Almindo.store.STmcustomer')
        })
    ]
});