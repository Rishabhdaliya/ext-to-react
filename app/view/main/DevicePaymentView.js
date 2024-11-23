Ext.define("MyApp.model.DevicePayment", {
  extend: "Ext.data.Model",

  fields: [
    { name: "mdn", type: "string" },
    { name: "eeuDate", type: "string" },
    { name: "edgeAgreementNo", type: "string" },
    { name: "edgeTerm", type: "string" },
    { name: "totalPrincipalUnpaid", type: "number" },
    { name: "edgeUpPercentage", type: "number" },
  ],
});
