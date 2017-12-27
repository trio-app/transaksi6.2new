Ext.define('Almindo.view.Munit.Munit', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmunit',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Munit.FRMmunit',
        'Almindo.view.Munit.GRIDmunit',
        'Almindo.store.STmunit',
        'Almindo.model.MODmunit'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmunit',

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
                                xtype: 'FRMmunit'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmunit'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});