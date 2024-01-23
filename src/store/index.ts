import {atom} from 'jotai'
import data from '@/services/Assessment.json'
// const URL = "/Assessment.json";

export const productsAtom = atom(() => {
  //  return  fetch(URL)
  //     .then((response) => response.json())
  //     .then(({data}) => {
  //      return data.oneClickAutomations.items;
  //     });
       return data.data.oneClickAutomations.items;
}, )

export const extractFilterAtom = atom(false)

export const monitorFilterAtom = atom(false)

export const filtersAtom = atom({
  extract: [],
  monitor: [],
  keywords: [],
  categories: [],
});