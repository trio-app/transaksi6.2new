Ext.define('Almindo.view.Mcustomer.Mcustomer', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmcustomer',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mcustomer.FRMmcustomer',
        'Almindo.view.Mcustomer.GRIDmcustomer',
        'Almindo.store.STmcustomer',
        'Almindo.model.MODmcustomer'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmcustomer',

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
                    autoScroll: true,
                    defaultType: 'container',
                    items: [{
                        columnWidth: 1/3,
                        padding: '0 5 5 5',
                        items: [{
                                xtype: 'FRMmcustomer'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmcustomer'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});