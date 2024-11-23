Ext.define("MyApp.view.main.Modal", {
  singleton: true,
  show: function () {
    var dialog = Ext.create("Ext.window.Window", {
      title: "Device Payment History",
      modal: true,
      closable: true,
      centered: true,
      width: "50%",
      height: 400,
      layout: "fit",
      cls: "device-payment-history",
      items: [
        {
          xtype: "panel",
          html: `
            <h2>Device Payment History Details</h2>
            <p>Here you can view the payment history details11.</p>
          `,
        },
        {
          xtype: "paymentHistoryTable",
          height: 300,
          layout: "fit",
        },
      ],
      buttons: [
        {
          text: "Close",
          handler: function () {
            dialog.close();
          },
        },
      ],
    });

    dialog.show();
  },
});
