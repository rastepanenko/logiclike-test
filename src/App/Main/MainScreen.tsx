import { Grid, Box } from "@mui/material";
import FlatList from "flatlist-react/lib";
import { useEffect } from "react";
import useCourses from "../../hooks/useCourses";
import CourseItem from "../courses/CourseItem";
import TagItem from "../tags/TagItem";
import classes from '../styles/styles.module.scss';

export default function MainScreen() {
    const {
      updateCourses,
      setTags,
      courses,
      tags,
    } = useCourses();
  
    useEffect(() => {
      (async () => {
        updateCourses().catch(console.error);
      })()
    }, [])
  
    return (
        <Grid className={classes.mainScreenContainer} >
          <Box className={classes.tagsContainer} sx={{ border: 1 }}>
            <FlatList
              list={tags.tags}
              renderItem={(tag) => <TagItem key={tag} tag={tag} />}
            />
          </Box>
          <Box className={classes.coursesContainer}>
            <FlatList
              list={courses}
              renderItem={(course) => <CourseItem key={course.id} course={course}/>}
              displayGrid
              filterBy={(course) => tags.selectedTag == 'Все темы' ? !course.tags.includes(tags.selectedTag) : course.tags.includes(tags.selectedTag)}
            />
          </Box>
        </Grid>
    );
  }