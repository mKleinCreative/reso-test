import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  container: {
    marginLeft: theme.spacing.unit,
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
});

class Schedule extends React.Component {
  state = {
    days: {
      startTime: ["12:00", "am"],
      endTime: ["12:00", "pm"],
      timezone: "pst",
      sunday: Boolean(false),
      monday: Boolean(false),
      tuesday: Boolean(false),
      wednesday: Boolean(false),
      thursday: Boolean(false),
      friday: Boolean(false),
      saturday: Boolean(false),
    },
    dates: {
      0: {
        startDate: "2018-10-01",
        endDate: "2018-10-01"
      }
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <form className={classes.container} >
          <Grid container spacing={24}>
            <Grid item xs={3} sm={6}>
              <TextField
                required
                id="start-time"
                name="startTime"
                label="Start"
                value={this.state.days.startTime[0]}
                type="time"
                inputProps={{
                  step: 300
                }}
                onChange={this.handleChange('startTime')}
                margin="dense"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="end-time"
                name="endTime"
                label="End"
                value={this.state.days.endTime[0]}
                type="time"
                onChange={this.handleChange('endTime')}
                margin="dense"
                inputProps={{
                  step: 300
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="time-zone"
                name="timeZone"
                label="Timezone"
                value={this.state.days.timezone}
                onChange={this.handleChange('timezone')}
                margin="dense"
              />
            </Grid>
            <FormControl
              margin="dense"
              className={classes.formControl}
            >
              <FormLabel component="legend">Every...</FormLabel>
              <FormGroup row>

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('monday')}
                      value={this.state.days.monday} />
                  }
                  label="Monday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('wednesday')}
                      value={this.state.days.wednesday} />
                  }
                  label="Wednesday"
                />
                <FormControlLabel
                  control={
                    <Checkbox

                      onChange={this.handleChange('friday')}
                      value={this.state.days.friday}
                    />
                  }
                  label="Friday"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('tuesday')}
                      value={this.state.days.tuesday}
                    />
                  }
                  label="Tuesday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('thursday')}
                      value={this.state.days.thursday} />
                  }
                  label="Thursday"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('saturday')}
                      value={this.state.days.saturday}
                    />
                  }
                  label="Saturday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.handleChange('sunday')}
                      value={this.state.days.sunday} />
                  }
                  label="Sunday"
                />
              </FormGroup>
              <FormHelperText>Select Days active</FormHelperText>
            </FormControl>
            <Grid item xs={6}>
              <TextField
                id="startDate"
                label="Start Date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.state.dates[0].startDate}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="endDate"
                label="End Date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.state.dates[0].endDate}
              />
            </Grid>
          </Grid>
          <Button variant="outlined" color="primary" className={classes.button}>
            Cancel
      </Button>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Save
      </Button>
        </form>
      </React.Fragment >
    )
  }
};

export default withStyles(styles)(Schedule);