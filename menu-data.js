const MENU = {
  const MENU = {
  cibo: {
    label: "Cibo",
    sections: [
      {
        title: "Piatti Freddi",
        items: [
          { name: "Tagliere Misto", description: "Selezione di salumi e formaggi Bergamaschi", price: "20.00" },
          { name: "Crudo di Parma e Melone", description: "", price: "15.00" },
          { name: "Tartare Manzo", description: "Tuorlo e senape al miele", price: "15.00" },
          { name: "Tartare Tonno", description: "Puntarelle e olio al limone", price: "16.00" },
          { name: "Vitello Tonnato", description: "", price: "14.00" },
          { name: "Roast-beef", description: "Rucola e Grana Padano", price: "14.00" },
          { name: "Bruschetta Pomodori e stracciatella", description: "", price: "12.00" },
          { name: "Provola e verdura alla brace", description: "", price: "10.00" },
          { name: "Caesar Salad", description: "Pollo alla piastra, pomodori, grana, crostini di pane e salsa Yogurt", price: "12.00" }
        ]
      },
      {
        title: "Primi Piatti di Pasta fresca",
        items: [
          { name: "Casoncelli", description: "", price: "13.00" },
          { name: "Scarpinòc", description: "", price: "12.00" },
          { name: "Gnocchi Polpo", description: "", price: "13.00" }
        ]
      },
      {
        title: "Secondi Piatti + patatine*",
        items: [
          { name: "Spiedini (2)", description: "", price: "12.00" },
          { name: "Salamella", description: "", price: "10.00" },
          { name: "Tagliata", description: "", price: "22.00" },
          { name: "Grigliata mista", description: "", price: "24.00" }
        ]
      },
      {
        title: "Contorni",
        items: [
          { name: "Patatine", description: "", price: "6.00" },
          { name: "Verdure grigliate", description: "", price: "6.00" },
          { name: "Insalata mista", description: "", price: "5.00" }
        ]
      },
      {
        title: "Polenta",
        items: [
          { name: "Liscia", description: "", price: "6.00" },
          { name: "Formaggi", description: "", price: "10.00" },
          { name: "Porcini", description: "", price: "12.00" }
        ]
      },
      {
        title: "Burger Gourmet + patatine*",
        items: [
          { name: "Kraken", description: "Polpo, stracciatella, pesto di basilico", price: "14.00" },
          { name: "Pulled Chicken", description: "Pollo, Insalata Coleslaw e maionese al limone", price: "12.00" },
          { name: "Hamburgher", description: "Hamburger di manzo, cheddar, pomodoro, Bacon croccante, insalata", price: "13.00" },
          { name: "Pulled Pork", description: "Carne sfilacciata di maiale, Jalapeno, cipolla caramellata, salsa BBQ", price: "13.00" },
          { name: "Dell’Angolù", description: "Salamella, peperoni e cipolla grigliate e maionese", price: "12.00" },
          { name: "L’Ortolano", description: "Pomodoro, verdure grigliate e branzi", price: "10.00" }
        ]
      },
      {
        title: "Dolci",
        items: [
          { name: "Cheesecake Frutti di bosco", description: "", price: "6.00" },
          { name: "Cheesecake Cioccolato bianco e Pistacchio", description: "", price: "6.00" },
          { name: "Dolce del giorno", description: "", price: "6.00" }
        ]
      }
    ]
  }
};
  drink: {
    label: "Drink",
    sections: [
      {
        title: "Aperitivi",
        items: [
          { name: "Spritz Angolu", description: "Aperol, prosecco, soda, arancia, oliva — la nostra versione", price: "8.00" },
          { name: "Negroni", description: "Gin, Campari, Vermouth rosso, scorza d'arancia", price: "9.00" },
          { name: "Hugo", description: "Prosecco, sciroppo di sambuco, menta fresca, soda, lime", price: "8.00" }
        ]
      },
      {
        title: "Cocktail",
        items: [
          { name: "Mojito", description: "Rum bianco, lime, menta, zucchero di canna, soda", price: "10.00" },
          { name: "Old Fashioned", description: "Bourbon, angostura, zucchero di canna, scorza d'arancia", price: "12.00" },
          { name: "Margarita", description: "Tequila, Triple Sec, lime fresco, sale di Maldon", price: "11.00" },
          { name: "Cosmopolitan", description: "Vodka citron, Triple Sec, succo di mirtillo, lime", price: "10.00" }
        ]
      },
      {
        title: "Vini",
        items: [
          { name: "Bianco della Casa", description: "Vermentino di Sardegna — fresco, floreale, minerale", price: "5.00" },
          { name: "Rosso della Casa", description: "Cannonau di Sardegna — corposo, fruttato, speziato", price: "5.00" },
          { name: "Prosecco", description: "Extra Dry, Treviso — bollicine fini, note di mela verde", price: "6.00" }
        ]
      },
      {
        title: "Analcolici",
        items: [
          { name: "Limonata Angolu", description: "Limone Amalfi, menta fresca, acqua frizzante, zucchero di canna", price: "5.00" },
          { name: "Succo di Frutta", description: "Albicocca, pesca, arancia — produzione artigianale", price: "4.00" },
          { name: "Acqua Tonica Premium", description: "Fever-Tree Indian Tonic Water", price: "4.00" }
        ]
      }
    ]
  },
  caffetteria: {
    label: "Caffetteria",
    sections: [
      {
        title: "Caffetteria",
        items: [
          { name: "Espresso", description: "Miscela artigianale 100% arabica, tostatura media", price: "1.20" },
          { name: "Cappuccino", description: "Doppio espresso, latte montato a mano, schiuma vellutata", price: "2.00" },
          { name: "Caffè Americano", description: "Espresso allungato con acqua calda, lungo e delicato", price: "1.50" },
          { name: "Caffè Macchiato", description: "Espresso con una nuvola di latte schiumato", price: "1.30" },
          { name: "Latte Macchiato", description: "Latte caldo, doppio espresso versato lentamente", price: "2.20" },
          { name: "Caffè Shakerato", description: "Espresso, ghiaccio, zucchero — agitato al momento", price: "2.50" }
        ]
      },
      {
        title: "Tè e Infusi",
        items: [
          { name: "Tè Verde Sencha", description: "Foglie intere giapponesi, infusione a 70°, leggero e fresco", price: "3.00" },
          { name: "Tè Earl Grey", description: "Blend classico con bergamotto, servito con limone", price: "3.00" },
          { name: "Infuso Relax", description: "Camomilla, lavanda, melissa — per un momento di pace", price: "3.00" },
          { name: "Tisana Agrumi e Zenzero", description: "Arancia, limone, zenzero fresco — tonificante e aromatica", price: "3.50" }
        ]
      },
      {
        title: "Dolci da Bar",
        items: [
          { name: "Cornetto Artigianale", description: "Sfogliato al burro, vuoto o con crema, marmellata, cioccolato", price: "1.80" },
          { name: "Pasta di Mandorla", description: "Pasticcino sardo tradizionale, mandorle di Avola", price: "2.00" },
          { name: "Muffin del Giorno", description: "Preparazione fresca quotidiana — chiedi al bancone la varietà", price: "2.50" },
          { name: "Brioche con Granita", description: "Solo estate — granita artigianale, brioche morbida", price: "4.00" }
        ]
      }
    ]
  }
};
