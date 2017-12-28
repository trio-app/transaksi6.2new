Ext.define('Almindo.view.Tpackinglist.Tpackinglist',{
   extend:'Ext.panel.Panel',
   config: {},
   requires: [
       'Almindo.controller.Ctpackinglist',
       'Almindo.view.temp.Trickmenu',
       'Almindo.view.Tpackinglist.FRMtpackinglist',
       'Almindo.view.Tpackinglist.GRIDtpackinglist',
       'Almindo.view.Tpackinglist.GRIDtpackinglist_mat',
       'Almindo.view.Tpackinglist.TABtpackinglist',
       'Almindo.view.Tpackinglist.WINtitem',
       'Almindo.view.Tpackinglist.WINtcustomer',
       'Almindo.store.STtpackinglist',
       'Almindo.model.MODtpackinglist',
       
   ],
     constructor: function (config) {
        return this.callParent(arguments);      
     },
     //untuk include controller
     controller: 'Ctpackinglist',
     
        initComponent : function (){
            
            Ext.apply(this, { 
                xtype: 'layout-border',
                layout: 'border',
                border: false,
                frame: false,
                
                items: [
                    {
                        region: 'north',
                        xtype:'trickmenu'   
                    },{
                        region:'center',
                        xtype:'container',
                        layout:'column',
                        margin:'5',
                        defaultType:'container',
                        items:[{
                            columnWidth: 1/1,
                            padding: '0 5 5 5',
                            items: [{
                                    xtype: 'TABtpackinglist'
                            }]
                      }]
                   } 
                ]
            });
            this.callParent(arguments);
        }
});