Ext.define("MyApp.view.main.Navbar", {
  extend: "Ext.container.Container",
  xtype: "navbar", // Register the xtype

  // Define the layout and styles
  layout: {
    type: "hbox", // Use a horizontal box layout for alignment
    align: "stretch", // Stretch the items to the full container height
  },

  cls: "navbar-container", // Apply the navbar-container class
  width: "100%", // Set width to 100% for full width
  items: [
    // Left side (Logo)
    {
      xtype: "container",
      layout: "hbox",
      flex: 1, // Take available space
      items: [
        {
          xtype: "component",
          html: "<div class='navbar-logo'>Acss</div>", // Apply navbar-logo class
        },
      ],
    },

    // Right side (Notifications and Profile)
    {
      xtype: "container",
      layout: "hbox",
      cls: "navbar-buttons-container", // Apply navbar-buttons-container class
      items: [
        {
          xtype: "button",
          iconCls: "x-fa fa-bell", // Notification icon
          cls: "navbar-button", // Apply navbar-button class
          handler: function () {
            // Handle notification click
          },
        },
        {
          xtype: "button",
          iconCls: "x-fa fa-user-circle", // Profile icon
          cls: "navbar-button", // Apply navbar-button class
          handler: function () {
            // Handle profile menu
          },
        },
      ],
    },
  ],

  listeners: {
    render: function () {
      var items = this.query(".nav-item");
      Ext.each(items, function (item) {
        item.addCls("nav-item");
      });
    },
  },
});

// Link the external CSS file in your app
Ext.Loader.setConfig({
  enabled: true,
});

Ext.application({
  name: "MyApp",
  appFolder: "app",
  launch: function () {
    // Manually load the CSS file
    Ext.util.CSS.swapStyleSheet("navbarStyles", "app/view/main/Navbar.css");
  },
});
