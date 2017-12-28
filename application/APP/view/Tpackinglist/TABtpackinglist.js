Ext.define('Almindo.view.Tpackinglist.TABtpackinglist',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TABtpackinglist',
    reference:'TABtpackinglist',
    
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT PACKING LIST',
        layout: 'anchor',
        /*items: [{
            xtype: ''
        },{
            xtype: '',
        }],*/
       /*buttons: [{
            text: 'Save',
            action: 'add'
        },{
            text: 'Reset',
            handler: function(){
                var frm = Ext.getCmp('FRMtpackinglist');
                var grid = Ext.getCmp('GRIDtpackinglist_mat');
                frm.setAction('add'); 
                frm.getForm().reset(); 
                grid.store.reload();
            }
        }]*/
    }, {
        title: 'LIST DATA PACKING LIST',
        layout: 'anchor',
        items: [{
                xtype: '',
                //store: Ext.create('Almindo.Tpackinglist.store.ST_tpackinglist')
        }]
    }]
  });