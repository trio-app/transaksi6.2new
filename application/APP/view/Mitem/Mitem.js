Ext.define('Almindo.view.Mitem.Mitem', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmitem',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mitem.FRMmitem',
        'Almindo.view.Mitem.GRIDmitem',
        'Almindo.store.STmitem',
        'Almindo.model.MODmitem',
        'Almindo.store.STmunit',
        'Almindo.model.MODmunit'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmitem',

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
                                xtype: 'FRMmitem'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmitem'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});