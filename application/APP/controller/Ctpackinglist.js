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
            'GRIDmunit ': {
                itemdblclick: this.onRowdblclick
              }
        });
    }
    
});