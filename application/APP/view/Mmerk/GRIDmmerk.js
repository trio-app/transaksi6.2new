Ext.define('Almindo.view.Mmerk.GRIDmmerk', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmmerk',
    reference:'GRIDmmerk',
    title: 'List Data Master Merk',
//            modal: true,
//            width:600,
    height:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmmerk',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'Name',dataIndex: 'merk_nama',width: 230,filter: 'string',flex: 1},
        {header: 'Description',dataIndex: 'merk_desc',width: 30,filter: 'string',flex: 1}

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display"
    }

    
//    listeners:{
//            'afterrender': function(panel){
//                panel.setPosition(250,60);
//            }
//        }
});
