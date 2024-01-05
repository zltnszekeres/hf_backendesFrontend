export const adatLeiro= {
    sorszam:{
      megjelenes: "No."
    },
    
    title: { 
        megjelenes: "Title",
        tipus: "text",
        placeholder: "Cím",
        pattern: "[A-Z][a-z]{3}",
        value: "Title",
        szoveg: "Legalább 3 betű, a címnek nagybetűvel kell kezdődnie!",
        required: true
      },

      name: { 
        megjelenes: "Name",
        tipus: "text",
        placeholder: "Előadó",
        pattern: "[A-Z][a-z]{3}",
        value: "Name",
        szoveg: "Legalább 3 betű, az előadónak nagybetűvel kell kezdődnie!",
        required: true
      },
    
        date: { 
          megjelenes: "Date",
          tipus: "date",
          placeholder: "Dátum",
          pattern: "",
          value: "2023-01-01",
          szoveg: "",
          required: true,
        },
    };   