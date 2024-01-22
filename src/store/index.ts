import {atom} from 'jotai'
const URL = "./Assessment.json";

export const productsAtom = atom(() => {
 return  fetch(URL)
    .then((response) => response.json())
    .then(({data}) => {
     return data.oneClickAutomations.items;
    });
}, )

export const extractFilterAtom = atom(false)

export const monitorFilterAtom = atom(false)

export const filtersAtom = atom({
  extract: [],
  monitor: [],
  keywords: [],
  categories: [],
});