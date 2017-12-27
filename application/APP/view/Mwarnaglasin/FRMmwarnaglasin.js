Ext.define('Almindo.view.Mwarnaglasin.FRMmwarnaglasin', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmwarnaglasin',
    reference:'FRMmwarnaglasin',
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
        title:'Form Input Master Warna Glasin',
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
                fieldLabel: 'warnaglasin_id',
                name: 'warnaglasin_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Warna Glasin Name',
                name: 'warnaglasin_nama',
                width:200,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Warna Glasin Description',
                name: 'warnaglasin_desc',
                width:300,
                allowBlank: true
            }]
        }]
    }]
});