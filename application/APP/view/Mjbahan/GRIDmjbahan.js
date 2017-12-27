Ext.define('Almindo.view.Mjbahan.GRIDmjbahan', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmjbahan',
    reference:'GRIDmjbahan',
    title: 'List Data Master Jenis Bahan',
//            modal: true,
//            width:600,
    height:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmjbahan',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'Name',dataIndex: 'jbahan_nama',width: 230,filter: 'string',flex: 1},
        {header: 'Description',dataIndex: 'jbahan_desc',width: 30,filter: 'string',flex: 1}

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
