Ext.define('Almindo.view.Mmerk.Mmerk', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmmerk',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mmerk.FRMmmerk',
        'Almindo.view.Mmerk.GRIDmmerk',
        'Almindo.store.STmmerk',
        'Almindo.model.MODmmerk'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmmerk',

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
                                xtype: 'FRMmmerk'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmmerk'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});