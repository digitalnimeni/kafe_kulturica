function changeLanguage(language,action) {
    // Postavite tekst na odgovarajući jezik
    
    if (language === 'en') {
        document.getElementById('aperitiviText').innerText = 'Aperitifs and Liqueurs';
        document.getElementById('vinaText').innerText = 'Wines';
        document.getElementById('pivaText').innerText = 'Beers';
        document.getElementById('toplinapiciText').innerText = 'Hot Drinks';
        document.getElementById('sokoviText').innerText = 'Juices';
        document.getElementById('vodaText').innerText = 'Energy Drinks and Water';
        document.getElementById('viskiText').innerText = 'Whiskey';
        document.getElementById('kokteliText').innerText = 'Cocktails';
        document.getElementById('grickaliceText').innerText = 'Snacks';
        document.getElementById('digmeni').innerText = 'Digital Menu';
        document.getElementById('napomena').innerHTML = '<b>Note:</b><i>Prices are in Serbian Dinars (RSD).</i>';
        document.querySelector('footer p.fp').innerHTML = '&copy; 2024 Cafe Kulturica - Your favorite spot.';
        document.title = 'Cafe Menu';
        // Dodajte još logike za druge elemente koji treba da se promene na engleski
    } else if (language === 'sr') {
        document.getElementById('aperitiviText').innerText = 'Aperitivi i likeri';
        document.getElementById('vinaText').innerText = 'Vina';
        document.getElementById('pivaText').innerText = 'Pivo';
        document.getElementById('toplinapiciText').innerText = 'Topli Napici';
        document.getElementById('sokoviText').innerText = 'Sokovi';
        document.getElementById('vodaText').innerText = 'Energetski napici i Voda';
        document.getElementById('viskiText').innerText = 'Viski';
        document.getElementById('kokteliText').innerText = 'Kokteli';
        document.getElementById('grickaliceText').innerText = 'Grickalice';
        document.getElementById('digmeni').innerText = 'Digitalni Meni';
        document.getElementById('napomena').innerHTML = '<b>Napomena:</b><i>Cene su izražene u dinarima (RSD).</i>';
        document.querySelector('footer p.fp').innerHTML = '&copy; 2024 Kafe Kulturica - Vaša omiljena lokacija.';
        document.title = 'Kafe Meni';
        // Dodajte još logike za druge elemente koji treba da se promene na srpski
    }

    // Sačuvaj izabrani jezik u lokalnom skladištu
    localStorage.setItem('selectedLanguage', language);
    if(action=='promeni'){
        // Reload stranice nakon promene jezika
        location.reload();

    }
}

// Prilikom učitavanja stranice, proverite da li postoji sačuvani jezik u lokalnom skladištu
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    // Ako postoji sačuvani jezik, primenite ga na stranicu
    if (savedLanguage) {
        changeLanguage(savedLanguage,'nista');
    }
});



const menuData = {
    "categories": [
        {
            "name": "Aperitivi i likeri",
            "items": [
                {
                    "name": "Gorka tajna 0,05l",
                    "image": "images/gorka_tajna00_5l.png",
                    "price": "150 RSD"
                },
                {
                    "name": "Gorki list 0,05l",
                    "image": "images/gorki_list.png",
                    "price": "170 RSD"
                },
                {
                    "name": "Vinjak Rubin 0,05l",
                    "image": "images/vinjak_rubin.png",
                    "price": "150 RSD"
                },
                {
                   "name": "Vinjak 5 0,05l",
                   "image": "images/vinjak_rubin5.png",
                   "price": "240 RSD"
               },
               {
                   "name": "Tekila 0,03l",
                   "image": "images/tekila.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Gin Rubin 0,05l",
                   "image": "images/gin_rubin.png",
                   "price": "160 RSD"
               },
               {
                   "name": "Gin Kraft 0,05l",
                   "image": "images/gin_kraft1.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Votka 0,05l",
                   "image": "images/votka.jpg",
                   "price": "150 RSD"
               },
               {
                   "name": "Vermut 0,1l",
                   "image": "images/vermut.png",
                   "price": "150 RSD"
               },
               {
                   "name": "Viljamovka Takovo 0,05",
                   "image": "images/viljamovka.png",
                   "price": "280 RSD"
               },
               {
                   "name": "Pelinkovac 0,05",
                   "image": "images/pelinkovac2.png",
                   "price": "170 RSD"
               },
               {
                   "name": "Rakija kajsija 0,05",
                   "image": "images/kajsija.jpg",
                   "price": "180 RSD"
               },
               {
                   "name": "Rakija dunja 0,05",
                   "image": "images/dunja.jpg",
                   "price": "180 RSD"
               },
               {
                   "name": "Rakija jabuka 0,05",
                   "image": "images/jabuka.jpg",
                   "price": "180 RSD"
               },
               {
                   "name": "Rakija šljiva 0,05",
                   "image": "images/sljiva.jpg",
                   "price": "160 RSD"
               },
               {
                   "name": "Stock 84 0,05",
                   "image": "images/stok.png",
                   "price": "220 RSD"
               },
               {
                   "name": "Jagermeister  0,05",
                   "image": "images/jeger1.png",
                   "price": "290 RSD"
               },
                // Dodajte ostale stavke za tople napitke po potrebi
            ]
        },

        {
            "name": "Aperitifs and Liqueurs",
            "items": [
                {
                    "name": "Bitter Secret 0.05l",
                    "image": "images/gorka_tajna00_5l.png",
                    "price": "150 RSD"
                },
                {
                    "name": "Bitter Leaf 0.05l",
                    "image": "images/gorki_list.png",
                    "price": "170 RSD"
                },
                {
                    "name": "Brandy Rubin 0.05l",
                    "image": "images/vinjak_rubin.png",
                    "price": "150 RSD"
                },
                {
                   "name": "Brandy 5 0.05l",
                   "image": "images/vinjak_rubin5.png",
                   "price": "240 RSD"
               },
               {
                   "name": "Tequila 0.03l",
                   "image": "images/tekila.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Gin Rubin 0.05l",
                   "image": "images/gin_rubin.png",
                   "price": "160 RSD"
               },
               {
                   "name": "Gin Kraft 0.05l",
                   "image": "images/gin_kraft1.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Vodka 0.05l",
                   "image": "images/votka.jpg",
                   "price": "150 RSD"
               },
               {
                   "name": "Vermouth 0.1l",
                   "image": "images/vermut.png",
                   "price": "150 RSD"
               },
               {
                   "name": "Williams Pear Brandy Takovo 0.05l",
                   "image": "images/viljamovka.png",
                   "price": "280 RSD"
               },
               {
                   "name": "Pelinkovac 0.05",
                   "image": "images/pelinkovac2.png",
                   "price": "170 RSD"
               },
               {
                   "name": "Apricot Brandy 0.05l",
                   "image": "images/kajsija.jpg",
                   "price": "180 RSD"
               },
               {
                   "name": "Quince Brandy 0.05l",
                   "image": "images/dunja.jpg",
                   "price": "180 RSD"
               },
               {
                   "name": "Apple Brandy 0.05l",
                   "image": "images/jabuka.jpg",
                   "price": "180 RSD"
               },
               {
                   "name": "Plum Brandy 0.05l",
                   "image": "images/sljiva.jpg",
                   "price": "160 RSD"
               },
               {
                   "name": "Stock 84 0.05l",
                   "image": "images/stok.png",
                   "price": "220 RSD"
               },
               {
                   "name": "Jagermeister 0.05l",
                   "image": "images/jeger1.png",
                   "price": "290 RSD"
               }
            ]
        },
        


        {
            "name": "Vina",
            "items": [
                {
                    "name": "Graševina 0,1l",
                    "image": "images/grasevina.png",
                    "price": "110 RSD"
                },
                {
                    "name": "Vranac 0,1l",
                    "image": "images/vranac.png",
                    "price": "110 RSD"
                },
                {
                   "name": "Vina 0,187l",
                   "image": "images/vino.png",
                   "price": "290 RSD"
               },
               {
                   "name": "Kuvano vino 0,2l",
                   "image": "images/kuvanovino.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Sangrija 0,2l",
                   "image": "images/sangrija.png",
                   "price": "190 RSD"
               },
               {
                   "name": "Crno vino Praška 0,1l",
                   "image": "images/crnovino.jpeg",
                   "price": "140 RSD"
               },
               {
                   "name": "Belo vino Praška 0,1l",
                   "image": "images/belovino.jpeg",
                   "price": "130 RSD"
               },
               {
                   "name": "Rose vino Praška 0,1l",
                   "image": "images/rose.jpg",
                   "price": "140 RSD"
               },
                // Dodajte ostale stavke za hladne napitke po potrebi
            ]
        },
        {
            "name": "Wines",
            "items": [
                {
                    "name": "Graševina 0.1l",
                    "image": "images/grasevina.png",
                    "price": "110 RSD"
                },
                {
                    "name": "Vranac 0.1l",
                    "image": "images/vranac.png",
                    "price": "110 RSD"
                },
                {
                   "name": "Wine 0.187l",
                   "image": "images/vino.png",
                   "price": "290 RSD"
               },
               {
                   "name": "Mulled Wine 0.2l",
                   "image": "images/kuvanovino.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Sangria 0.2l",
                   "image": "images/sangrija.png",
                   "price": "190 RSD"
               },
               {
                   "name": "Red Wine Praška 0.1l",
                   "image": "images/crnovino.jpeg",
                   "price": "140 RSD"
               },
               {
                   "name": "White Wine Praška 0.1l",
                   "image": "images/belovino.jpeg",
                   "price": "130 RSD"
               },
               {
                   "name": "Rosé Wine Praška 0.1l",
                   "image": "images/rose.jpg",
                   "price": "140 RSD"
               }
            ]
        },
        
        {
            "name": "Piva",
            "items": [
                {
                    "name": "Zaječarsko 0,33l",
                    "image": "images/zaj033.jpg",
                    "price": "190 RSD"
                },
                {
                    "name": "Zaječarsko 0,5l",
                    "image": "images/zaj05.jpeg",
                    "price": "170 RSD"
                },
                {
                    "name": "Birra Moretti 0,4l",
                    "image": "images/bira1.jpg",
                    "price": "200 RSD"
                },
                {
                    "name": "Amstel 0,4l",
                    "image": "images/amstel.jpg",
                    "price": "200 RSD"
                },
                {
                    "name": "Laško 0,33l",
                    "image": "images/lasko.jpg",
                    "price": "230 RSD"
                },
                {
                    "name": "Heinikne 0,25l",
                    "image": "images/haj1.jpg",
                    "price": "310 RSD"
                },
                {
                    "name": "Zaječarsko točeno  0,33l",
                    "image": "images/toceno2.jpg",
                    "price": "180 RSD"
                },
                {
                    "name": "Zaječarsko točeno  0,5l",
                    "image": "images/toceno2.jpg",
                    "price": "210 RSD"
                },
                {
                    "name": "Birra Moretti točeno  0,33l",
                    "image": "images/toceno2.jpg",
                    "price": "200 RSD"
                },
                {
                    "name": "Birra Moretti točeno  0,5l",
                    "image": "images/toceno2.jpg",
                    "price": "230 RSD"
                },
            ]
        },
        {
            "name": "Beers",
            "items": [
            {
            "name": "Zaječarsko 0.33l",
            "image": "images/zaj033.jpg",
            "price": "190 RSD"
            },
            {
            "name": "Zaječarsko 0.5l",
            "image": "images/zaj05.jpeg",
            "price": "170 RSD"
            },
            {
            "name": "Birra Moretti 0.4l",
            "image": "images/bira1.jpg",
            "price": "200 RSD"
            },
            {
            "name": "Amstel 0.4l",
            "image": "images/amstel.jpg",
            "price": "200 RSD"
            },
            {
            "name": "Laško 0.33l",
            "image": "images/lasko.jpg",
            "price": "230 RSD"
            },
            {
            "name": "Heineken 0.25l",
            "image": "images/haj1.jpg",
            "price": "310 RSD"
            },
            {
            "name": "Zaječarsko Draught 0.33l",
            "image": "images/toceno2.jpg",
            "price": "180 RSD"
            },
            {
            "name": "Zaječarsko Draught 0.5l",
            "image": "images/toceno2.jpg",
            "price": "210 RSD"
            },
            {
            "name": "Birra Moretti Draught 0.33l",
            "image": "images/toceno2.jpg",
            "price": "200 RSD"
            },
            {
            "name": "Birra Moretti Draught 0.5l",
            "image": "images/toceno2.jpg",
            "price": "230 RSD"
            }
            ]
            },
        {
         "name": "Grickalice",
         "items": [
             {
                 "name": "Čips 150g",
                 "image": "images/cips1.png",
                 "price": "240 RSD"
             },
             {
                 "name": "Kikiriki 100g",
                 "image": "images/kikiriki1.png",
                 "price": "190 RSD"
             }
             // Dodajte ostale stavke za alkoholne napitke po potrebi
         ]
     },
     {
        "name": "Snacks",
        "items": [
        {
        "name": "Chips 150g",
        "image": "images/cips1.png",
        "price": "240 RSD"
        },
        {
        "name": "Peanuts 100g",
        "image": "images/kikiriki1.png",
        "price": "190 RSD"
        }
        // Add more items for snacks as needed
        ]
        },
     {
        "name": "Hot Drinks",
        "items": [
            {
                "name": "Espresso Coffee",
                "image": "images/kafa.png",
                "price": "140 RSD"
            },
            {
                "name": "Espresso Coffee with Whipped Cream",
                "image": "images/kafaslag.png",
                "price": "170 RSD"
            },
            {
                "name": "Cappuccino",
                "image": "images/cappucino.png",
                "price": "160 RSD"
            },
            {
                "name": "Homemade Coffee",
                "image": "images/domacakafa.png",
                "price": "100 RSD"
            },
            {
                "name": "Hot Chocolate",
                "image": "images/toplacokolada.png",
                "price": "170 RSD"
            },
            {
                "name": "Hot Chocolate with Whipped Cream",
                "image": "images/toplacokoladaslag.png",
                "price": "200 RSD"
            },
            {
                "name": "Fructus Tea",
                "image": "images/caj.png",
                "price": "140 RSD"
            },
            {
                "name": "Whipped Cream",
                "image": "images/slag.png",
                "price": "30 RSD"
            },
            {
                "name": "Milk",
                "image": "images/mleko.png",
                "price": "60 RSD"
            },
            {
                "name": "Plazma Shake",
                "image": "images/plazma1.png",
                "price": "290 RSD"
            }
        ]
    },
    
     {
        "name": "Sokovi",
        "items": [
            {
                "name": "Coca Cola 0,25l",
                "image": "images/kokakola025.png",
                "price": "170 RSD"
            },
            {
                "name": "Coca Cola 0,1l",
                "image": "images/colacasa.png",
                "price": "90 RSD"
            },
            {
                "name": "Coca Cola zero 0,33l",
                "image": "images/colaziro.jpg",
                "price": "180 RSD"
            },
            {
                "name": "Cocta 0,25l",
                "image": "images/kokta.png",
                "price": "170 RSD"
            },
            {
                "name": "Fanta 0,25l",
                "image": "images/fanta.png",
                "price": "170 RSD"
            },
            {
                "name": "Sprite 0,25l",
                "image": "images/sprite1.png",
                "price": "170 RSD"
            },
            {
                "name": "Schweppers 0,25l",
                "image": "images/sveps.png",
                "price": "170 RSD"
            },
            {
                "name": "Pomorandža 0,25l",
                "image": "images/pomorandza.png",
                "price": "170 RSD"
            },
            {
                "name": "Borovnica 0,25l",
                "image": "images/borovnica.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Breskva 0,25l",
                "image": "images/breskva.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Jabuka 0,25l",
                "image": "images/jabuka1.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Jagoda 0,25l",
                "image": "images/jagoda.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Grožđe 0,25l",
                "image": "images/grozdje.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Multi vitamin 0,25l",
                "image": "images/multivitamin.png",
                "price": "170 RSD"
            },
            {
                "name": "Cedevita 0,2l",
                "image": "images/cedevita.png",
                "price": "160 RSD"
            },
            {
                "name": "Multi sola 0,5l",
                "image": "images/multisola.jpg",
                "price": "190 RSD"
            },
            {
                "name": "Ice tea 0,5l",
                "image": "images/icetea.jpg",
                "price": "190 RSD"
            },
            {
                "name": "Ceđena pomorandža 0,33l",
                "image": "images/cp.png",
                "price": "260 RSD"
            },
            {
                "name": "Limunada 0,33l",
                "image": "images/limunada.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Ceđeni MIX",
                "image": "images/mix1.jpg",
                "price": "270 RSD"
            },
            // Dodajte ostale stavke za alkoholne napitke po potrebi
        ]
    },
    {
        "name": "Juices",
        "items": [
            {
                "name": "Coca Cola 0.25l",
                "image": "images/kokakola025.png",
                "price": "170 RSD"
            },
            {
                "name": "Coca Cola 0.1l",
                "image": "images/colacasa.png",
                "price": "90 RSD"
            },
            {
                "name": "Coca Cola Zero 0.33l",
                "image": "images/colaziro.jpg",
                "price": "180 RSD"
            },
            {
                "name": "Cocta 0.25l",
                "image": "images/kokta.png",
                "price": "170 RSD"
            },
            {
                "name": "Fanta 0.25l",
                "image": "images/fanta.png",
                "price": "170 RSD"
            },
            {
                "name": "Sprite 0.25l",
                "image": "images/sprite1.png",
                "price": "170 RSD"
            },
            {
                "name": "Schweppes 0.25l",
                "image": "images/sveps.png",
                "price": "170 RSD"
            },
            {
                "name": "Orange Juice 0.25l",
                "image": "images/pomorandza.png",
                "price": "170 RSD"
            },
            {
                "name": "Blueberry Juice 0.25l",
                "image": "images/borovnica.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Peach Juice 0.25l",
                "image": "images/breskva.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Apple Juice 0.25l",
                "image": "images/jabuka1.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Strawberry Juice 0.25l",
                "image": "images/jagoda.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Grape Juice 0.25l",
                "image": "images/grozdje.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Multi Vitamin Juice 0.25l",
                "image": "images/multivitamin.png",
                "price": "170 RSD"
            },
            {
                "name": "Cedevita 0.2l",
                "image": "images/cedevita.png",
                "price": "160 RSD"
            },
            {
                "name": "Multi Sola 0.5l",
                "image": "images/multisola.jpg",
                "price": "190 RSD"
            },
            {
                "name": "Ice Tea 0.5l",
                "image": "images/icetea.jpg",
                "price": "190 RSD"
            },
            {
                "name": "Fresh Orange Juice 0.33l",
                "image": "images/cp.png",
                "price": "260 RSD"
            },
            {
                "name": "Lemonade 0.33l",
                "image": "images/limunada.jpg",
                "price": "170 RSD"
            },
            {
                "name": "Fresh Mix Juice",
                "image": "images/mix1.jpg",
                "price": "270 RSD"
            }
        ]
    },
    
    {
        "name": "Energetski napici i Voda",
        "items": [
            {
                "name": "Rosa voda 0,33l",
                "image": "images/rosa.jpg",
                "price": "130 RSD"
            },
            {
                "name": "Rosa voda gazirana 0,33l",
                "image": "images/rosag.jpg",
                "price": "140 RSD"
            },
            {
                "name": "Rosa voda gazirana 0,75l",
                "image": "images/rosag.jpg",
                "price": "210 RSD"
            },
            {
                "name": "Knjaz Miloš gazirana 0,25l",
                "image": "images/knjaz.jpg",
                "price": "140 RSD"
            },
            {
                "name": "Knjaz Miloš gazirana 0,25l",
                "image": "images/knjaz075.jpg",
                "price": "210 RSD"
            },
            {
                "name": "Knjaz Miloš limun 0,33l",
                "image": "images/knjazlimun.jpg",
                "price": "150 RSD"
            },
            {
                "name": "Red Bull 0,25l",
                "image": "images/redbul.jpg",
                "price": "290 RSD"
            },
            {
                "name": "Guarana 0,25l",
                "image": "images/guarana.jpg",
                "price": "190 RSD"
            }
            // Dodajte ostale stavke za alkoholne napitke po potrebi
        ]
    },
    {
        "name": "Energy Drinks and Water",
        "items": [
            {
                "name": "Rosa Water 0.33l",
                "image": "images/rosa.jpg",
                "price": "130 RSD"
            },
            {
                "name": "Rosa Sparkling Water 0.33l",
                "image": "images/rosag.jpg",
                "price": "140 RSD"
            },
            {
                "name": "Rosa Sparkling Water 0.75l",
                "image": "images/rosag.jpg",
                "price": "210 RSD"
            },
            {
                "name": "Knjaz Miloš Sparkling Water 0.25l",
                "image": "images/knjaz.jpg",
                "price": "140 RSD"
            },
            {
                "name": "Knjaz Miloš Sparkling Water 0.75l",
                "image": "images/knjaz075.jpg",
                "price": "210 RSD"
            },
            {
                "name": "Knjaz Miloš Lemon 0.33l",
                "image": "images/knjazlimun.jpg",
                "price": "150 RSD"
            },
            {
                "name": "Red Bull 0.25l",
                "image": "images/redbul.jpg",
                "price": "290 RSD"
            },
            {
                "name": "Guarana 0.25l",
                "image": "images/guarana.jpg",
                "price": "190 RSD"
            }
        ]
    },
    
    {
        "name": "Viski",
        "items": [
            {
                "name": "Jack Deniels 0,05l",
                "image": "images/jack1.jpg",
                "price": "360 RSD"
            },
            {
                "name": "Jameson 0,05l",
                "image": "images/jameson.jpg",
                "price": "330 RSD"
            }
           
            // Dodajte ostale stavke za alkoholne napitke po potrebi
        ]
    },
    {
        "name": "Whiskey",
        "items": [
        {
        "name": "Jack Daniels 0.05l",
        "image": "images/jack1.jpg",
        "price": "360 RSD"
        },
        {
        "name": "Jameson 0.05l",
        "image": "images/jameson.jpg",
        "price": "330 RSD"
        }
        // Add more items for whiskey as needed
        ]
        },
    {
        "name": "Kokteli",
        "items": [
            {
                "name": "Cuba libre",
                "image": "images/cuba.png",
                "price": "300 RSD"
            },
            {
                "name": "Mojito",
                "image": "images/mojito.png",
                "price": "350 RSD"
            },
            {
                "name": "Gin Tonik",
                "image": "images/gin.png",
                "price": "320 RSD"
            }
           
            // Dodajte ostale stavke za alkoholne napitke po potrebi
        ]
    },
    
{
    "name": "Cocktails",
    "items": [
    {
    "name": "Cuba Libre",
    "image": "images/cuba.png",
    "price": "300 RSD"
    },
    {
    "name": "Mojito",
    "image": "images/mojito.png",
    "price": "350 RSD"
    },
    {
    "name": "Gin Tonic",
    "image": "images/gin.png",
    "price": "320 RSD"
    }
    // Add more items for cocktails as needed
    ]
    },
        // Dodajte podatke za dodatne kategorije po potrebi
    ]
};
 
   
 function toggleSubMenu(menuItem) {
     const submenu = menuItem.querySelector('.submenu');
     const menuContainer = document.getElementById('menuContainer');
 
     menuItem.classList.toggle('active');
 
     // Prikupi sve aktivne podmenije
     const activeSubmenus = document.querySelectorAll('.menu-item.active .submenu');
 
     // Postavi visinu podmenija na osnovu najviše visine među aktivnim podmenijima
     const maxHeight = Math.max(...Array.from(activeSubmenus).map(sub => sub.scrollHeight));
     activeSubmenus.forEach(sub => {
         sub.style.maxHeight = `${maxHeight}px`;
     });
 
     // Dodaj logiku za smanjenje ukupne visine ako se zatvori podmeni
     if (!menuItem.classList.contains('active')) {
         submenu.style.maxHeight = '0';
         menuContainer.style.paddingBottom = '0';
     }
 
     // Pristupi tekstu koristeći querySelector umesto direktno preko textContent
     const categoryName = menuItem.querySelector('h2 span').textContent.trim();
     //console.log(categoryName)
     const category = menuData.categories.find(cat => cat.name === categoryName);
 
     if (category) {
         generateSubMenu(category, submenu);
     }
 }
 
 
 
 function generateSubMenu(category, submenuContainer) {
    submenuContainer.innerHTML = ''; // Očisti prethodni sadržaj

    Promise.all(category.items.map(loadImage))
        .then(images => {
            images.forEach((image, index) => {
                const item = category.items[index];

                const menuItemDetail = document.createElement('div');
                menuItemDetail.classList.add('menu-item-detail');

                const itemInfo = document.createElement('div');
                itemInfo.classList.add('menu-item-info');

                const itemName = document.createElement('p');
                itemName.classList.add('item');
                itemName.textContent = item.name;

                const itemPrice = document.createElement('p');
                itemPrice.classList.add('item-price');
                itemPrice.textContent = item.price;

                itemInfo.appendChild(itemName);
                itemInfo.appendChild(itemPrice);

                menuItemDetail.appendChild(image);
                menuItemDetail.appendChild(itemInfo);

                submenuContainer.appendChild(menuItemDetail);
            });

            // Prikazivanje podmenija
            submenuContainer.style.maxHeight = submenuContainer.scrollHeight + 'px';
        })
        .catch(error => {
            console.error('Failed to load images:', error);
        });
}

function loadImage(item) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Failed to load image: ${item.image}`));
        image.src = item.image;
        image.alt = 'Product Image';
    });
}


// function generateSubMenu(category, submenuContainer) {
//     submenuContainer.innerHTML = ''; // Očisti prethodni sadržaj

//     category.items.forEach(item => {
//         const menuItemDetail = document.createElement('div');
//         menuItemDetail.classList.add('menu-item-detail');

//         const image = document.createElement('img');
//         image.src = item.image;
//         image.alt = 'Product Image';

//         const itemInfo = document.createElement('div');
//         itemInfo.classList.add('menu-item-info');

//         const itemName = document.createElement('p');
//         itemName.classList.add('item');
//         itemName.textContent = item.name;

//         const itemPrice = document.createElement('p');
//         itemPrice.classList.add('item-price');
//         itemPrice.textContent = item.price;

//         itemInfo.appendChild(itemName);
//         itemInfo.appendChild(itemPrice);

//         menuItemDetail.appendChild(image);
//         menuItemDetail.appendChild(itemInfo);

//         submenuContainer.appendChild(menuItemDetail);
//     });

//     // Prikazivanje podmenija
//     submenuContainer.style.maxHeight = submenuContainer.scrollHeight + 'px';
// }
 

 function copyWifiKey() {
    var wifiKeyElement = document.getElementById('wifiKey');
    var wifiKey = wifiKeyElement.textContent;

    // Kopiraj tekst u međuspremnik
    var textArea = document.createElement("textarea");
    textArea.value = wifiKey;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    toastr.success('Uspešno kopirano!', '', {
        positionClass: 'toast-top-center', // Postavite ovu opciju za centriranje na vrhu
        timeOut: 2000 // Podešavanje trajanja obaveštenja na 2 sekunde
    });
}
 