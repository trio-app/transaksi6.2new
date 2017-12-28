Ext.define('Almindo.store.STtpackinglist',{
    extend :'Ext.data.Store',
    model  : 'Almindo.model.MODtpackinglist',
    alias  : 'store.STtpackinglist',
    autoLoad : true,
    autoSync: true,
    Proxy: {
        type: 'ajax',
        actionMethods: {create:'POST', read:'POST', update:'POST', destroy:'POST'},
        api:{
            //create: base_url + 'Tpackinglist/create',
            //read  : base_url + 'Tpackinglist/read',
            //update: base_url + 'Tpackinglist/update',
        },
        reader :{
            type:'json',
            rootProperty: 'Rows',
            totalProperty: 'TotalRows',
            successProperty: 'success'
        },
        writer:{
            type: 'json',
            writeAllFields: false
        }
    }
});