import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ICourse, ITags } from "../types/Types";
import { coursesAtom, tagsAtom } from "../state/RecoilState";

export interface ICoursesProvider {
    readonly updateCourses: () => Promise<void>;
    readonly setTags: (tags: ITags) => void;
    readonly courses: ICourse[];
    readonly tags: ITags;
}

export default function useCourses() {
    const [courses, setCourses] = useRecoilState<ICourse[]>(coursesAtom);
    const [tags, setTags] = useRecoilState<ITags>(tagsAtom);

    const updateCourses = async () => {
        const options = {
            "method": "GET",
            "url": `https://logiclike.com/docs/courses.json`,
        };

        axios.request(options).then(function (response) {
            setCourses(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        const tagsArray: ITags = {selectedTag: 'Все темы', tags: ['Все темы']};
        courses.map((course) => {
            course.tags.map((tag) => {
                if(!tagsArray.tags.includes(tag)) {
                    tagsArray.tags.push(tag);
                }
            })
        })

        setTags(tagsArray);
    }, [courses])

    return {
        updateCourses,
        setTags,
        courses,
        tags,
    } as ICoursesProvider;
}