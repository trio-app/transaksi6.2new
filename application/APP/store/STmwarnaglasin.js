 Ext.define('Almindo.store.STmwarnaglasin', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmwarnaglasin',
    alias : 'store.STmwarnaglasin',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mwarnaglasin/create',
            read: base_url + 'Mwarnaglasin/read',
            update: base_url + 'Mwarnaglasin/update'
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