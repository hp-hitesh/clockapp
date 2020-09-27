import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { dateUtil, timeDiffString } from './Util';
import './Home.css';

const Home = () => {
  const [time, setTime] = useState('');
  const [usTime, setUsTime] = useState(
    `2020T${new Date().toLocaleTimeString()}`
  );
 
  const [tempDiff, setTempDiff] = useState(0);
  const [timeDiffLon, setTimeDiffLon] = useState(-6);
  const [timeDiffIn, setTimeDiffIn] = useState(-13);
  

  useEffect(() => {
    setInterval(() => {
      setUsTime(`2020T${new Date().toLocaleTimeString()}`);
    }, 5000);

    return () => {
      clearInterval(usTime);
    };
  }, [usTime]);
  
  const setTiming = e => {
    e.preventDefault();
    setUsTime(time);
    
  };

  const changeTime = val => {
    const tim = dateUtil(val);
    setTime(tim);
  };

  const lonDiffHandler = val => {
    setTempDiff(parseInt(val));
  };

  const lonDiffTimeHandler = e => {
    setTimeDiffLon(tempDiff);
  };

  const inDiffHandler = val => {
    setTempDiff(parseInt(val));
  };

  const inDiffTimeHandler = e => {
    console.log(tempDiff);
    setTimeDiffIn(tempDiff);
  };

  return (
    <div>
      <Grid item lg={12} container spacing={1}>
        <Grid container item xs={12} spacing={1} className="main_section">

          <Grid item xs={12} >
          <Grid item xs= {6}> 

          <form>
              <label> Set United State time:</label>
              <input
                type="text"
                placeholder="16:25:51"
                onChange={event => changeTime(event.target.value)}
              />

              <button type="submit" onClick={e => setTiming(e)}>
                Submit{' '}
              </button>
            </form>
          
          </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <label> United State :</label>
           <b> {new Date(usTime).toLocaleTimeString()}</b>
          </Grid>

          <Grid item xs={12} sm={6}>
            <label> London :</label>
           <b> {new Date(timeDiffString(usTime, timeDiffLon)).toLocaleTimeString()}</b>
            <label> India :</label>
            <b>{new Date(timeDiffString(usTime, timeDiffIn)).toLocaleTimeString()}</b>
          </Grid>

        </Grid>

        
        <Grid container item xs={12} spacing={1} className="setting_section">
          <Grid item xs={12} > <label></label></Grid>
          <Grid item xs={12} sm={6}>
            <label> Time difference for london:</label>
            <input
              type="number"
              placeholder="-6"
              onChange={event => lonDiffHandler(event.target.value)}
            />

            <button type="submit" onClick={e => lonDiffTimeHandler(e)}>
              Submit{' '}
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label> Time difference for india:</label>
            <input
              type="number"
              placeholder="-13"
              name="india"
              onChange={event => inDiffHandler(event.target.value)}
            />

            <button type="submit" onClick={e => inDiffTimeHandler(e)}>
              Submit{' '}
            </button>
          </Grid>
        </Grid>


      </Grid>
    </div>
  );
};

export default Home;
