Ext.define('Almindo.view.Tspkerja.WINtspkcustomer',{
    extend: 'Ext.window.Window',
    alias: 'widget.WINtspkcustomer',
    reference: 'WINtspkcustomer',
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