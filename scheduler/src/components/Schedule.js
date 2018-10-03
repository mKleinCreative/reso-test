import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Hidden, List } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  container: {
    marginLeft: '2rem',
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: Hidden,
  },
  textField: {
    marginLeft: '1.5rem',
    marginBottom: '2rem',
    width: '8.15rem',
  },
  formControl: {
    marginBottom: '3rem',
  },
  dateList: {
    display: 'flex',
    justify: 'space-between',
    border: '1px black solid',
    width: '18rem',
    height: '5rem',
    overflow: 'scroll',
    marginBottom: '3rem',
  },
  dateList__item: {
    display: "flex",
    paddingLeft: '0',
    width: '100%',
  }
});

class Schedule extends React.Component {
  state = {
    open: false,
    startDateToAdd: "",
    endDateToAdd: "",
    daysForDates: {
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
    dates: [
      {
        startDate: "2018-12-12",
        endDate: "2018-12-20",
        scheduledTimes: {
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
        }
      }
    ]
  };

  handleChange = name => event => {
    const target = event.target
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    this.setState({
      daysForDates: {
        ...this.state.daysForDates,
        [name]: value
      },
    });
  };

  handleDateAdd = () => event => {
    event.target.id === "startDate" ?
      this.setState({
        startDateToAdd: event.target.value
      })
      :
      this.setState({
        endDateToAdd: event.target.value
      });
  };

  handleSave = async () => {
    await this.setState({
      dates: [
        ...this.state.dates,
        {
          startDate: this.state.startDateToAdd,
          endDate: this.state.endDateToAdd,
          scheduledTimes: this.state.daysForDates
        }
      ]
    })
    console.log(this.state)
  };

  handleDateClick = () => {
    this.setState(state => ({ ...this.state, open: !state.open }))
  }

  render() {
    const { classes } = this.props;

    const listDates = this.state.dates.map((date, i) => {
      return (
        <Grid container key={i}>
          <ListItem
            disableGutters={true}
            dense
            className={classes.dateList__item}
            button
            onClick={this.handleDateClick}
          >
            <ListItemText
              inset
              primary={
                `${date.startDate.toString()} until ${'\n'}
               ${date.endDate.toString()}`
              }
            />
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </Grid>
      )
    })
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
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300
                }}
                onChange={
                  this.handleChange('startTime')
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="end-time"
                name="endTime"
                label="End"
                type="time"
                onChange={
                  this.handleChange('endTime')
                }
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
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
                type="text"
                value={this.state.daysForDates.timezone}
                onChange={
                  this.handleChange('timezone')
                }
                margin="dense"
              />
            </Grid>
            <FormControl
              margin="dense"
              className={classes.formControl}
            >
              <FormLabel component="legend">Every...</FormLabel>
              <FormHelperText>Select Days active</FormHelperText>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="monday"
                      check={this.state.daysForDates.monday ? "true" : undefined}
                      onChange={
                        this.handleChange('monday')
                      }
                      value={'monday'} />
                  }
                  label="Monday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="wednesday"
                      check={this.state.daysForDates.wednesday ? "true" : undefined}
                      onChange={
                        this.handleChange('wednesday')
                      }
                      value={'wednesday'} />
                  }
                  label="Wednesday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="friday"
                      check={this.state.daysForDates.friday ? "true" : undefined}
                      onChange={
                        this.handleChange('friday')
                      }
                      value={'friday'}
                    />
                  }
                  label="Friday"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="tuesday"
                      check={this.state.daysForDates.tuesday ? "true" : undefined}
                      onChange={
                        this.handleChange('tuesday')
                      }
                      value={'tuesday'}
                    />
                  }
                  label="Tuesday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="thursday"
                      checked={this.state.daysForDates.thursday ? true : undefined}
                      onChange={
                        this.handleChange('thursday')
                      }
                      value={'thursday'} />
                  }
                  label="Thursday"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="saturday"
                      check={this.state.daysForDates.saturday ? "true" : undefined}
                      onChange={
                        this.handleChange('saturday')
                      }
                      value={'saturday'}
                    />
                  }
                  label="Saturday"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="sunday"
                      check={this.state.daysForDates.sunday ? "true" : undefined}
                      onChange={
                        this.handleChange('sunday')
                      }
                      value={'sunday'} />
                  }
                  label="Sunday"
                />
              </FormGroup>
            </FormControl>
            <Grid container justify="space-around">
              <Grid item xs={4}>
                <TextField
                  id="startDate"
                  label="Start Date"
                  type="date"
                  fullWidth
                  onChange={this.handleDateAdd('dates')}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.startDateToAdd}
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="endDate"
                  label="End Date"
                  type="date"
                  fullWidth
                  onChange={this.handleDateAdd('dates')}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.endDateToAdd}
                />
              </Grid>
            </Grid>
            <List dense className={classes.dateList}>
              {listDates}
            </List>
            <Grid container justify='space-around'>
              <Grid
                item
                xs={5}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Cancel
              </Button>
              </Grid>
              <Grid
                item
                xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  onClick={this.handleSave}
                >
                  Save
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </React.Fragment >
    )
  };
}

export default withStyles(styles)(Schedule);