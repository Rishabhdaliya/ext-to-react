Ext.define("MyApp.view.main.PaymentHistoryTable", {
  extend: "Ext.grid.Panel",

  xtype: "paymentHistoryTable",

  store: Ext.create("MyApp.store.DevicePaymentStore"),

  columns: [
    { text: "MDN", dataIndex: "mdn", flex: 1 },
    { text: "EEU Date", dataIndex: "eeuDate", flex: 1 },
    { text: "Agreement No", dataIndex: "edgeAgreementNo", flex: 1 },
    { text: "Term", dataIndex: "edgeTerm", flex: 1 },
    { text: "Unpaid Principal", dataIndex: "totalPrincipalUnpaid", flex: 1 },
    { text: "Up Percentage", dataIndex: "edgeUpPercentage", flex: 1 },
  ],

  height: 300,
  layout: "fit",
});
