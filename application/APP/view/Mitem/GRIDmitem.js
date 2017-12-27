Ext.define('Almindo.view.Mitem.GRIDmitem', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmitem',
    reference:'GRIDmitem',
    title: 'List Data Master Item',
//            modal: true,
//            width:600,
    height:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmitem',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'Kode',dataIndex: 'item_kode',width: 230,filter: 'string',flex: 1},
        {header: 'Nama',dataIndex: 'item_nama',width: 30,filter: 'string',flex: 1},
        {header: 'Category',dataIndex: 'item_category',width: 30,filter: 'string',flex: 1},
        {header: 'Unit',dataIndex: 'item_unit',width: 30,filter: 'string',flex: 1},
        {header: 'Harga',dataIndex: 'item_harga',width: 30,filter: 'string',flex: 1},
        {header: 'Upp',dataIndex: 'item_upp',width: 30,filter: 'string',flex: 1},
        {header: 'Berat',dataIndex: 'item_weight',width: 30,filter: 'string',flex: 1}

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
