Ext.define("MyApp.controller.NavbarController", {
  extend: "Ext.app.Controller",

  init: function () {
    this.control({
      button: {
        click: this.onProfileClick,
      },
    });
  },

  onProfileClick: function () {
    Ext.Msg.alert("Profile", "Profile icon clicked!");
  },
});
