Ext.define('Almindo.controller.Cviewport', {
    extend: 'Ext.app.Controller',
    refs: [
        { ref: 'tabs', selector: 'viewport > #tabs' }
    ],
    init: function () {
        this.control({
            'viewport > #nav': {
                itemclick: this.onMenuItemClick
            }
        });
    },
    onMenuItemClick: function (view, rec) {

        if ( rec.raw.getclick=== false) return;
         
        var id = rec.raw.id;
        var cls = "Almindo.view." + id + '.' + id;
        var tabs = this.getTabs();
        var tab = tabs.child('#' + id);
 
        if (!tab) {
            tab = tabs.add(Ext.create(cls, {
                waitMsgTarget: true,
                itemId: id,
                closable: true,
                title: rec.get('text')
            }));
        }
        tabs.setActiveTab(tab);
    }
    
});