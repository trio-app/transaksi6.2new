Ext.define('Almindo.view.temp.Bothmenu', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'docked-toolbars',
        alias:'widget.Bothmenu',
        width   : 400,
        items: ['-',{
                xtype:'component',
                html:'Log In : ' + Varconfig.UserLogin
            },'   ','-',{
                xtype:'component',
                html:'Log Date : ' + Varconfig.LoginDate
            },'-'
        ]
        
});