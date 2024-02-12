function changeLanguage(language,action) {
    // Postavite tekst na odgovarajući jezik
    
    if (language === 'en') {
        document.getElementById('aperitiviText').innerText = 'Aperitifs and Liqueurs';
        // Dodajte još logike za druge elemente koji treba da se promene na engleski
    } else if (language === 'sr') {
        document.getElementById('aperitiviText').innerText = 'Aperitivi i likeri';
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
                    "name": "Gorka1 tajna 0,05l",
                    "image": "images/gorka_tajna00_5l.png",
                    "price": "150 RSD"
                },
                
                // Dodajte ostale stavke za tople napitke po potrebi
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
                   "image": "images/sangrija.png",
                   "price": "140 RSD"
               },
               {
                   "name": "Belo vino Praška 0,1l",
                   "image": "images/sangrija.png",
                   "price": "130 RSD"
               },
               {
                   "name": "Rose vino Praška 0,1l",
                   "image": "images/sangrija.png",
                   "price": "140 RSD"
               },
                // Dodajte ostale stavke za hladne napitke po potrebi
            ]
        },
        {
            "name": "Piva",
            "items": [
                {
                    "name": "Lav Premium 0,5l",
                    "image": "images/premium1.png",
                    "price": "160 RSD"
                },
                {
                    "name": "Lav Premium 0,33l",
                    "image": "images/premium1.png",
                    "price": "190 RSD"
                },
                {
                   "name": "Lav  0,5l",
                   "image": "images/lav05.png",
                   "price": "160 RSD"
               },
               {
                   "name": "Tuborg  0,33l",
                   "image": "images/tuborg2.png",
                   "price": "240 RSD"
               },
               {
                   "name": "Tuborg Ice  0,33l",
                   "image": "images/tuborgice.png",
                   "price": "240 RSD"
               },
               {
                   "name": "Budweiser dark 0,33l",
                   "image": "images/badcrni.png",
                   "price": "240 RSD"
               },
               {
                   "name": "Budweiser  0,33l",
                   "image": "images/bad.png",
                   "price": "230 RSD"
               },
               {
                   "name": "Carlsberg 0,25l",
                   "image": "images/calsberg.png",
                   "price": "260 RSD"
               },
               {
                   "name": "Carlsberg 0,4l",
                   "image": "images/calsberg.png",
                   "price": "220 RSD"
               },
               {
                   "name": "Erdinger 0,33l",
                   "image": "images/erdinger.png",
                   "price": "300 RSD"
               },
               {
                   "name": "Grimbergen blond 0,33l",
                   "image": "images/grimblond.png",
                   "price": "230 RSD"
               },
               {
                   "name": "San miguel fresca 0,33l",
                   "image": "images/sanmigel1.png",
                   "price": "340 RSD"
               },
               {
                   "name": "Kronenbourg blanc 0,33l",
                   "image": "images/cron.png",
                   "price": "240 RSD"
               },
               {
                   "name": "Somersby 0,33l",
                   "image": "images/somer.png",
                   "price": "250 RSD"
               },
               {
                   "name": "Lav Premium Točeni 0,33l",
                   "image": "images/lavtoceno.png",
                   "price": "190 RSD"
               },
               {
                   "name": "Lav Premium Točeni 0,5l",
                   "image": "images/lavtoceno.png",
                   "price": "220 RSD"
               },
               {
                   "name": "Kronenbourg Točeni 0,33l",
                   "image": "images/krontoceni.png",
                   "price": "260 RSD"
               },
               {
                   "name": "Kronenbourg Točeni 0,5l",
                   "image": "images/krontoceni.png",
                   "price": "290 RSD"
               },
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
         "name": "Topli Napici",
         "items": [
             {
                 "name": "Espresso kafa",
                 "image": "images/kafa.png",
                 "price": "140 RSD"
             },
             {
                 "name": "Espresso kafa sa šlagom",
                 "image": "images/kafaslag.png",
                 "price": "170 RSD"
             },
             {
              "name": "Cappucino",
              "image": "images/cappucino.png",
              "price": "160 RSD"
          },
          {
              "name": "Domaća kafa",
              "image": "images/domacakafa.png",
              "price": "100 RSD"
          },
          {
              "name": "Topla čokolada",
              "image": "images/toplacokolada.png",
              "price": "170 RSD"
          },
          {
              "name": "Topla čokolada sa šlagom",
              "image": "images/toplacokoladaslag.png",
              "price": "200 RSD"
          },
          {
              "name": "Čaj fructus",
              "image": "images/caj.png",
              "price": "140 RSD"
          },
          {
              "name": "Šlag",
              "image": "images/slag.png",
              "price": "30 RSD"
          },
          {
              "name": "Mleko",
              "image": "images/mleko.png",
              "price": "60 RSD"
          },
             // Dodajte ostale stavke za alkoholne napitke po potrebi
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
 
     category.items.forEach(item => {
         const menuItemDetail = document.createElement('div');
         menuItemDetail.classList.add('menu-item-detail');
 
         const image = document.createElement('img');
         image.src = item.image;
         image.alt = 'Product Image';
 
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
 }
 

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
 