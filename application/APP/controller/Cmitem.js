Ext.define('Almindo.controller.Cmitem', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cmitem',
    
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
            'GRIDmitem ': {
                itemdblclick: this.onRowdblclick
              }
        });
    },
    dorefresh: function(){
        var form = this.lookupReference('FRMmitem');
        var grid = this.lookupReference('GRIDmitem');
        grid.getStore().load();
        form.getForm().reset();
        form.getForm().findField("item_kode").focus(true,300);
    },
    donew: function(button){
        
        var form = this.lookupReference('FRMmitem');
        form.getForm().reset();
        form.getForm().findField("item_kode").focus(true,300);
        
    },
//    dogridtable:function(){
//        this.getView().add({
//            xtype : 'GRIDmitem'
//         }).show();
//    },
    onRowdblclick: function(me, record, item, index) {
        var form = this.lookupReference('FRMmitem');
        form.getForm().setValues(record.getData());
        
    },
    dodelete : function(){
        var form = this.lookupReference('FRMmitem');
        var grid = this.lookupReference('GRIDmitem');
        var item_id = form.getForm().findField("item_id").getValue();
        console.log(item_id);
        var userVal = form.getForm().findField("item_kode").getValue();
        if (item_id!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Item : ' + userVal + '?', 
            function(btnText){
                if(btnText === "yes"){
                    

                    Ext.Ajax.request({
                    url: base_url+'Mitem/delete',
                    method: 'POST',
                    params: form.getForm().getValues() ,
                    success: function(response, o){
                        var data = Ext.decode(response.responseText);
                        Ext.toast({
                            html: data.message,
                            title: 'Notification',
                            width: 200,
                            align: 't'
                        }); 
                        form.getForm().reset();
                        form.getForm().findField("item_kode").focus(true,300);
                        grid.getStore().load();
                    },
                    failure: function(response){
                        
                        Ext.toast({
                            html: 'Please Check Connection',
                            title: 'Notification',
                            width: 200,
                            align: 't'
                        }); 
                    }
                });
                }
            }
            , this);
        }else{
            Ext.MessageBox.alert('Access Denied', 'Please select data', this.showResult, this);    
        }
        
        
    },
    dosave: function(button){
        var form = this.lookupReference('FRMmitem');
      
        if(form.isValid()){
            var st = form.getForm().findField('item_id').getValue();
            if (st===''){
                this.prosesTO(form,base_url+'Mitem/create');
            }else{
                this.prosesTO(form,base_url+'Mitem/update');
            }
            
        }
    },
    prosesTO: function(form,linkURL){
        var grid = this.lookupReference('GRIDmitem');
        form.submit({
                url: linkURL,
                method:'POST',
                waitMsg: 'Wait process...',
                scope:this,
                success: function(fp, action){
                   var data = Ext.decode(action.response.responseText);
                    Ext.toast({
                        html: data.message,
                        title: 'Notification',
                        width: 200,
                        align: 't'
                    });
                    form.getForm().reset();
                    form.getForm().findField("item_kode").focus(true,300);
                    grid.getStore().load();
                },
                failure : function(fp,action)
                {
                    
                    Ext.toast({
                        html: 'Please Check Connection',
                        title: 'Notification',
                        width: 200,
                        align: 't'
                    });  
                }
            });
    }
    
    
});