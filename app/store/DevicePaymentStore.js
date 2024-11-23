Ext.define("MyApp.store.DevicePaymentStore", {
  extend: "Ext.data.Store",
  model: "MyApp.model.DevicePayment",

  proxy: {
    type: "ajax",
    url: "your-api-endpoint", // Replace with your actual API URL
    method: "GET", // HTTP method, could be GET, POST, etc.
    reader: {
      type: "json", // Define the response format
      rootProperty: "data", // Root property in the response
      successProperty: "status", // Success property to check status
      messageProperty: "message", // Message to handle status
    },
    timeout: 30000, // Optional, to handle timeouts
  },

  autoLoad: true, // Automatically load data when the store is created
  listeners: {
    load: function (store, records, successful, operation, eOpts) {
      if (successful) {
        console.log("Data loaded successfully:", records);
      } else {
        console.error("Failed to load data:", operation.getError());
      }
    },
  },
});
