Ext.define('Almindo.view.Munit.FRMmunit', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmunit',
    reference:'FRMmunit',
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
        title:'Form Input Master Unit',
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
                fieldLabel: 'unit_id',
                name: 'unit_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Name',
                name: 'unit_nama',
                width:300,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Description',
                name: 'unit_desc',
                width:300,
                allowBlank: true
            }]
        }]
    }]
});