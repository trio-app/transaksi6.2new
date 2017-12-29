Ext.define('Almindo.controller.Ctspkerja', {
    extend: 'Ext.app.ViewController',
    alias:'controller.Ctspkerja',
    
    init: function (view) {
        
        this.control({
            
            'trickmenu button[pid=new]':{
              click: this.donew
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
            'trickmenu button[pid=print]':{
              click: this.doPrint 
            },
            'GRIDtspkerja ': {
                itemdblclick: this.onRowdblclick
            },
            'FRMtspkerja button[action=btn_document]': {
                click: this.showDocument
            },
            'FRMtspkerja button[action=btn_customer]': {
                click: this.showCustomer
            },
            'FRMtspkerja button[action=btn_bahan]': {
                click: this.showBahan
            },
            'FRMtspkerja button[action=tabgrid]': {
                click: this.tabgrid
            },
            'FRMtspkerja button[action=btn_proses]': {
                click: this.PROSES
            },
            'FRMtspkerja button[action=btn_selesai]': {
                click: this.SELESAI
            },
            'WINtspkcustomer > GRIDmcustomer': {
                itemdblclick: this.getCustomer
            },
            'WINtspkbahan > GRIDmbahan': {
                itemdblclick: this.getBahan
            }
        });
    },
    showDocument: function(){
        var form = this.lookupReference('FRMtspkerja');
        Ext.Ajax.request({
            url: base_url + 'Tspkerja/autoNum',
            method: 'POST',
            success: function(transport){
                form.getForm().findField("spk_doc").setValue(transport.responseText);
            }
        });   
    },
    showCustomer: function(){
        this.getView().add({
            xtype : 'WINtspkcustomer'
         }).show();
    },
    getCustomer: function(me, record, item, index){
        var win = this.lookupReference('WINtspkcustomer');
        var form = this.lookupReference('FRMtspkerja');
        form.getForm().setValues(record.getData());
        win.close();
    },
    showBahan: function(){
        this.getView().add({
            xtype: 'WINtspkbahan'
        }).show();
    },
    getBahan: function(me, record, item, index){
        var win = this.lookupReference('WINtspkbahan');
        var form = this.lookupReference('FRMtspkerja');
        form.getForm().setValues(record.getData());
        Ext.getCmp('bahan_jenis2').setValue(record.data.bahan_jenis);
        win.close();
    },
    dorefresh: function(){
        var form = this.lookupReference('FRMtspkerja');
        var grid = this.lookupReference('GRIDtspkerja');
        grid.getStore().load();
        form.getForm().reset();
        form.getForm().findField("spk_doc").focus(true,300);
    },
    donew: function(button){
        var tab = this.lookupReference('TABtspkerja');
        var form = this.lookupReference('FRMtspkerja');
        tab.setActiveTab(0);
        form.getForm().reset();
        form.getForm().findField("spk_doc").focus(true,300);
        
    },
    onRowdblclick: function(me, record, item, index) {
        var form = this.lookupReference('FRMtspkerja');
        var tab = this.lookupReference('TABtspkerja');
        form.getForm().setValues(record.getData());
        tab.setActiveTab(0);
        
    },
    tabgrid: function(){
        var tab = this.lookupReference('TABtspkerja');
        tab.setActiveTab(1);
    },
    dodelete : function(){
        var form = this.lookupReference('FRMtspkerja');
        var grid = this.lookupReference('GRIDtspkerja');
        var bahan_id = form.getForm().findField("spk_id").getValue();
        console.log(bahan_id);
        var userVal = form.getForm().findField("spk_doc").getValue();
        if (bahan_id!=='') {
            Ext.MessageBox.confirm('Confirm', 'Delete Data : ' + userVal + '?', 
            function(btnText){
                if(btnText === "yes"){
                    

                    Ext.Ajax.request({
                    url: base_url+'Tspkerja/delete',
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
                this.prosesTO(form,base_url+'Tspkerja/create');
            }else{
                this.prosesTO(form,base_url+'Tspkerja/update');
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
    },
    PROSES: function(button){
        var form = this.lookupReference('FRMtspkerja');
        
        this.prosesTO(form,base_url+'Tspkerja/PROSES');
    },
    SELESAI: function(button){
        var form = this.lookupReference('FRMtspkerja');
        
        this.prosesTO(form,base_url+'Tspkerja/SELESAI');
    },
    doPrint: function(record){
        var form =this.lookupReference('FRMtspkerja');
        var id = form.getForm().findField('spk_id').getValue();
        var previewPrint = Ext.create('Ext.window.Window', {
            title: 'Print Preview',
            width: 1000,
            height: 600,
            modal   : true,
            closeAction: 'hide',
            items: [{ 
                     xtype: 'component',
                     html : '<iframe src="'+ base_url +'Tspkerja/print_file/'+ id +'" width="100%" height="550px"></iframe>',
                  }]
        });
        previewPrint.show();
    }
    
    
});