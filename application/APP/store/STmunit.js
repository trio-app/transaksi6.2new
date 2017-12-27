 Ext.define('Almindo.store.STmunit', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmunit',
    alias : 'store.STmunit',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Munit/create',
            read: base_url + 'Munit/read',
            update: base_url + 'Munit/update'
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