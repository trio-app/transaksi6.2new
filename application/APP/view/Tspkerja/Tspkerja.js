Ext.define('Almindo.view.Tspkerja.Tspkerja', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Ctspkerja',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Tspkerja.TABtspkerja',
        'Almindo.view.Tspkerja.FRMtspkerja',
        'Almindo.view.Tspkerja.GRIDtspkerja',
        'Almindo.view.Tspkerja.WINtspkcustomer',
        'Almindo.view.Tspkerja.WINtspkbahan',
        'Almindo.store.STtspkerja',
        'Almindo.model.MODtspkerja',
        'Almindo.view.Mcustomer.GRIDmcustomer',
        'Almindo.store.STmcustomer',
        'Almindo.view.Mbahan.GRIDmbahan',
        'Almindo.store.STmbahan'
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
                        region:'center',
                        xtype:'container',
                        layout:'column',
                        margin:'5 0 5 0',
                        defaultType:'container',
                        items:[{
                            columnWidth: 1/1,
                            padding: '0 5 5 5',
                            items: [{
                                    xtype: 'TABtspkerja'
                            }]
                      }]
                   }
            ]

        });

        this.callParent(arguments);
    }
});