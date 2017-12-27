Ext.define('Almindo.view.Mmerk.FRMmmerk', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmmerk',
    reference:'FRMmmerk',
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
        title:'Form Input Master Merk',
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
                fieldLabel: 'merk_id',
                name: 'merk_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Nama',
                name: 'merk_nama',
                width:200,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Description',
                name: 'merk_desc',
                width:300,
                allowBlank: true
            }]
        }]
    }]
});