import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import APIUtil from '../../../../util/api';

const API = new APIUtil;

const findTeacherCourses = () => API.getTeacherAssignments(sessionStorage.getItem('UID'))
.then(({data}) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
});

findTeacherCourses();

export default function DropDownMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Classes
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                
                <MenuItem onClick={handleClose}>Students</MenuItem>
                <MenuItem onClick={handleClose}></MenuItem>
            </Menu>
        </div>
    )
}