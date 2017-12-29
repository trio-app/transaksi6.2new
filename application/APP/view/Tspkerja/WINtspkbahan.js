Ext.define('Almindo.view.Tspkerja.WINtspkbahan',{
    extend: 'Ext.window.Window',
    alias: 'widget.WINtspkbahan',
    reference: 'WINtspkbahan',
    title   : 'Pilih Produk',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.view.Mbahan.GRIDmbahan',{
            title: '',
            border: 0,
            store: Ext.create('Almindo.store.STmbahan')
        })
    ]
});