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
            labelWidth: 120,
            format: 'Y-m-d',
            //value: new Date()
        },{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'box',
                flex: 1
            },{
                xtype: 'button',
                text: 'View List Surat Perintah Kerja',
                icon: base_url + 'system/images/icons/grid.png',
                action: 'tabgrid'
            }]
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
            action: 'btn_customer',
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
            action: 'btn_bahan',
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
                     listeners: {
                        change: function(field, newVal, oldVal) {
                            console.log("Calculating");
                            var bahanP = Ext.getCmp('bahan_ukuranP').getValue();
                            var matapisau = Ext.getCmp('spk_matapisau').getValue();
                            var digunakanP = Ext.getCmp('ukuranP_digunakan');

                            var order = Ext.getCmp('spk_qtyorder').getValue();
                            var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                            var gap = Ext.getCmp('bahan_gap').getValue();
                            var total_all = Ext.getCmp('total');

                            if (bahanP > 0 && matapisau <= 1) {
                                digunakanP.setValue( 
                                    bahanP + 1
                                );
                            }
                            else if (bahanP > 0 && matapisau <= 2) {
                                digunakanP.setValue( 
                                   (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 
                                );
                            }
                            else if (bahanP > 0 && matapisau <= 3) {
                                digunakanP.setValue( 
                                   (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 + 0.5
                                );
                            }
                            else if (bahanP > 0 && matapisau <= 4) {
                                digunakanP.setValue( 
                                   (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 + 0.5 + 0.5 
                                );
                            }
                            else if (bahanP > 0 && matapisau <= 5) {
                                digunakanP.setValue( 
                                   (bahanP * matapisau)+ 0.5 + 0.5 + 0.5 + 0.5 + 0.5 + 0.5
                                );
                            }
                            total_all.setValue(
                                    (bahanL + gap) * order / 1000 / matapisau
                                );
                    }  

                  }
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
                    listeners: {
                        change: function(field, newVal, oldVal) {
                            console.log("Calculating");
                            var order = Ext.getCmp('spk_qtyorder').getValue();
                            var upp = Ext.getCmp('spk_upporder').getValue();
                            var mata_pisau = Ext.getCmp('spk_matapisau').getValue();
                            var total = Ext.getCmp('spk_totalorder');

                            var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                            var gap = Ext.getCmp('bahan_gap').getValue();
                            var total_all = Ext.getCmp('total');
                            if (order > 0 && upp > 0 && mata_pisau > 0) {
                                total.setValue( 
                                     order / upp
                                );
                                total_all.setValue(
                                    (bahanL + gap) * order / 1000 / mata_pisau
                                );
                            }

                        }  

                    }
                }]
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            flex: 1,
            xtype: 'numberfield'
        },
        items: [{
            id: 'spk_mataperbaris',
            name: 'spk_mataperbaris',
            fieldLabel: 'Baris LINE ',
            labelWidth: 120,
            allowBlank: 'false',
        },{
            name: 'spk_jumlahpisau',
            fieldLabel: 'Total Mata Pisau ',
            allowBlank: 'false'
        },{
            xtype: 'textfield',
            id: 'bahan_glasin',
            name: 'spk_glasin',
            fieldLabel: 'Warna Glasin',
            allowBlank: 'false',
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        },{
            xtype: 'box',
            flex: 1
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
            listeners: {
                change: function(field, newVal, oldVal){
                    console.log("Calculating");
                    var order = Ext.getCmp("spk_qtyorder").getValue();
                    var upp = Ext.getCmp("spk_upporder").getValue();
                    var total = Ext.getCmp("spk_totalorder");
                    var mata_pisau = Ext.getCmp('spk_matapisau').getValue();
                    
                    var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                    var gap = Ext.getCmp('bahan_gap').getValue();
                    var total_all = Ext.getCmp('total');
                    if (order > 0 && upp > 0 && mata_pisau > 0) {
                            total.setValue( 
                                 order / upp
                            );
                            total_all.setValue(
                                (bahanL + gap) * order / 1000 / mata_pisau
                            );
                }
            }
        }
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
                listeners: {
                    change: function(field, newVal, oldVal) {
                        console.log("Calculating");
                        var roll = Ext.getCmp('jml_roll');
                        var total_luas = Ext.getCmp('total2');
                        var total_all = Ext.getCmp('total').getValue();
                        var digunakanP = Ext.getCmp('ukuranP_digunakan').getValue();
                        var digunakanL = Ext.getCmp('ukuranL_digunakan').getValue();

                        if (total_all > 0 && digunakanL > 0 ) {
                                roll.setValue(
                                    Math.ceil(total_all / digunakanL)
                                );

                                total_luas.setValue(
                                    (digunakanP / 1000) * total_all 
                                );
                        }
                    }
                }
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
            defaults: {
                listeners: {
                    change: function(field, newVal, oldVal) {
                        console.log("Calculating");
                        var roll = Ext.getCmp('jml_roll');
                        var total_luas = Ext.getCmp('total2');
                        var total_all = Ext.getCmp('total').getValue();
                        var digunakanP = Ext.getCmp('ukuranP_digunakan').getValue();
                        var digunakanL = Ext.getCmp('ukuranL_digunakan').getValue();
                        
                        if (total_all > 0 && digunakanL > 0) {
                                roll.setValue(
                                    Math.ceil(total_all / digunakanL)
                                );

                                total_luas.setValue(
                                    (digunakanP / 1000) * total_all 
                                );
                        }
                    }
                }
            },
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
            margin: '0 500 0 0',
            flex: 1,
            items: [{
                xtype: 'datefield',
                name: 'spk_tglkirim',
                fieldLabel: 'Tanggal Kirim ',
                format: 'Y-m-d',
                //value: new Date()
            },{
                xtype: 'textfield',
                name: 'spk_nosuratjalan',
                fieldLabel: 'No. Surat Jalan ',
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 10',
        
        items: [{
            xtype: 'textareafield',
            name: 'keterangan_digunakan',
            fieldLabel: 'Keterangan ',
            grow: true,
            anchor: '100%',
            flex: 1,
            width: 720
        },{
            xtype: 'button',
            icon: base_url + 'system/images/icons/produk.png',
            width: 75,
            height: 50,
            text: 'PROSES',
            tooltip: 'Klik untuk memproses pembuatan Produk',
            action: 'btn_proses',
            flex: 0,
            margin: '5 10'
        },{
            layout: 'vbox',
            xtype: 'button',
            icon: base_url + 'system/images/icons/produk.png',
            width: 75,
            height: 50,
            text: 'SELESAI',
            tooltip: 'Klik jika Produk telah di buat',
            action: 'btn_selesai',
            flex: 0,
            margin: '5 10'
        }]
    }]
});