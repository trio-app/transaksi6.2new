Ext.define('Almindo.view.Tpackinglist.WINtitem',{
    extend: 'Ext.window.Window',
    alias: 'widget.WINtitem',
    reference:'WINtitem',
    title   : 'Pilih Material / Item',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.view.Mitem.GRIDmitem',{
            title: '',
            store: Ext.create('Almindo.store.STmitem')
        })
    ]
});