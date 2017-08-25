/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

//BindMasterDetail.view.main.Main


/**
 * This example shows simple association binding. The orders grid is bound to the orders
 * of the selected customer. The binding statement is able to interpret that orders is an
 * association and can show the orders for our customer.
 */
Ext.define('BindMasterDetail.view.main.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-associations',

    requires: [
        'BindMasterDetail.model.Company'
    ],

    width: 500,
    height: 300,
    referenceHolder: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    viewModel: {
        stores: {
            customers: {
                model: 'Company',
                autoLoad: true
            }
        }
    },
    session: {},

    items: [{
        title: 'All Customers',
        xtype: 'grid',
        bind: '{customers}',
        reference: 'customerGrid',
        flex: 1,
        columns: [{
            text: 'Name', dataIndex: 'name', flex: 1
        }, {
            text: 'Phone', dataIndex: 'phone'
        }]
    }, {
        title: 'Orders',
        xtype: 'grid',
        bind: '{customerGrid.selection.orders}',
        flex: 1,
        margin: '0 0 0 10',
        columns: [{
            text: 'Date', xtype: 'datecolumn', dataIndex: 'date', flex: 1, format: 'Y-m-d'
        }, {
            text: 'Shipped', xtype: 'booleancolumn', dataIndex: 'shipped',
            trueText: '&#x2713;', falseText: '-', align: 'center'
        }],
        viewConfig: {
            emptyText: 'No orders',
            deferEmptyText: false
        }
    }]
});