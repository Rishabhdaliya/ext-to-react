// File: app.js
Ext.application({
  extend: "MyApp.Application", // Extend the application class

  name: "MyApp", // Set the application name

  requires: [
    "MyApp.*", // Automatically load all classes in the MyApp namespace
  ],

  // Specify the main view (this will load Main.js, which includes the Navbar)
  mainView: "MyApp.view.main.Main", // The view to load when the app starts
});
