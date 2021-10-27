import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles( () => ({
  cardGrid:{
    margin: '0px',
    padding: '20px 0px'
  },
  paginationBttns: {
    width: '80%',
    height: '80px',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& a': {
      padding: '10px',
      margin: '8px',
      border: '1px solid #2b2eff',
      borderRadius: '5px',
      color: '#2b2eff',
      cursor: 'pointer'
    },
    '& a:hover': {
      background: '#2b2eff',
      color: 'white'
    },
  },
  paginationActive: {
    '& a': {
      background: '#2b2eff',
      color: 'white'
    }
  },
  paginationDisabled: {
    '& a': {
      background: 'grey',
      color: 'grey'
    }
  }
}));

export default useStyles;