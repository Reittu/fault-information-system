let data = `...`.split(/\n/g).map( x => x.trim().split(/(?<=[a-zA-ZöäåÖÄÅ])\s+(?=[a-zA-ZöäåÖÄÅ])/));
let result;
data.forEach( x => result += `INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='${x[1]}'),'${x[0]}')` + '\n');
console.log(result);

INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Tampere')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Turku')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Oulu')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Lahti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Jyväskylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Kuopio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Pori')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Lappeenranta')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Vaasa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Joensuu')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Hämeenlinna')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Kokkola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Mikkeli')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Rovaniemi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Kouvola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Savonlinna')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Kemi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Porvoo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Kirkonkylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Kemijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Sodankylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Kangasala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Varkaus')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Kuusamo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Teuva')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Saarijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Lemland')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Simpele')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Lumijoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Urjala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Geta')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Laukaa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Ingå')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Laitila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Kitee')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Kaustinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Honkajoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Kauhajoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Lieksa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Sonkajärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Suonenjoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Enontekiö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Nastola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Kyyjärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Vårdö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Savukoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Sipoo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Siilinjärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Tuusniemi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Masku')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Ranua')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Lapua')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Nivala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Nummela')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Pelkosenniemi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Brändö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Pulkkila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Pudasjärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Haapajärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Harjavalta')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Karstula')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Kauniainen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Korsnäs')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Ruokolahti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Jomala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Loimaa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Muhos')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Rautalampi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Rautavaara')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Lohja')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Taipalsaari')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Imatra')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Jämijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Raseborg')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Karkkila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Kalajoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Puumala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Uusikaupunki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Soini')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Pihtipudas')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Toijala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Lemi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Savitaipale')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Karvia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Ilmajoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Orimattila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Oripää')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Kankaanpää')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Vantaa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Pielavesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Kronoby')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Kivijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Juva')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Polvijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Polvijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Lappträsk')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Luvia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Taivalkoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Ypäjä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Joutsa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Malax')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Mynämäki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Ikaalinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Pertunmaa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Järvenpää')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Kannus')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Nurmijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Sottunga')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Hämeenkyrö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Ödkarby')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Tammela')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Multia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Vieremä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Liminka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Kiuruvesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Kauhava')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Hyvinkää')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Outokumpu')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Kristinestad')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Nousiainen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Iisalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Hammarland')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Pieksämäki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Hyrynsalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Lappajärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Suomussalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Tuusula')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Kaskinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Hankasalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Muonio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Maaninka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Eckerö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Heinävesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Kannonkoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Kyrö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Kirkkonummi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Larsmo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Askola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Forssa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Mänttä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Utsjoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Parola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Äänekoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Halsua')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Ilomantsi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Alavus')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Taivassalo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Lestijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Haapavesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Punkalaidun')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Uurainen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Pyhäjoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Köyliö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Kittilä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Bennäs')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Simo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Huittinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Ruovesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Keitele')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Dalsbruk')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Loppi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Pyhäranta')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Lieto')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Kempele')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Aura')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Riihimäki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Kustavi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Liperi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Kokemäki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Luhanka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Veteli')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Konnevesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Perho')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Rusko')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Nakkila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Reisjärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Godby')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Jämsä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Vörå')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Hollola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Jokioinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Närpes')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Seinäjoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Petäjävesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Rauma')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Ii')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Säkylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Kangasniemi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Siuntio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Hamina')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Pälkäne')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Kärsämäki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Kuortane')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Vimpeli')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Tl'),'Koski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Kausala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Björby')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Alavieska')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Sysmä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Tervola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Kajaani')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Rantasalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Hanko')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Sastamala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Mäntsälä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Ivalo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Parikkala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Pargas')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Siikainen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Hirvensalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Kuhmoinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Jalasjärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Turenki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Kotka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Evijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Isokyrö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Hartola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Vääksy')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Vaala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Virrat')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Keuruu')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Tornio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Pornainen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Pukkila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Isojoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Pello')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Kurikka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Järvelä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Merijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Tohmajärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Pohjanmaa'),'Toholampi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Muurame')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Sievi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Naantali')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Lumparland')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Leppävirta')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Oulainen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Jakobstad')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Joroinen')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Salo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Laihia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Lovisa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Myrskylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Kuhmo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Kontiolahti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Paltamo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Pirkkala')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Karlby')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Hämeenkoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Nurmes')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Toivakka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Tarvasjoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Nokia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Korsholm')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Hailuoto')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Sulkava')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Humppila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Ristijärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Kumlinge')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Ruukki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Eura')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Salla')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Eurajoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Föglö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Kimito')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Kihniö')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Posio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Lempäälä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Kinnula')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Åva')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Utajärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Valtimo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Paimio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Karijoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Keminmaa')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Kolari')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Kaavi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Ahvenanmaan maakunta'),'Mariehamn')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Raisio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Enonkoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Korkeakoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Kaarina')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Orivesi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Savo'),'Mäntyharju')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Alajärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Puolanka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Virolahti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Tyrnävä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Heinola')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Pohjanmaa'),'Ähtäri')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Siltakylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kanta-Häme'),'Oitti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Marttila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Vesanto')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Kerava')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Ulvila')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Päijät-Häme'),'Padasjoki')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Juankoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Uusimaa'),'Espoo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Parkano')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Merikarvia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Raahe')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Tervo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Savo'),'Lapinlahti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Keski-Suomi'),'Viitasaari')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Vesilahti')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kainuu'),'Sotkamo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Sauvo')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Ylivieska')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Vinkkilä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Pyhäntä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Pohjanmaa'),'Pyhäsalmi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Kymenlaakso'),'Miehikkälä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Valkeakoski')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pirkanmaa'),'Ylöjärvi')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Juuka')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Lappi'),'Ylitornio')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Pomarkku')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Varsinais-Suomi'),'Somero')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjois-Karjala'),'Rääkkylä')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Pohjanmaa'),'Nykarleby')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Satakunta'),'Lavia')
INSERT INTO City(Region_id, Name) VALUES ((SELECT id FROM Region WHERE name='Etelä-Karjala'),'Taavetti')