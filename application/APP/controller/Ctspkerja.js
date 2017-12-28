Ext.define('Almindo.controller.Ctspkerja', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Ctspkerja',
    
    init: function (view) {
        
        this.control({
            
            'trickmenu button[pid=new]':{
              click: this.donew
            },
            'trickmenu button[pid=gridtable]':{
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
            'GRIDtspkerja ': {
                itemdblclick: this.onRowdblclick
              }
        });
    },
    dorefresh: function(){
        var form = this.lookupReference('FRMtspkerja');
        var grid = this.lookupReference('GRIDtspkerja');
        grid.getStore().load();
        form.getForm().reset();
        form.getForm().findField("spk_doc").focus(true,300);
    },
    donew: function(button){
        
        var form = this.lookupReference('FRMtspkerja');
        form.getForm().reset();
        form.getForm().findField("spk_doc").focus(true,300);
        
    },
    dogridtable:function(){
        this.getView().add({
            xtype : 'GRIDtspkerja'
         }).show();
    },
    onRowdblclick: function(me, record, item, index) {
        var form = this.lookupReference('FRMtspkerja');
        form.getForm().setValues(record.getData());
        
    },
    dodelete : function(){
        var form = this.lookupReference('FRMtspkerja');
        var bahan_id = form.getForm().findField("spk_id").getValue();
        console.log(bahan_id);
        var userVal = form.getForm().findField("spk_doc").getValue();
        if (bahan_id!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Data : ' + userVal + '?', 
            function(btnText){
                if(btnText === "yes"){
                    

                    Ext.Ajax.request({
                    url: base_url+'Tspk/delete',
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
                        form.getForm().findField("spk_doc").focus(true,300);
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
        var form = this.lookupReference('FRMtspkerja');
      
        if(form.isValid()){
            var st = form.getForm().findField('spk_id').getValue();
            if (st===''){
                this.prosesTO(form,base_url+'Tspk/create');
            }else{
                this.prosesTO(form,base_url+'Tspk/update');
            }
            
        }
    },
    prosesTO: function(form,linkURL){
        var grid = this.lookupReference('GRIDtspkerja');
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
                    form.getForm().findField("spk_doc").focus(true,300);
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