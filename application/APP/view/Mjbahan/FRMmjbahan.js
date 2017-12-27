Ext.define('Almindo.view.Mjbahan.FRMmjbahan', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmjbahan',
    reference:'FRMmjbahan',
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
        title:'Form Input Master Jenis Bahan',
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
                fieldLabel: 'jbahan_id',
                name: 'jbahan_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Name',
                name: 'jbahan_nama',
                width:300,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Description',
                name: 'jbahan_desc',
                width:300,
                allowBlank: true
            }]
        }]
    }]
});