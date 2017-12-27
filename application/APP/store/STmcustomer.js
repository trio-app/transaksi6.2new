 Ext.define('Almindo.store.STmcustomer', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmcustomer',
    alias : 'store.STmcustomer',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mcustomer/create',
            read: base_url + 'Mcustomer/read',
            update: base_url + 'Mcustomer/update'
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