Ext.define('Almindo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Almindo.view.temp.Topmenu',
        'Almindo.view.temp.Bothmenu'
    ],
    layout: 'border',
    items: [{
        region: 'north',
        margin: '0 0 3 0',
        xtype:'Topmenu'
    }, {
        itemId:'nav',
        collapsible:true,
        split:true,
        xtype: 'treepanel',
        title: 'Menu',
        margins: '5 0 5 5',
        region: 'west',
        rootVisible: 0,
        width: 200,
        store: Ext.create('Ext.data.TreeStore',{
            root: {
                    expanded: true
            },
            proxy: {
                    type: 'ajax',
                    url: base_url + 'Home/menujs'
            }
        })
        
    }, {
        margin: '3 0 0 0',
        region: 'south',
        xtype:'Bothmenu'
        
    }, {
        region: 'east'
    }, {
        region: 'center',
        itemId:'tabs',
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0
    }]
});