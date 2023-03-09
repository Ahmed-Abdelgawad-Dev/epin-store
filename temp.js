// {<PayPalScriptProvider
//   options={{
//     // "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID_testing,
//     "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
//   }}
// >
//   <PayPalButtons
//     createOrder={createOrder}
//     // onApprove={ApprovedPurchase}
//     onApprove={(data, actions) => { return actions.order.capture().then(function (details) { alert('Transaction Success') }) }}
//     style={{ layout: "vertical" }}
//   />
// </PayPalScriptProvider>}


const data = [
  {
    id: 1,
    url: "https://images.g2a.com/1024x768/1x1x0/random-xbox-vip-winter-10-keys-xbox-live-key-argentina-i10000326259046/d9d61e5480fb47669b7f05f2",
    title: `Random Xbox VIP Winter 10 Keys - Xbox Live Key - ARGENTINA - 1    Random Xbox VIP Winter 10 Keys - Xbox Live Key - ARGENTINA - 1    Random Xbox VIP Winter 10 Keys - Xbox Live Key - ARGENTINA`,
    description: `Feel like a VIP and make your Xbox library look luxurious! Let fate decide which 10 games you’re about to experience. Think you’re up for something glamorous?    GAME QUALITY GUARANTEE – the bundle is worth at least €240 (undiscounted UROPEAN XBOX STORE retail price).NOTICE! The refund does not apply to games that you have access to through Xbox Game Pass.    NO free games! NO DLCs! NO demo codes! No skins! Only full games are included!Want to be our lucky customer today? Take your chance to see what fate will bring you today!`,
    price: 24.31,
    before_discount: 90,
  },
  {
    id: 18,
    url: "https://images.g2a.com/1024x768/1x1x0/dayz-steam-key-global-i10000002337008/59111e975bafe3eb13465aa5",
    title: "DayZ Steam Key GLOBAL",
    description: `Who can be trusted in the zombie apocalypse? The situation gets really severe. You are one of the rare people, who survived the outbreak of a deadly virus. Not for too long, though, as you will soon find out that it is only the beginning of the real struggle. Same as thousands of players around the world, you are equipped with simple clothes, a road flare and a rag. Having no food, water or medical supplies, you do not have any other choice than to wander around the 225 km square landscape of Chernarus.
    DayZ release for PC took place in December 2013. The game has been developed by Bohemia Interactive, being a commercial continuation of the popular ArmA II mod. The impressive work of the studio has been noticed by many gamers and experts, as the title was met with a warm reception. 
    
    DayZ won the MMORPG.com award for Best Hybrid MMO at PAX East 2013, the Best Indie Game and Best Original Game awards. At the 2014 Golden Joystick Awards and was named the 52nd best PC video game ever by PC Gamer in 2015.`,
    price: 24.36,
    before_discount: 42,
  },
  {
    id: 2,
    url: "https://images.g2a.com/1024x768/1x1x0/random-xbox-elite-winter-10-keys-xbox-live-key-argentina-i10000326259047/48e9c469f00042d38fb0e18f",
    title: "Random Xbox Elite Winter 10 Keys - Xbox Live Key - ARGENTINA",
    description:
      "Don’t waste your time browsing for new adventures – let fate decide which 10 games you’re about to experience. Make your Xbox library look ELITE thanks to the amazing titles you may receive. Think you’re up for something ",
    price: 16.2,
    before_discount: 82,
  },
  {
    id: 3,
    url: "https://images.g2a.com/1024x768/1x1x0/spider-man-miles-morales-pc-steam-key-global-i10000217221006/8253847253214f21b1455627",
    title: "Spider-Man: Miles Morales (PC) - Steam Key - GLOBAL",
    description:
      "Spider-Man: Miles Morales is an open-world action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. The sequel to 2018s Marvel's Spider-Man, the game continues the story of the",
    price: 36.26,
    before_discount: 30,
  },
  {
    id: 4,
    url: "https://images.g2a.com/1024x768/1x1x0/resident-evil-4-remake-deluxe-edition-pc-steam-gift-global-i10000337236010/ec1a8a85254540a3bed7f0f3",
    title: "Resident Evil 4 Remake | Deluxe Edition (PC) - Steam Gift - GLOBAL",
    description:
      "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where",
    price: 87.69,
    before_discount: 20,
  },

  {
    id: 6,
    url: "https://images.g2a.com/1024x768/1x1x0/spider-man-miles-morales-pc-steam-key-global-i10000217221006/8253847253214f21b1455627",
    title: "Spider-Man: Miles Morales (PC) - Steam Key - GLOBAL",
    description:
      "Spider-Man: Miles Morales is an open-world action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. The sequel to 2018s Marvel's Spider-Man, the game continues the story of the",
    price: 36.26,
    before_discount: 30,
  },
  {
    id: 13,
    url: "https://images.g2a.com/1024x768/1x1x0/resident-evil-4-remake-deluxe-edition-pc-steam-gift-global-i10000337236010/ec1a8a85254540a3bed7f0f3",
    title: "Resident Evil 4 Remake | Deluxe Edition (PC) - Steam Gift - GLOBAL",
    description:
      "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where",
    price: 87.69,
    before_discount: 20,
  },

  {
    id: 16,
    url: "https://images.g2a.com/1024x768/1x1x0/dayz-steam-key-global-i10000002337008/59111e975bafe3eb13465aa5",
    title: "DayZ Steam Key GLOBAL",
    description: `Who can be trusted in the zombie apocalypse? The situation gets really severe. You are one of the rare people, who survived the outbreak of a deadly virus. Not for too long, though, as you will soon find out that it is only the beginning of the real struggle. Same as thousands of players around the world, you are equipped with simple clothes, a road flare and a rag. Having no food, water or medical supplies, you do not have any other choice than to wander around the 225 km square landscape of Chernarus.

    On your way you will come across variously looking zombie characters, as well as living ones, who might help you or stab you to death. Who can be trusted, when everyone struggles for his own life? You always take the risk that your best friend will be your worst nightmare. The tension is enhanced when you realize that once you die, there’s no way back - you lose all your items and achievements and start from scratch.
    Developers aim at realism
    
    Players can also go hunting or fishing, grow plants, cook food, create their own items, and establish a home in order to meet their needs for survival. One of the tidbits is the presence of the real world book titles, as you can reach for War of the Worlds and Moby Dick and in multiple languages. Furthermore, 
    DayZ won the MMORPG.com award for Best Hybrid MMO at PAX East 2013, the Best Indie Game and Best Original Game awards. At the 2014 Golden Joystick Awards and was named the 52nd best PC video game ever by PC Gamer in 2015.`,
    price: 24.36,
    before_discount: 42,
  },
];
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  getDocs,
  collection,
  addDoc,
} = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyDENrnzZWE201uI5dxM1C6CmQTdTEy_64s",
  authDomain: "e-commerce-a9286.firebaseapp.com",
  projectId: "e-commerce-a9286",
  storageBucket: "e-commerce-a9286.appspot.com",
  messagingSenderId: "689618131505",
  appId: "1:689618131505:web:1a08d023991f8af8d09310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const col = collection(db, "Tamim", "first", "products");
const item = {
  title: `Random Xbox VIP Winter 10 Keys - Xbox Live Key - ARGENTINA - 1    Random Xbox VIP Winter 10 Keys - Xbox Live Key - ARGENTINA - 1    Random Xbox VIP Winter 10 Keys - Xbox Live Key - ARGENTINA`,
  description: `Feel like a VIP and make your Xbox library look luxurious! Let fate decide which 10 games you’re about to experience. Think you’re up for something glamorous?    GAME QUALITY GUARANTEE – the bundle is worth at least €240 (undiscounted UROPEAN XBOX STORE retail price).NOTICE! The refund does not apply to games that you have access to through Xbox Game Pass.    NO free games! NO DLCs! NO demo codes! No skins! Only full games are included!Want to be our lucky customer today? Take your chance to see what fate will bring you today!`,
  price: 24.31,
  id: 1,
  url: "https://images.g2a.com/1024x768/1x1x0/random-xbox-vip-winter-10-keys-xbox-live-key-argentina-i10000326259046/d9d61e5480fb47669b7f05f2",
  before_discount: 90,
};
function get_random(list) {
  return list[Math.floor((Math.random() * list.length))];
}
const categories = [
  "games_gift_card",
  "top_up_card",
  "visa",
  "mobile_top_up",
  "games_e"];
const tags = [
  "steam",
  "origin",
  "uPlay",
  "blizzard",
]
const discount = [
  10,
  5,
  15
]
const mapper = ({ title, url, description, price, before_discount }) => {
  return {
    title,
    description,
    price: before_discount * 2,
    discount: get_random(discount),
    images: [
      {
        title,
        src: url,
      },
    ],
    category: get_random(categories),
    tags: [get_random(tags)],
    serials: "enouth-oeuoe-eouoeu\noenutheon-eouoeu-oeutnheo",

  }
}
const re_mapper = ({ title, description, price, discount, images, category, tags, serials }) => {
  return {
    title,
    description,
    before_discount: price,
    price: parseFloat(Math.floor(price * (discount / 100)).toFixed(2)),
    url: images[0].src,
    category,
    tags,
    serials
  }
}



const document = {
  id: "7mA2nEWieIFMhg4wrB0G",
  title: "Product title",
  description: "this is the product description ",
  price: 110,
  discount: 0,
  images: [
    {
      title: "834a2d01-f33e-4f7c-aeb0-8dfdf59aa24b.jpg",
      src: "https://firebasestorage.googleapis.com/v0/b/e-commerce-a9286.appspot.com/o/Tamim%2Ffirst%2Fproducts%2F7mA2nEWieIFMhg4wrB0G%2Fimages.0.jpg?alt=media&token=dfa999e9-87e5-4dd2-b23f-c15b3edc253a",
    },
  ],
  category: "games_gift_card",
  tags: "steam,visa",
  serials: "enouth-oeuoe-eouoeu\noenutheon-eouoeu-oeutnheo",
}
