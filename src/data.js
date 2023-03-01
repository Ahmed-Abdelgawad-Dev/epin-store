import { addDoc, doc, getDocs, updateDoc } from "@firebase/firestore";
import { db, getDocRef, order_col, product_col } from "./firebase.conf";

const firebaseConfig = {
  apiKey: "AIzaSyDENrnzZWE201uI5dxM1C6CmQTdTEy_64s",
  authDomain: "e-commerce-a9286.firebaseapp.com",
  projectId: "e-commerce-a9286",
  storageBucket: "e-commerce-a9286.appspot.com",
  messagingSenderId: "689618131505",
  appId: "1:689618131505:web:1a08d023991f8af8d09310",
};



const re_mapper = ({ id, title, description, price, discount, images, category, tags, serials }) => {
  return {
    id,
    title,
    description,
    before_discount: price,
    price: parseFloat(Math.floor(price - (price * (discount / 100))).toFixed(2)),
    url: images[0].src,
    serials: serials.split('\n').filter(s => !!s.trim()),
    category,
    tags,
  }
}
export const detailProduct = re_mapper({
  "discount": 15,
  "title": "DayZ Steam Key GLOBAL",
  "images": [
    {
      "src": "https://images.g2a.com/1024x768/1x1x0/dayz-steam-key-global-i10000002337008/59111e975bafe3eb13465aa5",
      "title": "DayZ Steam Key GLOBAL"
    }
  ],
  "price": 84,
  "description": "Who can be trusted in the zombie apocalypse? The situation gets really severe. You are one of the rare people, who survived the outbreak of a deadly virus. Not for too long, though, as you will soon find out that it is only the beginning of the real struggle. Same as thousands of players around the world, you are equipped with simple clothes, a road flare and a rag. Having no food, water or medical supplies, you do not have any other choice than to wander around the 225 km square landscape of Chernarus.\n    DayZ release for PC took place in December 2013. The game has been developed by Bohemia Interactive, being a commercial continuation of the popular ArmA II mod. The impressive work of the studio has been noticed by many gamers and experts, as the title was met with a warm reception. \n    \n    DayZ won the MMORPG.com award for Best Hybrid MMO at PAX East 2013, the Best Indie Game and Best Original Game awards. At the 2014 Golden Joystick Awards and was named the 52nd best PC video game ever by PC Gamer in 2015.",
  "tags": [
    "blizzard"
  ],
  "serials": "enouth-oeuoe-eouoeu\noenutheon-eouoeu-oeutnheo",
  "category": "top_up_card"
})

export const getStoreProducts = async () => {
  const snapshots = await getDocs(product_col);
  const data = [];
  const categories = new Set();
  const tags = new Set();
  for (const doc of snapshots.docs) {
    const item = re_mapper({ id: doc.id, ...doc.data() });
    categories.add(item.category);
    item.tags.forEach((t) => {
      tags.add(t);
    })
    data.push(item);
  }
  return { data, tags: [...tags], categories: [...categories] };
}
/**
 * @param {import('./types').order} order
 * @param {import('./types').storeProduct[]} store
 */
export const updateStoreProduct = async (order, store) => {
  await addDoc(order_col, order);
  for (const product of store) {
    const doc_ref = getDocRef(product.id);
    const res = await updateDoc(doc_ref, {
      serials: product.serials.join('\n'),
    })
  }
  return true
}