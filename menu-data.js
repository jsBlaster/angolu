const MENU = {
  cibo: {
    label: "Cibo",
    sections: [
      {
        title: "Antipasti",
        items: [
          { name: "Bruschetta al Pomodoro", description: "Pane casereccio tostato, pomodorini datterini, basilico fresco, aglio", price: "6.00" },
          { name: "Tagliere Misto", description: "Selezione di salumi artigianali, formaggi stagionati, marmellata di fichi", price: "14.00" },
          { name: "Carpaccio di Manzo", description: "Filetto di manzo, rucola selvatica, scaglie di Parmigiano, limone", price: "13.00" }
        ]
      },
      {
        title: "Primi",
        items: [
          { name: "Cacio e Pepe", description: "Spaghetti trafilati al bronzo, Pecorino Romano DOP, pepe nero di Sarawak", price: "12.00" },
          { name: "Risotto ai Funghi Porcini", description: "Riso Carnaroli, porcini freschi di stagione, burro mantecato, prezzemolo", price: "15.00" },
          { name: "Linguine allo Scoglio", description: "Frutti di mare misti, pomodorini, aglio, vino bianco, prezzemolo", price: "17.00" }
        ]
      },
      {
        title: "Secondi",
        items: [
          { name: "Tagliata di Manzo", description: "Controfiletto alla griglia, rucola, pomodorini, scaglie di Parmigiano", price: "22.00" },
          { name: "Salmone al Forno", description: "Filetto di salmone norvegese, erbe aromatiche, patate al rosmarino", price: "18.00" },
          { name: "Pollo alla Cacciatora", description: "Cosce di pollo in umido, olive taggiasche, capperi, pomodoro", price: "16.00" }
        ]
      },
      {
        title: "Dolci",
        items: [
          { name: "Tiramisù della Casa", description: "Ricetta tradizionale, savoiardi, mascarpone, caffè espresso", price: "7.00" },
          { name: "Panna Cotta ai Frutti di Bosco", description: "Panna cotta vanigliata, coulis di mirtilli e lamponi freschi", price: "6.00" },
          { name: "Cannolo Siciliano", description: "Scorza croccante, ricotta di pecora, gocce di cioccolato fondente", price: "6.00" }
        ]
      }
    ]
  },
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
