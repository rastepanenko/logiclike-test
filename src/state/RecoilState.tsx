import { atom } from "recoil";
import { ICourse, ITags, } from "../types/Types";

export const coursesAtom = atom<ICourse[]>({
    key: 'coursesAtom',
    default: [],
    dangerouslyAllowMutability: false,
});

export const tagsAtom = atom<ITags>({
    key: 'tagsAtom',
    default: {selectedTag: '', tags: []},
    dangerouslyAllowMutability: false,
});