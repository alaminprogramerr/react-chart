import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



import Card from '@material-ui/core/Card';


import ChartOne from './ChatOne'
import ChartTwo from './ChatTwo'
import ChartThree from './Tab3/ChartThree1';
import ChartFour  from './Tab3/ChartThree2'
import Tab4Viewr from './tab4/Tab4Viewr';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Card className="col-md-10 mt-5 offset-md-1">
            <div className="">
            <AppBar className="col-md-8 mt-5 ml-auto" position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <div className="col-md-8 ml-auto">
                <ChartOne className="ml-auto"/>
              </div>        
           </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="col-md-10 ml-auto">
                <ChartTwo/>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div >
                  <ChartThree/>
                  <ChartFour/>               
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div >
                <Tab4Viewr/>
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
           
            </TabPanel>
        </div>
      </Card>
    </div>
  );
}
