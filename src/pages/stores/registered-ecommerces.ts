const allEcommerces = [
  {
    id: 1,
    ecommerceName: 'А1',
    ecommerceLink: 'https://www.a1.mk/',
    ecommerceLogo: '/stores/stores-book/a1',
    ecommerceCategory: 'services / technology / mobile phones'
  },
  {
    id: 2,
    ecommerceName: 'Адванс медиа',
    ecommerceLink: 'https://advancemedia.com.mk/',
    ecommerceLogo: '/stores/stores-book/advance-media',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 3,
    ecommerceName: 'Агенс',
    ecommerceLink: 'http://www.agens.mk/',
    ecommerceLogo: '/stores/stores-book/agens',
    ecommerceCategory: 'home /'
  },
  {
    id: 4,
    ecommerceName: 'Агрохемија',
    ecommerceLink: 'https://agrohemija.com.mk/',
    ecommerceLogo: '/stores/stores-book/agrohemija',
    ecommerceCategory: 'home / garden'
  },
  {
    id: 5,
    ecommerceName: 'Агротехна',
    ecommerceLink: 'http://www.agrotehna.com.mk',
    ecommerceLogo: '/stores/stores-book/agrotehna',
    ecommerceCategory: 'technology / home / bikes'
  },
  {
    id: 6,
    ecommerceName: 'Академска книга',
    ecommerceLink: 'https://www.akademskakniga.mk/',
    ecommerceLogo: '/stores/stores-book/akademska-kniga',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 7,
    ecommerceName: 'Албсиг',
    ecommerceLink: 'https://www.albsig.al/',
    ecommerceLogo: '/stores/stores-book/albsig',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 8,
    ecommerceName: 'Алфалаб',
    ecommerceLink: 'https://alfalab.mk/',
    ecommerceLogo: '/stores/stores-book/alfalab',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 9,
    ecommerceName: 'Amigos',
    ecommerceLink: 'https://www.amigos.mk/',
    ecommerceLogo: '/stores/stores-book/amigos',
    ecommerceCategory: 'services / food'
  },
  {
    id: 10,
    ecommerceName: 'Алфа рент',
    ecommerceLink: 'https://www.alfarentacar.mk/',
    ecommerceLogo: '/stores/stores-book/alfa-rent',
    ecommerceCategory: 'services /'
  },
  {
    id: 11,
    ecommerceName: 'Анхоч',
    ecommerceLink: 'https://www.anhoch.com/',
    ecommerceLogo: '/stores/stores-book/anhoch',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 12,
    ecommerceName: 'Антолог',
    ecommerceLink: 'https://antolog.mk/',
    ecommerceLogo: '/stores/stores-book/antolog',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 13,
    ecommerceName: 'Антистрес',
    ecommerceLink: 'https://antistres.mk/',
    ecommerceLogo: '/stores/stores-book/anti-stres',
    ecommerceCategory: 'other /'
  },
  {
    id: 14,
    ecommerceName: 'Аптека ирис',
    ecommerceLink: 'https://iris-apteka.business.site/',
    ecommerceLogo: '/stores/stores-book/apteka-iris',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 15,
    ecommerceName: 'Ариес',
    ecommerceLink: 'https://aries.mk/',
    ecommerceLogo: '/stores/stores-book/aries-travel-agency',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 16,
    ecommerceName: 'Армариум',
    ecommerceLink: 'http://www.kosula.mk/',
    ecommerceLogo: '/stores/stores-book/armarium',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 17,
    ecommerceName: 'Артурс',
    ecommerceLink: 'http://shop.arthurs.com.mk/',
    ecommerceLogo: '/stores/stores-book/arthurs',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 18,
    ecommerceName: 'Ателје Алекстра',
    ecommerceLink: 'http://ateljealekstra.com/',
    ecommerceLogo: '/stores/stores-book/atelje-alekstra',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 19,
    ecommerceName: 'Ателје Доленц',
    ecommerceLink: 'https://ateljedolenc.com/',
    ecommerceLogo: '/stores/stores-book/atelje-dolenic',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 20,
    ecommerceName: 'Атлантик турс',
    ecommerceLink: 'https://atlantikturs.com/',
    ecommerceLogo: '/stores/stores-book/atlantik-turs',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 21,
    ecommerceName: 'Атлантис груп',
    ecommerceLink: 'http://www.atlantis.mk/',
    ecommerceLogo: '/stores/stores-book/atlantis',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 22,
    ecommerceName: 'Атлас',
    ecommerceLink: 'http://www.atlas.mk/',
    ecommerceLogo: '/stores/stores-book/atlas',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 23,
    ecommerceName: 'Аутофилтер',
    ecommerceLink: 'https://www.autofilter.mk/',
    ecommerceLogo: '/stores/stores-book/auto-filter',
    ecommerceCategory: 'other /'
  },
  {
    id: 24,
    ecommerceName: 'Авио нет',
    ecommerceLink: 'http://www.avio.net.mk/',
    ecommerceLogo: '/stores/stores-book/avionet',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 25,
    ecommerceName: 'Авто атом',
    ecommerceLink: 'http://avtoatom.com.mk/',
    ecommerceLogo: '/stores/stores-book/avto-atom',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 26,
    ecommerceName: 'Азно',
    ecommerceLink: 'https://azno.mk/',
    ecommerceLogo: '/stores/stores-book/azno',
    ecommerceCategory: 'other /'
  },
  {
    id: 27,
    ecommerceName: 'Бејби центар',
    ecommerceLink: 'http://www.babycentar.com.mk/',
    ecommerceLogo: '/stores/stores-book/baby-centar',
    ecommerceCategory: 'fashion / kids /'
  },
  {
    id: 28,
    ecommerceName: 'Балкан нет',
    ecommerceLink: 'http://balkannet.mk/',
    ecommerceLogo: '/stores/stores-book/balkan-travel-agency',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 29,
    ecommerceName: 'Балкан турист',
    ecommerceLink: 'https://www.balkanturist.mk/',
    ecommerceLogo: '/stores/stores-book/balkan-turist',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 30,
    ecommerceName: 'Балкан виатор',
    ecommerceLink: 'https://www.balkanviator.com/mk/',
    ecommerceLogo: '/stores/stores-book/balkan-viator',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 31,
    ecommerceName: 'Бато анд дивајн',
    ecommerceLink: 'http://www.batodivajn.com/MK/default.aspx',
    ecommerceLogo: '/stores/stores-book/bato-i-divajn',
    ecommerceCategory: 'services / print'
  },
  {
    id: 32,
    ecommerceName: 'Бебе хоум',
    ecommerceLink: 'https://bebehome.mk/',
    ecommerceLogo: '/stores/stores-book/bebe-home',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 33,
    ecommerceName: 'Беко',
    ecommerceLink: 'http://www.beko-mk.com/',
    ecommerceLogo: '/stores/stores-book/beko',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 34,
    ecommerceName: 'Беламед',
    ecommerceLink: 'http://shop.belamed.com.mk/',
    ecommerceLogo: '/stores/stores-book/belamed',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 35,
    ecommerceName: 'Бела виста',
    ecommerceLink: 'https://www.bellavista.mk/',
    ecommerceLogo: '/stores/stores-book/bella-vista',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 36,
    ecommerceName: 'Беванда',
    ecommerceLink: 'https://bevanda.mk/',
    ecommerceLogo: '/stores/stores-book/bevanda',
    ecommerceCategory: 'services / food'
  },
  {
    id: 37,
    ecommerceName: 'Бифекс',
    ecommerceLink: 'https://www.bifeks.com/mk/',
    ecommerceLogo: '/stores/stores-book/bifeks',
    ecommerceCategory: 'fashion / home'
  },
  {
    id: 38,
    ecommerceName: 'Бисер охрид',
    ecommerceLink: 'http://www.biser.mk/',
    ecommerceLogo: '/stores/stores-book/biser-import',
    ecommerceCategory: 'other /'
  },
  {
    id: 39,
    ecommerceName: 'Блесок',
    ecommerceLink: 'https://blesok.mk/mk/',
    ecommerceLogo: '/stores/stores-book/blesok-bookstore',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 40,
    ecommerceName: 'Блум',
    ecommerceLink: 'https://cvekarabloom.mk/',
    ecommerceLogo: '/stores/stores-book/bloom',
    ecommerceCategory: 'services / flowers'
  },
  {
    id: 41,
    ecommerceName: 'Блу маркет',
    ecommerceLink: 'http://www.bluemarket.com.mk/',
    ecommerceLogo: '/stores/stores-book/blue-market',
    ecommerceCategory: 'home / bathroom'
  },
  {
    id: 42,
    ecommerceName: 'Blue Namad',
    ecommerceLink: 'https://7grama.coffee/',
    ecommerceLogo: '/stores/stores-book/blue-namad',
    ecommerceCategory: 'services / food'
  },
  {
    id: 43,
    ecommerceName: 'Бонати',
    ecommerceLink: 'https://bonatti.mk/',
    ecommerceLogo: '/stores/stores-book/bonatti',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 44,
    ecommerceName: 'Борка',
    ecommerceLink: 'https://borka.org.mk/',
    ecommerceLogo: '/stores/stores-book/borka',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 45,
    ecommerceName: 'Браинстер',
    ecommerceLink: 'https://brainster.co/',
    ecommerceLogo: '/stores/stores-book/brainster',
    ecommerceCategory: 'services / education / courses'
  },
  {
    id: 46,
    ecommerceName: 'Бубамара',
    ecommerceLink: 'https://bubamara.mk/',
    ecommerceLogo: '/stores/stores-book/bubamara',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 47,
    ecommerceName: 'Buzz',
    ecommerceLink: 'https://www.buzzsneakers.com/MAK_mk',
    ecommerceLogo: '/stores/stores-book/buzz',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 48,
    ecommerceName: 'B watch',
    ecommerceLink: 'https://bwatch.mk/',
    ecommerceLogo: '/stores/stores-book/bwatch',
    ecommerceCategory: 'fashion / watches / accessories'
  },
  {
    id: 49,
    ecommerceName: 'Каливита',
    ecommerceLink: 'https://macedonia.calivita.com/',
    ecommerceLogo: '/stores/stores-book/calivita',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 50,
    ecommerceName: 'City box',
    ecommerceLink: 'https://www.citybox.mk/',
    ecommerceLogo: '/stores/stores-book/citybox',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 51,
    ecommerceName: 'Камуфлаж',
    ecommerceLink: 'http://camouflage.mk/',
    ecommerceLogo: '/stores/stores-book/camouflage',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 52,
    ecommerceName: 'Скопје сити мол',
    ecommerceLink: 'http://skopjecitymall.mk/',
    ecommerceLogo: '/stores/stores-book/citymall',
    ecommerceCategory: 'fashion / home / technology'
  },
  {
    id: 53,
    ecommerceName: 'Комодита',
    ecommerceLink: 'https://www.comoditahome.mk/',
    ecommerceLogo: '/stores/stores-book/comodita',
    ecommerceCategory: 'home /'
  },
  {
    id: 54,
    ecommerceName: 'Кроација осигурување',
    ecommerceLink: 'https://cro.mk/',
    ecommerceLogo: '/stores/stores-book/croatia-osiguruvanje',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 55,
    ecommerceName: 'ДД хост',
    ecommerceLink: 'https://ddhost.mk/',
    ecommerceLogo: '/stores/stores-book/dd-host',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 56,
    ecommerceName: 'Делта спорт',
    ecommerceLink: 'https://www.dsport.mk/',
    ecommerceLogo: '/stores/stores-book/dsport',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 57,
    ecommerceName: 'Декси ко',
    ecommerceLink: 'http://www.deksiko.com/',
    ecommerceLogo: '/stores/stores-book/dexy-co-kids',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 58,
    ecommerceName: 'Дигинет',
    ecommerceLink: 'http://diginet.mk/',
    ecommerceLogo: '/stores/stores-book/diginet',
    ecommerceCategory: 'services / '
  },
  {
    id: 59,
    ecommerceName: 'Дигитал алб',
    ecommerceLink: 'https://www.digitalb.al/',
    ecommerceLogo: '/stores/stores-book/digital-alb',
    ecommerceCategory: 'services /'
  },
  {
    id: 60,
    ecommerceName: 'Dish-wish',
    ecommerceLink: 'https://dishwish.mk/home',
    ecommerceLogo: '/stores/stores-book/dish-wish',
    ecommerceCategory: 'services / food'
  },
  {
    id: 61,
    ecommerceName: 'Djolev and the arts',
    ecommerceLink: 'https://djolevandthearts.edu.mk/',
    ecommerceLogo: '/stores/stores-book/djolev',
    ecommerceCategory: 'services / education / courses'
  },
  {
    id: 62,
    ecommerceName: 'Дигитал арт',
    ecommerceLink: 'https://www.digitalartmk.com/mk',
    ecommerceLogo: '/stores/stores-book/digital-art',
    ecommerceCategory: 'services /'
  },
  {
    id: 63,
    ecommerceName: 'Дим стор',
    ecommerceLink: 'https://dimstore.com.mk/',
    ecommerceLogo: '/stores/stores-book/dimstore',
    ecommerceCategory: 'technology / home / beauty / health'
  },
  {
    id: 64,
    ecommerceName: 'Дивано',
    ecommerceLink: 'https://www.divano.mk/',
    ecommerceLogo: '/stores/stores-book/divano',
    ecommerceCategory: 'home / furniture'
  },
  {
    id: 65,
    ecommerceName: 'D mall',
    ecommerceLink: 'https://dmall.mk/',
    ecommerceLogo: '/stores/stores-book/d-mall',
    ecommerceCategory: 'home / fashion'
  },
  {
    id: 66,
    ecommerceName: 'Dominos',
    ecommerceLink: 'https://www.dominos.mk/',
    ecommerceLogo: '/stores/stores-book/dominos-pizza',
    ecommerceCategory: 'services / food'
  },
  {
    id: 67,
    ecommerceName: 'Donut bar',
    ecommerceLink: 'https://donutbar.com.mk/',
    ecommerceLogo: '/stores/stores-book/donut-bar',
    ecommerceCategory: 'services / food'
  },
  {
    id: 68,
    ecommerceName: 'Dolce',
    ecommerceLink: 'https://www.dolce.mk/',
    ecommerceLogo: '/stores/stores-book/dolce',
    ecommerceCategory: 'services / food'
  },
  {
    id: 69,
    ecommerceName: 'Драмски театар',
    ecommerceLink: 'https://dramskiteatar.com.mk/',
    ecommerceLogo: '/stores/stores-book/dramski-teatar',
    ecommerceCategory: 'services / food'
  },
  {
    id: 70,
    ecommerceName: 'Drop in',
    ecommerceLink: 'https://dropin.com.mk/',
    ecommerceLogo: '/stores/stores-book/drop-in',
    ecommerceCategory: 'sport /'
  },
  {
    id: 71,
    ecommerceName: 'Dr Robinson',
    ecommerceLink: 'http://www.drrobinson.mk/',
    ecommerceLogo: '/stores/stores-book/dr-robinson',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 72,
    ecommerceName: 'Дуна',
    ecommerceLink: 'https://shop.duna.mk/',
    ecommerceLogo: '/stores/stores-book/duna',
    ecommerceCategory: 'technology /'
  },
  {
    id: 73,
    ecommerceName: 'Дурис',
    ecommerceLink: 'http://www.duris.mk/',
    ecommerceLogo: '/stores/stores-book/duris',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 74,
    ecommerceName: 'Дурмо турс',
    ecommerceLink: 'http://durmotours.com.mk/',
    ecommerceLogo: '/stores/stores-book/durmo-turs',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 75,
    ecommerceName: 'Е-автобуска',
    ecommerceLink: 'http://e-avtobuska.mk/',
    ecommerceLogo: '/stores/stores-book/e-avtobuska',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 76,
    ecommerceName: 'Е-бутик',
    ecommerceLink: 'https://e-butik.mk/mk/',
    ecommerceLogo: '/stores/stores-book/e-butic',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 77,
    ecommerceName: 'Е-фото',
    ecommerceLink: 'http://www.efoto.mk/',
    ecommerceLogo: '/stores/stores-book/efoto',
    ecommerceCategory: 'services /'
  },
  {
    id: 78,
    ecommerceName: 'Е-хорека',
    ecommerceLink: 'https://e-horeca.mk/',
    ecommerceLogo: '/stores/stores-book/ehoreca',
    ecommerceCategory: 'services / food'
  },
  {
    id: 79,
    ecommerceName: 'Електронабава',
    ecommerceLink: 'http://www.elektronabava.mk/',
    ecommerceLogo: '/stores/stores-book/elektronabava',
    ecommerceCategory: 'other /'
  },
  {
    id: 80,
    ecommerceName: 'Еликсир',
    ecommerceLink: 'https://e-elixir.mk/',
    ecommerceLogo: '/stores/stores-book/eliksir',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 81,
    ecommerceName: 'Elipso',
    ecommerceLink: 'https://www.elipso.mk/',
    ecommerceLogo: '/stores/stores-book/elipso',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 82,
    ecommerceName: 'Елинг',
    ecommerceLink: 'http://www.eling.com.mk/',
    ecommerceLogo: '/stores/stores-book/eling',
    ecommerceCategory: 'home / lights'
  },
  {
    id: 83,
    ecommerceName: 'Енци Менци',
    ecommerceLink: 'https://www.encimenci.com.mk/',
    ecommerceLogo: '/stores/stores-book/enci-menci',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 84,
    ecommerceName: 'Еуробус',
    ecommerceLink: 'https://eurobus.mk/',
    ecommerceLogo: '/stores/stores-book/euro-bus',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 85,
    ecommerceName: 'Еуролинк',
    ecommerceLink: 'https://eurolink.com.mk/',
    ecommerceLogo: '/stores/stores-book/eurolink',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 86,
    ecommerceName: 'Евн',
    ecommerceLink: 'https://www.evn.mk/',
    ecommerceLogo: '/stores/stores-book/evn',
    ecommerceCategory: 'other /'
  },
  {
    id: 87,
    ecommerceName: 'Европа',
    ecommerceLink: 'https://evropa.com.mk/mk/pocetna',
    ecommerceLogo: '/stores/stores-book/evropa',
    ecommerceCategory: 'services / food'
  },
  {
    id: 88,
    ecommerceName: 'Екстрем интимо',
    ecommerceLink: 'https://www.extremeintimo.com/mk/home',
    ecommerceLogo: '/stores/stores-book/extreme-intimo',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 89,
    ecommerceName: 'For lady',
    ecommerceLink: 'https://forlady.com.mk/home/',
    ecommerceLogo: '/stores/stores-book/forlady',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 90,
    ecommerceName: 'Фешн груп',
    ecommerceLink: 'https://www.fashiongroup.com.mk/',
    ecommerceLogo: '/stores/stores-book/fashion-group',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 91,
    ecommerceName: 'ФФМ',
    ecommerceLink: 'https://ffm.mk/',
    ecommerceLogo: '/stores/stores-book/ffm',
    ecommerceCategory: 'sport /'
  },
  {
    id: 91,
    ecommerceName: 'Фила ',
    ecommerceLink: 'http://filla.com.mk/mk/',
    ecommerceLogo: '/stores/stores-book/filla',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 92,
    ecommerceName: 'Fitflow',
    ecommerceLink: 'https://fitflow.mk/',
    ecommerceLogo: '/stores/stores-book/fitflow',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 93,
    ecommerceName: 'Флорис',
    ecommerceLink: 'http://www.floris.com.mk/',
    ecommerceLogo: '/stores/stores-book/floris',
    ecommerceCategory: 'home / '
  },
  {
    id: 94,
    ecommerceName: 'Фридај шоп',
    ecommerceLink: 'https://fridayshop.mk/',
    ecommerceLogo: '/stores/stores-book/friday-shop',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 95,
    ecommerceName: 'Garmin',
    ecommerceLink: 'https://garmin.mk/',
    ecommerceLogo: '/stores/stores-book/garmin',
    ecommerceCategory: 'fashion / watches '
  },
  {
    id: 96,
    ecommerceName: 'Gemak',
    ecommerceLink: 'https://gemak.mk/en/home-en/',
    ecommerceLogo: '/stores/stores-book/gemak',
    ecommerceCategory: 'services / food'
  },
  {
    id: 97,
    ecommerceName: 'Гизмо',
    ecommerceLink: 'http://www.gizmo.mk/',
    ecommerceLogo: '/stores/stores-book/gizmo',
    ecommerceCategory: 'other / '
  },
  {
    id: 98,
    ecommerceName: 'Го хост',
    ecommerceLink: 'https://www.gohost.mk/',
    ecommerceLogo: '/stores/stores-book/go-host',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 99,
    ecommerceName: 'Го травел',
    ecommerceLink: 'https://gotravel.com.mk/',
    ecommerceLogo: '/stores/stores-book/go-travel',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 100,
    ecommerceName: 'Грее ',
    ecommerceLink: 'http://www.gree.com.mk/',
    ecommerceLogo: '/stores/stores-book/gree',
    ecommerceCategory: 'home /'
  },
  {
    id: 101,
    ecommerceName: 'Групер',
    ecommerceLink: 'https://grouper.mk/',
    ecommerceLogo: '/stores/stores-book/grouper',
    ecommerceCategory: 'home / fashion / technology / beauty / health'
  },
  {
    id: 102,
    ecommerceName: 'Гуми',
    ecommerceLink: 'https://gumi.mk/',
    ecommerceLogo: '/stores/stores-book/gumi',
    ecommerceCategory: 'other /'
  },
  {
    id: 103,
    ecommerceName: 'Hanters style',
    ecommerceLink: 'https://mbody.mk/',
    ecommerceLogo: '/stores/stores-book/hanters-style',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 104,
    ecommerceName: 'Халкбанка',
    ecommerceLink: 'https://www.halkbank.mk/',
    ecommerceLogo: '/stores/stores-book/halkbank',
    ecommerceCategory: 'other / '
  },
  {
    id: 105,
    ecommerceName: 'Харбини',
    ecommerceLink: 'https://www.clubeconomy.com.mk/harbini',
    ecommerceLogo: '/stores/stores-book/harbini-cosmetic',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 106,
    ecommerceName: 'Хербалајф',
    ecommerceLink: 'https://www.herbalife.mk/',
    ecommerceLogo: '/stores/stores-book/herbalife',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 107,
    ecommerceName: 'Хипо',
    ecommerceLink: 'https://hippo.ukionshops.com/',
    ecommerceLogo: '/stores/stores-book/hippo',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 108,
    ecommerceName: 'Хост ',
    ecommerceLink: 'https://www.host.mk/',
    ecommerceLogo: '/stores/stores-book/host',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 109,
    ecommerceName: 'Хотел Амбасадор',
    ecommerceLink: 'https://hotelambasador.mk/',
    ecommerceLogo: '/stores/stores-book/hotel-ambassador',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 110,
    ecommerceName: 'Хотел Дрим',
    ecommerceLink: 'http://www.voyager.com.mk/hotel-drim/',
    ecommerceLogo: '/stores/stores-book/hotel-drim',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 111,
    ecommerceName: 'Хотел Инекс',
    ecommerceLink: 'http://www.voyager.com.mk/hotel-ineks-olgica-hotel-spa/',
    ecommerceLogo: '/stores/stores-book/hotel-inex',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 112,
    ecommerceName: 'Хотел Салида',
    ecommerceLink: 'https://www.hotelsalida.com.mk/mk/hotel/ivo-lola-ribar/',
    ecommerceLogo: '/stores/stores-book/hotel-salida',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 113,
    ecommerceName: 'HP store',
    ecommerceLink: 'http://www.hpstore.mk/',
    ecommerceLogo: '/stores/stores-book/hp-store',
    ecommerceCategory: 'technology /'
  },
  {
    id: 114,
    ecommerceName: 'Id design',
    ecommerceLink: 'https://iddesign.mk/',
    ecommerceLogo: '/stores/stores-book/id-design',
    ecommerceCategory: 'services /'
  },
  {
    id: 115,
    ecommerceName: 'Игал',
    ecommerceLink: 'https://igal.mk/',
    ecommerceLogo: '/stores/stores-book/igal-group',
    ecommerceCategory: 'services /'
  },
  {
    id: 116,
    ecommerceName: 'Inform',
    ecommerceLink: 'https://inform.mk/',
    ecommerceLogo: '/stores/stores-book/inform',
    ecommerceCategory: 'services /'
  },
  {
    id: 117,
    ecommerceName: 'In host',
    ecommerceLink: 'https://inhost.mk/',
    ecommerceLogo: '/stores/stores-book/inhost',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 118,
    ecommerceName: 'Inovation',
    ecommerceLink: 'https://innovation.mk/',
    ecommerceLogo: '/stores/stores-book/innovation',
    ecommerceCategory: 'services /'
  },
  {
    id: 119,
    ecommerceName: 'Istyle',
    ecommerceLink: 'https://istyle.mk/',
    ecommerceLogo: '/stores/stores-book/istyle',
    ecommerceCategory: 'technology /'
  },
  {
    id: 120,
    ecommerceName: 'Итеа ',
    ecommerceLink: 'https://itea.mk/',
    ecommerceLogo: '/stores/stores-book/itea',
    ecommerceCategory: 'services /'
  },
  {
    id: 121,
    ecommerceName: 'Jakomo pizza',
    ecommerceLink: 'https://pizzajakomo.com/',
    ecommerceLogo: '/stores/stores-book/jakomo-pizza',
    ecommerceCategory: 'services / food'
  },
  {
    id: 122,
    ecommerceName: 'Jk travel',
    ecommerceLink: 'https://jk.com.mk/',
    ecommerceLogo: '/stores/stores-book/jk-travel',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 123,
    ecommerceName: 'Jugoexport stil',
    ecommerceLink: 'https://jugoexport.mk/?gclid=CjwKCAjw0On8BRAgEiwAincsHHcEsLcsyQrI4tmlUGWgqaO7ojs1Sg26y6kTnBPUGZc0ztrs83kM-hoChhwQAvD_BwE',
    ecommerceLogo: '/stores/stores-book/jugoexport-stil',
    ecommerceCategory: 'home / furniture'
  },
  {
    id: 124,
    ecommerceName: 'Katastar',
    ecommerceLink: 'https://www.katastar.gov.mk/',
    ecommerceLogo: '/stores/stores-book/katastar',
    ecommerceCategory: 'services /'
  },
  {
    id: 125,
    ecommerceName: 'Katlanovska banja',
    ecommerceLink: 'https://www.katlanovskaspa.com/',
    ecommerceLogo: '/stores/stores-book/katlanovska-banja',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 126,
    ecommerceName: 'Kegi shoes',
    ecommerceLink: 'https://kegishoes.com/',
    ecommerceLogo: '/stores/stores-book/kegi-shoes',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 127,
    ecommerceName: 'Kelepur',
    ecommerceLink: 'https://kelepur.com/',
    ecommerceLogo: '/stores/stores-book/kelepur',
    ecommerceCategory: 'services / food'
  },
  {
    id: 128,
    ecommerceName: 'Kendy',
    ecommerceLink: 'http://www.kendy.mk/',
    ecommerceLogo: '/stores/stores-book/kendy',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 129,
    ecommerceName: 'Key',
    ecommerceLink: 'https://key.com.mk/',
    ecommerceLogo: '/stores/stores-book/key',
    ecommerceCategory: 'services / '
  },
  {
    id: 130,
    ecommerceName: 'Kibs trust',
    ecommerceLink: 'https://www.kibstrust.mk/',
    ecommerceLogo: '/stores/stores-book/kibs-trust',
    ecommerceCategory: 'services /'
  },
  {
    id: 131,
    ecommerceName: 'Kidling',
    ecommerceLink: 'https://kidling.mk/',
    ecommerceLogo: '/stores/stores-book/kidling',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 132,
    ecommerceName: 'Klever',
    ecommerceLink: 'https://www.klever.com.mk/',
    ecommerceLogo: '/stores/stores-book/klever',
    ecommerceCategory: 'services / office'
  },
  {
    id: 133,
    ecommerceName: 'Klikni jadi',
    ecommerceLink: 'https://www.kliknijadi.mk/',
    ecommerceLogo: '/stores/stores-book/klikni-jadi',
    ecommerceCategory: 'services / food'
  },
  {
    id: 134,
    ecommerceName: 'Klikni kupi',
    ecommerceLink: 'https://www.kliknikupi.mk/',
    ecommerceLogo: '/stores/stores-book/klikni-kupi',
    ecommerceCategory: 'technology / home / beauty / health'
  },
  {
    id: 135,
    ecommerceName: 'Klimi',
    ecommerceLink: 'https://klimi.mk/',
    ecommerceLogo: '/stores/stores-book/klimi',
    ecommerceCategory: 'home / '
  },
  {
    id: 136,
    ecommerceName: 'Книга - Издравачки центар три',
    ecommerceLink: 'http://www.kniga.mk/',
    ecommerceLogo: '/stores/stores-book/kniga',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 137,
    ecommerceName: 'Kobra-T',
    ecommerceLink: 'http://www.kobrashop.com.mk/',
    ecommerceLogo: '/stores/stores-book/kobra-t',
    ecommerceCategory: 'services / '
  },
  {
    id: 138,
    ecommerceName: 'Kongres centar servis',
    ecommerceLink: 'http://kscnet.com/skopje/index.php/mk/',
    ecommerceLogo: '/stores/stores-book/kongres-servis-centar',
    ecommerceCategory: 'services /'
  },
  {
    id: 139,
    ecommerceName: 'Култура',
    ecommerceLink: 'https://kultura.com.mk/kategorija/knigi/',
    ecommerceLogo: '/stores/stores-book/kultura',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 140,
    ecommerceName: 'Културна ризница',
    ecommerceLink: 'https://www.kulturnariznica.mk/',
    ecommerceLogo: '/stores/stores-book/kulturna-riznica',
    ecommerceCategory: 'other /'
  },
  {
    id: 141,
    ecommerceName: 'Купер',
    ecommerceLink: 'https://www.kuper.mk/',
    ecommerceLogo: '/stores/stores-book/kuper',
    ecommerceCategory: 'services / food'
  },
  {
    id: 142,
    ecommerceName: 'Купи гуми',
    ecommerceLink: 'http://www.kupigumi.mk/',
    ecommerceLogo: '/stores/stores-book/kupi-gumi',
    ecommerceCategory: 'services /'
  },
  {
    id: 143,
    ecommerceName: 'Купи карти за се',
    ecommerceLink: 'https://www.kupikartizase.com/',
    ecommerceLogo: '/stores/stores-book/kupi-karti-za-se',
    ecommerceCategory: 'services / events'
  },
  {
    id: 144,
    ecommerceName: 'Купи Книга',
    ecommerceLink: 'https://kupikniga.mk/',
    ecommerceLogo: '/stores/stores-book/kupi-kniga',
    ecommerceCategory: 'services / events'
  },
  {
    id: 145,
    ecommerceName: 'Ласерско гравирање',
    ecommerceLink: 'https://laserskograviranje.mk/',
    ecommerceLogo: '/stores/stores-book/lasersko-graviranje',
    ecommerceCategory: 'services /'
  },
  {
    id: 146,
    ecommerceName: 'Ledikom',
    ecommerceLink: 'https://ledikom.mk/',
    ecommerceLogo: '/stores/stores-book/ledikom',
    ecommerceCategory: 'technology / mobile devices'
  },
  {
    id: 147,
    ecommerceName: 'Лед маркет',
    ecommerceLink: 'https://ledmarket.mk/',
    ecommerceLogo: '/stores/stores-book/led-market',
    ecommerceCategory: 'home / lights'
  },
  {
    id: 148,
    ecommerceName: 'Legis',
    ecommerceLink: 'http://www.legis.mk/',
    ecommerceLogo: '/stores/stores-book/legis',
    ecommerceCategory: 'services /'
  },
  {
    id: 149,
    ecommerceName: 'Lenovo',
    ecommerceLink: 'https://lenovoonline.mk/',
    ecommerceLogo: '/stores/stores-book/lenovo',
    ecommerceCategory: 'technology / '
  },
  {
    id: 150,
    ecommerceName: 'Lets fund it',
    ecommerceLink: 'https://www.letsfundit.mk/',
    ecommerceLogo: '/stores/stores-book/lets-fund-it',
    ecommerceCategory: 'services / '
  },
  {
    id: 151,
    ecommerceName: 'Lial',
    ecommerceLink: 'http://www.lial.com.mk/mk/Home/Index',
    ecommerceLogo: '/stores/stores-book/lial',
    ecommerceCategory: 'home /'
  },
  {
    id: 152,
    ecommerceName: 'Lisca',
    ecommerceLink: 'https://www.lisca.mk/',
    ecommerceLogo: '/stores/stores-book/lisca',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 153,
    ecommerceName: 'Литература',
    ecommerceLink: 'https://www.literatura.mk/',
    ecommerceLogo: '/stores/stores-book/literatura',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 154,
    ecommerceName: 'Loco Croco',
    ecommerceLink: 'https://lococroco.com/',
    ecommerceLogo: '/stores/stores-book/loco-groco',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 155,
    ecommerceName: 'Loging electronics',
    ecommerceLink: 'http://www.loging.mk/',
    ecommerceLogo: '/stores/stores-book/loging-electronics',
    ecommerceCategory: 'home /'
  },
  {
    id: 156,
    ecommerceName: 'Лотус',
    ecommerceLink: 'https://lotus.mk/',
    ecommerceLogo: '/stores/stores-book/lotus',
    ecommerceCategory: 'other /'
  },
  {
    id: 157,
    ecommerceName: 'Lush',
    ecommerceLink: 'https://www.lush.com.mk/',
    ecommerceLogo: '/stores/stores-book/lush',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 158,
    ecommerceName: 'Macedonia travel',
    ecommerceLink: 'https://www.macedoniatravel.com/',
    ecommerceLogo: '/stores/stores-book/macedonia-travel',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 159,
    ecommerceName: 'Моб',
    ecommerceLink: 'https://operabalet.mk/',
    ecommerceLogo: '/stores/stores-book/makedonska-opera-i-balet',
    ecommerceCategory: 'services / events'
  },
  {
    id: 160,
    ecommerceName: 'Македонско кредитно биро',
    ecommerceLink: 'https://mkb.mk/',
    ecommerceLogo: '/stores/stores-book/makedonsko-kreditno-biro',
    ecommerceCategory: 'other /'
  },
  {
    id: 161,
    ecommerceName: 'Мако цигре',
    ecommerceLink: 'https://mako-cigre.mk/',
    ecommerceLogo: '/stores/stores-book/mako-cigre',
    ecommerceCategory: 'other /'
  },
  {
    id: 162,
    ecommerceName: 'Мак сторе',
    ecommerceLink: 'https://makstore.mk/',
    ecommerceLogo: '/stores/stores-book/mak-store',
    ecommerceCategory: 'fashion'
  },
  {
    id: 163,
    ecommerceName: 'Mak swiss',
    ecommerceLink: 'https://makswiss.com.mk/',
    ecommerceLogo: '/stores/stores-book/mak-swiss',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 164,
    ecommerceName: 'Маркет конект',
    ecommerceLink: 'https://marketkonekt.com/makedonija',
    ecommerceLogo: '/stores/stores-book/marketkonekt',
    ecommerceCategory: 'technology / home / beauty / health / fashion / services'
  },
  {
    id: 165,
    ecommerceName: 'Математика',
    ecommerceLink: 'https://matematika.mk/',
    ecommerceLogo: '/stores/stores-book/matematika',
    ecommerceCategory: 'services / education'
  },
  {
    id: 166,
    ecommerceName: 'Max hosting',
    ecommerceLink: 'https://www.maxhosting.mk/',
    ecommerceLogo: '/stores/stores-book/max-hosting',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 167,
    ecommerceName: 'Mbody',
    ecommerceLink: 'https://mbody.mk/',
    ecommerceLogo: '/stores/stores-book/mbody',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 168,
    ecommerceName: 'Мебел Ви',
    ecommerceLink: 'https://www.mebel-vi.com/?gclid=CjwKCAjw0On8BRAgEiwAincsHPiriLHJYVV8YBmjhIl33Z1c_YsWSPRICdZ4RD_wT5vmhFCGyXca4BoC_j0QAvD_BwE',
    ecommerceLogo: '/stores/stores-book/mebel-vi',
    ecommerceCategory: 'home / furniture'
  },
  {
    id: 169,
    ecommerceName: 'Media plan',
    ecommerceLink: 'http://www.mediaplan.mk/',
    ecommerceLogo: '/stores/stores-book/media-plan',
    ecommerceCategory: 'services /'
  },
  {
    id: 170,
    ecommerceName: 'Мега попуст',
    ecommerceLink: 'https://megapopust.mk/',
    ecommerceLogo: '/stores/stores-book/mega-popust',
    ecommerceCategory: 'home / fashion'
  },
  {
    id: 171,
    ecommerceName: 'Megasport',
    ecommerceLink: 'https://megasportonlineshop.com/',
    ecommerceLogo: '/stores/stores-book/megasport',
    ecommerceCategory: 'sport /'
  },
  {
    id: 172,
    ecommerceName: 'Металотехника',
    ecommerceLink: 'http://www.metalotehnika.mk/',
    ecommerceLogo: '/stores/stores-book/metalotehnika',
    ecommerceCategory: 'home /'
  },
  {
    id: 173,
    ecommerceName: 'Хотел Метропол',
    ecommerceLink: 'https://metropol-ohrid.com.mk/',
    ecommerceLogo: '/stores/stores-book/metropol-lake-resort',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 174,
    ecommerceName: 'Mida rent a car',
    ecommerceLink: 'https://midarentacar.com/',
    ecommerceLogo: '/stores/stores-book/mida-rent-a-car',
    ecommerceCategory: 'serviecs / '
  },
  {
    id: 175,
    ecommerceName: 'Mihail Korubin ',
    ecommerceLink: 'https://mihailkorubin.com/',
    ecommerceLogo: '/stores/stores-book/mihail-korubin',
    ecommerceCategory: 'services /'
  },
  {
    id: 176,
    ecommerceName: 'Milkuz',
    ecommerceLink: 'http://milkuz.com.mk/',
    ecommerceLogo: '/stores/stores-book/milkuz',
    ecommerceCategory: 'home /'
  },
  {
    id: 177,
    ecommerceName: 'Министерство за финансии',
    ecommerceLink: 'https://www.finance.gov.mk/',
    ecommerceLogo: '/stores/stores-book/ministerstvo-za-finansii',
    ecommerceCategory: 'other /'
  },
  {
    id: 178,
    ecommerceName: 'Mi store',
    ecommerceLink: 'https://www.mi-store.mk/',
    ecommerceLogo: '/stores/stores-book/mi-store',
    ecommerceCategory: 'technology / home / beauty / health / fashion / services'
  },
  {
    id: 179,
    ecommerceName: 'Митра',
    ecommerceLink: 'https://www.mitra.mk/',
    ecommerceLogo: '/stores/stores-book/mitra',
    ecommerceCategory: 'home / food / fashion'
  },
  {
    id: 180,
    ecommerceName: 'Мк хост',
    ecommerceLink: 'https://mkhost.com/mk/hosting/web-hosting?gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xbgE7cTpiglck7In15Uw2y-_Z0URshdxhAwDZNcdrOLShIAV4fz5DcaAiwLEALw_wcB',
    ecommerceLogo: '/stores/stores-book/mk-host',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 181,
    ecommerceName: 'MkMage',
    ecommerceLink: 'http://mkmage.com/',
    ecommerceLogo: '/stores/stores-book/mk-mage',
    ecommerceCategory: 'services /'
  },
  {
    id: 182,
    ecommerceName: 'Младински културен центар',
    ecommerceLink: 'https://mkc.mk/',
    ecommerceLogo: '/stores/stores-book/mladinski-kulturen-centar',
    ecommerceCategory: 'services / education / books / events'
  },
  {
    id: 183,
    ecommerceName: 'MM toys',
    ecommerceLink: 'http://www.mmtoys.mk/',
    ecommerceLogo: '/stores/stores-book/mm-toys',
    ecommerceCategory: 'fashion / kids / accessories'
  },
  {
    id: 184,
    ecommerceName: 'МНТ',
    ecommerceLink: 'https://mnt.mk/',
    ecommerceLogo: '/stores/stores-book/mnt',
    ecommerceCategory: 'services /  events'
  },
  {
    id: 185,
    ecommerceName: 'Мое кафе',
    ecommerceLink: 'https://moekafe.mk/',
    ecommerceLogo: '/stores/stores-book/moekafe',
    ecommerceCategory: 'servics / food'
  },
  {
    id: 186,
    ecommerceName: 'Moj тонер',
    ecommerceLink: 'https://www.mojtoner.mk/',
    ecommerceLogo: '/stores/stores-book/moj-toner',
    ecommerceCategory: 'technology /'
  },
  {
    id: 187,
    ecommerceName: 'Mtd gradina',
    ecommerceLink: 'https://mtdgradina.mk/',
    ecommerceLogo: '/stores/stores-book/mtd-gradina',
    ecommerceCategory: 'home /'
  },
  {
    id: 188,
    ecommerceName: 'Multi media',
    ecommerceLink: 'http://www.multimedia.com.mk/',
    ecommerceLogo: '/stores/stores-book/multi-media',
    ecommerceCategory: 'services /'
  },
  {
    id: 189,
    ecommerceName: 'Murino art',
    ecommerceLink: 'https://muranoart.mk/shop/',
    ecommerceLogo: '/stores/stores-book/murino-art',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 190,
    ecommerceName: 'My moda',
    ecommerceLink: 'https://mymoda.mk/',
    ecommerceLogo: '/stores/stores-book/my-moda',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 191,
    ecommerceName: 'My time',
    ecommerceLink: 'https://www.mytime.mk/',
    ecommerceLogo: '/stores/stores-book/my-time',
    ecommerceCategory: 'fashion / watches / accessories'
  },
  {
    id: 192,
    ecommerceName: 'На акција',
    ecommerceLink: 'http://www.naakcija.mk/',
    ecommerceLogo: '/stores/stores-book/na-akcija',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 193,
    ecommerceName: 'Нарачај',
    ecommerceLink: 'https://naracaj.com/',
    ecommerceLogo: '/stores/stores-book/naracaj',
    ecommerceCategory: 'services / food'
  },
  {
    id: 194,
    ecommerceName: 'Нео тел',
    ecommerceLink: 'https://neotel.mk/',
    ecommerceLogo: '/stores/stores-book/neo-tel',
    ecommerceCategory: 'services /'
  },
  {
    id: 195,
    ecommerceName: 'Нептун',
    ecommerceLink: 'https://www.neptun.mk/',
    ecommerceLogo: '/stores/stores-book/neptun',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 196,
    ecommerceName: 'Next-gen',
    ecommerceLink: 'http://www.nextgen.mk/',
    ecommerceLogo: '/stores/stores-book/next-gen',
    ecommerceCategory: 'other /'
  },
  {
    id: 197,
    ecommerceName: 'Nikmit',
    ecommerceLink: 'https://nikmit.mk/',
    ecommerceLogo: '/stores/stores-book/nikmit',
    ecommerceCategory: 'fashion / home'
  },
  {
    id: 198,
    ecommerceName: 'Niko computers',
    ecommerceLink: 'http://niko.com.mk/',
    ecommerceLogo: '/stores/stores-book/niko-computers',
    ecommerceCategory: 'technology /'
  },
  {
    id: 199,
    ecommerceName: 'Nina box',
    ecommerceLink: 'http://www.ninabox.mk/',
    ecommerceLogo: '/stores/stores-book/ninabox',
    ecommerceCategory: 'fashion / accessories'
  },
  {
    id: 200,
    ecommerceName: 'Nutrivita shop',
    ecommerceLink: 'http://nutrivita.mk/',
    ecommerceLogo: '/stores/stores-book/nutri-vita-shop',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 201,
    ecommerceName: 'Ohrid pearl Filevi',
    ecommerceLink: 'http://ohridpearl.com/',
    ecommerceLogo: '/stores/stores-book/ohrid-pearl-filevi',
    ecommerceCategory: 'fashion / accessories'
  },
  {
    id: 202,
    ecommerceName: 'Olimpiko',
    ecommerceLink: 'https://olimpiko.com.mk/',
    ecommerceLogo: '/stores/stores-book/olimpiko',
    ecommerceCategory: 'other /'
  },
  {
    id: 203,
    ecommerceName: 'Orfej',
    ecommerceLink: 'http://www.orfej.mk/',
    ecommerceLogo: '/stores/stores-book/orfej',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 204,
    ecommerceName: 'Oriflame',
    ecommerceLink: 'https://mk.oriflame.com/',
    ecommerceLogo: '/stores/stores-book/oriflame',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 205,
    ecommerceName: 'Outlet on',
    ecommerceLink: 'https://outleton.com/mk?',
    ecommerceLogo: '/stores/stores-book/outlet-on',
    ecommerceCategory: 'home / technology / sport / fashion'
  },
  {
    id: 206,
    ecommerceName: 'Ozone gold',
    ecommerceLink: 'https://www.ozone-gold.com/',
    ecommerceLogo: '/stores/stores-book/ozonegold',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 207,
    ecommerceName: 'Пакет',
    ecommerceLink: 'https://www.paket.mk/?gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xbhyv7iJsLWhTOViBbN78J0Ixb3QJIjO1rKaPMEMKZb_E9dTtQDO6caAkl7EALw_wcB',
    ecommerceLogo: '/stores/stores-book/paket',
    ecommerceCategory: 'services /  food'
  },
  {
    id: 208,
    ecommerceName: 'Paradiso fly',
    ecommerceLink: 'https://paradisofly.com.mk/',
    ecommerceLogo: '/stores/stores-book/paradiso-fly',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 209,
    ecommerceName: 'Пазар 3',
    ecommerceLink: 'https://www.pazar3.mk/',
    ecommerceLogo: '/stores/stores-book/pazar-3',
    ecommerceCategory: 'services /'
  },
  {
    id: 210,
    ecommerceName: 'Печат плус',
    ecommerceLink: 'https://pecat.plus/',
    ecommerceLogo: '/stores/stores-book/pecat-plus',
    ecommerceCategory: 'home /'
  },
  {
    id: 211,
    ecommerceName: 'Пелет центар',
    ecommerceLink: 'http://peletcentar.mk/',
    ecommerceLogo: '/stores/stores-book/pelet-centar',
    ecommerceCategory: 'home /'
  },
  {
    id: 212,
    ecommerceName: 'Перла',
    ecommerceLink: 'https://www.perla.mk/',
    ecommerceLogo: '/stores/stores-book/perla',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 213,
    ecommerceName: 'Pix +',
    ecommerceLink: 'http://www.pixplus.com.mk/',
    ecommerceLogo: '/stores/stores-book/pix-plus',
    ecommerceCategory: 'technolgy /'
  },
  {
    id: 214,
    ecommerceName: 'Pizza Hot Delivery',
    ecommerceLink: 'https://pizzahot.mk/',
    ecommerceLogo: '/stores/stores-book/pizza-hot-delivery',
    ecommerceCategory: 'services / food'
  },
  {
    id: 215,
    ecommerceName: 'Pneumatik',
    ecommerceLink: 'https://pneumatik.mk/',
    ecommerceLogo: '/stores/stores-book/pneumatik',
    ecommerceCategory: 'other /'
  },
  {
    id: 216,
    ecommerceName: 'Поц',
    ecommerceLink: 'https://poc.mk/pocetna/',
    ecommerceLogo: '/stores/stores-book/poc',
    ecommerceCategory: 'other / '
  },
  {
    id: 217,
    ecommerceName: 'Подари',
    ecommerceLink: 'https://podari.mk/',
    ecommerceLogo: '/stores/stores-book/podari',
    ecommerceCategory: 'other / '
  },
  {
    id: 218,
    ecommerceName: 'Polleosport',
    ecommerceLink: 'https://polleosport.mk/',
    ecommerceLogo: '/stores/stores-book/polleosport',
    ecommerceCategory: 'sport /'
  },
  {
    id: 219,
    ecommerceName: 'Polyesterday',
    ecommerceLink: 'https://www.polyesterday.mk/',
    ecommerceLogo: '/stores/stores-book/polyesterday',
    ecommerceCategory: 'services /'
  },
  {
    id: 220,
    ecommerceName: 'Потрчко',
    ecommerceLink: 'https://potrcko.mk/',
    ecommerceLogo: '/stores/stores-book/potrcko',
    ecommerceCategory: 'services /'
  },
  {
    id: 221,
    ecommerceName: 'Premium computers',
    ecommerceLink: 'https://www.premium.com.mk/',
    ecommerceLogo: '/stores/stores-book/premium-computers',
    ecommerceCategory: 'technology '
  },
  {
    id: 222,
    ecommerceName: 'Преплет',
    ecommerceLink: 'https://preplet.mk/',
    ecommerceLogo: '/stores/stores-book/preplet',
    ecommerceCategory: 'other /'
  },
  {
    id: 223,
    ecommerceName: 'Претприемач',
    ecommerceLink: 'http://www.pretpriemac.mk/',
    ecommerceLogo: '/stores/stores-book/pretpriemac',
    ecommerceCategory: 'serviecs / '
  },
  {
    id: 224,
    ecommerceName: 'Promo concept',
    ecommerceLink: 'http://www.promoconcept.mk/',
    ecommerceLogo: '/stores/stores-book/promo-concept',
    ecommerceCategory: 'home /'
  },
  {
    id: 225,
    ecommerceName: 'Прв до врв',
    ecommerceLink: 'http://www.prvdovrv.mk/',
    ecommerceLogo: '/stores/stores-book/prv-do-vrv',
    ecommerceCategory: 'sport /'
  },
  {
    id: 226,
    ecommerceName: 'Refan',
    ecommerceLink: 'https://refan.mk/',
    ecommerceLogo: '/stores/stores-book/refan',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 227,
    ecommerceName: 'Reklama 5',
    ecommerceLink: 'https://reklama5.mk/',
    ecommerceLogo: '/stores/stores-book/reklama-5',
    ecommerceCategory: 'serviecs / '
  },
  {
    id: 228,
    ecommerceName: 'Royal hotel',
    ecommerceLink: 'http://royal.com.mk/',
    ecommerceLogo: '/stores/stores-book/royal-hotel',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 229,
    ecommerceName: 'Runners',
    ecommerceLink: 'https://runners.mk/',
    ecommerceLogo: '/stores/stores-book/runners',
    ecommerceCategory: 'sport /'
  },
  {
    id: 230,
    ecommerceName: 'Samad',
    ecommerceLink: 'https://samad.mk/',
    ecommerceLogo: '/stores/stores-book/samad',
    ecommerceCategory: 'other /'
  },
  {
    id: 231,
    ecommerceName: 'Sara fashion',
    ecommerceLink: 'https://sarafashion.mk/',
    ecommerceLogo: '/stores/stores-book/sara-fashion',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 232,
    ecommerceName: 'Savana',
    ecommerceLink: 'https://www.savanaonline.com/',
    ecommerceLogo: '/stores/stores-book/savana',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 233,
    ecommerceName: 'Sava tours',
    ecommerceLink: 'https://www.savatours-mk.com/',
    ecommerceLogo: '/stores/stores-book/sava-tours',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 234,
    ecommerceName: 'Schatze',
    ecommerceLink: 'https://schatze.mk/',
    ecommerceLogo: '/stores/stores-book/schatze',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 235,
    ecommerceName: 'Schuster',
    ecommerceLink: 'https://schuster-store.com/',
    ecommerceLogo: '/stores/stores-book/schuster',
    ecommerceCategory: 'fashion'
  },
  {
    id: 236,
    ecommerceName: 'Scout',
    ecommerceLink: 'https://www.scout.mk/',
    ecommerceLogo: '/stores/stores-book/scout',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 237,
    ecommerceName: 'Seavus',
    ecommerceLink: 'https://www.sedc.mk/',
    ecommerceLogo: '/stores/stores-book/seavus',
    ecommerceCategory: 'services / education'
  },
  {
    id: 238,
    ecommerceName: 'Семос',
    ecommerceLink: 'https://semosedu.com.mk/Home_page.aspx',
    ecommerceLogo: '/stores/stores-book/semos',
    ecommerceCategory: 'services / education'
  },
  {
    id: 239,
    ecommerceName: 'Сервер',
    ecommerceLink: 'https://server.com.mk/',
    ecommerceLogo: '/stores/stores-book/server',
    ecommerceCategory: 'services /'
  },
  {
    id: 240,
    ecommerceName: 'Setec',
    ecommerceLink: 'https://setec.mk/',
    ecommerceLogo: '/stores/stores-book/setec',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 241,
    ecommerceName: 'Sharr express',
    ecommerceLink: 'https://www.sharrexpress.com/',
    ecommerceLogo: '/stores/stores-book/sharr-express',
    ecommerceCategory: 'services /'
  },
  {
    id: 242,
    ecommerceName: 'Signori',
    ecommerceLink: 'https://signori.mk/',
    ecommerceLogo: '/stores/stores-book/signori',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 243,
    ecommerceName: 'Skopje hotels',
    ecommerceLink: 'https://travel4macedonia.mk/',
    ecommerceLogo: '/stores/stores-book/skopje-hotels',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 244,
    ecommerceName: 'Скопје рент',
    ecommerceLink: 'https://skopjerent.mk/',
    ecommerceLogo: '/stores/stores-book/skopje-rent',
    ecommerceCategory: 'services /'
  },
  {
    id: 245,
    ecommerceName: 'Slim line club',
    ecommerceLink: 'https://mk.slimlineclub.com/',
    ecommerceLogo: '/stores/stores-book/slim-line-club',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 246,
    ecommerceName: 'Службен весник',
    ecommerceLink: 'http://www.slvesnik.com.mk/',
    ecommerceLogo: '/stores/stores-book/sluzben-vesnik',
    ecommerceCategory: 'other /'
  },
  {
    id: 247,
    ecommerceName: 'Smart living',
    ecommerceLink: 'https://smartliving.mk/mk/',
    ecommerceLogo: '/stores/stores-book/smartliving',
    ecommerceCategory: 'home /'
  },
  {
    id: 248,
    ecommerceName: 'Smart race club',
    ecommerceLink: 'https://www.smartrace.club/apex/f?p=90100:1001:5305400525343::::P0_EVENT_ID,P0_EVENT_NAME,P0_SEX_ID,P0_SEX_ecommerceCATEGORY,P0_EVENT_HOME_PAGE:,,,,',
    ecommerceLogo: '/stores/stores-book/smart-race-club',
    ecommerceCategory: 'services /'
  },
  {
    id: 249,
    ecommerceName: 'Smart shop',
    ecommerceLink: 'https://smartshop.mk/',
    ecommerceLogo: '/stores/stores-book/smart-shop',
    ecommerceCategory: 'technology / home '
  },
  {
    id: 250,
    ecommerceName: 'Шминка',
    ecommerceLink: 'https://www.sminka.mk/',
    ecommerceLogo: '/stores/stores-book/sminka',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 251,
    ecommerceName: 'Somnia shop',
    ecommerceLink: 'https://www.somniashop.mk/',
    ecommerceLogo: '/stores/stores-book/somnia-shop',
    ecommerceCategory: 'home / '
  },
  {
    id: 252,
    ecommerceName: 'Sos детско село',
    ecommerceLink: 'https://sos.org.mk/en/',
    ecommerceLogo: '/stores/stores-book/sos-detsko-selo',
    ecommerceCategory: 'other /'
  },
  {
    id: 253,
    ecommerceName: 'Sport M',
    ecommerceLink: 'https://www.sport-m.com.mk/',
    ecommerceLogo: '/stores/stores-book/sportm',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 254,
    ecommerceName: 'Sport reality',
    ecommerceLink: 'https://www.sportreality.mk/',
    ecommerceLogo: '/stores/stores-book/sportreality',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 255,
    ecommerceName: ' Sport vision',
    ecommerceLink: 'https://www.sportvision.mk/',
    ecommerceLogo: '/stores/stores-book/sport-vision',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 256,
    ecommerceName: 'Среќа',
    ecommerceLink: 'https://srekja.mk/',
    ecommerceLogo: '/stores/stores-book/sreka',
    ecommerceCategory: 'services /'
  },
  {
    id: 257,
    ecommerceName: 'Story box',
    ecommerceLink: 'https://storybox.mk/',
    ecommerceLogo: '/stores/stores-book/story-box',
    ecommerceCategory: 'kids'
  },
  {
    id: 258,
    ecommerceName: 'Sunwireless',
    ecommerceLink: 'https://svetotnabibi.mk/',
    ecommerceLogo: '/stores/stores-book/sunwireless',
    ecommerceCategory: 'services / '
  },
  {
    id: 259,
    ecommerceName: 'Светот на Биби',
    ecommerceLink: 'https://svetotnabibi.mk/',
    ecommerceLogo: '/stores/stores-book/svetot-na-bibi',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 260,
    ecommerceName: 'Swanson',
    ecommerceLink: 'http://swanson.com.mk/',
    ecommerceLogo: '/stores/stores-book/swanson',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 261,
    ecommerceName: 'Тања 2000',
    ecommerceLink: 'https://www.tanja2000.mk/',
    ecommerceLogo: '/stores/stores-book/tanja-2000',
    ecommerceCategory: 'home /'
  },
  {
    id: 262,
    ecommerceName: 'Техномаркет',
    ecommerceLink: 'https://www.tehnomarket.com.mk/',
    ecommerceLogo: '/stores/stores-book/tehnomarket',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 263,
    ecommerceName: 'Технополис',
    ecommerceLink: 'https://tehnopolis.mk/',
    ecommerceLogo: '/stores/stores-book/tehnopolis',
    ecommerceCategory: 'home'
  },
  {
    id: 264,
    ecommerceName: 'Телеком',
    ecommerceLink: 'https://www.telekom.mk/',
    ecommerceLogo: '/stores/stores-book/telekom',
    ecommerceCategory: 'services / technology / mobile phones'
  },
  {
    id: 265,
    ecommerceName: 'Теле шоп',
    ecommerceLink: 'https://teleshop.mk/',
    ecommerceLogo: '/stores/stores-book/tele-shop',
    ecommerceCategory: 'home / beauty / health'
  },
  {
    id: 266,
    ecommerceName: 'Темпомак',
    ecommerceLink: 'http://www.tempomak.mk/',
    ecommerceLogo: '/stores/stores-book/tempomak',
    ecommerceCategory: 'home /'
  },
  {
    id: 267,
    ecommerceName: 'Терма лифт',
    ecommerceLink: 'https://www.termalift.com.mk/mk',
    ecommerceLogo: '/stores/stores-book/termalift',
    ecommerceCategory: 'other /'
  },
  {
    id: 268,
    ecommerceName: 'Термо систем',
    ecommerceLink: 'https://www.termosistem.mk/',
    ecommerceLogo: '/stores/stores-book/termo-sistem',
    ecommerceCategory: 'home /'
  },
  {
    id: 269,
    ecommerceName: 'Tilla',
    ecommerceLink: 'http://www.tilla.mk/',
    ecommerceLogo: '/stores/stores-book/tilla',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 270,
    ecommerceName: 'Tim computers',
    ecommerceLink: 'http://timcomputers.mk/',
    ecommerceLogo: '/stores/stores-book/tim-computers',
    ecommerceCategory: 'technology /'
  },
  {
    id: 271,
    ecommerceName: 'Топшоп',
    ecommerceLink: 'https://www.topshop.com.mk/',
    ecommerceLogo: '/stores/stores-book/topshop',
    ecommerceCategory: 'home / technology '
  },
  {
    id: 272,
    ecommerceName: 'Торти',
    ecommerceLink: 'https://torti.mk/',
    ecommerceLogo: '/stores/stores-book/torti',
    ecommerceCategory: 'services / food'
  },
  {
    id: 273,
    ecommerceName: 'Тримакс',
    ecommerceLink: 'http://www.trimaks.mk/',
    ecommerceLogo: '/stores/stores-book/tri-maks',
    ecommerceCategory: 'services / education / office'
  },
  {
    id: 274,
    ecommerceName: 'Тритекс',
    ecommerceLink: 'https://www.triteks.mk/',
    ecommerceLogo: '/stores/stores-book/tritex',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 275,
    ecommerceName: 'Uhost',
    ecommerceLink: 'https://uhost.mk/',
    ecommerceLogo: '/stores/stores-book/uhost',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 276,
    ecommerceName: 'Ukion',
    ecommerceLink: 'https://www.ukion.mk/',
    ecommerceLogo: '/stores/stores-book/ukion',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 277,
    ecommerceName: 'Универзитет Гоце Делчев',
    ecommerceLink: 'https://www.ugd.edu.mk/index.php',
    ecommerceLogo: '/stores/stores-book/univerzitet-goce-delcev',
    ecommerceCategory: 'services / education '
  },
  {
    id: 278,
    ecommerceName: 'Услуги',
    ecommerceLink: 'https://uslugi.gov.mk/',
    ecommerceLogo: '/stores/stores-book/uslugi',
    ecommerceCategory: 'services / '
  },
  {
    id: 279,
    ecommerceName: 'Велјан',
    ecommerceLink: 'http://vel-jan.com/',
    ecommerceLogo: '/stores/stores-book/veljan',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 280,
    ecommerceName: 'Велосипед',
    ecommerceLink: 'https://velosiped.mk/?gclid=CjwKCAjw_sn8BRBrEiwAnUGJDuFwfQdTcmgFS-rXhoO-xJ5SUMExUKUAD8Ysr2qEO0SnbwmQOvrSixoCN28QAvD_BwE',
    ecommerceLogo: '/stores/stores-book/velosiped',
    ecommerceCategory: 'sport / bikes '
  },
  {
    id: 281,
    ecommerceName: 'View in Hotel',
    ecommerceLink: 'http://viewinn.mk/',
    ecommerceLogo: '/stores/stores-book/view-in',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 282,
    ecommerceName: 'Винотека',
    ecommerceLink: 'https://www.vinoteka.mk/',
    ecommerceLogo: '/stores/stores-book/vinoteka',
    ecommerceCategory: 'services / food'
  },
  {
    id: 283,
    ecommerceName: 'Visit Ohrid',
    ecommerceLink: 'https://visit-ohrid.com/',
    ecommerceLogo: '/stores/stores-book/visit-ohrid',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 284,
    ecommerceName: 'Виста турс',
    ecommerceLink: 'http://www.vistaturs.mk/',
    ecommerceLogo: '/stores/stores-book/vista-turs',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 285,
    ecommerceName: 'Виталиа',
    ecommerceLink: 'https://www.vitalia.com.mk/',
    ecommerceLogo: '/stores/stores-book/vitalia',
    ecommerceCategory: 'services / food'
  },
  {
    id: 286,
    ecommerceName: 'Водовод Скопје',
    ecommerceLink: 'https://vodovod-skopje.com.mk/',
    ecommerceLogo: '/stores/stores-book/vodovod-skopje',
    ecommerceCategory: 'services /'
  },
  {
    id: 287,
    ecommerceName: 'Vox net',
    ecommerceLink: 'http://www.voxnet.com.mk/',
    ecommerceLogo: '/stores/stores-book/vox-net',
    ecommerceCategory: 'services /'
  },
  {
    id: 288,
    ecommerceName: 'V-tac',
    ecommerceLink: 'http://v-tac.mk/',
    ecommerceLogo: '/stores/stores-book/v-tac',
    ecommerceCategory: 'home / lights'
  },
  {
    id: 289,
    ecommerceName: 'Warp sparkles',
    ecommerceLink: 'https://www.warpsparkles.com/',
    ecommerceLogo: '/stores/stores-book/warp-sparkles',
    ecommerceCategory: 'services / education '
  },
  {
    id: 290,
    ecommerceName: 'Watch club',
    ecommerceLink: 'https://watchclub.mk/',
    ecommerceLogo: '/stores/stores-book/watch-club',
    ecommerceCategory: 'fashion / wathces / accessories'
  },
  {
    id: 291,
    ecommerceName: 'Wenice',
    ecommerceLink: 'https://wenice.mk/index.php',
    ecommerceLogo: '/stores/stores-book/wenice',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 292,
    ecommerceName: 'Wine',
    ecommerceLink: 'https://wine.mk/',
    ecommerceLogo: '/stores/stores-book/wine',
    ecommerceCategory: 'services / food'
  },
  {
    id: 293,
    ecommerceName: 'Winix',
    ecommerceLink: 'https://www.winixmk.mk/',
    ecommerceLogo: '/stores/stores-book/winix',
    ecommerceCategory: 'home /'
  },
  {
    id: 294,
    ecommerceName: 'Winner - Vienna Insurance Group',
    ecommerceLink: 'http://www.winner.mk/',
    ecommerceLogo: '/stores/stores-book/winner',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 295,
    ecommerceName: 'Wow',
    ecommerceLink: 'http://wow.mk/',
    ecommerceLogo: '/stores/stores-book/wow',
    ecommerceCategory: 'fashion / accessories'
  },
  {
    id: 296,
    ecommerceName: 'Zazu',
    ecommerceLink: 'https://zazu.mk/',
    ecommerceLogo: '/stores/stores-book/zazu',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 297,
    ecommerceName: 'Земи',
    ecommerceLink: 'https://zemi.mk/',
    ecommerceLogo: '/stores/stores-book/zemi',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 298,
    ecommerceName: 'Ziaja',
    ecommerceLink: 'http://www.e-ziaja.ukionshops.com/',
    ecommerceLogo: '/stores/stores-book/ziaja',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 299,
    ecommerceName: 'Златен заб',
    ecommerceLink: 'https://zlatenzab.mk/en/home-en/',
    ecommerceLogo: '/stores/stores-book/zlaten-zab',
    ecommerceCategory: 'services / events'
  },
  {
    id: 300,
    ecommerceName: 'Златна книга',
    ecommerceLink: 'https://zk.mk/',
    ecommerceLogo: '/stores/stores-book/zlatna-kniga',
    ecommerceCategory: 'services /'
  }
];

export { allEcommerces };
