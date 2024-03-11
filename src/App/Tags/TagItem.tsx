import { Button, Typography } from "@mui/material";
import useCourses from "../../hooks/useCourses";
import classes from '../styles/styles.module.scss';

interface ITagItemProps {
    readonly tag: string;
}

export default function TagItem({tag}: ITagItemProps) {

    const {
        updateCourses,
        setTags,
        courses,
        tags,
      } = useCourses();

    function onClick() {
        setTags({selectedTag: tag, tags: tags.tags})
    }
    
    return (
        <Button onClick={onClick} className={classes.tagItemContainer} style={{ backgroundColor: tags.selectedTag == tag ? '#5FBF77' : 'transparent' }}>
            <Typography className={classes.tagName} style={{ color: tags.selectedTag == tag ? 'white' : '#39414B', }}>
                {tag}
            </Typography>
        </Button>
    )
}