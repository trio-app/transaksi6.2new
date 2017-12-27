Ext.define('Almindo.view.Mcustomer.FRMmcustomer', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmcustomer',
    reference:'FRMmcustomer',
    bodyPadding: 10,
    frame:true,
    border:false,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 90
        
    },
    items: [{
        xtype: 'fieldset',
        defaultType: 'textfield',
        title:'Form Input Master Customer',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'container',
            layout: 'vbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'customerID',
                name: 'customer_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Nama',
                name: 'customer_nama',
                width:300,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Alamat',
                name: 'customer_alamat',
                width:300,
                allowBlank: true,
                value: '-'
            },{
                fieldLabel: 'Telp.',
                name: 'customer_telp',
                width:300,
                allowBlank: true,
                value: '-'
            },{
                fieldLabel: 'CP',
                name: 'customer_cp',
                width:300,
                allowBlank: true,
                value: '-'
            },{
                fieldLabel: 'Email',
                name: 'customer_email',
                width:300,
                allowBlank: true,
                value: '-'
            }]
        }]
    }]
});