Ext.define('Almindo.controller.Ctpackinglist',{
    extend:'Ext.app.ViewController',
    alias:'controller.Ctpackinglist',
    
    init: function (view) {
        
        this.control({
            
            'trickmenu button[pid=new]':{
              click: this.donew
            },
            'trickmenu button[pid=edit]':{
              click: this.dogridtable
            },
            'trickmenu button[pid=save]':{
              click: this.dosave
            },
            'trickmenu button[pid=delete]':{
              click: this.dodelete
            },
            'trickmenu button[pid=refresh]':{
              click: this.dorefresh
            },
            'GRIDtpackinglist_mat button[pid=add_item]':{
                click: this.doshowitem
            },
            'FRMtpackinglist button[pid=add_cust]':{
                click : this.doaddcust
            },
            'GRIDtpackinglist button[pid=add_show]':{
                click : this.doaddshow
            },
            'GRIDmunit ': {
                itemdblclick: this.onRowdblclick
              }
        });
    },
        doaddshow: function(){
                this.getView().add({
                    xtype :'FRMtpackinglist'
                }).show();
        },
        doshowitem:function(){
                this.getView().add({
                    xtype :'WINtitem'
                }).show();
        },
        doaddcust:function(){
                this.getView().add({
                    xtype : 'WINtcustomer'
                }).show();
        },
});