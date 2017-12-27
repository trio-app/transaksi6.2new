Ext.define('Almindo.view.Mwarnaglasin.GRIDmwarnaglasin', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmwarnaglasin',
    reference:'GRIDmwarnaglasin',
    title: 'List Data Master Warna Glasin',
//            modal: true,
//            width:600,
    height:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmwarnaglasin',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'Name',dataIndex: 'warnaglasin_nama',width: 230,filter: 'string',flex: 1},
        {header: 'Description',dataIndex: 'warnaglasin_desc',width: 30,filter: 'string',flex: 1}

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
