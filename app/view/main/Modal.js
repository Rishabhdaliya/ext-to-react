Ext.define("MyApp.view.main.Modal", {
  singleton: true, // Singleton instance of the modal
  show: function () {
    var dialog = Ext.create("Ext.window.Window", {
      title: "Device Payment History",
      modal: true,
      closable: true,
      centered: true,
      width: "50%", // Modal width
      height: 400, // Modal height
      layout: "fit", // Use fit layout for child items
      cls: "device-payment-history", // Custom CSS class (ensure it's defined)
      items: [
        {
          xtype: "panel",
          html: `
            <h2>Device Payment History Details</h2>
            <p>Here you can view the payment history details.</p>
          `,
        },
        {
          xtype: "paymentHistoryTable", // Embed the grid table inside the modal
          height: 300, // Set height for the grid in the modal
        },
      ],
      buttons: [
        {
          text: "Close", // Close button to close the modal
          handler: function () {
            dialog.close(); // Close the modal when clicked
          },
        },
      ],
    });

    dialog.show(); // Show the modal window
  },
});
