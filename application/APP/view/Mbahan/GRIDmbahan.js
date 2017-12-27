Ext.define('Almindo.view.Mbahan.GRIDmbahan', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDmbahan',
    reference:'GRIDmbahan',
    title: 'List Data Master Bahan',
//            modal: true,
//            width:600,
    heigth:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STmbahan',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
            {xtype: 'rownumberer'},
            { header: 'Nama Produk', dataIndex: 'bahan_nama', locked: true, filter: 'string'},
            { header: 'Merk', dataIndex: 'bahan_merk', locked: true, filter: 'string'},
            { header: 'Jenis Bahan', dataIndex: 'bahan_jenis', locked: true, filter: 'string'},
            { header: 'GAP', dataIndex: 'bahan_gap', filter: 'string'},
            { header: 'Bentuk Ukuran', dataIndex: 'bahan_bentuk', filter: 'string'},
            { header: 'Warna Glasin', dataIndex: 'bahan_glasin', filter: 'string'},
            { header: 'Ukuran Panjang', dataIndex: 'bahan_ukuranP', filter: 'string'},
            { header: 'Ukuran Lebar', dataIndex: 'bahan_ukuranL', filter: 'string'},
            { header: 'File Name', dataIndex: 'bahan_gambar', filter: 'string'},
            { header: 'PORPORASI', dataIndex: 'bahan_porporasi', filter: 'string'},
            { header: 'Warna Cetakan', dataIndex: 'bahan_warnacetakan', filter: 'string'},
            { header: 'Qty Name', dataIndex: 'bahan_qtyname', filter: 'string'},
            { header: 'Total Name', dataIndex: 'bahan_totalname', filter: 'string'},
            { header: 'Core', dataIndex: 'bahan_core', flex: 1, filter: 'string'},
            { header: 'Arah Gulungan', dataIndex: 'bahan_arahgulungan', filter: 'string'},
            { header: 'Sensor', dataIndex: 'bahan_sensor', filter: 'string'},
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
