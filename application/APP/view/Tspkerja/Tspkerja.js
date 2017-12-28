Ext.define('Almindo.view.Tspkerja.Tspkerja', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Ctspkerja',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Tspkerja.FRMtspkerja',
        'Almindo.view.Tspkerja.GRIDtspkerja',
        'Almindo.store.STtspkerja',
        'Almindo.model.MODtspkerja'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Ctspkerja',

    initComponent: function () {

        Ext.apply(this, {
            xtype:'layout-border',
            layout: 'border',
            border:false,
            frame:false,
            bodyBorder: false,

            items: [
                {
                    region: 'north',
                    xtype:'trickmenu'
                },{
                    region: 'center',
                    xtype: 'tabpanel',
                    margin: '5 0 5 0',
                    items: [{
                        xtype: 'FRMtspkerja',
                        title: 'FORM INPUT SURAT PERINTAH KERJA'
                    },{
                        xtype: 'GRIDtspkerja',
                        title: 'LIST DATA SURAT PERINTAH KERJA'
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});