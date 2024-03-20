//variables ===================================================================

const flowers = [
  {name: 'Honeysuckle', //ARIES
  scientific: 'Lonicera caprifolium',
  dates: 'March 21 - April 19',
  description: "As one of the earliest flowers to bloom in the spring, honeysuckle represents rebirth and new experiences. It thrives in cooler temperatures and grows rapidly—up to 8 metres. Honeysuckle is an edible flower known for its nectar, but can also be used in teas and other products."
  },
  {name: 'Poppy', //TAURUS
  scientific: 'Papaver rhoeas',
  dates: 'April 20 - May 20',
  description: "Resilient, tough poppies grow and thrive in harsh environments. A symbol of remembrance, they bloom profusely even in inhospitable landscapes and are considered an agricultural weed. Poppies have a very wide distribution area, and can be found in Africa, Asia, and Europe."
  },
  {name: 'Lavender', //GEMINI
  scientific: 'Lavendula latifolia',
  dates: 'May 21 - June 21',
  description: "A strongly aromatic flower, lavender has a signature scent that attracts pollinators and finds its way into countless aromatherapy products due to its camphor content and calming fragrance. As an edible flower, it's also popular in beverages, desserts, and other foods."
  },
  {name: 'White Rose', //CANCER
  scientific: 'Rosa x alba',
  dates: 'June 22 - July 22',
  description: "Often seen as a symbol for purity and innocence, white roses convey a message of peace and positivity. These flowers have a sweet scent and are able to survive through the winter and even subarctic climates such as northern Scandinavia and Canada, without being damaged."
  },
  {name: 'Sunflower', //LEO
  scientific: 'Helianthus annuus',
  dates: 'July 23 - August 22',
  description: "With mane-like petals and the ability to follow the sun, sunflowers add energy to any occasion. They are often grown for their seeds, which are used for cooking oil, livestock, and bird feed. While domestic sunflowers have only one head, wild ones can have multiple!"
  },
  {name: 'Buttercup', //VIRGO
  scientific: 'Ranunculus bulbosus',
  dates: 'August 23 - September 22',
  description: "Vibrant yet subtle, buttercups usually flower in the spring, but flowers may be found throughout the summer, especially where the plants are growing as opportunistic colonizers, as in the case of garden weeds. Some species are popular ornamental horticulture flowers."
  },
  {name: 'Rose', //LIBRA
  scientific: 'Rosa chinensis',
  dates: 'September 23 - October 23',
  description: "Roses, especially red roses, are iconic symbols of love and romance, with countless hybrids and cultivars in the forms of tea roses and hybrid tea roses. While many species are  cultivated for ornamental purposes, rose hips and petals are used in food and medicine."
  },
  {name: 'Geranium', //SCORPIO
  scientific: 'Geranium x magnificum',
  dates: 'October 24 - November 21',
  description: "Geraniums represent good health and friendship, and thrive in a wide range of weather conditions. Their unique five-petal blooms grow in tight clusters in order to hide their fragile stems, and geraniums will grow in any soil as long as it is not waterlogged."
  },
  {name: 'Carnation', //SAGITTARIUS
  scientific: 'Dianthus caryophyllus',
  dates: 'November 22 - December 21',
  description: "As one of the most commonly chosen wedding flowers, carnations symbolize long-lasting love. The scent of carnations is often described as spicy, clove-like, or reminiscent of a combination of cinnamon and nutmeg, which contributes to its use in perfumes and potpourri."
  },
  {name: 'Pansy', //CAPRICORN
  scientific: 'Viola x wittrockiana',
  dates: 'December 22 - January 19',
  description: "As a symbol of memory and love, pansies radiate positive energy and come in a variety of colors. A hardy, self-seeding plant that can survive frosty temperatures and freezes, pansies thrive in tough conditions and is commonly grown as a bedding flower."
  },
  {name: 'Orchid', //AQUARIUS
  scientific: 'Phalaenopsis amabilis',
  dates: 'January 20 - February 18',
  description: "Orchids are delicate-looking, yet strong and resilient plants beloved for their exotic shape and fragrance. There are around 28,000 species of orchid in all sorts of colors found all over the world, making Orchidaceae one of the largest families of flowering plants."
  },
  {name: 'Water Lily', //PISCES
  scientific: 'Nymphaea rubra',
  dates: 'February 19 - March 20',
  description: "Water lilies, which symbolize enlightenment, prefer still, calm bodies of water, rooted deep in the mud. Its flowers seem to float on the water's surface. Not only decorative, water lilies also provide useful shade which helps reduce the growth of algae in ponds and lakes."
  }
]

const content_header = document.getElementById('content-header');
const content_deco = document.getElementById('content-deco');
const content_text = document.getElementById('content-text');
const form = document.querySelector('form');

let flower;
function determine_flower(month, day) {
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