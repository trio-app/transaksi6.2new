Ext.define('Almindo.view.Mcategory.FRMmcategory', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmcategory',
    reference:'FRMmcategory',
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
        title:'Form Input Master Category',
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
                fieldLabel: 'category_id',
                name: 'category_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Name',
                name: 'category_nama',
                width:300,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Description',
                name: 'category_desc',
                width:300,
                allowBlank: true
            }]
        }]
    }]
});