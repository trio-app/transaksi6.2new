Ext.define('Almindo.view.temp.Trickmenu', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'docked-toolbars',
        alias:'widget.trickmenu',
        cls: 'docked-toolbars',
        width   : 400,
        items: [{
                xtype: 'button',
                pid:'bar',
                iconCls: 'fa fa-bars',
                tooltip:'the Form'
            },'-',{
                xtype: 'button',
                pid:'new',
                iconCls: 'fa fa-file-o',
                tooltip:'New Input Data'
            },'-',{
                xtype: 'button',
                pid:'edit',
                iconCls: 'fa fa-edit',
                tooltip:'edit Input Data'
            },'-',{
                xtype: 'button',
                pid:'save',
                iconCls: 'fa fa-save',
                tooltip:'Save Process'
            },'-',{
                xtype: 'button',
                pid:'delete',
                iconCls: 'fa fa-trash-o',
                tooltip:'Delete Data'
                
            },'-',{
                xtype: 'button',
                pid:'gridtable',
                iconCls: 'fa fa-table',
                tooltip:'Show Data Table'
                
            },'->',{
                xtype: 'button',
                pid:'refresh',
                iconCls: 'fa fa-refresh',
                tooltip:'Refresh Page Show'
            },'-',{
                xtype: 'button',
                pid:'import',
                iconCls: 'fa fa-upload',
                tooltip:'Import Data.. Excel File'
            },'-',{
                xtype: 'button',
                pid:'export',
                iconCls: 'fa  fa-file-excel-o',
                tooltip:'Export Data.. Excel File'
                
            }
        ]
        
});