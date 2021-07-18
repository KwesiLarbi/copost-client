import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainStory: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '500px'
  }, 
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  mainStoryContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainArticle: {
    marginTop: '50px',
    color: '#494949',
    width: '45%',
  },
  storyPic: {
    height: '500px',
    width: '100%',
    flex: 1,
    resizeMode: 'container',
  },
  absContainer: {
    width: '50%',
  }
}));