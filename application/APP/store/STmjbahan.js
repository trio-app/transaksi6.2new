 Ext.define('Almindo.store.STmjbahan', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmjbahan',
    alias : 'store.STmjbahan',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mjbahan/create',
            read: base_url + 'Mjbahan/read',
            update: base_url + 'Mjbahan/update'
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