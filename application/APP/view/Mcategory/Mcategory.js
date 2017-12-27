Ext.define('Almindo.view.Mcategory.Mcategory', {
    extend: 'Ext.panel.Panel',
    config: {},
    requires: [
        'Almindo.controller.Cmcategory',
        'Almindo.view.temp.Trickmenu',
        'Almindo.view.Mcategory.FRMmcategory',
        'Almindo.view.Mcategory.GRIDmcategory',
        'Almindo.store.STmcategory',
        'Almindo.model.MODmcategory'
    ],
    constructor: function (config) {
        return this.callParent(arguments);
    },
    //untuk include controller
    controller: 'Cmcategory',

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
                                xtype: 'FRMmcategory'
                        }]
                    },{
                        columnWidth: 2/3,
                        padding: '0 0 5 5',
                        items: [{
                                xtype: 'GRIDmcategory'
                        }]
                    }]
                }
            ]

        });

        this.callParent(arguments);
    }
});