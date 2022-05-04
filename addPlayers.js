const mongoose = require('mongoose');
require('dotenv').config();

const json = {"compSeason":{"label":"2021/22","competition":{"abbreviation":"EN_PR","description":"Premier League","level":"SEN","source":"","id":1},"id":418},"team":{"name":"Wolverhampton Wanderers","club":{"name":"Wolverhampton Wanderers","shortName":"Wolves","abbr":"WOL","id":38},"teamType":"FIRST","shortName":"Wolves","id":38,"altIds":{"opta":"t39"}},"players":[{"playerId":49702,"info":{"position":"G","shirtNum":21,"positionInfo":"Goalkeeper"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"height":193,"weight":97,"latestPosition":"GOALKEEPER","appearances":0,"cleanSheets":0,"saves":0,"goalsConceded":0,"joinDate":{"millis":1499644800000,"label":"10 July 2017"},"birth":{"date":{"millis":530496000000,"label":"24 October 1986"},"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"place":"St. Ives"},"age":"35 years 191 days","name":{"display":"John Ruddy","first":"John","middle":"Thomas Gordon","last":"Ruddy"},"id":2896,"altIds":{"opta":"p19236"}},{"playerId":255676,"info":{"position":"D","shirtNum":2,"positionInfo":"Right Full Back"},"nationalTeam":{"isoCode":"NL","country":"Netherlands","demonym":"Dutch"},"height":180,"weight":65,"latestPosition":"DEFENDER","appearances":8,"goals":0,"assists":0,"tackles":10,"shots":1,"keyPasses":1,"cleanSheets":1,"joinDate":{"millis":1600473600000,"label":"19 September 2020"},"birth":{"date":{"millis":1011312000000,"label":"18 January 2002"},"country":{"isoCode":"NL","country":"Netherlands","demonym":"Dutch"}},"age":"20 years 105 days","name":{"display":"Ki-Jana Hoever","first":"Ki-Jana","last":"Hoever"},"id":52951,"altIds":{"opta":"p441271"}},{"playerId":217476,"info":{"position":"D","shirtNum":5,"positionInfo":"Left Full Back"},"nationalTeam":{"isoCode":"BR","country":"Brazil","demonym":"Brazilian"},"height":178,"weight":74,"latestPosition":"DEFENDER","appearances":18,"goals":0,"assists":0,"tackles":42,"shots":11,"keyPasses":10,"cleanSheets":6,"joinDate":{"millis":1599350400000,"label":"6 September 2020"},"birth":{"date":{"millis":603849600000,"label":"19 February 1989"},"country":{"isoCode":"BR","country":"Brazil","demonym":"Brazilian"},"place":"São Paulo"},"age":"33 years 73 days","name":{"display":"Marçal","first":"Fernando","last":"Marçal de Oliveira"},"id":16640,"altIds":{"opta":"p111291"}},{"playerId":129762,"info":{"position":"D","shirtNum":15,"positionInfo":"Centre Central Defender"},"nationalTeam":{"isoCode":"CI","country":"Cote D’Ivoire","demonym":"Ivorian"},"height":195,"weight":92,"latestPosition":"DEFENDER","appearances":6,"goals":0,"assists":0,"tackles":13,"shots":2,"keyPasses":0,"cleanSheets":1,"joinDate":{"millis":1530403200000,"label":"1 July 2018"},"birth":{"date":{"millis":665539200000,"label":"3 February 1991"},"country":{"isoCode":"FR","country":"France","demonym":"French"},"place":"Melun"},"age":"31 years 89 days","name":{"display":"Willy Boly","first":"Willy","last":"Boly"},"id":16204,"altIds":{"opta":"p90585"}},{"playerId":20418,"info":{"position":"D","shirtNum":16,"positionInfo":"Centre Central Defender"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"height":185,"weight":73,"latestPosition":"DEFENDER","appearances":34,"goals":3,"assists":0,"tackles":30,"shots":11,"keyPasses":2,"cleanSheets":11,"joinDate":{"millis":1435881600000,"label":"3 July 2015"},"birth":{"date":{"millis":730598400000,"label":"25 February 1993"},"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"place":"St Helens"},"age":"29 years 67 days","name":{"display":"Conor Coady","first":"Conor","middle":"David","last":"Coady"},"id":4136,"altIds":{"opta":"p94147"}},{"playerId":154336,"info":{"position":"D","shirtNum":19,"positionInfo":"Left Full Back"},"nationalTeam":{"isoCode":"ES","country":"Spain","demonym":"Spanish"},"height":175,"weight":70,"latestPosition":"DEFENDER","appearances":9,"goals":2,"assists":0,"tackles":18,"shots":9,"keyPasses":8,"cleanSheets":1,"joinDate":{"millis":1548892800000,"label":"31 January 2019"},"birth":{"date":{"millis":762652800000,"label":"3 March 1994"},"country":{"isoCode":"ES","country":"Spain","demonym":"Spanish"},"place":"Vigo"},"age":"28 years 61 days","name":{"display":"Jonny","first":"Jonathan","last":"Castro Otto"},"id":20277,"altIds":{"opta":"p114128"}},{"playerId":256065,"info":{"position":"D","shirtNum":22,"positionInfo":"Right Full Back"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":177,"weight":67,"latestPosition":"DEFENDER","appearances":25,"goals":0,"assists":1,"tackles":58,"shots":19,"keyPasses":18,"cleanSheets":6,"joinDate":{"millis":1600819200000,"label":"23 September 2020"},"birth":{"date":{"millis":753408000000,"label":"16 November 1993"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"place":"Lisboa"},"age":"28 years 168 days","name":{"display":"Nélson Semedo","first":"Nélson","last":"Cabral Semedo"},"id":16642,"altIds":{"opta":"p200402"}},{"playerId":144289,"info":{"position":"D","shirtNum":23,"positionInfo":"Left/Centre Central Defender"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"latestPosition":"DEFENDER","appearances":30,"goals":1,"assists":0,"tackles":50,"shots":13,"keyPasses":3,"cleanSheets":10,"joinDate":{"millis":1545609600000,"label":"24 December 2018"},"birth":{"date":{"millis":864345600000,"label":"23 May 1997"},"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"}},"age":"24 years 345 days","name":{"display":"Maximilian Kilman","first":"Maximilian","last":"Kilman"},"id":13522,"altIds":{"opta":"p214048"}},{"playerId":49704,"info":{"position":"M","shirtNum":8,"positionInfo":"Centre Central Midfielder"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":180,"weight":80,"latestPosition":"MIDFIELDER","appearances":29,"goals":4,"assists":2,"tackles":65,"shots":39,"keyPasses":18,"cleanSheets":9,"joinDate":{"millis":1499472000000,"label":"8 July 2017"},"birth":{"date":{"millis":858211200000,"label":"13 March 1997"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"}},"age":"25 years 51 days","name":{"display":"Rúben Neves","first":"Rúben Diogo","last":"da Silva Neves"},"id":11180,"altIds":{"opta":"p171317"}},{"playerId":180050,"info":{"position":"M","shirtNum":10,"positionInfo":"Left/Right Winger"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":165,"weight":58,"latestPosition":"MIDFIELDER","appearances":25,"goals":2,"assists":3,"tackles":18,"shots":35,"keyPasses":35,"cleanSheets":2,"joinDate":{"millis":1580342400000,"label":"30 January 2020"},"birth":{"date":{"millis":814233600000,"label":"21 October 1995"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"}},"age":"26 years 194 days","name":{"display":"Daniel Podence","first":"Daniel","last":"Castelo Podence"},"id":11362,"altIds":{"opta":"p200600"}},{"playerId":35800,"info":{"position":"M","shirtNum":27,"positionInfo":"Centre Defensive Midfielder"},"nationalTeam":{"isoCode":"MA","country":"Morocco","demonym":"Moroccan"},"height":190,"weight":80,"latestPosition":"MIDFIELDER","appearances":30,"goals":2,"assists":0,"tackles":38,"shots":15,"keyPasses":7,"cleanSheets":11,"joinDate":{"millis":1472515200000,"label":"30 August 2016"},"birth":{"date":{"millis":638409600000,"label":"26 March 1990"},"country":{"isoCode":"FR","country":"France","demonym":"French"},"place":"Bourg-de-Péage"},"age":"32 years 38 days","name":{"display":"Romain Saïss","first":"Romain","last":"Saïss"},"id":20745,"altIds":{"opta":"p107613"}},{"playerId":133641,"info":{"position":"M","shirtNum":28,"positionInfo":"Centre Central Midfielder"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":170,"weight":61,"latestPosition":"MIDFIELDER","appearances":31,"goals":2,"assists":1,"tackles":71,"shots":19,"keyPasses":35,"cleanSheets":10,"joinDate":{"millis":1532390400000,"label":"24 July 2018"},"birth":{"date":{"millis":526521600000,"label":"8 September 1986"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"place":"Portimão"},"age":"35 years 237 days","name":{"display":"João Moutinho","first":"João Filipe Iria","last":"Santos Moutinho"},"id":11259,"altIds":{"opta":"p19624"}},{"playerId":160025,"info":{"position":"M","shirtNum":32,"positionInfo":"Centre Central Midfielder"},"nationalTeam":{"isoCode":"BE","country":"Belgium","demonym":"Belgian"},"height":188,"weight":83,"latestPosition":"MIDFIELDER","appearances":27,"goals":1,"assists":2,"tackles":36,"shots":18,"keyPasses":11,"cleanSheets":4,"joinDate":{"millis":1561939200000,"label":"1 July 2019"},"birth":{"date":{"millis":797904000000,"label":"15 April 1995"},"country":{"isoCode":"BE","country":"Belgium","demonym":"Belgian"},"place":"Passendale"},"age":"27 years 18 days","name":{"display":"Leander Dendoncker","first":"Leander","last":"Dendoncker"},"id":5866,"altIds":{"opta":"p151589"}},{"playerId":160895,"info":{"position":"F","shirtNum":7,"positionInfo":"Right Winger"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":172,"weight":69,"latestPosition":"FORWARD","appearances":9,"goals":0,"assists":0,"tackles":2,"shots":9,"keyPasses":6,"cleanSheets":0,"joinDate":{"millis":1564704000000,"label":"2 August 2019"},"birth":{"date":{"millis":952560000000,"label":"9 March 2000"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"place":"Viana do Castelo"},"age":"22 years 55 days","name":{"display":"Pedro Neto","first":"Pedro","last":"Lomba Neto"},"id":21998,"altIds":{"opta":"p247632"}},{"playerId":160036,"info":{"position":"F","shirtNum":9,"positionInfo":"Centre Striker"},"nationalTeam":{"isoCode":"MX","country":"Mexico","demonym":"Mexican"},"height":190,"weight":76,"latestPosition":"FORWARD","appearances":30,"goals":6,"assists":3,"tackles":27,"shots":53,"keyPasses":33,"cleanSheets":5,"joinDate":{"millis":1561939200000,"label":"1 July 2019"},"birth":{"date":{"millis":673401600000,"label":"5 May 1991"},"country":{"isoCode":"MX","country":"Mexico","demonym":"Mexican"},"place":"Tepeji del Río de Ocampo"},"age":"30 years 363 days","name":{"display":"Raúl Jiménez","first":"Raúl","last":"Jiménez"},"id":11071,"altIds":{"opta":"p102057"}},{"playerId":217477,"info":{"position":"F","shirtNum":17,"positionInfo":"Centre Second Striker"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":185,"weight":75,"latestPosition":"FORWARD","appearances":21,"goals":0,"assists":0,"tackles":3,"shots":18,"keyPasses":3,"cleanSheets":0,"joinDate":{"millis":1599264000000,"label":"5 September 2020"},"birth":{"date":{"millis":1027036800000,"label":"19 July 2002"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"place":"Porto"},"age":"19 years 288 days","name":{"display":"Fábio Silva","first":"Fábio Daniel","last":"Soares Silva"},"id":66670,"altIds":{"opta":"p449988"}},{"playerId":276954,"info":{"position":"D","shirtNum":14,"positionInfo":"Centre Central Defender"},"nationalTeam":{"isoCode":"CO","country":"Colombia","demonym":"Colombian"},"height":187,"weight":76,"latestPosition":"DEFENDER","appearances":0,"goals":0,"assists":0,"tackles":0,"shots":0,"keyPasses":0,"cleanSheets":0,"joinDate":{"millis":1645920000000,"label":"27 February 2022"},"birth":{"date":{"millis":988761600000,"label":"2 May 2001"},"country":{"isoCode":"CO","country":"Colombia","demonym":"Colombian"},"place":"Antioquia"},"age":"21 years 1 day","name":{"display":"Yerson Mosquera","first":"Yerson","last":"Mosquera"},"id":115114,"altIds":{"opta":"p501837"}},{"playerId":278025,"info":{"position":"F","shirtNum":11,"positionInfo":"Left/Right Winger","loan":true},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":184,"weight":70,"latestPosition":"FORWARD","appearances":25,"goals":1,"assists":1,"tackles":26,"shots":30,"keyPasses":14,"cleanSheets":0,"joinDate":{"millis":1625356800000,"label":"4 July 2021"},"birth":{"date":{"millis":946425600000,"label":"29 December 1999"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"place":"Viana do Castelo"},"age":"22 years 125 days","name":{"display":"Trincão","first":"Francisco António","last":"Machado Trincão"},"id":67454,"altIds":{"opta":"p222564"}},{"playerId":279691,"info":{"position":"D","shirtNum":3,"positionInfo":"Left Full Back"},"nationalTeam":{"isoCode":"FR","country":"France","demonym":"French"},"height":179,"weight":70,"latestPosition":"DEFENDER","appearances":19,"goals":0,"assists":2,"tackles":54,"shots":8,"keyPasses":15,"cleanSheets":5,"joinDate":{"millis":1625788800000,"label":"9 July 2021"},"birth":{"date":{"millis":991785600000,"label":"6 June 2001"},"country":{"isoCode":"FR","country":"France","demonym":"French"}},"age":"20 years 331 days","name":{"display":"Rayan Aït-Nouri","first":"Rayan","last":"Aït-Nouri"},"id":71432,"altIds":{"opta":"p448514"}},{"playerId":281359,"info":{"position":"G","shirtNum":1,"positionInfo":"Goalkeeper"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":192,"weight":84,"latestPosition":"GOALKEEPER","appearances":34,"cleanSheets":11,"saves":116,"goalsConceded":32,"joinDate":{"millis":1626307200000,"label":"15 July 2021"},"birth":{"date":{"millis":727228800000,"label":"17 January 1993"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"}},"age":"29 years 106 days","name":{"display":"José Sá","first":"José Pedro","last":"Malheiro de Sá"},"id":15715,"altIds":{"opta":"p149065"}},{"playerId":287539,"info":{"position":"M","shirtNum":39,"positionInfo":"Centre Central Midfielder"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"latestPosition":"MIDFIELDER","appearances":3,"goals":0,"assists":0,"tackles":4,"shots":0,"keyPasses":2,"cleanSheets":0,"joinDate":{"millis":1563235200000,"label":"16 July 2019"},"birth":{"date":{"millis":1019779200000,"label":"26 April 2002"},"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"}},"age":"20 years 7 days","name":{"display":"Luke Cundle","first":"Luke","last":"Cundle"},"id":23989,"altIds":{"opta":"p245923"}},{"playerId":287540,"info":{"position":"F","shirtNum":77,"positionInfo":"Right Winger"},"nationalTeam":{"isoCode":"GB-WLS","country":"Wales","demonym":"Welsh"},"latestPosition":"FORWARD","appearances":1,"goals":0,"assists":0,"tackles":1,"shots":0,"keyPasses":0,"cleanSheets":0,"joinDate":{"millis":1572307200000,"label":"29 October 2019"},"birth":{"date":{"millis":1041206400000,"label":"30 December 2002"},"country":{"isoCode":"GB-WLS","country":"Wales","demonym":"Welsh"}},"age":"19 years 124 days","name":{"display":"Chem Campbell","first":"Chem","last":"Campbell"},"id":51648,"altIds":{"opta":"p461026"}},{"playerId":288581,"info":{"position":"F","shirtNum":26,"positionInfo":"Centre Striker","loan":true},"nationalTeam":{"isoCode":"KR","country":"South Korea","demonym":"Korean"},"height":177,"weight":77,"latestPosition":"FORWARD","appearances":26,"goals":5,"assists":1,"tackles":27,"shots":20,"keyPasses":16,"cleanSheets":0,"joinDate":{"millis":1630195200000,"label":"29 August 2021"},"birth":{"date":{"millis":822614400000,"label":"26 January 1996"},"country":{"isoCode":"KR","country":"South Korea","demonym":"Korean"},"place":"Chuncheon"},"age":"26 years 97 days","name":{"display":"Hwang Hee-Chan","first":"Hee-Chan","last":"Hwang"},"id":20337,"altIds":{"opta":"p184754"}},{"playerId":295138,"info":{"position":"G","shirtNum":48,"positionInfo":"Goalkeeper"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"latestPosition":"GOALKEEPER","appearances":0,"cleanSheets":0,"saves":0,"goalsConceded":0,"joinDate":{"millis":1635638400000,"label":"31 October 2021"},"birth":{"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"}},"name":{"display":"James Storer","first":"James","last":"Storer"},"id":109735,"altIds":{"opta":"p518504"}},{"playerId":298524,"info":{"position":"D","shirtNum":64,"positionInfo":"Left Full Back"},"nationalTeam":{"isoCode":"ES","country":"Spain","demonym":"Spanish"},"height":180,"weight":73,"latestPosition":"DEFENDER","appearances":0,"goals":0,"assists":0,"tackles":0,"shots":0,"keyPasses":0,"cleanSheets":0,"joinDate":{"millis":1611878400000,"label":"29 January 2021"},"birth":{"date":{"millis":1032307200000,"label":"18 September 2002"},"country":{"isoCode":"ES","country":"Spain","demonym":"Spanish"},"place":"Vigo"},"age":"19 years 227 days","name":{"display":"Hugo Bueno","first":"Hugo","last":"Bueno"},"id":66692,"altIds":{"opta":"p490721"}},{"playerId":287660,"info":{"position":"D","shirtNum":81,"positionInfo":"Left Wing Back"},"nationalTeam":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"latestPosition":"DEFENDER","appearances":0,"goals":0,"assists":0,"tackles":0,"shots":0,"keyPasses":0,"cleanSheets":0,"joinDate":{"millis":1628985600000,"label":"15 August 2021"},"birth":{"date":{"millis":1067904000000,"label":"4 November 2003"},"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"}},"age":"18 years 180 days","name":{"display":"Dexter Lembikisa","first":"Dexter","last":"Lembikisa"},"id":68580,"altIds":{"opta":"p492776"}},{"playerId":300707,"info":{"position":"D","shirtNum":24,"positionInfo":"Left/Centre Full Back"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":187,"weight":72,"latestPosition":"DEFENDER","appearances":2,"goals":0,"assists":0,"tackles":8,"shots":0,"keyPasses":0,"cleanSheets":0,"joinDate":{"millis":1642118400000,"label":"14 January 2022"},"birth":{"date":{"millis":916444800000,"label":"16 January 1999"},"country":{"isoCode":"GW","country":"Guinea-Bissau","demonym":"Guinea-Bissau"}},"age":"23 years 107 days","name":{"display":"Toti","first":"Toti António","last":"Gomes"},"id":92635,"altIds":{"opta":"p510362"}},{"playerId":301037,"info":{"position":"F","shirtNum":20,"positionInfo":"Left/Right Winger"},"nationalTeam":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"height":179,"weight":73,"latestPosition":"FORWARD","appearances":5,"goals":0,"assists":1,"tackles":2,"shots":2,"keyPasses":2,"cleanSheets":0,"joinDate":{"millis":1642896000000,"label":"23 January 2022"},"birth":{"date":{"millis":949708800000,"label":"5 February 2000"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"},"place":"Cascais"},"age":"22 years 87 days","name":{"display":"Chiquinho","first":"Francisco Jorge","last":"Tomás Oliveira"},"id":122388,"altIds":{"opta":"p510363"}},{"playerId":301149,"info":{"position":"G","positionInfo":"Goalkeeper"},"nationalTeam":{"isoCode":"ME","country":"Montenegro","demonym":"Montenegrin"},"height":195,"latestPosition":"GOALKEEPER","appearances":0,"cleanSheets":0,"saves":0,"goalsConceded":0,"joinDate":{"millis":1595808000000,"label":"27 July 2020"},"birth":{"date":{"millis":869616000000,"label":"23 July 1997"},"country":{"isoCode":"GB-ENG","country":"England","demonym":"English"},"place":"Grimsby"},"age":"24 years 284 days","name":{"display":"Matija Sarkic","first":"Matija","last":"Sarkic"},"id":14463,"altIds":{"opta":"p216208"}}],"officials":[{"officialId":12951,"role":"Manager","active":true,"birth":{"date":{"millis":200707200000,"label":"12 May 1976"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"}},"age":"45 years 356 days","name":{"display":"Bruno Lage","first":"Bruno","last":"Lage"},"id":55720,"altIds":{"opta":"man51070"}},{"officialId":13177,"role":"Assistant Manager","active":true,"birth":{"date":{"millis":283910400000,"label":"31 December 1978"},"country":{"isoCode":"PT","country":"Portugal","demonym":"Portugese"}},"age":"43 years 123 days","name":{"display":"Alexandre Raminhas da Silva","first":"Alexandre","last":"Raminhas da Silva"},"id":117148,"altIds":{"opta":"man55649"}}]}

const mongo = {
  username: process.env.MONGOUSERNAME,
  password: process.env.MONGOPASSWORD,
  db: process.env.MONGODB,
};

const { players } = require('./backend/models/players.model.js');

const app = async () => {
  await mongoose.connect(`mongodb+srv://${mongo.username}:${mongo.password}@cluster0.ypgj5.mongodb.net/${mongo.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const club = json.team.club.name;

  const upload = async () => {
    json.players.forEach(player => {
      players.create({
        id: player.altIds.opta,
        name: player.name.display,
        country: player.nationalTeam.country || 'unknown',
        club,
        position: player.info.positionInfo,
      });
    })
  }

  upload();

  // mongoose.connection.close();
};

app();



