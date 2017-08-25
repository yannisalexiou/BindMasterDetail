/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'BindMasterDetail.Application',

    name: 'BindMasterDetail',

    requires: [
        // This will automatically load all classes in the BindMasterDetail namespace
        // so that application classes do not need to require each other.
        'BindMasterDetail.*'
    ],

    // The name of the initial view to create.
    mainView: 'BindMasterDetail.view.main.Main'
});
