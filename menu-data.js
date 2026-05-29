const MENU = {
  FOOD: {
    label: "Food",
    sections: [
      {
        title: "Piatti Freddi",
        items: [
          {
            name: "Tagliere Misto",
            description: "Selezione di salumi e formaggi Bergamaschi",
            price: "20.00",
          },
          {
            name: "Crudo di Parma e Melone",
            description: "",
            price: "15.00",
          },
          {
            name: "Tartare Manzo",
            description: "Tuorlo e senape al miele",
            price: "15.00",
          },
          {
            name: "Tartare Tonno 🐟",
            description: "Puntarelle e olio al limone",
            price: "16.00",
          },
          {
            name: "Vitello Tonnato",
            description: "",
            price: "14.00",
          },
          {
            name: "Roast-beef",
            description: "Rucola e Grana Padano",
            price: "14.00",
          },
          {
            name: "Bruschetta Pomodori e stracciatella 🍃",
            description: "",
            price: "12.00",
          },
          {
            name: "Provola e verdura alla brace 🍃",
            description: "",
            price: "10.00",
          },
          {
            name: "Caesar Salad",
            description:
              "Pollo alla piastra, pomodori, grana, crostini di pane e salsa Yogurt",
            price: "12.00",
          },
        ],
      },

      {
        title: "Primi Piatti di Pasta fresca",
        items: [
          {
            name: "Casoncelli",
            description: "",
            price: "13.00",
          },
          {
            name: "Scarpinòc 🍃",
            description: "",
            price: "12.00",
          },
          {
            name: "Gnocchi al ragù di Polpo 🐟",
            description: "",
            price: "13.00",
          },
        ],
      },

      {
        title: "Secondi Piatti + patatine*",
        items: [
          {
            name: "Spiedini di carne (2)",
            description: "",
            price: "12.00",
          },
          {
            name: "Salamella",
            description: "",
            price: "10.00",
          },
          {
            name: "Tagliata di bovino adulto",
            description: "",
            price: "22.00",
          },
          {
            name: "Grigliata mista",
            description: "Spiedini, salamella e tagliata",
            price: "24.00",
          },
        ],
      },

      {
        title: "Contorni",
        items: [
          {
            name: "Patatine fritte 🍃",
            description: "",
            price: "6.00",
          },
          {
            name: "Verdure grigliate 🍃",
            description: "",
            price: "6.00",
          },
          {
            name: "Insalata mista 🍃",
            description: "",
            price: "5.00",
          },
        ],
      },

      {
        title: "Polenta",
        items: [
          {
            name: "Polenta lisci 🍃",
            description: "",
            price: "6.00",
          },
          {
            name: "Polenta e formaggi 🍃",
            description: "",
            price: "10.00",
          },
          {
            name: "Polenta e porcini 🍃",
            description: "",
            price: "12.00",
          },
        ],
      },

      {
        title: "Burger Gourmet + patatine*",
        items: [
          {
            name: "Panino con il Polpo 🐟",
            description: "Polpo, stracciatella, pesto di basilico",
            price: "14.00",
          },
          {
            name: "Pulled Chicken",
            description:
              "Straccetti di pollo, Insalata Coleslaw e maionese al limone",
            price: "12.00",
          },
          {
            name: "Hamburger",
            description:
              "Hamburger di manzo, cheddar, pomodoro, Bacon croccante, insalata",
            price: "13.00",
          },
          {
            name: "Pulled Pork",
            description:
              "Carne sfilacciata di maiale, Jalapeno, cipolla caramellata, salsa BBQ",
            price: "13.00",
          },
          {
            name: "Dell’Angolù",
            description:
              "Salamella, peperoni e cipolla grigliate e maionese",
            price: "12.00",
          },
          {
            name: "L’Ortolano 🍃",
            description: "Pomodoro, verdure grigliate e branzi",
            price: "10.00",
          },
        ],
      },

      {
        title: "Dolci",
        items: [
          {
            name: "Cheesecake Frutti di bosco",
            description: "",
            price: "6.00",
          },
          {
            name: "Cheesecake Cioccolato bianco e Pistacchio",
            description: "",
            price: "6.00",
          },
          {
            name: "Dolce del giorno",
            description: "",
            price: "6.00",
          },
        ],
      },
    ],
  },

  DRINK: {
    label: "Drink",
    sections: [
     
      {
        title: "Birra",
        items: [
          {
            name: "Theresianer Lager",
            description: "Alla spina — 0,40 l",
            price: "5.00",
          },
          {
            name: "Via Priula — Bacio",
            description:
              "Birra artigianale Blanche, fresca e agrumata",
            price: "6.00",
          },
          {
            name: "Via Priula — Dubek",
            description:
              "Birra artigianale rossa, con note di malto e caramello",
            price: "6.00",
          },
          {
            name: "Concarena — Barbabianca",
            description: "Birra artigianale Weiss locale",
            price: "6.00",
          },
          {
            name: "Concarena — Roccia",
            description:
              "Birra artigianale APA, luppolata e beverina",
            price: "6.00",
          },
          {
            name: "Ichnusa Non Filtrata",
            description: "In bottiglia — 33 cl",
            price: "4.50",
          },
        ],
      },
      
      {
        title: "Drink",
        items: [
          {
            name: "Spritz",
            description:
              "Aperol, Campari o Select, prosecco, soda, fetta d’arancia",
            price: "7.00",
          },
          {
            name: "Hugo St-Germain",
            description:
              "St-Germain, prosecco, soda, menta fresca e lime",
            price: "8.00",
          },
          {
            name: "Paloma",
            description:
              "Tequila Cazadores Blanco, succo di lime e soda al pompelmo rosa",
            price: "8.00",
          },
          {
            name: "Moscow Mule",
            description:
              "Eristoff Vodka, succo di lime e Ginger Beer",
            price: "8.00",
          },
          {
            name: "Gin Fizz",
            description:
              "Bombay Dry Gin, succo di limone, sciroppo di zucchero e soda",
            price: "8.00",
          },
          {
            name: "Americano Martini",
            description:
              "Martini Rosso Vermouth, Martini Riserva Bitter e soda",
            price: "8.00",
          },
          {
            name: "Negroni Martini",
            description:
              "Martini Rosso Vermouth, Martini Riserva Bitter e Bombay Dry Gin",
            price: "8.00",
          },
          {
            name: "Milano-Torino Martini",
            description:
              "Martini Rosso Vermouth e Martini Riserva Bitter",
            price: "8.00",
          },
          {
            name: "Mojito",
            description:
              "Bacardi Carta Blanca, lime fresco, zucchero bianco, menta e soda",
            price: "8.00",
          },
          {
            name: "Fernandito",
            description: "Fernet Branca e Coca-Cola",
            price: "8.00",
          },
          {
            name: "Cuba Libre",
            description:
              "Bacardi Carta Oro, Coca-Cola e lime",
            price: "8.00",
          },
          {
            name: "Caipirinha",
            description:
              "Leblon Cachaça, lime e zucchero bianco",
            price: "8.00",
          },
          {
            name: "Gin Tonic",
            description: "Bombay Dry Gin e tonica",
            price: "8.00",
          },
          {
            name: "Bombay Sapphire & Tonic",
            description:
              "Bombay Sapphire Gin e tonica premium",
            price: "10.00",
          },
          {
            name: "Hendrick’s & Tonic",
            description:
              "Hendrick’s Gin, tonica premium e cetriolo",
            price: "12.00",
          },
          {
            name: "Mare & Tonic",
            description:
              "Gin Mare, tonica premium e rosmarino",
            price: "12.00",
          },
          {
            name: "Brockmans & Tonic",
            description:
              "Brockmans Gin e tonica premium",
            price: "12.00",
          },
        ],
      },

      {
        title: "Soft Drinks",
        items: [
          {
            name: "Martini Floreale",
            description:
              "Martini Floreale, Ginger Beer e lime",
            price: "6.00",
          },
          {
            name: "Virgin Mojito",
            description:
              "Lime pestato, menta fresca, zucchero di canna e soda",
            price: "6.00",
          },
          {
            name: "Aperitivi Analcolici",
            description: "San Bitter · Crodino",
            price: "4.00",
          },
          {
            name: "Succhi di frutta",
            description:
              "Ananas, Albicocca, Pesca, Pera, ACE",
            price: "3.50",
          },
          {
            name: "Succo BIO",
            description: "Mirtillo 100% Bio",
            price: "4.00",
          },
          {
            name: "Bibite in vetro",
            description:
              "Coca-Cola, Coca-Cola Zero",
            price: "4.00",
          },
          {
            name: "Bibite in lattina",
            description:
              "Coca-Cola, Coca-Cola Zero, Thè Pesca, Thè Limone, Lemonsoda, Fanta, Schweppes Tonica",
            price: "3.50",
          },
          {
            name: "Acqua 50 cl",
            description: "Naturale o frizzante",
            price: "1.50",
          },
          {
            name: "Acqua 1 l",
            description: "Naturale o frizzante",
            price: "3.00",
          },
          {
            name: "Red Bull",
            description: "",
            price: "4.00",
          },
        ],
      },

      {
        title: "Amari e Liquori",
        items: [
          {
            name: "Amari & Liquori",
            description:
              "Amaro Montenegro · Amaro del Capo · Braulio · Anima Nera · Limoncello della Casa · Sambuca · Baileys - 5 cl",
            price: "4.00",
          },
          {
            name: "Grappa Secca",
            description: "4 cl",
            price: "5.00",
          },
          {
            name: "Grappa Morbida",
            description: "4 cl",
            price: "5.00",
          },
          {
            name: "Grappa Barricata",
            description: "4 cl",
            price: "6.00",
          },
          {
            name: "Vecchia Romagna",
            description: "Distillati & Whisky - 4 cl",
            price: "5.00",
          },
          {
            name: "Jack Daniel’s",
            description: "Distillati & Whisky - 4 cl",
            price: "5.00",
          },
          {
            name: "Laphroaig 10 Years",
            description: "Distillati & Whisky - 4 cl",
            price: "9.00",
          },
          {
            name: "Santa Teresa 1796",
            description: "",
            price: "8.00",
          },
          {
            name: "Shot Base",
            description: "3 cl",
            price: "3.00",
          },
          {
            name: "Shot Premium",
            description:
              "Patrón Silver · Patrón Reposado · Grey Goose Original - 3 cl",
            price: "7.00",
          },
        ],
      },
    ],
  },

  CANTINA: {
  label: "Cantina",
  sections: [
    {
      title: "Bollicine & Champagne",
      items: [
        {
          name: "Prosecco Brut Valdobbiadene DOCG — Bortoluz",
          description: "Calice € 5,00 · Bottiglia € 22,00",
          price: "5.00 / 22.00",
        },
        {
          name: "Franciacorta Brut — Lancini",
          description: "Calice € 7,00 · Bottiglia € 40,00",
          price: "7.00 / 40.00",
        },
        {
          name: "Franciacorta Animante Non Dosato — Barone Pizzini",
          description: "Bottiglia € 45,00",
          price: "45.00",
        },
        {
          name: "Franciacorta Cuvée Prestige — Ca’ del Bosco",
          description: "Bottiglia € 50,00",
          price: "50.00",
        },
        {
          name: "Champagne Gaucher-Jacquot Réserve Brut",
          description: "Bottiglia € 42,00",
          price: "42.00",
        },
        {
          name: "Champagne Special Cuvée — Bollinger",
          description: "Bottiglia € 100,00",
          price: "100.00",
        },
        {
          name: "Champagne — Philipponnat",
          description: "Bottiglia € 80,00",
          price: "80.00",
        },
      ],
    },
    {
      title: "Vini Bianchi",
      items: [
        {
          name: "Lugana DOC — Ca’ dei Frati",
          description: "Calice € 6,00 · Bottiglia € 23,00",
          price: "6.00 / 23.00",
        },
        {
          name: "Verde Luna IGT — Caminella",
          description: "Calice € 6,00 · Bottiglia € 25,00",
          price: "6.00 / 25.00",
        },
        {
          name: "Gewürztraminer — Kurtatsch",
          description: "Bottiglia € 30,00",
          price: "30.00",
        },
        {
          name: "Pinot Grigio — Sturm",
          description: "Bottiglia € 40,00",
          price: "40.00",
        },
      ],
    },
    {
      title: "Vini Rosati",
      items: [
        {
          name: "Rosa dei Frati (Chiaretto) — Ca’ dei Frati",
          description: "Calice € 6,00 · Bottiglia € 35,00",
          price: "6.00 / 35.00",
        },
        {
          name: "Rosé Extra Brut Bio — Barone Pizzini",
          description: "Bottiglia € 45,00",
          price: "45.00",
        },
      ],
    },
    {
      title: "Vini Rossi",
      items: [
        {
          name: "Valcalepio DOC Rosso — Il Calepino",
          description: "Calice € 5,00 · Bottiglia € 19,00",
          price: "5.00 / 19.00",
        },
        {
          name: "Ripasso Valpolicella — Monte del Frà",
          description: "Calice € 6,00 · Bottiglia € 30,00",
          price: "6.00 / 30.00",
        },
        {
          name: "Luna Rossa IGP Riserva — Caminella",
          description: "Bottiglia € 50,00",
          price: "50.00",
        },
        {
          name: "Il Bruciato Bolgheri DOC — Antinori",
          description: "Bottiglia € 60,00",
          price: "60.00",
        },
      ],
    },
  ],
},

  CAFFETTERIA: {
    label: "Caffetteria",
    sections: [
      {
        title: "Caffetteria",
        items: [
          {
            name: "Espresso / Espresso Decaffeinato",
            description: "",
            price: "1.50",
          },
          {
            name: "Espresso Macchiato",
            description: "",
            price: "1.50",
          },
           {
            name: "Cappuccino",
            description: "",
            price: "2.50",
          },
          {
            name: "Caffè d'Orzo",
            description: "Tazza piccola/grande",
            price: "1.60/2.00",
          },
          {
            name: "Caffè al Ginseng",
            description: "Tazza piccola/grande",
            price: "1.80/2.20",
          },
          {
            name: "Caffè Shakerato",
            description: "Classico o vaniglia",
            price: "4.50",
          },
          {
            name: "Cold Brew Coffee",
            description:
              "Caffè freddo estratto a freddo",
            price: "4.00",
          },
          {
            name: "Iced Cappuccino",
            description: "Cappuccino freddo",
            price: "3.50",
          },
        ],
      },

      {
        title: "Dolci",
        items: [
          {
            name: "Cheesecake Frutti di Bosco",
            description: "",
            price: "6.00",
          },
          {
            name:
              "Cheesecake Cioccolato Bianco e Pistacchio",
            description: "",
            price: "6.00",
          },
          {
            name: "Dolce del Giorno",
            description: "",
            price: "6.00",
          },
        ],
      },
    ],
  },
};
