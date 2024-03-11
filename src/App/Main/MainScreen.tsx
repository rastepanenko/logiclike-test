import { Grid, Box } from "@mui/material";
import FlatList from "flatlist-react/lib";
import { useEffect } from "react";
import useCourses from "../../Hooks/useCourses";
import CourseItem from "../Courses/CourseItem";
import TagItem from "../Tags/TagItem";
import classes from '../Styles/styles.module.scss';

export default function MainScreen() {
    const {
      updateCourses,
      setTags,
      courses,
      tags,
    } = useCourses();
  
    useEffect(() => {
      (async () => {
        await updateCourses();
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
              filterBy={(course) => tags.choosedTag == 'Все темы' ? !course.tags.includes(tags.choosedTag) : course.tags.includes(tags.choosedTag)}
            />
          </Box>
        </Grid>
    );
  }