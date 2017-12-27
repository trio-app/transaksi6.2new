Ext.define('Almindo.view.Mitem.FRMmitem', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMmitem',
    reference:'FRMmitem',
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
        title:'Form Input Master Item',
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
                fieldLabel: 'itemID',
                name: 'item_id',
                width:300,
                hidden:true
            },{
                fieldLabel: 'Kode',
                name: 'item_kode',
                width:300,
                allowBlank: false,
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                fieldLabel: 'Nama',
                name: 'item_nama',
                width:300,
                allowBlank: false
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                xtype: 'combo',
                fieldLabel: 'Category',
                name:'item_category',
                displayField: 'category_nama',
                valueField :'category_nama',
                allowBlank: true,
                queryMode:'local',
                forceSelection: true,
                width:220,
                store: {
                    type: 'STmcategory'
                    }
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                xtype: 'combo',
                fieldLabel: 'Unit',
                name:'item_unit',
                displayField: 'unit_nama',
                valueField :'unit_nama',
                allowBlank: false,
                queryMode:'local',
                forceSelection: true,
                width:220,
                store: {
                    type: 'STmunit'
                    }
            }]
        },{
            xtype: 'container',
            layout: 'vbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'Harga Satuan',
                name: 'item_harga',
                width:300,
                allowBlank: false
            },{
                fieldLabel: 'Item Weight',
                name: 'item_weight',
                width:300,
                allowBlank: false,
            },{
                fieldLabel: 'Item Upp',
                name: 'item_upp',
                width:300,
                allowBlank: false,
            }]
        }]
    }]
});