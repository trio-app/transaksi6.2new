Ext.define('Almindo.view.Mjbahan.Mjbahan', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmjbahan',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mjbahan.FRMmjbahan',
        'Almindo.view.Mjbahan.GRIDmjbahan',
        'Almindo.store.STmjbahan',
        'Almindo.model.MODmjbahan'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmjbahan',

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
                                xtype: 'FRMmjbahan'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmjbahan'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});