 Ext.define('Almindo.store.STmmerk', {
    extend  : 'Ext.data.Store',
    model   : 'Almindo.model.MODmmerk',
    alias : 'store.STmmerk',
    autoLoad : true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        actionMethods: {create: 'POST',read: 'POST',update: 'POST',destroy: 'POST'},
        api: {
            create: base_url + 'Mmerk/create',
            read: base_url + 'Mmerk/read',
            update: base_url + 'Mmerk/update'
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