import { atom } from "recoil";
import { ICourse, ITags, } from "../Types/Types";

export const coursesAtom = atom<ICourse[]>({
    key: 'coursesAtom',
    default: [],
    dangerouslyAllowMutability: false,
});

export const tagsAtom = atom<ITags>({
    key: 'tagsAtom',
    default: {choosedTag: '', tags: []},
    dangerouslyAllowMutability: false,
});