Ext.define('Almindo.view.Tspkerja.FRMtspkerja', {
    extend: 'Ext.form.Panel',
    alias:'widget.FRMtspkerja',
    reference:'FRMtspkerja',
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
            margin: '5 5 5 5'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'spk_id',
                name: 'spk_id',
                width:300,
                labelWidth:120,
                hidden:true
            },{
                flex: 1,
                xtype: 'textfield',
                fieldLabel: 'No. Document ',
                name: 'spk_doc',
                emptyText: 'Auto Number',
                width: 350,
                allowBlank: false,
                readOnly: true,
                labelWidth: 120,
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                listeners: {
                            afterrender: function(me){
                                    me.focus(true);
                            }
                            }
            },{
                margin: '0 0 0 10',
                action: 'btn_document',
                xtype: 'button',
                tooltip: 'Klik untuk melihat Nomor Document',
                icon: base_url + '/system/images/icons/refresh.gif',
            }]
        },{
            xtype: 'datefield',
            fieldLabel: 'Document Date ',
            name: 'spk_date',
            width: 350,
            labelWidth: 120,
            format: 'Y-m-d',
            //value: new Date()
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 5'
        },
        items: [{
            fieldLabel: 'PO Number ',
            name: 'spk_nopo',
            margin: '5 5 5 5',
            readOnly: false,
            width: 384,
            labelWidth: 120,
            xtype: 'textfield',
            flex: 1
        },{
            name: 'spk_delivery',
            readOnly: false,
            xtype: 'datefield',
            fieldLabel: 'Order Date ',
            width: 350,
            labelWidth: 120,
            flex: 1,
            format: 'Y-m-d',
            //value: new Date()
        },{
            xtype: 'box',
            flex: 1
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 5 5 5',
            flex: 1
        },
        items: [{
            name: 'customer_id',
            xtype: 'hidden',
            fieldLabel: 'customerID'
        },{
            xtype: 'textfield',
            name: 'customer_nama',
            fieldLabel: 'Customer ',
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            width: 384,
            labelWidth: 120,
            readOnly: true
        },{
            icon: base_url + 'system/img/user_add.gif',
            xtype: 'button',
            text: 'Pilih Customer',
            action: 'add_cust',
            flex: 0,
            width: 120,
            margin: '5 10'
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 5 5 5',
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            id: 'bahan_nama',
            name: 'spk_bahannama',
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            width: 925,
            labelWidth: 120,
            fieldLabel: 'Produk ',
            allowBlank: 'false',
            readOnly: true
        },{
            xtype: 'button',
            icon: base_url + 'system/images/icons/produk.png',
            width: 120,
            text: 'Pilih Produk',
            action: 'add_bahan',
            flex: 0,
            margin: '5 10'
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 5',
        defaults: {
            xtype: 'textfield',
            flex: 1,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },
        items: [{
            id: 'bahan_jenis',
            name: 'spk_jenisbahan',
            fieldLabel: 'Jenis Bahan ',
            labelWidth: 120,
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_merk',
            name: 'spk_merk',
            fieldLabel: 'Merk Bahan ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_bentuk',
            name: 'spk_bentuk',
            fieldLabel: 'Bentuk Label ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_porporasi',
            name: 'spk_porporasi',
            fieldLabel: 'Porporasi ',
            margin: '0 0 0 5',
            allowBlank: 'false',
            readOnly: true
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            xtype: 'numberfield',
            flex: 1,
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'box',
                    margin: '5 5',
                    html: 'Ukuran :',
                    width: 120
                },{
                    xtype: 'numberfield',
                    id: 'bahan_ukuranP',
                    name: 'spk_ukuranP',
                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                    flex: 1,
                    margin: '5 0',
                    allowBlank: 'false',
                    readOnly: true
                },{
                    xtype: 'box',
                    html: 'x',
                    margin: '5 5'
                },{
                    xtype: 'numberfield',
                    id: 'bahan_ukuranL',
                    name: 'spk_ukuranL',
                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                    flex: 1,
                    margin: '5 5',
                    allowBlank: 'false',
                    readOnly: true
                }]
            },{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'numberfield',
                    id: 'spk_matapisau',
                    name: 'spk_matapisau',
                    fieldLabel: 'Baris Mata Pisau ',
                    flex: 1,
                    margin: '5 5',
                    allowBlank: 'false',
                },{
                    xtype: 'numberfield',
                    id: 'bahan_gap',
                    name: 'spk_gap',
                    fieldLabel: 'GAP ',
                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                    flex: 1,
                    margin: '5 5',
                    allowBlank: 'false',
                    readOnly: true,
                }]
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5 5',
        defaults: {
            flex: 1,
            xtype: 'numberfield'
        },
        items: [{
            id: 'spk_mataperbaris',
            name: 'spk_mataperbaris',
            labelWidth: 120,
            fieldLabel: 'Baris LINE ',
            allowBlank: 'false',
        },{
            margin: '0 5',
            name: 'spk_jumlahpisau',
            fieldLabel: 'Total Mata Pisau ',
            allowBlank: 'false',
        },{
            xtype: 'box',
            flex: 2
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            xtype: 'textfield',
            flex: 1,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },
        items: [{
            id: 'bahan_warnacetakan',
            name: 'spk_warnacetakan',
            fieldLabel: 'Warna Cetakan ',
            labelWidth: 120,
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_arahgulungan',
            name: 'spk_arahgulungan',
            fieldLabel: 'Arah Gulungan ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_sensor',
            name: 'sensor',
            fieldLabel: 'Sensor ',
            margin: '0 5',
            allowBlank: 'false',
            readOnly: true
        },{
            id: 'bahan_core',
            name: 'spk_core',
            fieldLabel: 'Core ',
            margin: '0 0 0 5',
            allowBlank: 'false',
            readOnly: true
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            flex: 1,
        },
        items: [{
            id: 'spk_qtyorder',
            name: 'spk_qtyorder',
            xtype: 'numberfield',
            labelWidth: 120,
            fieldLabel: 'Qty Order ',
            allowBlank: 'false',
        },{
            id: 'spk_upporder',
            name: 'spk_upporder',
            xtype: 'numberfield',
            fieldLabel: 'Qty UPP ',
            margin: '0 5',
            allowBlank: 'false',
        },{
            id: 'spk_totalorder',
            name: 'spk_totalorder',
            xtype: 'numberfield',
            fieldLabel: 'Qty Total ',
            margin: '0 5',
            allowBlank: 'false',
        },{
            margin: '0 0 0 5',
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                flex: 1,
                labelWidth: 65
            },
            items: [{
                id: 'bahan_qtyname',
                name: 'spk_qtyname',
                xtype: 'textfield',
                fieldLabel: 'Qty ',
                width: 125,
                allowBlank: 'false',
                readOnly: true
            },{
                id: 'bahan_totalname',
                name: 'spk_totalname',
                xtype: 'textfield',
                margin: '0 0 0 5',
                fieldLabel: 'Total ',
                width: 125,
                allowBlank: 'false',
                readOnly: true
            }]
        }]
    },{
        xtype: 'box',
        flex: 1,
        margin: '0 5',
        html: '<h4>BAHAN BAKU YANG DIGUNAKAN</h4>'
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            id: 'bahan_jenis2',
            name: 'bahan_digunakan',
            margin: '0 10',
            width: 380,
            fieldLabel: 'Jenis Bahan ',
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            allowBlank: 'false',
            readOnly: true   
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                flex: 1
            },
            items: [{
                xtype: 'box',
                margin: '5',
                html: 'Ukuran :',
                flex: 0
            },{
                xtype: 'numberfield',
                id: 'ukuranP_digunakan',
                name:'ukuranP_digunakan',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                margin: '0 5',
                width: 120,
                allowBlank: 'false',
                readOnly: true
            },{
                xtype: 'box',
                margin: '5',
                html: 'x',
                flex: 0
            },{
                xtype: 'numberfield',
                name: 'ukuranL_digunakan',
                id: 'ukuranL_digunakan',
                //fieldStyle: 'background-color: #ffa144; background-image: none;',
                width: 120,
                margin: '0 0 0 5',
                allowBlank: 'false',
                value: '1000',
            }]
        },{
            xtype: 'box',
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 5',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'container',
            margin: '0 5',
            layout: 'vbox',
            items: [{
                xtype: 'numberfield',
                id: 'jml_roll',
                name:'jml_roll',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Jumlah Roll ',
                allowBlank: 'false',
                readOnly: true
            },{
                xtype: 'numberfield',
                id: 'total',
                name: 'total',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Total M ',
                allowBlank: 'false',
                readOnly: true,
            },{
                xtype: 'numberfield',
                id: 'total2',
                name: 'total2',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Total M<sup>2</sup> ',
                allowBlank: 'false',
                readOnly: true
            }]
        },{
            xtype: 'container',
            layout: 'vbox',
            margin: '0 134',
            items: [{
                xtype: 'datefield',
                name: 'spk_tglkirim',
                fieldLabel: 'Tanggal Kirim ',
                format: 'Y-m-d',
                width: 325,
                //value: new Date()
            },{
                xtype: 'textfield',
                name: 'spk_nosuratjalan',
                fieldLabel: 'No. Surat Jalan ',
                width: 325
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 10',
        width: 720,
        items: [{
            xtype: 'textareafield',
            name: 'keterangan_digunakan',
            fieldLabel: 'Keterangan ',
            grow: true,
            anchor: '100%',
            flex: 1,
        }]
    }]
});