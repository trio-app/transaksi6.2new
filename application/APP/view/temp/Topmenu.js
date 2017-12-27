Ext.define('Almindo.view.temp.Topmenu', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'docked-toolbars',
        alias:'widget.Topmenu',
        width   : 400,
        items: ['->',{
                xtype:'component',
                html:'<b>CV. ALMINDO PRATAMA</b> <br /> Version 1.0'
            },'-'
        ]
        
});