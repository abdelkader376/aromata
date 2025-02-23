// import { atom } from "recoil";
// let value=[];
// if(localStorage.getItem('cart')){
//  value=JSON.parse(localStorage.getItem('cart'))
// }
// const cartAtom = atom({
//     key: 'cartATom', // unique ID (with respect to other atoms/selectors)
//     default: value, // default value (aka initial value)
//   });

//   export default cartAtom;


import { atom } from 'recoil';

export const cartAtom = atom({
  key: 'cartAtom',
  get: async () => {
    try {
      const response = await fetch(products);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return await response.json();
    } catch (error) {
      throw error; // Recoil will propagate this error
    }
  }
});
export default cartAtom;