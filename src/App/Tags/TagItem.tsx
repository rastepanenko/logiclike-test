import { Button, Typography } from "@mui/material";
import useCourses from "../../Hooks/useCourses";
import classes from '../Styles/styles.module.scss';

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
        setTags({choosedTag: tag, tags: tags.tags})
    }
    
    return (
        <Button onClick={onClick} className={classes.tagItemContainer} style={{ backgroundColor: tags.choosedTag == tag ? '#5FBF77' : 'transparent' }}>
            <Typography className={classes.tagName} style={{ color: tags.choosedTag == tag ? 'white' : '#39414B', }}>
                {tag}
            </Typography>
        </Button>
    )
}