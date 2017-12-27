 Ext.define('Almindo.store.STmitem', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmitem',
    alias : 'store.STmitem',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mitem/create',
            read: base_url + 'Mitem/read',
            update: base_url + 'Mitem/update'
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