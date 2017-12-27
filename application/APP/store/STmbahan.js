 Ext.define('Almindo.store.STmbahan', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmbahan',
    alias : 'store.STmbahan',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mbahan/create',
            read: base_url + 'Mbahan/read',
            update: base_url + 'Mbahan/update'
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