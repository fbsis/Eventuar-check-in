import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CredenciaDetalhesPage } from './../credencia-detalhes//credencia-detalhes';

/*
  Generated class for the Credencia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-credencia',
  templateUrl: 'credencia.html'
})
export class CredenciaPage {

  public participantes = [];
  public resultado = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getParticipantes();

    this.resultado = this.participantes;
  }

  getParticipantes(){
    console.log('db');
    this.participantes = [{
  "id": 1,
  "nome": "Michael Ortiz",
  "email": "mortiz0@bizjournals.com",
  "cpf": "3542277082008312",
  "presenca": false,
  "data_cadastro": "02/11/2013"
}, {
  "id": 2,
  "nome": "Margaret Lawrence",
  "email": "mlawrence1@jimdo.com",
  "cpf": "4844527875801619",
  "presenca": false,
  "data_cadastro": "16/04/2000"
}, {
  "id": 3,
  "nome": "Pamela Kelley",
  "email": "pkelley2@barnesandnoble.com",
  "cpf": "3585396230464397",
  "presenca": true,
  "data_cadastro": "18/03/2010"
}, {
  "id": 4,
  "nome": "Albert Cooper",
  "email": "acooper3@answers.com",
  "cpf": "4017957078785",
  "presenca": true,
  "data_cadastro": "13/08/2001"
}, {
  "id": 5,
  "nome": "Catherine Wood",
  "email": "cwood4@tumblr.com",
  "cpf": "3557393267232742",
  "presenca": true,
  "data_cadastro": "28/01/2017"
}, {
  "id": 6,
  "nome": "Jason Banks",
  "email": "jbanks5@nymag.com",
  "cpf": "374622891728544",
  "presenca": false,
  "data_cadastro": "04/01/2008"
}, {
  "id": 7,
  "nome": "Ronald Garcia",
  "email": "rgarcia6@tripod.com",
  "cpf": "3546705670298842",
  "presenca": false,
  "data_cadastro": "06/02/2014"
}, {
  "id": 8,
  "nome": "Sara Boyd",
  "email": "sboyd7@imdb.com",
  "cpf": "5010122118086791",
  "presenca": false,
  "data_cadastro": "24/06/2013"
}, {
  "id": 9,
  "nome": "Bonnie Austin",
  "email": "baustin8@exblog.jp",
  "cpf": "56022585959910940",
  "presenca": true,
  "data_cadastro": "02/03/2015"
}, {
  "id": 10,
  "nome": "Pamela Bradley",
  "email": "pbradley9@imgur.com",
  "cpf": "67712139287632503",
  "presenca": false,
  "data_cadastro": "10/04/2010"
}, {
  "id": 11,
  "nome": "Henry Schmidt",
  "email": "hschmidta@hp.com",
  "cpf": "676363389358731888",
  "presenca": true,
  "data_cadastro": "03/12/2003"
}, {
  "id": 12,
  "nome": "Raymond Rose",
  "email": "rroseb@networksolutions.com",
  "cpf": "3568060360169454",
  "presenca": true,
  "data_cadastro": "22/09/2011"
}, {
  "id": 13,
  "nome": "Todd Lopez",
  "email": "tlopezc@fda.gov",
  "cpf": "5432447206888299",
  "presenca": true,
  "data_cadastro": "20/07/2005"
}, {
  "id": 14,
  "nome": "Matthew Nguyen",
  "email": "mnguyend@reuters.com",
  "cpf": "67065619473657912",
  "presenca": false,
  "data_cadastro": "07/06/2014"
}, {
  "id": 15,
  "nome": "Kathy Bowman",
  "email": "kbowmane@accuweather.com",
  "cpf": "5444870411472193",
  "presenca": false,
  "data_cadastro": "18/09/2005"
}, {
  "id": 16,
  "nome": "Juan Martin",
  "email": "jmartinf@narod.ru",
  "cpf": "3545978278883882",
  "presenca": true,
  "data_cadastro": "05/01/2009"
}, {
  "id": 17,
  "nome": "Christopher Mitchell",
  "email": "cmitchellg@aboutads.info",
  "cpf": "633314620823338474",
  "presenca": false,
  "data_cadastro": "01/11/2015"
}, {
  "id": 18,
  "nome": "Matthew Watkins",
  "email": "mwatkinsh@adobe.com",
  "cpf": "3561967003863094",
  "presenca": true,
  "data_cadastro": "04/11/2002"
}, {
  "id": 19,
  "nome": "Larry Little",
  "email": "llittlei@altervista.org",
  "cpf": "5602246471430280",
  "presenca": false,
  "data_cadastro": "17/06/2016"
}, {
  "id": 20,
  "nome": "Katherine Moreno",
  "email": "kmorenoj@ucoz.com",
  "cpf": "3546540620572164",
  "presenca": true,
  "data_cadastro": "04/04/2015"
}, {
  "id": 21,
  "nome": "Ralph Wagner",
  "email": "rwagnerk@nationalgeographic.com",
  "cpf": "5602238583924680",
  "presenca": false,
  "data_cadastro": "04/12/2016"
}, {
  "id": 22,
  "nome": "Wanda Hughes",
  "email": "whughesl@imgur.com",
  "cpf": "6771866533794101",
  "presenca": false,
  "data_cadastro": "26/04/2008"
}, {
  "id": 23,
  "nome": "Catherine Ford",
  "email": "cfordm@merriam-webster.com",
  "cpf": "3550065277850633",
  "presenca": false,
  "data_cadastro": "03/11/2011"
}, {
  "id": 24,
  "nome": "Joseph Anderson",
  "email": "jandersonn@godaddy.com",
  "cpf": "6398379470898714",
  "presenca": false,
  "data_cadastro": "24/12/2015"
}, {
  "id": 25,
  "nome": "Douglas Knight",
  "email": "dknighto@icio.us",
  "cpf": "5100135365003617",
  "presenca": false,
  "data_cadastro": "10/03/2011"
}, {
  "id": 26,
  "nome": "Evelyn Hunter",
  "email": "ehunterp@typepad.com",
  "cpf": "3581810165161160",
  "presenca": false,
  "data_cadastro": "13/12/2012"
}, {
  "id": 27,
  "nome": "Teresa Hall",
  "email": "thallq@indiatimes.com",
  "cpf": "3586090029520381",
  "presenca": true,
  "data_cadastro": "09/08/2014"
}, {
  "id": 28,
  "nome": "Carol Barnes",
  "email": "cbarnesr@kickstarter.com",
  "cpf": "630453851901113334",
  "presenca": false,
  "data_cadastro": "27/02/2006"
}, {
  "id": 29,
  "nome": "Billy Richardson",
  "email": "brichardsons@tripod.com",
  "cpf": "56022564386923644",
  "presenca": false,
  "data_cadastro": "24/04/2015"
}, {
  "id": 30,
  "nome": "Earl Gilbert",
  "email": "egilbertt@guardian.co.uk",
  "cpf": "3583122881784814",
  "presenca": true,
  "data_cadastro": "05/05/2003"
}, {
  "id": 31,
  "nome": "Gary Lawrence",
  "email": "glawrenceu@friendfeed.com",
  "cpf": "3586716479747864",
  "presenca": false,
  "data_cadastro": "27/02/2008"
}, {
  "id": 32,
  "nome": "Bruce Howell",
  "email": "bhowellv@patch.com",
  "cpf": "633349674285960837",
  "presenca": true,
  "data_cadastro": "25/08/2001"
}, {
  "id": 33,
  "nome": "Louis Stanley",
  "email": "lstanleyw@bandcamp.com",
  "cpf": "3576421320603430",
  "presenca": true,
  "data_cadastro": "16/08/2008"
}, {
  "id": 34,
  "nome": "Howard Hunter",
  "email": "hhunterx@hc360.com",
  "cpf": "5206335621061887",
  "presenca": true,
  "data_cadastro": "30/07/2004"
}, {
  "id": 35,
  "nome": "Lori Woods",
  "email": "lwoodsy@webs.com",
  "cpf": "3589526228987027",
  "presenca": false,
  "data_cadastro": "26/10/2008"
}, {
  "id": 36,
  "nome": "Christopher Turner",
  "email": "cturnerz@storify.com",
  "cpf": "58934496820009016",
  "presenca": true,
  "data_cadastro": "02/11/2010"
}, {
  "id": 37,
  "nome": "Cynthia Gibson",
  "email": "cgibson10@mysql.com",
  "cpf": "633490100538845309",
  "presenca": false,
  "data_cadastro": "01/02/2012"
}, {
  "id": 38,
  "nome": "Willie Cole",
  "email": "wcole11@house.gov",
  "cpf": "3546178726250904",
  "presenca": false,
  "data_cadastro": "04/06/2012"
}, {
  "id": 39,
  "nome": "Gregory Armstrong",
  "email": "garmstrong12@goo.ne.jp",
  "cpf": "3568587920854381",
  "presenca": false,
  "data_cadastro": "26/07/2008"
}, {
  "id": 40,
  "nome": "Raymond Freeman",
  "email": "rfreeman13@dagondesign.com",
  "cpf": "344815245290628",
  "presenca": true,
  "data_cadastro": "12/11/2002"
}, {
  "id": 41,
  "nome": "Michael Butler",
  "email": "mbutler14@yahoo.com",
  "cpf": "676273262393680072",
  "presenca": true,
  "data_cadastro": "21/12/2011"
}, {
  "id": 42,
  "nome": "Janet Alexander",
  "email": "jalexander15@abc.net.au",
  "cpf": "3535867571119197",
  "presenca": false,
  "data_cadastro": "17/12/2005"
}, {
  "id": 43,
  "nome": "Kathy Meyer",
  "email": "kmeyer16@cdbaby.com",
  "cpf": "6371171171840900",
  "presenca": false,
  "data_cadastro": "17/04/2004"
}, {
  "id": 44,
  "nome": "Jason Hudson",
  "email": "jhudson17@skype.com",
  "cpf": "4844150089161777",
  "presenca": false,
  "data_cadastro": "02/07/2012"
}, {
  "id": 45,
  "nome": "Judith Edwards",
  "email": "jedwards18@shop-pro.jp",
  "cpf": "5100172504716569",
  "presenca": false,
  "data_cadastro": "11/06/2009"
}, {
  "id": 46,
  "nome": "Randy Chapman",
  "email": "rchapman19@wiley.com",
  "cpf": "4175007178100687",
  "presenca": true,
  "data_cadastro": "01/10/2012"
}, {
  "id": 47,
  "nome": "Juan Mendoza",
  "email": "jmendoza1a@hatena.ne.jp",
  "cpf": "201481993745685",
  "presenca": true,
  "data_cadastro": "16/09/2012"
}, {
  "id": 48,
  "nome": "Sara Johnston",
  "email": "sjohnston1b@angelfire.com",
  "cpf": "3546594711895786",
  "presenca": false,
  "data_cadastro": "22/10/2008"
}, {
  "id": 49,
  "nome": "Brandon Stevens",
  "email": "bstevens1c@cisco.com",
  "cpf": "3539096956316121",
  "presenca": true,
  "data_cadastro": "31/05/2001"
}, {
  "id": 50,
  "nome": "Steve Robinson",
  "email": "srobinson1d@irs.gov",
  "cpf": "3538270240777221",
  "presenca": true,
  "data_cadastro": "08/05/2013"
}, {
  "id": 51,
  "nome": "Michelle Woods",
  "email": "mwoods1e@archive.org",
  "cpf": "5602228504295856",
  "presenca": true,
  "data_cadastro": "28/11/2007"
}, {
  "id": 52,
  "nome": "Anne Anderson",
  "email": "aanderson1f@abc.net.au",
  "cpf": "3533819131037825",
  "presenca": false,
  "data_cadastro": "11/07/2015"
}, {
  "id": 53,
  "nome": "Justin Hart",
  "email": "jhart1g@timesonline.co.uk",
  "cpf": "3558136646540908",
  "presenca": true,
  "data_cadastro": "18/10/2010"
}, {
  "id": 54,
  "nome": "Arthur Crawford",
  "email": "acrawford1h@earthlink.net",
  "cpf": "5007666641505102",
  "presenca": true,
  "data_cadastro": "19/11/2004"
}, {
  "id": 55,
  "nome": "Jose Alvarez",
  "email": "jalvarez1i@google.de",
  "cpf": "374283490499902",
  "presenca": false,
  "data_cadastro": "15/07/2016"
}, {
  "id": 56,
  "nome": "Joseph Bishop",
  "email": "jbishop1j@yellowbook.com",
  "cpf": "3571161205695979",
  "presenca": false,
  "data_cadastro": "15/03/2012"
}, {
  "id": 57,
  "nome": "Marie Ramirez",
  "email": "mramirez1k@newsvine.com",
  "cpf": "30418495848614",
  "presenca": true,
  "data_cadastro": "18/08/2004"
}, {
  "id": 58,
  "nome": "Samuel Phillips",
  "email": "sphillips1l@shinystat.com",
  "cpf": "374283456334655",
  "presenca": false,
  "data_cadastro": "09/03/2011"
}, {
  "id": 59,
  "nome": "Tina Franklin",
  "email": "tfranklin1m@wikia.com",
  "cpf": "5641820510941847",
  "presenca": true,
  "data_cadastro": "26/03/2007"
}, {
  "id": 60,
  "nome": "Sean Wheeler",
  "email": "swheeler1n@businesswire.com",
  "cpf": "201550130541049",
  "presenca": false,
  "data_cadastro": "14/02/2009"
}, {
  "id": 61,
  "nome": "Jesse Frazier",
  "email": "jfrazier1o@biblegateway.com",
  "cpf": "3587655203015777",
  "presenca": true,
  "data_cadastro": "26/06/2011"
}, {
  "id": 62,
  "nome": "Roger Snyder",
  "email": "rsnyder1p@wp.com",
  "cpf": "4175005724068036",
  "presenca": false,
  "data_cadastro": "13/02/2001"
}, {
  "id": 63,
  "nome": "Jack Black",
  "email": "jblack1q@bing.com",
  "cpf": "06048360067187210",
  "presenca": false,
  "data_cadastro": "30/11/2011"
}, {
  "id": 64,
  "nome": "Billy Fields",
  "email": "bfields1r@delicious.com",
  "cpf": "3556243927966455",
  "presenca": false,
  "data_cadastro": "30/09/2012"
}, {
  "id": 65,
  "nome": "Joshua Larson",
  "email": "jlarson1s@oracle.com",
  "cpf": "4936679719435500976",
  "presenca": false,
  "data_cadastro": "10/02/2003"
}, {
  "id": 66,
  "nome": "Henry Marshall",
  "email": "hmarshall1t@drupal.org",
  "cpf": "4047180190560",
  "presenca": true,
  "data_cadastro": "13/06/2007"
}, {
  "id": 67,
  "nome": "Debra Baker",
  "email": "dbaker1u@ebay.com",
  "cpf": "3551715285942421",
  "presenca": false,
  "data_cadastro": "18/08/2010"
}, {
  "id": 68,
  "nome": "Susan Phillips",
  "email": "sphillips1v@baidu.com",
  "cpf": "5010120457933086",
  "presenca": false,
  "data_cadastro": "26/07/2011"
}, {
  "id": 69,
  "nome": "Angela Fields",
  "email": "afields1w@discuz.net",
  "cpf": "3530425866939103",
  "presenca": false,
  "data_cadastro": "18/06/2001"
}, {
  "id": 70,
  "nome": "Chris Gutierrez",
  "email": "cgutierrez1x@surveymonkey.com",
  "cpf": "67719795188876920",
  "presenca": true,
  "data_cadastro": "29/09/2014"
}, {
  "id": 71,
  "nome": "Lois King",
  "email": "lking1y@sakura.ne.jp",
  "cpf": "4905697590241759",
  "presenca": false,
  "data_cadastro": "06/08/2012"
}, {
  "id": 72,
  "nome": "Heather Hart",
  "email": "hhart1z@github.io",
  "cpf": "3548859351073947",
  "presenca": true,
  "data_cadastro": "22/06/2002"
}, {
  "id": 73,
  "nome": "Maria Phillips",
  "email": "mphillips20@telegraph.co.uk",
  "cpf": "3567405953934809",
  "presenca": false,
  "data_cadastro": "27/02/2014"
}, {
  "id": 74,
  "nome": "Billy West",
  "email": "bwest21@stumbleupon.com",
  "cpf": "4844981790044997",
  "presenca": true,
  "data_cadastro": "30/08/2005"
}, {
  "id": 75,
  "nome": "Carl Andrews",
  "email": "candrews22@cargocollective.com",
  "cpf": "3576030329406339",
  "presenca": true,
  "data_cadastro": "13/10/2000"
}, {
  "id": 76,
  "nome": "Jeffrey Chapman",
  "email": "jchapman23@wikimedia.org",
  "cpf": "4905747649156175",
  "presenca": false,
  "data_cadastro": "25/02/2003"
}, {
  "id": 77,
  "nome": "Joyce Torres",
  "email": "jtorres24@biglobe.ne.jp",
  "cpf": "3553729268935235",
  "presenca": true,
  "data_cadastro": "18/04/2004"
}, {
  "id": 78,
  "nome": "Tammy Hall",
  "email": "thall25@google.com",
  "cpf": "3587124058998512",
  "presenca": false,
  "data_cadastro": "11/01/2010"
}, {
  "id": 79,
  "nome": "Heather White",
  "email": "hwhite26@tinyurl.com",
  "cpf": "201846487545660",
  "presenca": false,
  "data_cadastro": "04/08/2007"
}, {
  "id": 80,
  "nome": "Kelly Mason",
  "email": "kmason27@craigslist.org",
  "cpf": "3534519808157372",
  "presenca": false,
  "data_cadastro": "27/06/2016"
}, {
  "id": 81,
  "nome": "Rose Baker",
  "email": "rbaker28@scribd.com",
  "cpf": "5100178590496016",
  "presenca": false,
  "data_cadastro": "27/09/2012"
}, {
  "id": 82,
  "nome": "David Hunt",
  "email": "dhunt29@github.com",
  "cpf": "56022417344147543",
  "presenca": false,
  "data_cadastro": "22/12/2006"
}, {
  "id": 83,
  "nome": "Edward Richardson",
  "email": "erichardson2a@usda.gov",
  "cpf": "633110138951575540",
  "presenca": false,
  "data_cadastro": "26/06/2006"
}, {
  "id": 84,
  "nome": "James Williamson",
  "email": "jwilliamson2b@hao123.com",
  "cpf": "5641828509210316259",
  "presenca": true,
  "data_cadastro": "05/08/2013"
}, {
  "id": 85,
  "nome": "Victor Washington",
  "email": "vwashington2c@cmu.edu",
  "cpf": "3540250131752992",
  "presenca": false,
  "data_cadastro": "24/05/2002"
}, {
  "id": 86,
  "nome": "Ann Burke",
  "email": "aburke2d@netlog.com",
  "cpf": "67712513268705746",
  "presenca": true,
  "data_cadastro": "04/09/2011"
}, {
  "id": 87,
  "nome": "Teresa Rose",
  "email": "trose2e@bloomberg.com",
  "cpf": "3565008503843942",
  "presenca": true,
  "data_cadastro": "22/12/2004"
}, {
  "id": 88,
  "nome": "Joseph Gutierrez",
  "email": "jgutierrez2f@t-online.de",
  "cpf": "372301525664597",
  "presenca": false,
  "data_cadastro": "21/06/2005"
}, {
  "id": 89,
  "nome": "Christina George",
  "email": "cgeorge2g@nydailynews.com",
  "cpf": "30574865252595",
  "presenca": false,
  "data_cadastro": "17/08/2012"
}, {
  "id": 90,
  "nome": "Beverly Morgan",
  "email": "bmorgan2h@narod.ru",
  "cpf": "4917843631003354",
  "presenca": true,
  "data_cadastro": "28/08/2012"
}, {
  "id": 91,
  "nome": "Andrea Rose",
  "email": "arose2i@timesonline.co.uk",
  "cpf": "4508868688397263",
  "presenca": false,
  "data_cadastro": "27/01/2010"
}, {
  "id": 92,
  "nome": "Jonathan Henry",
  "email": "jhenry2j@cargocollective.com",
  "cpf": "670681782854929246",
  "presenca": false,
  "data_cadastro": "20/09/2008"
}, {
  "id": 93,
  "nome": "Phillip Perkins",
  "email": "pperkins2k@craigslist.org",
  "cpf": "201776533241297",
  "presenca": false,
  "data_cadastro": "12/04/2002"
}, {
  "id": 94,
  "nome": "Theresa Peterson",
  "email": "tpeterson2l@yolasite.com",
  "cpf": "3532973141390756",
  "presenca": false,
  "data_cadastro": "24/06/2007"
}, {
  "id": 95,
  "nome": "Roy Gordon",
  "email": "rgordon2m@vkontakte.ru",
  "cpf": "374622431105815",
  "presenca": true,
  "data_cadastro": "18/07/2003"
}, {
  "id": 96,
  "nome": "Evelyn Shaw",
  "email": "eshaw2n@shutterfly.com",
  "cpf": "5100173591572659",
  "presenca": true,
  "data_cadastro": "21/09/2009"
}, {
  "id": 97,
  "nome": "Maria Young",
  "email": "myoung2o@mayoclinic.com",
  "cpf": "3586267683910484",
  "presenca": false,
  "data_cadastro": "27/08/2014"
}, {
  "id": 98,
  "nome": "Adam Powell",
  "email": "apowell2p@economist.com",
  "cpf": "6396658191087471",
  "presenca": false,
  "data_cadastro": "12/02/2002"
}, {
  "id": 99,
  "nome": "Johnny Long",
  "email": "jlong2q@wp.com",
  "cpf": "30510909262380",
  "presenca": true,
  "data_cadastro": "30/05/2008"
}, {
  "id": 100,
  "nome": "Howard Stephens",
  "email": "hstephens2r@dyndns.org",
  "cpf": "372301911987115",
  "presenca": false,
  "data_cadastro": "15/01/2005"
}];
  }

  getItems(ev) {
    // Reset items back to all of the items
    //setando o valor de busca
    var buscar = ev.target.value;

    if (!buscar) {
          this.resultado =  this.participantes;
    }else{
      this.resultado = this.resultado.filter((item) => {
      return  item.nome.toLowerCase().indexOf(buscar.toLowerCase()) > -1 ||
              item.email.toLowerCase().indexOf(buscar.toLowerCase()) > -1 ||
              item.id.toString().indexOf(buscar.toLowerCase()) > -1
      })
    }
}

detalhes(item){
  console.log(item);
  this.navCtrl.push(CredenciaDetalhesPage, item);
}

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad CredenciaPage');
  //}


}
