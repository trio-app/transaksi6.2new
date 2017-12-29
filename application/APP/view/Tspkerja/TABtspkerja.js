Ext.define('Almindo.view.Tspkerja.TABtspkerja',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TABtspkerja',
    reference:'TABtspkerja',
    activeTab:0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT SURAT PERINTAH KERJA',
        layout: 'anchor',
        items: [{
            xtype: 'FRMtspkerja'
        }]
    }, {
        title: 'LIST DATA SURAT PERITAH KERJA',
        layout: 'anchor',
        items: [{
            xtype: 'GRIDtspkerja',
        }]
    }]
  });