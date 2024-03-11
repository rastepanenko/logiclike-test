import { Box, Typography } from "@mui/material";
import { ICourse } from "../../types/Types";
import classes from '../styles/styles.module.scss'

interface ICourseItemProps {
    readonly course: ICourse;
}

export default function CourseItem({ course }: ICourseItemProps) {
    return (
        <Box className={classes.courseItemContainer}>
            <Box className={classes.courseImage} sx={{ backgroundColor: course.bgColor, }}>
                <img src={course.image} width={144} height={144} />
            </Box>
            <Box className={classes.courseNameContainer}>
                <Typography className={classes.courseNameText}>
                    {course.name}
                </Typography>
            </Box>
        </Box>
    )
}