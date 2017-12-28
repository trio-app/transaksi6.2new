Ext.define('Almindo.view.Tpackinglist.GRIDtpackinglist_mat',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDtpackinglist_mat',
    reference: 'GRIDtpackinglist_mat',
    height: 240,
    margin:'0 10',
    store:'',
    
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToMoveEditor: 1,
                autoCancel: false,
        })                            
    ],
    viewConfig : {
        listeners : {
        'itemkeydown' : function(view, record, item, index, key) {
            if (key.getKey() == 46) {//the delete button
                var selection = this.getSelectionModel().getSelection();
                var grid = this.up('grid');
                grid.store.remove(selection);
                //delete records
                }  
            }

        },
    },
    initComponent: function(){
        this.tbar= [{
            text: 'Tambah Material',
            pid:'add_item',
            iconCls: '',
            tooltip:'Tambah Material'
        }];
        this.columns= [
            { xtype: 'rownumberer' },
            { header: 'NO SJ', dataIndex: 'trdetail_sjap',
                editor: {
                    allowBlank: false
                }
            },
            { header: 'Item', dataIndex: 'trdetail_item'},    
            { header: 'PO.', dataIndex: 'trdetail_po',
                editor: {
                    allowBlank: false
                }            
            },    
            { header: 'Date', dataIndex: 'trdetail_date', xtype:'datecolumn',  
                editor: {
                  xtype: 'datefield',
                  format: 'Y-m-d'
                },
                renderer : Ext.util.Format.dateRenderer('Y-m-d')
            },    
            { header: 'Qty', dataIndex: 'trdetail_qty', xtype: 'numbercolumn',
                editor: {
                    xtype: 'numberfield',                    
                    allowBlank: false
                }
            },     
            { header: 'Unit', dataIndex: 'trdetail_unit' },     
            { header: 'Price', dataIndex: 'trdetail_price', xtype: 'numbercolumn' },     
            { header: 'Amount', dataIndex: 'trdetail_amount', xtype: 'numbercolumn',
                editor: {
                    xtype: 'numberfield',                    
                    allowBlank: false
                } , 
            },    
            { header: 'Berat Satuan (KG)', dataIndex: 'trdetail_weight', xtype: 'numbercolumn', format: '0.0000'},    
            { header: 'Total Weight (KG)', dataIndex: 'trdetail_weighttotal', xtype: 'numbercolumn',
                editor: {
                    xtype: 'numberfield',                    
                    allowBlank: false
                } , 
            },      
            { header: 'UPP', dataIndex: 'trdetail_upp', xtype: 'numbercolumn'},    
            { header: 'Total Pack', dataIndex: 'trdetail_pack', xtype: 'numbercolumn' ,
                editor: {
                    xtype: 'numberfield',                    
                    allowBlank: false
                }            
            }, 
        ];

        
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Material / Item',
                handler: function () {
                    this.store.remove(this.getSelected());
                    //this.fireEvent('removeitem', this.getSelected())
                },
                scope: this,
                icon: extjs_url + 'resources/css/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.removeitem
            ]
        });
        this.on({
            itemcontextmenu: function (view, rec, node, index, e) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
                return false;
            }
        });                
        this.callParent(arguments);
    },
    getSelected: function () {
         var sm = this.getSelectionModel();
         var rs = sm.getSelection();
         if (rs.length) {
             return rs[0];
         }
         return null;
     }
});