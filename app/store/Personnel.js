Ext.define("MyApp.store.Personnel", {
  extend: "Ext.data.Store",
  alias: "store.personnel",

  fields: ["name", "email", "phone"],

  data: [
    { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "567-890-1234",
    },
  ],
});
