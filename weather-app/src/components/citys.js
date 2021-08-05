const Citys = [
    "Budapest", 
    "Paris", 
    "Berlin", 
    "London", 
    "Ankara", 
    "Zagreb", 
    "Minsk", 
    "Washington", 
    "Tokyo", 
    "Sydney", 
    "Moscow", 
    "Dunakeszi",
    "Abu Dhabi",
    "Abuja",
    "Accra",
    "Addis Ababa",
    "Algiers",
    "Amman",
    "Amsterdam",
    "Andorra la Vella",
    "Antananarivo",
    "Apia",
    "Ashgabat",
    "Asmara",
    "Asuncion",
    "Athens",
    "Baghdad",
    "Baku",
    "Bamako",
    "Bandar Seri Begawan",
    "Bangkok",
    "Bangui",
    "Banjul",
    "Basseterre",
    "Beijing",
    "Beirut",
    "Belfast",
    "Belgrade",
    "Belmopan",
    "Bern",
    "Bishkek",
    "Bissau",
    "Bogota",
    "Brasilia",
    "Bratislava",
    "Brazzaville",
    "Bridgetown",
    "Brussels",
    "Bucharest",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Caracas",
    "Cardiff",
    "Castries",
    "Chisinau",
    "Colombo",
    "Conakry",
    "Copenhagen",
    "Dakar",
    "Damascus",
    "Dhaka",
    "Dili",
    "Djibouti",
    "Dodoma",
    "Doha",
    "Dublin",
    "Dushanbe",
    "Edinburgh",
    "Freetown",
    "Funafuti",
    "Gaborone",
    "Georgetown",
    "Gitega",
    "Guatemala City",
    "Hanoi",
    "Harare",
    "Havana",
    "Helsinki",
    "Honiara",
    "Islamabad",
    "Jakarta",
    "Jerusalem",
    "Juba",
    "Kabul",
    "Kampala",
    "Kathmandu",
    "Khartoum",
    "Kiev",
    "Kigali",
    "Kingston",
    "Kingstown",
    "Kinshasa",
    "Kuala Lumpur",
    "Kuwait City",
    "La Paz",
    "Libreville",
    "Lilongwe",
    "Lima",
    "Lisbon",
    "Ljubljana",
    "Lome",
    "Luanda",
    "Lusaka",
    "Luxembourg",
    "Madrid",
    "Majuro",
    "Malabo",
    "Male",
    "Managua",
    "Manama",
    "Manila",
    "Maputo",
    "Maseru",
    "Mbabana",
    "Melekeok",
    "Mexico City",
    "Mogadishu",
    "Monaco",
    "Monrovia",
    "Montevideo",
    "Moroni",
    "Moscow",
    "Muscat",
    "N'Djamena",
    "Nairobi",
    "Nassau",
    "Nay Pyi Taw",
    "New Delhi",
    "Niamey",
    "Nicosia",
    "Nouakchott",
    "Nuku'alofa",
    "Nur-Sultan",
    "Oslo",
    "Ottawa",
    "Ouagadougou",
    "Palikir",
    "Panama City",
    "Paramaribo",
    "Phnom Penh",
    "Podgorica",
    "Port",
    "Port Louis",
    "Port Moresby",
    "Port of Spain",
    "Port Vila",
    "Porto Novo",
    "Prague",
    "Praia",
    "Pretoria",
    "Pristina",
    "Pyongyang",
    "Quito",
    "Rabat",
    "Reykjavik",
    "Riga",
    "Riyadh",
    "Rome",
    "Roseau",
    "Saint George's",
    "Saint John's",
    "San Jose",
    "San Marino",
    "San Salvador",
    "Sana'a",
    "Santiago",
    "Santo Domingo",
    "Sao Tome",
    "Sarajevo",
    "Seoul",
    "Singapore",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Suva",
    "Taipei",
    "Tallinn",
    "Tarawa",
    "Tashkent",
    "Tbilisi",
    "Tegucigalpa",
    "Tehran",
    "Thimphu",
    "Tirana",
    "Tripoli",
    "Tunis",
    "Ulaanbaatar",
    "Vaduz",
    "Valletta",
    "Vatican City",
    "Victoria",
    "Vienna",
    "Vientiane",
    "Vilnius",
    "Warsaw",
    "Wellington",
    "Windhoek",
    "Yamoussoukro",
    "Yaounde",
    "Yerevan",
    "Ajka",
    "Baja",
    "Balassagyarmat",
    "Balmazújváros",
    "Békés",
    "Békéscsaba",
    "Budaörs",
    "Cegléd",
    "Csongrád",
    "Dabas",
    "Debrecen",
    "Dombóvár",
    "Dunaharaszti",
    "Dunakeszi",
    "Dunaújváros",
    "Eger",
    "Érd",
    "Esztergom",
    "Fót",
    "Göd",
    "Gödöllő",
    "Gyál",
    "Gyömrő",
    "Gyöngyös",
    "Győr",
    "Gyula",
    "Hajdúböszörmény",
    "Hajdúnánás",
    "Hajdúszoboszló",
    "Hatvan",
    "Hódmezővásárhely",
    "Jászberény",
    "Kalocsa",
    "Kaposvár",
    "Karcag",
    "Kazincbarcika",
    "Kecskemét",
    "Keszthely",
    "Kiskunfélegyháza",
    "Kiskunhalas",
    "Kisvárda",
    "Komárom",
    "Komló",
    "Makó",
    "Mátészalka",
    "Mezőkövesd",
    "Mezőtúr",
    "Miskolc",
    "Mohács",
    "Monor",
    "Mosonmagyaróvár",
    "Nagykanizsa",
    "Nagykőrös",
    "Nyíregyháza",
    "Orosháza",
    "Oroszlány",
    "Ózd",
    "Paks",
    "Pápa",
    "Pécel",
    "Pécs",
    "Pomáz",
    "Salgótarján",
    "Sárvár",
    "Siófok",
    "Sopron",
    "Szarvas",
    "Százhalombatta",
    "Szeged",
    "Székesfehérvár",
    "Szekszárd",
    "Szentendre",
    "Szentes",
    "Szigethalom",
    "Szigetszentmiklós",
    "Szolnok",
    "Szombathely",
    "Tapolca",
    "Tata",
    "Tatabánya",
    "Tiszaújváros",
    "Törökszentmiklós",
    "Vác",
    "Várpalota",
    "Vecsés",
    "Veresegyház",
    "Veszprém",
    "Zalaegerszeg"
]

export default Citys;