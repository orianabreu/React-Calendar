import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      width: 200,
    },
  }));

export default useStyles;