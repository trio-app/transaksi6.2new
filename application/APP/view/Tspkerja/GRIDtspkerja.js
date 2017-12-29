Ext.define('Almindo.view.Tspkerja.GRIDtspkerja', {
    extend: 'Ext.grid.Panel',
    alias:'widget.GRIDtspkerja',
    reference:'GRIDtspkerja',
//            modal: true,
//            width:600,
    height:400,
    frame:true,
    emptyText: 'No Matching Records',
    stateId: 'stateful-filter-grid',
    store: {
        type: 'STtspkerja',
        autoLoad: true,
        autoDestroy: true
    },
    plugins: ['gridfilters'],
    columns: [
        {xtype: 'rownumberer'},
        {header: 'No. Document',dataIndex: 'spk_doc',width: 230,filter: 'string',flex: 1},
        {header: 'Nama Produk',dataIndex: 'spk_bahannama',width: 30,filter: 'string',flex: 1},
        {header: 'Customer',dataIndex: 'customer_nama',width: 30,filter: 'string',flex: 1},
        {header: 'Date',dataIndex: 'spk_date',width: 30,filter: 'string',flex: 1},
        { header: 'STATUS PEMBUATAN',
            flex: 1,
            dataIndex: 'spk_status',
            width: 30,
            filter: 'string',
            renderer: function(val, metadata, record) {
                  var backgroundColor = null;
                  if (val) {
                      if (val == 'PENDING') {
                          backgroundColor = "red";
                              metadata.style = 'background-color: ' + backgroundColor + ';';
                              return val;
                      }
                      if (val == 'PROSES') {
                          backgroundColor = "yellow";
                          metadata.style = 'background-color: ' + backgroundColor + ';';
                          return val;
                      }
                      if (val == 'SELESAI') {
                          backgroundColor = "green";
                          metadata.style = 'background-color: ' + backgroundColor + ';';
                          return val;
                      }
                      return val;
                  }

              }
          }

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display"
        
    }
});
