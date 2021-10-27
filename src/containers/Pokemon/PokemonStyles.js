import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles( () => ({
    card:{
        maxWidth: 800,
        // border: "none", 
        // boxShadow: "none" 
        // display: "flex"
    },
    img: {},
    info:{
        maxWidth: 800
    },
    media: {
        // paddingTop: '56.25%', // 16:9,
        paddingTop: '100%', // 16:9,
        height: 140,
    },
    list: {
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap'
    }
}));

export default useStyles;