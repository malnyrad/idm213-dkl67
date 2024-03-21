//variables ===================================================================

const flowers = [
  {name: 'Honeysuckle', //ARIES
  scientific: 'Lonicera<br>caprifolium',
  dates: 'March 21 - April 19',
  description: "As one of the earliest flowers to bloom in the spring, honeysuckle represents rebirth and new experiences. It thrives in cooler temperatures and grows rapidly—up to 8 metres. Honeysuckle is an edible flower known for its nectar, but can also be used in teas and other products.",
  song: 'music/yume.mp3',
  image: 'images/honeysuckle-bar.svg'
  },
  {name: 'Poppy', //TAURUS
  scientific: 'Papaver<br>rhoeas',
  dates: 'April 20 - May 20',
  description: "Resilient, tough poppies grow and thrive in harsh environments. A symbol of remembrance, they bloom profusely even in inhospitable landscapes and are considered an agricultural weed. Poppies have a very wide distribution area, and can be found in Africa, Asia, and Europe.",
  song: 'music/yuubenohoshi.mp3',
  image: 'images/poppy-bar.svg'
  },
  {name: 'Lavender', //GEMINI
  scientific: 'Lavendula<br>latifolia',
  dates: 'May 21 - June 21',
  description: "A strongly aromatic flower, lavender has a signature scent that attracts pollinators and finds its way into countless aromatherapy products due to its camphor content and calming fragrance. As an edible flower, it's also popular in beverages, desserts, and other foods.",
  song: 'music/tsukiakarinotodai.mp3',
  image: 'images/lavender-bar.svg'
  },
  {name: 'White Rose', //CANCER
  scientific: 'Rosa<br>x alba',
  dates: 'June 22 - July 22',
  description: "Often seen as a symbol for purity and innocence, white roses convey a message of peace and positivity. These flowers have a sweet scent and are able to survive through the winter and even subarctic climates such as northern Scandinavia and Canada, without being damaged.",
  song: 'music/akaifuusen.mp3',
  image: 'images/white-rose-bar.svg'
  },
  {name: 'Sunflower', //LEO
  scientific: 'Helianthus<br>annuus',
  dates: 'July 23 - August 22',
  description: "With mane-like petals and the ability to follow the sun, sunflowers add energy to any occasion. They are often grown for their seeds, which are used for cooking oil, livestock, and bird feed. While domestic sunflowers have only one head, wild ones can have multiple!",
  song: 'music/haruemukaukusabanae.mp3',
  image: 'images/sunflower-bar.svg'
  },
  {name: 'Buttercup', //VIRGO
  scientific: 'Ranunculus<br>bulbosus',
  dates: 'August 23 - September 22',
  description: "Vibrant yet subtle, buttercups usually flower in the spring, but flowers may be found throughout the summer, especially where the plants are growing as opportunistic colonizers, as in the case of garden weeds. Some species are popular ornamental horticulture flowers.",
  song: 'music/canon.mp3',
  image: 'images/buttercup-bar.svg'
  },
  {name: 'Rose', //LIBRA
  scientific: 'Rosa<br>chinensis',
  dates: 'September 23 - October 23',
  description: "Roses, especially red roses, are iconic symbols of love and romance, with countless hybrids and cultivars in the forms of tea roses and hybrid tea roses. While many species are  cultivated for ornamental purposes, rose hips and petals are used in food and medicine.",
  song: 'music/natsunokiri.mp3',
  image: 'images/rose-bar.svg'
  },
  {name: 'Geranium', //SCORPIO
  scientific: 'Geranium x<br>magnificum',
  dates: 'October 24 - November 21',
  description: "Geraniums represent good health and friendship, and thrive in a wide range of weather conditions. Their unique five-petal blooms grow in tight clusters in order to hide their fragile stems, and geraniums will grow in any soil as long as it is not waterlogged.",
  song: 'music/amenisuteraretaningyou.mp3',
  image: 'images/geranium-bar.svg'
  },
  {name: 'Carnation', //SAGITTARIUS
  scientific: 'Dianthus<br>caryophyllus',
  dates: 'November 22 - December 21',
  description: "As one of the most commonly chosen wedding flowers, carnations symbolize long-lasting love. The scent of carnations is often described as spicy, clove-like, or reminiscent of a combination of cinnamon and nutmeg, which contributes to its use in perfumes and potpourri.",
  song: 'music/sangatsunosundasora.mp3',
  image: 'images/carnation-bar.svg'
  },
  {name: 'Pansy', //CAPRICORN
  scientific: 'Viola x<br>wittrockiana',
  dates: 'December 22 - January 19',
  description: "As a symbol of memory and love, pansies radiate positive energy and come in a variety of colors. A hardy, self-seeding plant that can survive frosty temperatures and freezes, pansies thrive in tough conditions and is commonly grown as a bedding flower.",
  song: 'music/seishishitauchu.mp3',
  image: 'images/pansy-bar.svg'
  },
  {name: 'Orchid', //AQUARIUS
  scientific: 'Phalaenopsis<br>amabilis',
  dates: 'January 20 - February 18',
  description: "Orchids are delicate-looking, yet strong and resilient plants beloved for their exotic shape and fragrance. There are around 28,000 species of orchid in all sorts of colors found all over the world, making Orchidaceae one of the largest families of flowering plants.",
  song: 'music/genjitsunosukima.mp3',
  image: 'images/orchid-bar.svg'
  },
  {name: 'Water Lily', //PISCES
  scientific: 'Nymphaea<br>rubra',
  dates: 'February 19 - March 20',
  description: "Water lilies, which symbolize enlightenment, prefer still, calm bodies of water, rooted deep in the mud. Its flowers seem to float on the water's surface. Not only decorative, water lilies also provide useful shade which helps reduce the growth of algae in ponds and lakes.",
  song: 'music/tsukinokobune.mp3',
  image: 'images/water-lily-bar.svg'
  }
];

let flower;
let music;
const bouquet = document.getElementsByClassName('flower');
const content_header = document.getElementById('content-header');
const content_deco = document.getElementById('content-deco');
const content_text = document.getElementById('content-text');
const record_player = document.getElementById('music-box');
const record = new Audio(music);
const form = document.querySelector('form');

//help button =================================================================

function help_on() {
  document.getElementById("help-overlay").style.visibility = "visible";
  document.getElementById("content").style.visibility = "hidden";
}

function help_off() {
  document.getElementById("help-overlay").style.visibility = "hidden";
  document.getElementById("content").style.visibility = "visible";
}

//flower calc =================================================================

function get_flower(month, day) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    flower = flowers[0].name;
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    flower = flowers[1].name;
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    flower = flowers[2].name;
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    flower = flowers[3].name;
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    flower = flowers[4].name;
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    flower = flowers[5].name;
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    flower = flowers[6].name;
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    flower = flowers[7].name;
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    flower = flowers[8].name;
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    flower = flowers[9].name;
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    flower = flowers[10].name;
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    flower = flowers[11].name;
  }
  return flower;
}

//form submit =================================================================

function handle_submit(event) {
	event.preventDefault();
	const user_month = Number(form.elements['birthdate'].value.split('-')[1]);
	const user_day = Number(form.elements['birthdate'].value.split('-')[2]);
	const user_flower = get_flower(user_month, user_day);
	for (let i = 0; i < flowers.length; i++) {
    if (user_flower === flowers[i].name) {
      //content
      document.getElementById('content-image').src = flowers[i].image;
      document.getElementById('content-header').innerHTML = flowers[i].name;
      document.getElementById('content-deco').innerHTML = flowers[i].scientific;
      document.getElementById('content-subheader').innerHTML = flowers[i].dates;
      document.getElementById('content-text').innerHTML = flowers[i].description;
      //audio
      music = flowers[i].song;
      record_player.src = music;
      if ((record_player) && (!record_player.paused)) {
        record_player.pause();
      }
      record_player.currentTime = 0;
      record_player.play();
      record_player.loop = true;
    }
  }
}

if (form) {
  form.addEventListener('submit', handle_submit, false);
}

//button select ===============================================================

function click_button() {
  for (let i = 0; i < bouquet.length; i++) {
    bouquet[i].addEventListener('click', () => {
      help_off();
      //content
      document.getElementById('content-image').src = flowers[i].image;
      document.getElementById('content-header').innerHTML = flowers[i].name;
      document.getElementById('content-deco').innerHTML = flowers[i].scientific;
      document.getElementById('content-subheader').innerHTML = flowers[i].dates;
      document.getElementById('content-text').innerHTML = flowers[i].description;
      //audio
      music = flowers[i].song;
      record_player.src = music;
      if ((record_player) && (!record_player.paused)) {
        record_player.pause();
      }
      record_player.currentTime = 0;
      record_player.play();
      record_player.loop = true;
    });
  }
}

click_button();