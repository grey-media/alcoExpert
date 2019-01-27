const imgAbsinthe = require('../images/drinks/absinthe.jpg');
const imgBalm = require('../images/drinks/balm.jpg');
const imgBlackRum = require('../images/drinks/black-rum.jpg');
const imgBourbon = require('../images/drinks/bourbon.jpg');
const imgBrandy = require('../images/drinks/brandy.jpg');
const imgCalvados = require('../images/drinks/calvados.jpg');
const imgCongac = require('../images/drinks/congac.jpg');
const imgGin = require('../images/drinks/gin.jpg');
const imgGoldRum = require('../images/drinks/gold-rum.jpg');
const imgLikerA = require('../images/drinks/liker1.jpg');
const imgLikerB = require('../images/drinks/liker2.jpg');
const imgMescal = require('../images/drinks/mescal.jpg');
const imgNastoi = require('../images/drinks/nastoi.jpg');
const imgSambuca = require('../images/drinks/sambuca.jpg');
const imgScotch = require('../images/drinks/scotch.jpg');
const imgTequila = require('../images/drinks/tequila.jpg');
const imgVodka = require('../images/drinks/vodka.jpg');
const imgWhiskey = require('../images/drinks/whiskey.jpg');
const imgWhiteRum = require('../images/drinks/white-rum.jpg');
const imgBeer = require('../images/drinks/beer.jpg');
const imgSider = require('../images/drinks/sider.jpg');
const imgChampagne = require('../images/drinks/champagne.jpg');
const imgMead = require('../images/drinks/mead.jpg');
const imgWhiteWine = require('../images/drinks/white_wine.jpg');
const imgRedWine = require('../images/drinks/red_wine.jpg');
const imgRoseWine = require('../images/drinks/rose_wine.jpg');
const imgSake = require('../images/drinks/sake.jpg');
const imgMartini = require('../images/drinks/martini.jpg');
const imgOther = require('../images/drinks/glass.jpg');


export const enAlco = [
  {
    title: 'Vodka',
    id: '0001',
    val: 40,
    vol: 'default vol 40%',
    img: imgVodka,
  },
  {
    title: 'Cognac',
    id: '0002',
    val: 40,
    vol: 'default vol 40%',
    img: imgCongac,
  },
  {
    title: 'Rum white (silver)',
    id: '0003',
    val: 40,
    vol: 'default vol 40%',
    img: imgWhiteRum,
  },
  {
    title: 'Rum gold',
    id: '0004',
    val: 40,
    vol: 'default vol 40%',
    img: imgGoldRum,
  },
  {
    title: 'Rum dark (black)',
    id: '0005',
    val: 40,
    vol: 'default vol 40%',
    img: imgBlackRum,
  },
  {
    title: 'Tequila',
    id: '0006',
    val: 40,
    vol: 'default vol 40%',
    img: imgTequila,
  },
  {
    title: 'Whiskey',
    id: '0007',
    val: 40,
    vol: 'default vol 40%',
    img: imgWhiskey,
  },
  {
    title: 'Bourbon (Whiskey)',
    id: '0008',
    val: 40,
    vol: 'default vol 40%',
    img: imgBourbon,
  },
  {
    title: 'Scotch (Whiskey)',
    id: '0009',
    val: 40,
    vol: 'default vol 40%',
    img: imgScotch,
  },
  {
    title: 'Sambuca',
    id: '0010',
    val: 40,
    vol: 'default vol 40%',
    img: imgSambuca,
  },
  {
    title: 'Gin',
    id: '0011',
    val: 47,
    vol: 'default vol 47%',
    img: imgGin,
  },
  {
    title: 'Brandy',
    id: '0012',
    val: 40,
    vol: 'default vol 40%',
    img: imgBrandy,
  },
  {
    title: 'Calvados (Brandy)',
    id: '0012',
    val: 40,
    vol: 'default vol 40%',
    img: imgCalvados,
  },
  {
    title: 'Liquor',
    id: '0013',
    val: 17,
    vol: 'default vol 17%',
    img: imgLikerA,
  },
  {
    title: 'Liquor',
    id: '0014',
    val: 40,
    vol: 'default vol 40%',
    img: imgLikerB,
  },
  {
    title: 'Absinthe',
    id: '0015',
    val: 70,
    vol: 'default vol 70%',
    img: imgAbsinthe,
  },
  {
    title: 'Tincture',
    id: '0016',
    val: 43,
    vol: 'default vol 43%',
    img: imgNastoi,
  },
  {
    title: 'Balm',
    id: '0017',
    val: 43,
    vol: 'default vol 43%',
    img: imgBalm,
  },
  {
    title: 'Mescal',
    id: '0018',
    val: 43,
    vol: 'default vol 43%',
    img: imgMescal,
  },
  {
    title: 'Beer',
    id: '0019',
    val: 4,
    vol: 'default vol 4%',
    img: imgBeer,
  },
  {
    title: 'Sider',
    id: '0020',
    val: 4,
    vol: 'default vol 4%',
    img: imgSider,
  },
  {
    title: 'Champagne',
    id: '0021',
    val: 11,
    vol: 'default vol 11%',
    img: imgChampagne,
  },
  {
    title: 'Mead',
    id: '0022',
    val: 15,
    vol: 'default vol 15%',
    img: imgMead,
  },
  {
    title: 'White wine',
    id: '0023',
    val: 11,
    vol: 'default vol 11%',
    img: imgWhiteWine,
  },
  {
    title: 'Rose wine',
    id: '0024',
    val: 11,
    vol: 'default vol 11%',
    img: imgRoseWine,
  },
  {
    title: 'Red wine',
    id: '0025',
    val: 11,
    vol: 'default vol 11%',
    img: imgRedWine,
  },
  {
    title: 'Sake',
    id: '0026',
    val: 15,
    vol: 'default vol 15%',
    img: imgSake,
  },
  {
    title: 'Martini',
    id: '0027',
    val: 16,
    vol: 'default vol 16%',
    img: imgMartini,
  },
  {
    title: 'Other',
    id: '0028',
    val: 10,
    vol: 'default vol 10%',
    img: imgOther,
  },
];

export const ruAlco = [
  {
    title: 'Водка',
    id: '0001',
    val: 40,
    vol: 'default vol 40%',
    img: imgVodka,
  },
  {
    title: 'Коньяк',
    id: '0002',
    val: 40,
    vol: 'default vol 40%',
    img: imgCongac,
  },
  {
    title: 'Ром светлый (белый)',
    id: '0003',
    val: 40,
    vol: 'default vol 40%',
    img: imgWhiteRum,
  },
  {
    title: 'Ром золотой',
    id: '0004',
    val: 40,
    vol: 'default vol 40%',
    img: imgGoldRum,
  },
  {
    title: 'Ром тёмный (чёрный)',
    id: '0005',
    val: 40,
    vol: 'default vol 40%',
    img: imgBlackRum,
  },
  {
    title: 'Текила',
    id: '0006',
    val: 40,
    vol: 'default vol 40%',
    img: imgTequila,
  },
  {
    title: 'Виски',
    id: '0007',
    val: 40,
    vol: 'default vol 40%',
    img: imgWhiskey,
  },
  {
    title: 'Бурбон (Виски)',
    id: '0008',
    val: 40,
    vol: 'default vol 40%',
    img: imgBourbon,
  },
  {
    title: 'Скотч (Виски)',
    id: '0009',
    val: 40,
    vol: 'default vol 40%',
    img: imgScotch,
  },
  {
    title: 'Самбука',
    id: '0010',
    val: 40,
    vol: 'default vol 40%',
    img: imgSambuca,
  },
  {
    title: 'Джин',
    id: '0011',
    val: 47,
    vol: 'default vol 47%',
    img: imgGin,
  },
  {
    title: 'Бренди',
    id: '0012',
    val: 40,
    vol: 'default vol 40%',
    img: imgBrandy,
  },
  {
    title: 'Кальвадос (Бренди)',
    id: '0012',
    val: 40,
    vol: 'default vol 40%',
    img: imgCalvados,
  },
  {
    title: 'Ликер',
    id: '0013',
    val: 17,
    vol: 'default vol 17%',
    img: imgLikerA,
  },
  {
    title: 'Ликер',
    id: '0014',
    val: 40,
    vol: 'default vol 40%',
    img: imgLikerB,
  },
  {
    title: 'Абсент',
    id: '0015',
    val: 70,
    vol: 'default vol 70%',
    img: imgAbsinthe,
  },
  {
    title: 'Настройка',
    id: '0016',
    val: 43,
    vol: 'default vol 43%',
    img: imgNastoi,
  },
  {
    title: 'Бальзам',
    id: '0017',
    val: 43,
    vol: 'default vol 43%',
    img: imgBalm,
  },
  {
    title: 'Мескаль',
    id: '0018',
    val: 43,
    vol: 'default vol 43%',
    img: imgMescal,
  },
  {
    title: 'Пиво',
    id: '0019',
    val: 4,
    vol: 'default vol 4%',
    img: imgBeer,
  },
  {
    title: 'Сидер',
    id: '0020',
    val: 4,
    vol: 'default vol 4%',
    img: imgSider,
  },
  {
    title: 'Шампанское',
    id: '0021',
    val: 11,
    vol: 'default vol 11%',
    img: imgChampagne,
  },
  {
    title: 'Медовуха',
    id: '0022',
    val: 15,
    vol: 'default vol 15%',
    img: imgMead,
  },
  {
    title: 'Белое вино',
    id: '0023',
    val: 11,
    vol: 'default vol 11%',
    img: imgWhiteWine,
  },
  {
    title: 'Розовое вино',
    id: '0024',
    val: 11,
    vol: 'default vol 11%',
    img: imgRoseWine,
  },
  {
    title: 'Красное вино',
    id: '0025',
    val: 11,
    vol: 'default vol 11%',
    img: imgRedWine,
  },
  {
    title: 'Саке',
    id: '0026',
    val: 15,
    vol: 'default vol 15%',
    img: imgSake,
  },
  {
    title: 'Мартини',
    id: '0027',
    val: 16,
    vol: 'default vol 16%',
    img: imgMartini,
  },
  {
    title: 'Другое',
    id: '0028',
    val: 10,
    vol: 'default vol 10%',
    img: imgOther,
  },
];
