Ext.define('Almindo.view.Mcustomer.GRIDmcustomer', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmcustomer',
    reference:'GRIDmcustomer',
    title: 'List Data Master Customer',
//            modal: true,
//            width:600,
    height:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmcustomer',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'Nama',dataIndex: 'customer_nama',width: 230,filter: 'string',flex: 1},
        {header: 'Alamat',dataIndex: 'customer_alamat',width: 30,filter: 'string',flex: 1},
        {header: 'Telp.',dataIndex: 'customer_telp',width: 30,filter: 'string',flex: 1},
        {header: 'CP.',dataIndex: 'customer_cp',width: 30,filter: 'string',flex: 1},
        {header: 'Email',dataIndex: 'customer_email',width: 30,filter: 'string',flex: 1}

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
