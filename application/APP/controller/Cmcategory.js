Ext.define('Almindo.controller.Cmcategory', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Cmcategory',
    
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
            'GRIDmcategory ': {
                itemdblclick: this.onRowdblclick
              }
        });
    },
    dorefresh: function(){
        var form = this.lookupReference('FRMmcategory');
        var grid = this.lookupReference('GRIDmcategory');
        grid.getStore().load();
        form.getForm().reset();
        form.getForm().findField("category_nama").focus(true,300);
    },
    donew: function(button){
        
        var form = this.lookupReference('FRMmcategory');
        form.getForm().reset();
        form.getForm().findField("category_nama").focus(true,300);
        
    },
//    dogridtable:function(){
//        this.getView().add({
//            xtype : 'GRIDmcategory'
//         }).show();
//    },
    onRowdblclick: function(me, record, item, index) {
        var form = this.lookupReference('FRMmcategory');
        form.getForm().setValues(record.getData());
        
    },
    dodelete : function(){
        var form = this.lookupReference('FRMmcategory');
        var grid = this.lookupReference('GRIDmcategory');
        var category_id = form.getForm().findField("category_id").getValue();
        console.log(category_id);
        var userVal = form.getForm().findField("category_nama").getValue();
        if (category_id!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Unit : ' + userVal + '?', 
            function(btnText){
                if(btnText === "yes"){
                    

                    Ext.Ajax.request({
                    url: base_url+'Mcategory/delete',
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
                        form.getForm().findField("category_nama").focus(true,300);
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
        var form = this.lookupReference('FRMmcategory');
      
        if(form.isValid()){
            var st = form.getForm().findField('category_id').getValue();
            if (st===''){
                this.prosesTO(form,base_url+'Mcategory/create');
            }else{
                this.prosesTO(form,base_url+'Mcategory/update');
            }
            
        }
    },
    prosesTO: function(form,linkURL){
        var grid = this.lookupReference('GRIDmcategory');
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
                    form.getForm().findField("category_nama").focus(true,300);
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