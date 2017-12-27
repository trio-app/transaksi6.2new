Ext.define('Almindo.view.Mbahan.Mbahan', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmbahan',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mbahan.FRMmbahan',
        'Almindo.view.Mbahan.GRIDmbahan',
        'Almindo.store.STmbahan',
        'Almindo.model.MODmbahan'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmbahan',

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
                                xtype: 'FRMmbahan'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmbahan'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});