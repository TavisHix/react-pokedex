import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    dispaly: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      padding: 10
    }
  },
  cardInfo: {
    backgroundColor: '#ffffff',
    flexGrow: 1
  },
  cardTypes: {
    flexGrow: 1,
  },
  types: {
    padding: "5px 10px",
    margin: "10px 10px 10px 0",
    borderRadius: "5px",
    background: "black",
    color: "#fff"
  }
}));

export default useStyles;