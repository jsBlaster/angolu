const MENU = {
  FOOD: {
    label: "Food",
    sections: [
      {
        title: {
          it: "Piatti estivi",
          en: "Summer dishes",
        },
        items: [
          {
            name: {
              it: "Tagliere misto",
              en: "Mixed charcuterie board",
            },
            description: {
              it: "Selezione di salumi e formaggi bergamaschi",
              en: "Selection of Bergamo cured meats and cheeses",
            },
            price: "20.00",
          },
          {
            name: {
              it: "Crudo di Parma e melone",
              en: "Parma ham & melon",
            },
            description: {
              it: "",
              en: "",
            },
            price: "15.00",
          },
          {
            name: {
              it: "Tartare manzo",
              en: "Beef tartare",
            },
            description: {
              it: "Tuorlo e senape al miele",
              en: "Egg yolk and honey mustard",
            },
            price: "15.00",
          },
          {
            name: {
              it: "Tartare tonno 🐟",
              en: "Tuna tartare 🐟",
            },
            description: {
              it: "Porri e olio al limone",
              en: "Leeks and lemon oil",
            },
            price: "16.00",
          },
          {
            name: {
              it: "Vitello tonnato",
              en: "Vitello tonnato",
            },
            description: {
              it: "",
              en: "",
            },
            price: "14.00",
          },
          {
            name: {
              it: "Roast-beef",
              en: "Roast beef",
            },
            description: {
              it: "Rucola e grana padano",
              en: "Arugula and Grana Padano",
            },
            price: "14.00",
          },
          {
            name: {
              it: "Bruschetta pomodori e stracciatella 🍃",
              en: "Bruschetta with tomatoes and stracciatella 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "12.00",
          },
          {
            name: {
              it: "Provola e verdure alla brace 🍃",
              en: "Grilled provola and vegetables 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "10.00",
          },
          {
            name: {
              it: "Caesar salad",
              en: "Caesar salad",
            },
            description: {
              it: "Pollo alla piastra, pomodori, grana, crostini di pane e salsa yogurt",
              en: "Grilled chicken, tomatoes, Grana Padano, croutons and yogurt dressing",
            },
            price: "12.00",
          },
        ],
      },

      {
        title: {
          it: "Primi piatti di pasta fresca",
          en: "Fresh pasta",
        },
        items: [
          {
            name: {
              it: "Casoncelli",
              en: "Casoncelli",
            },
            description: {
              it: "",
              en: "",
            },
            price: "13.00",
          },
          {
            name: {
              it: "Scarpinocc 🍃",
              en: "Scarpinocc 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "12.00",
          },
          {
            name: {
              it: "Gnocchi",
              en: "Gnocchi",
            },
            description: {
              it: "Pomodoro, stracciatella e basilico",
              en: "Tomato, stracciatella, and basil",
            },
            price: "13.00",
          },
        ],
      },

      {
        title: {
          it: "Secondi piatti + patatine*",
          en: "Main courses + fries*",
        },
        items: [
          {
            name: {
              it: "Spiedini di carne (2)",
              en: "Meat skewers (2)",
            },
            description: {
              it: "",
              en: "",
            },
            price: "12.00",
          },
          {
            name: {
              it: "Salamella",
              en: "Salamella",
            },
            description: {
              it: "",
              en: "",
            },
            price: "10.00",
          },
          {
            name: {
              it: "Tagliata di bovino adulto",
              en: "Beef tagliata",
            },
            description: {
              it: "",
              en: "",
            },
            price: "22.00",
          },
          {
            name: {
              it: "Grigliata mista",
              en: "Mixed grill",
            },
            description: {
              it: "Spiedini, salamella e tagliata",
              en: "Skewers, salamella and tagliata",
            },
            price: "24.00",
          },
        ],
      },

      {
        title: {
          it: "Contorni",
          en: "Sides",
        },
        items: [
          {
            name: {
              it: "Patatine fritte* 🍃",
              en: "French fries* 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Verdure grigliate 🍃",
              en: "Grilled vegetables 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Insalata mista 🍃",
              en: "Mixed salad 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "5.00",
          },
        ],
      },

      {
        title: {
          it: "Polenta",
          en: "Polenta",
        },
        items: [
          {
            name: {
              it: "Polenta liscia 🍃",
              en: "Plain polenta 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Polenta e formaggi 🍃",
              en: "Polenta with cheese 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "10.00",
          },
          {
            name: {
              it: "Polenta e porcini 🍃",
              en: "Polenta with porcini mushrooms 🍃",
            },
            description: {
              it: "",
              en: "",
            },
            price: "12.00",
          },
        ],
      },

      {
        title: {
          it: "Burger Gourmet + patatine*",
          en: "Gourmet burgers + fries*",
        },
        items: [
          {
            name: {
              it: "Panino con polpo 🐟",
              en: "Octopus sandwich 🐟",
            },
            description: {
              it: "Polpo, stracciatella, pesto di basilico",
              en: "Octopus, stracciatella, basil pesto",
            },
            price: "14.00",
          },
          {
            name: {
              it: "Pulled Chicken",
              en: "Pulled Chicken",
            },
            description: {
              it: "Straccetti di pollo, insalata coleslaw e maionese al limone",
              en: "Shredded chicken, coleslaw and lemon mayo",
            },
            price: "12.00",
          },
          {
            name: {
              it: "Hamburger",
              en: "Hamburger",
            },
            description: {
              it: "Hamburger di manzo, cheddar, pomodoro, bacon croccante, insalata",
              en: "Beef patty, cheddar, tomato, crispy bacon, lettuce",
            },
            price: "13.00",
          },
          {
            name: {
              it: "Pulled Pork",
              en: "Pulled Pork",
            },
            description: {
              it: "Carne sfilacciata di maiale, jalapeno, cipolla caramellata, salsa BBQ",
              en: "Pulled pork, jalapeño, caramelised onion, BBQ sauce",
            },
            price: "13.00",
          },
          {
            name: {
              it: "Dell'Angolù",
              en: "Dell'Angolù",
            },
            description: {
              it: "Salamella, peperoni, cipolle grigliate e maionese",
              en: "Salamella, peppers, grilled onions and mayo",
            },
            price: "12.00",
          },
          {
            name: {
              it: "L'Ortolano 🍃",
              en: "L'Ortolano 🍃",
            },
            description: {
              it: "Mozzarella, verdure grigliate, pomodoro e origano",
              en: "Mozzarella, grilled vegetables, tomato and oregano",
            },
            price: "10.00",
          },
        ],
      },

      {
        title: {
          it: "Dolci",
          en: "Desserts",
        },
        items: [
          {
            name: {
              it: "Cheesecake frutti di bosco",
              en: "Mixed berry cheesecake",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Cheesecake cioccolato bianco e pistacchio",
              en: "White chocolate and pistachio cheesecake",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Dolce del giorno",
              en: "Dessert of the day",
            },
            description: {
              it: "",
              en: "",
            },
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
        title: {
          it: "Birra",
          en: "Beer",
        },
        items: [
          {
            name: {
              it: "Theresianer Lager",
              en: "Theresianer Lager",
            },
            description: {
              it: "Alla spina — 4,8% - 40cl",
              en: "Draft beer — 4.8% - 40cl",
            },
            price: "5.00",
          },
          {
            name: {
              it: "Concarena - Barbabianca",
              en: "Concarena - Barbabianca",
            },
            description: {
              it: "Birra artigianale weiss locale - 5,2% - 40cl",
              en: "Local craft weiss beer - 5.2% - 40cl",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Via Priula - Bacio",
              en: "Via Priula - Bacio",
            },
            description: {
              it: "Birra artigianale blanche, fresca e agrumata - IPA gluten free 4,9% - 40cl",
              en: "Craft blanche beer, fresh and citrusy - gluten free IPA 4.9% - 40cl",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Via Priula - Dubek",
              en: "Via Priula - Dubek",
            },
            description: {
              it: "Birra artigianale rossa, con note di malto e caramello - 7,5% - 40cl",
              en: "Craft red beer, with malt and caramel notes - 7.5% - 40cl",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Concarena - Roccia",
              en: "Concarena - Roccia",
            },
            description: {
              it: "Strong Lager - 7,5% - 40cl",
              en: "Strong Lager - 7.5% - 40cl",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Ichnusa non filtrata",
              en: "Ichnusa unfiltered",
            },
            description: {
              it: "In bottiglia - 33cl",
              en: "Bottled - 33cl",
            },
            price: "4.50",
          },
        ],
      },

      {
        title: {
          it: "Drink",
          en: "Cocktails",
        },
        items: [
          {
            name: {
              it: "Spritz",
              en: "Spritz",
            },
            description: {
              it: "Aperol, Campari o Select, prosecco, soda, fetta d'arancia",
              en: "Aperol, Campari or Select, prosecco, soda, orange slice",
            },
            price: "7.00",
          },
          {
            name: {
              it: "Hugo St-Germain Spritz",
              en: "Hugo St-Germain Spritz",
            },
            description: {
              it: "St-Germain, prosecco, soda, menta fresca e lime",
              en: "St-Germain, prosecco, soda, fresh mint and lime",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Paloma",
              en: "Paloma",
            },
            description: {
              it: "Tequila Cazadores Blanco, succo di lime e soda al pompelmo rosa",
              en: "Cazadores Blanco Tequila, lime juice and pink grapefruit soda",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Moscow Mule",
              en: "Moscow Mule",
            },
            description: {
              it: "Eristoff Vodka, succo di lime e Ginger Beer",
              en: "Eristoff Vodka, lime juice and Ginger Beer",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Gin Fizz",
              en: "Gin Fizz",
            },
            description: {
              it: "Bombay Dry Gin, succo di limone, sciroppo di zucchero e soda",
              en: "Bombay Dry Gin, lemon juice, sugar syrup and soda",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Mojito",
              en: "Mojito",
            },
            description: {
              it: "Bacardi Carta Blanca, lime fresco, zucchero bianco, menta e soda",
              en: "Bacardi Carta Blanca, fresh lime, white sugar, mint and soda",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Fernandito",
              en: "Fernandito",
            },
            description: {
              it: "Fernet Branca e Coca-Cola",
              en: "Fernet Branca and Coca-Cola",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Cuba Libre",
              en: "Cuba Libre",
            },
            description: {
              it: "Bacardi Carta Oro, Coca-Cola e lime",
              en: "Bacardi Carta Oro, Coca-Cola and lime",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Caipirinha",
              en: "Caipirinha",
            },
            description: {
              it: "Leblon Cachaça, lime e zucchero bianco",
              en: "Leblon Cachaça, lime and white sugar",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Il Camparino",
              en: "Il Camparino",
            },
            description: {
              it: "",
              en: "",
            },
            price: "4.00",
          },
        ],
      },

      {
        title: {
          it: "Aperitivo Martini",
          en: "Martini Aperitivo",
        },
        items: [
          {
            name: {
              it: "Americano Martini",
              en: "Americano Martini",
            },
            description: {
              it: "Martini Rosso Vermouth, Martini Riserva Bitter e soda",
              en: "Martini Rosso Vermouth, Martini Riserva Bitter and soda",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Negroni Martini",
              en: "Negroni Martini",
            },
            description: {
              it: "Martini Rosso Vermouth, Martini Riserva Bitter e Bombay Dry Gin",
              en: "Martini Rosso Vermouth, Martini Riserva Bitter and Bombay Dry Gin",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Milano-Torino Martini",
              en: "Milano-Torino Martini",
            },
            description: {
              it: "Martini Rosso Vermouth e Martini Riserva Bitter",
              en: "Martini Rosso Vermouth and Martini Riserva Bitter",
            },
            price: "8.00",
          },
        ],
      },

      {
        title: {
          it: "Gin Tonic",
          en: "Gin & Tonic",
        },
        items: [
          {
            name: {
              it: "Gin Tonic",
              en: "Gin Tonic",
            },
            description: {
              it: "Bombay Dry Gin e tonica",
              en: "Bombay Dry Gin and tonic",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Bombay Sapphire & Tonic",
              en: "Bombay Sapphire & Tonic",
            },
            description: {
              it: "Bombay Sapphire Gin e tonica premium",
              en: "Bombay Sapphire Gin and premium tonic",
            },
            price: "10.00",
          },
          {
            name: {
              it: "Hendrick's & Tonic",
              en: "Hendrick's & Tonic",
            },
            description: {
              it: "Hendrick's Gin, tonica premium e cetriolo",
              en: "Hendrick's Gin, premium tonic and cucumber",
            },
            price: "12.00",
          },
          {
            name: {
              it: "Mare & Tonic",
              en: "Mare & Tonic",
            },
            description: {
              it: "Gin Mare, tonica premium e rosmarino",
              en: "Gin Mare, premium tonic and rosemary",
            },
            price: "12.00",
          },
          {
            name: {
              it: "Brockmans & Tonic",
              en: "Brockmans & Tonic",
            },
            description: {
              it: "Brockmans Gin e tonica premium",
              en: "Brockmans Gin and premium tonic",
            },
            price: "12.00",
          },
        ],
      },

      {
        title: {
          it: "Soft Drinks",
          en: "Soft Drinks",
        },
        items: [
          {
            name: {
              it: "Martini Floreale",
              en: "Martini Floreale",
            },
            description: {
              it: "Martini Floreale, Ginger Beer e lime",
              en: "Martini Floreale, Ginger Beer and lime",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Virgin Mojito",
              en: "Virgin Mojito",
            },
            description: {
              it: "Lime pestato, menta fresca, zucchero di canna e soda",
              en: "Crushed lime, fresh mint, cane sugar and soda",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Aperitivi Analcolici",
              en: "Non-alcoholic aperitifs",
            },
            description: {
              it: "San Bitter · Crodino",
              en: "San Bitter · Crodino",
            },
            price: "4.00",
          },
          {
            name: {
              it: "Succhi di frutta",
              en: "Fruit juices",
            },
            description: {
              it: "Ananas, Albicocca, Pesca, Pera, ACE",
              en: "Pineapple, Apricot, Peach, Pear, ACE",
            },
            price: "3.50",
          },
          {
            name: {
              it: "Succo BIO",
              en: "Organic juice",
            },
            description: {
              it: "Mirtillo 100% Bio",
              en: "Blueberry 100% Organic",
            },
            price: "4.00",
          },
          {
            name: {
              it: "Bibite in vetro",
              en: "Glass bottles",
            },
            description: {
              it: "Coca-Cola, Coca-Cola Zero",
              en: "Coca-Cola, Coca-Cola Zero",
            },
            price: "4.00",
          },
          {
            name: {
              it: "Bibite in lattina",
              en: "Canned drinks",
            },
            description: {
              it: "Coca-Cola, Coca-Cola Zero, Thè Pesca, Thè Limone, Lemonsoda, Fanta, Schweppes Tonica",
              en: "Coca-Cola, Coca-Cola Zero, Peach Tea, Lemon Tea, Lemonsoda, Fanta, Schweppes Tonic",
            },
            price: "3.50",
          },
          {
            name: {
              it: "Acqua 50 cl",
              en: "Water 50 cl",
            },
            description: {
              it: "Naturale o frizzante",
              en: "Still or sparkling",
            },
            price: "1.50",
          },
          {
            name: {
              it: "Acqua 1 l",
              en: "Water 1 l",
            },
            description: {
              it: "Naturale o frizzante",
              en: "Still or sparkling",
            },
            price: "3.00",
          },
          {
            name: {
              it: "Red Bull",
              en: "Red Bull",
            },
            description: {
              it: "",
              en: "",
            },
            price: "4.00",
          },
        ],
      },

      {
        title: {
          it: "Amari e Liquori",
          en: "Digestifs & Spirits",
        },
        items: [
          {
            name: {
              it: "Amari & Liquori",
              en: "Amari & Liqueurs",
            },
            description: {
              it: "Amaro Montenegro · Amaro del Capo · Braulio · Anima Nera · Limoncello della Casa · Sambuca · Baileys - 5 cl",
              en: "Amaro Montenegro · Amaro del Capo · Braulio · Anima Nera · House Limoncello · Sambuca · Baileys — 5 cl",
            },
            price: "4.00",
          },
          {
            name: {
              it: "Grappa Secca",
              en: "Dry Grappa",
            },
            description: {
              it: "4 cl",
              en: "4 cl",
            },
            price: "5.00",
          },
          {
            name: {
              it: "Grappa Morbida",
              en: "Smooth Grappa",
            },
            description: {
              it: "4 cl",
              en: "4 cl",
            },
            price: "5.00",
          },
          {
            name: {
              it: "Grappa Barricata",
              en: "Barrel-aged Grappa",
            },
            description: {
              it: "4 cl",
              en: "4 cl",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Vecchia Romagna",
              en: "Vecchia Romagna",
            },
            description: {
              it: "Distillati & Whisky - 4 cl",
              en: "Spirits & Whisky — 4 cl",
            },
            price: "5.00",
          },
          {
            name: {
              it: "Jack Daniel's",
              en: "Jack Daniel's",
            },
            description: {
              it: "Distillati & Whisky - 4 cl",
              en: "Spirits & Whisky — 4 cl",
            },
            price: "5.00",
          },
          {
            name: {
              it: "Laphroaig 10 Years",
              en: "Laphroaig 10 Years",
            },
            description: {
              it: "Distillati & Whisky - 4 cl",
              en: "Spirits & Whisky — 4 cl",
            },
            price: "9.00",
          },
          {
            name: {
              it: "Santa Teresa 1796",
              en: "Santa Teresa 1796",
            },
            description: {
              it: "Rum - 4 cl",
              en: "Rum — 4 cl",
            },
            price: "8.00",
          },
          {
            name: {
              it: "Shot Base",
              en: "Shot Base",
            },
            description: {
              it: "3 cl",
              en: "3 cl",
            },
            price: "3.00",
          },
          {
            name: {
              it: "Shot Premium",
              en: "Shot Premium",
            },
            description: {
              it: "Patrón Silver · Patrón Reposado · Grey Goose Original - 3 cl",
              en: "Patrón Silver · Patrón Reposado · Grey Goose Original — 3 cl",
            },
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
        title: {
          it: "Bollicine & Champagne",
          en: "Sparkling & Champagne",
        },
        items: [
          {
            name: {
              it: "Prosecco Brut Valdobbiadene DOCG - Bortoluz",
              en: "Prosecco Brut Valdobbiadene DOCG - Bortoluz",
            },
            description: {
              it: "Calice € 5,00 · Bottiglia € 22,00",
              en: "Glass € 5.00 · Bottle € 22.00",
            },
            price: "5.00 / 22.00",
          },
          {
            name: {
              it: "Franciacorta Brut - Lancini",
              en: "Franciacorta Brut - Lancini",
            },
            description: {
              it: "Calice € 7,00 · Bottiglia € 40,00",
              en: "Glass € 7.00 · Bottle € 40.00",
            },
            price: "7.00 / 40.00",
          },
          {
            name: {
              it: "Franciacorta Animante Non Dosato - Barone Pizzini",
              en: "Franciacorta Animante Non Dosato - Barone Pizzini",
            },
            description: {
              it: "Bottiglia € 45,00",
              en: "Bottle € 45.00",
            },
            price: "45.00",
          },
          {
            name: {
              it: "Franciacorta Cuvée Prestige - Ca' del Bosco",
              en: "Franciacorta Cuvée Prestige - Ca' del Bosco",
            },
            description: {
              it: "Bottiglia € 50,00",
              en: "Bottle € 50.00",
            },
            price: "50.00",
          },
          {
            name: {
              it: "Champagne Gaucher-Jacquot Réserve Brut",
              en: "Champagne Gaucher-Jacquot Réserve Brut",
            },
            description: {
              it: "Bottiglia € 42,00",
              en: "Bottle € 42.00",
            },
            price: "42.00",
          },
          {
            name: {
              it: "Champagne Special Cuvée - Bollinger",
              en: "Champagne Special Cuvée - Bollinger",
            },
            description: {
              it: "Bottiglia € 100,00",
              en: "Bottle € 100.00",
            },
            price: "100.00",
          },
          {
            name: {
              it: "Champagne - Philipponnat",
              en: "Champagne - Philipponnat",
            },
            description: {
              it: "Bottiglia € 80,00",
              en: "Bottle € 80.00",
            },
            price: "80.00",
          },
        ],
      },
      {
        title: {
          it: "Vini Bianchi",
          en: "White Wines",
        },
        items: [
          {
            name: {
              it: "Lugana DOC - Ca' dei Frati",
              en: "Lugana DOC - Ca' dei Frati",
            },
            description: {
              it: "Calice € 6,00 · Bottiglia € 23,00",
              en: "Glass € 6.00 · Bottle € 23.00",
            },
            price: "6.00 / 23.00",
          },
          {
            name: {
              it: "Verde Luna IGT - Caminella",
              en: "Verde Luna IGT - Caminella",
            },
            description: {
              it: "Calice € 6,00 · Bottiglia € 25,00",
              en: "Glass € 6.00 · Bottle € 25.00",
            },
            price: "6.00 / 25.00",
          },
          {
            name: {
              it: "Gewürztraminer - Kurtatsch",
              en: "Gewürztraminer - Kurtatsch",
            },
            description: {
              it: "Bottiglia € 30,00",
              en: "Bottle € 30.00",
            },
            price: "30.00",
          },
          {
            name: {
              it: "Pinot Grigio - Sturm",
              en: "Pinot Grigio - Sturm",
            },
            description: {
              it: "Bottiglia € 40,00",
              en: "Bottle € 40.00",
            },
            price: "40.00",
          },
        ],
      },
      {
        title: {
          it: "Vini Rosati",
          en: "Rosé Wines",
        },
        items: [
          {
            name: {
              it: "Rosa dei Frati (Chiaretto) - Ca' dei Frati",
              en: "Rosa dei Frati (Chiaretto) - Ca' dei Frati",
            },
            description: {
              it: "Calice € 6,00 · Bottiglia € 35,00",
              en: "Glass € 6.00 · Bottle € 35.00",
            },
            price: "6.00 / 35.00",
          },
          {
            name: {
              it: "Rosé Extra Brut Bio - Barone Pizzini",
              en: "Rosé Extra Brut Bio - Barone Pizzini",
            },
            description: {
              it: "Bottiglia € 45,00",
              en: "Bottle € 45.00",
            },
            price: "45.00",
          },
        ],
      },
      {
        title: {
          it: "Vini Rossi",
          en: "Red Wines",
        },
        items: [
          {
            name: {
              it: "Valcalepio DOC Rosso - Il Calepino",
              en: "Valcalepio DOC Rosso - Il Calepino",
            },
            description: {
              it: "Calice € 5,00 · Bottiglia € 19,00",
              en: "Glass € 5.00 · Bottle € 19.00",
            },
            price: "5.00 / 19.00",
          },
          {
            name: {
              it: "Ripasso Valpolicella - Monte del Frà",
              en: "Ripasso Valpolicella - Monte del Frà",
            },
            description: {
              it: "Calice € 6,00 · Bottiglia € 30,00",
              en: "Glass € 6.00 · Bottle € 30.00",
            },
            price: "6.00 / 30.00",
          },
          {
            name: {
              it: "Luna Rossa IGP Riserva - Caminella",
              en: "Luna Rossa IGP Riserva - Caminella",
            },
            description: {
              it: "Bottiglia € 50,00",
              en: "Bottle € 50.00",
            },
            price: "50.00",
          },
          {
            name: {
              it: "Il Bruciato Bolgheri DOC - Antinori",
              en: "Il Bruciato Bolgheri DOC - Antinori",
            },
            description: {
              it: "Bottiglia € 60,00",
              en: "Bottle € 60.00",
            },
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
        title: {
          it: "Caffetteria",
          en: "Coffee",
        },
        items: [
          {
            name: {
              it: "Espresso / Espresso decaffeinato",
              en: "Espresso / Decaf espresso",
            },
            description: {
              it: "",
              en: "",
            },
            price: "1.50",
          },
          {
            name: {
              it: "Espresso macchiato",
              en: "Espresso macchiato",
            },
            description: {
              it: "",
              en: "",
            },
            price: "1.50",
          },
          {
            name: {
              it: "Cappuccino",
              en: "Cappuccino",
            },
            description: {
              it: "",
              en: "",
            },
            price: "2.50",
          },
          {
            name: {
              it: "Caffè d'orzo",
              en: "Barley coffee",
            },
            description: {
              it: "Tazza piccola/grande",
              en: "Small/large cup",
            },
            price: "1.60/2.00",
          },
          {
            name: {
              it: "Caffè al ginseng",
              en: "Ginseng coffee",
            },
            description: {
              it: "Tazza piccola/grande",
              en: "Small/large cup",
            },
            price: "1.80/2.20",
          },
          {
            name: {
              it: "Caffè shakerato",
              en: "Shaken espresso",
            },
            description: {
              it: "Classico o vaniglia",
              en: "Classic or vanilla",
            },
            price: "4.50",
          },
          {
            name: {
              it: "Cold brew coffee",
              en: "Cold brew coffee",
            },
            description: {
              it: "Caffè freddo estratto a freddo",
              en: "Cold-extracted cold coffee",
            },
            price: "4.00",
          },
          {
            name: {
              it: "Iced cappuccino",
              en: "Iced cappuccino",
            },
            description: {
              it: "Cappuccino freddo",
              en: "Cold cappuccino",
            },
            price: "3.50",
          },
        ],
      },

      {
        title: {
          it: "Dolci",
          en: "Desserts",
        },
        items: [
          {
            name: {
              it: "Cheesecake frutti di bosco",
              en: "Mixed berry cheesecake",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Cheesecake cioccolato bianco e pistacchio",
              en: "White chocolate and pistachio cheesecake",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
          {
            name: {
              it: "Dolce del giorno",
              en: "Dessert of the day",
            },
            description: {
              it: "",
              en: "",
            },
            price: "6.00",
          },
        ],
      },
    ],
  },
};
