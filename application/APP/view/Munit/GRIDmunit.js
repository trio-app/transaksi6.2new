Ext.define('Almindo.view.Munit.GRIDmunit', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmunit',
    reference:'GRIDmunit',
    title: 'List Data Master Unit',
//            modal: true,
//            width:600,
    heigth:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmunit',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'Name',dataIndex: 'unit_nama',width: 230,filter: 'string',flex: 1},
        {header: 'Description',dataIndex: 'unit_desc',width: 30,filter: 'string',flex: 1}

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
