Ext.define("MyApp.view.main.Main", {
  extend: "Ext.container.Viewport", // Use a container instead of a tab panel
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "MyApp.view.main.Navbar", // Include the Navbar component
    "MyApp.view.main.MainController",
    "MyApp.view.main.MainModel",
    "MyApp.view.main.Modal", // Include the Modal singleton
  ],

  controller: "main",
  viewModel: "main",

  layout: "vbox",

  items: [
    {
      xtype: "navbar",
    },
    {
      xtype: "button",
      text: "Device Payment History",
      cls: "device-payment-heading",
      handler: function () {
        MyApp.view.main.Modal.show();
      },
      padding: 10,
      margin: 20,
    },
  ],
});
