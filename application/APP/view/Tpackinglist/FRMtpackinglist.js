Ext.define('Almindo.view.Tpackinglist.FRMtpackinglist', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMtpackinglist',
    reference:'FRMtpackinglist',
    frame:true,
    margin: '10 10 0 10',
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 0 5 10'
        },
           items: [{
               xtype: 'container',
               layout: 'hbox',
               items:[{
                    flex : 1,
                    name: 'transaksi_doc',
                    id: 'transaksi_doc',
                    xtype: 'textfield',
                    fieldLabel: 'Document Number ',
                    emptyText: 'Auto Number',
                    readOnly: true,
                    labelWidth:120,
                    fieldStyle: 'background-color: #ffa144; background-image: none;',   
               },{
                    margin: '0 0 0 10',
                    action: 'btn_document',
                    xtype: 'button',
                    tooltip: 'Klik untuk melihat Nomor Document',
                    icon: extjs_url + 'resources/ext-theme-classic/images/grid/refresh.gif',
               }]
           },{
                xtype: 'datefield',
                name: 'transaksi_date',
                fieldLabel: 'Document Date ',
                labelWidth:120,
                value: new Date(),
                format: 'Y-m-d'
           },{
               xtype:'box',
               flex: 1
           }] 
      },{
           xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 10'
        },
        items: [{
            readOnly: true,
            xtype: 'textfield',
            name: 'transaksi_supplier',
            fieldLabel: 'Supplier ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            value: 'ALMINDO PRATAMA.CV'
        },{
            xtype: 'box',
            flex: 2
        }]
      },{
          xtype: 'container',
          layout: 'hbox',
          defaults: {
          flex: 1,
         },
          items:[{
             fieldLabel: 'id',
             name: 'customer_id',
             xtype: 'hidden'     
          },{
             margin: '5 0 5 10',
             name: 'customer_nama',
             allowBlank: false,
             readOnly: true,
             xtype: 'textfield',
             fieldLabel: 'Customer ',
             labelWidth: 120,
             fieldStyle: 'background-color: #ffa144; background-image: none;'  
          },{
             readOnly: true,
             name: 'customer_cp',
             margin: '5 0 5 10',
             xtype: 'textfield',
             fieldLabel: 'Contact Person ',
             labelWidth: 120,
             fieldStyle: 'background-color: #ffa144; background-image: none;'
          },{
             readOnly: true,
             name: 'customer_telp',
             margin: '5 10 5 5',
             xtype: 'textfield',
             fieldLabel: 'Phone ',
             labelWidth: 120,
             fieldStyle: 'background-color: #ffa144; background-image: none;'
          }]  
      },{
           xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 0 5 10'
        },
        items: [{
            readOnly: true,
            name: 'customer_email',
            xtype: 'textfield',
            fieldLabel: 'Email ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        },{
            readOnly: true,
            name: 'customer_alamat',
            flex: 2,
            margin: '5 10',
            xtype: 'textarea',
            fieldLabel: 'Alamat ',
            labelWidth: 120,
            height: 50,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        }]
      },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
            margin: '5 10'
           },
            items: [{
            xtype: 'box',
            flex: 1
            },{
                text: 'View List Data Packing List',
                xtype: 'button',
                pid:'',
                iconCls: '',
                tooltip:'Melihat List Data'
                   
            },{
                text: 'Pilih Customer',
                xtype: 'button',
                pid:'add_cust',
                iconCls: '',
                tooltip:'Pilih Customer'
         }]
      }]
  });
    