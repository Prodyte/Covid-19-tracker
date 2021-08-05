import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import Countup from 'react-countup'
import cx from 'classnames';

function Cards(props) {
    const {confirmed, deaths, lastUpdate, recovered} = props.data;
    if(!confirmed){
        return "....Loading"
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterbottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbottom>Recovered</Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={recovered.value} duration={2.5} seperator=","/>
                            </Typography>
                        <Typography color="textSecondary" gutterbottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbottom>Deaths</Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={deaths.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterbottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Dearhs Caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;