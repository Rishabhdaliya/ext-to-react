Ext.define("MyApp.model.DevicePayment", {
  extend: "MyApp.model.Base",

  fields: [
    "status",
    "message",
    {
      name: "devicePaymentResponse",
      type: "auto",
    },
  ],
});

Ext.define("MyApp.model.ServiceHeader", {
  extend: "MyApp.model.Base",

  fields: ["StatusCode", "ErrorMessage"],
});

Ext.define("MyApp.model.EligibilityResponse", {
  extend: "MyApp.model.Base",

  fields: ["programEligibilityIndicator"],
});

Ext.define("MyApp.model.MdnItem", {
  extend: "MyApp.model.Base",

  fields: [
    "mdn",
    "eeuDate",
    "edgeAgreementNo",
    "edgeUpPrincipleUnpaid",
    "edgeTerm",
    "edgeUpPercentage",
    "totalPrincipalUnpaid",
  ],
});

Ext.define("MyApp.model.EdgeEligibilityMtnResponse", {
  extend: "MyApp.model.Base",

  fields: [
    {
      name: "MdnDetailsList",
      type: "auto",
    },
  ],
});
