import {atom} from 'jotai'
import data from '@/services/Assessment.json'
import { FiltersType } from '@/types';

export const productsAtom = atom(() => {
  return data.data.oneClickAutomations.items;
});

export const extractFilterAtom = atom(false);

export const monitorFilterAtom = atom(false);
export const arrowsAtom = atom(false);
export const keywordsAtom = atom<string[]>([]);
export const categoryKeywordAtom = atom<string | undefined>(undefined);


export const filtersAtom = atom<FiltersType>({
  extract: [],
  monitor: [],
  keywords: [],
  categories: [],
});