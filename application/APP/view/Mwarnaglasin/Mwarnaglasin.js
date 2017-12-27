Ext.define('Almindo.view.Mwarnaglasin.Mwarnaglasin', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmwarnaglasin',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mwarnaglasin.FRMmwarnaglasin',
        'Almindo.view.Mwarnaglasin.GRIDmwarnaglasin',
        'Almindo.store.STmwarnaglasin',
        'Almindo.model.MODmwarnaglasin'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmwarnaglasin',

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
                    xtype: 'container',
                    layout: 'column',
                    margin: '5',
                    defaultType: 'container',
                    items: [{
                        columnWidth: 1/3,
                        padding: '0 5 5 5',
                        items: [{
                                xtype: 'FRMmwarnaglasin'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmwarnaglasin'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});