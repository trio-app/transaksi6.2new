 Ext.define('Almindo.store.STtspkerja', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODtspkerja',
    alias : 'store.STtspkerja',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Tspkerja/create',
            read: base_url + 'Tspkerja/read',
            update: base_url + 'Tspkerja/update'
        },
        reader: {
            type: 'json',
            rootProperty: 'Rows',
            totalProperty: 'TotalRows',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }
  });