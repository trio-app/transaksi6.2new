 Ext.define('Almindo.store.STmcategory', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmcategory',
    alias : 'store.STmcategory',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mcategory/create',
            read: base_url + 'Mcategory/read',
            update: base_url + 'Mcategory/update'
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