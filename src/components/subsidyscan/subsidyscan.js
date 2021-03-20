import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import VisualPicker from "../multi-select-visualpicker/multiselectVisualpicker";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    buttonFont: {
      fontSize: "24px",
    },
    background: {
      background: "#ffffff",
    },
  })
);

class Scan extends Component {
  state = {
    options1: [
      { label: "Agri & Food", value: "Agri & Food", selected: false },
      { label: "Energie", value: "Energie", selected: false },
      {
        label: "Hightech Systemen & Materialen",
        value: "Hightech Systemen & Materialen",
        selected: false,
      },
      { label: "Logistiek", value: "Logistiek", selected: false },
      {
        label: "Chemische industrie",
        value: "Chemische industrie",
        selected: false,
      },
      {
        label: "Water & Maritiem ",
        value: "Water & Maritiem ",
        selected: false,
      },
      {
        label: "Leven, wetenschap en gezondheid",
        value: "Leven, wetenschap en gezondheid",
        selected: false,
      },
    ],
    options2: [
      { label: "Agri & Food", value: "Agri & Food", selected: false },
      { label: "Energie", value: "Energie", selected: false },
      {
        label: "Hightech Systemen & Materialen",
        value: "Hightech Systemen & Materialen",
        selected: false,
      },
      { label: "Logistiek", value: "Logistiek", selected: false },
      {
        label: "Chemische industrie",
        value: "Chemische industrie",
        selected: false,
      },
      {
        label: "Water & Maritiem ",
        value: "Water & Maritiem ",
        selected: false,
      },
      {
        label: "Leven, wetenschap en gezondheid",
        value: "Leven, wetenschap en gezondheid",
        selected: false,
      },
    ],
    options3: [
      { label: "Agri & Food", value: "Agri & Food", selected: false },
      { label: "Energie", value: "Energie", selected: false },
      {
        label: "Hightech Systemen & Materialen",
        value: "Hightech Systemen & Materialen",
        selected: false,
      },
      { label: "Logistiek", value: "Logistiek", selected: false },
      {
        label: "Chemische industrie",
        value: "Chemische industrie",
        selected: false,
      },
      {
        label: "Water & Maritiem ",
        value: "Water & Maritiem ",
        selected: false,
      },
      {
        label: "Leven, wetenschap en gezondheid",
        value: "Leven, wetenschap en gezondheid",
        selected: false,
      },
    ],
    options4: [
      { label: "Agri & Food", value: "Agri & Food", selected: false },
      { label: "Energie", value: "Energie", selected: false },
      {
        label: "Hightech Systemen & Materialen",
        value: "Hightech Systemen & Materialen",
        selected: false,
      },
      { label: "Logistiek", value: "Logistiek", selected: false },
      {
        label: "Chemische industrie",
        value: "Chemische industrie",
        selected: false,
      },
      {
        label: "Water & Maritiem ",
        value: "Water & Maritiem ",
        selected: false,
      },
      {
        label: "Leven, wetenschap en gezondheid",
        value: "Leven, wetenschap en gezondheid",
        selected: false,
      },
    ],
  };
  showValues = () => {
    console.log(this.state.options);
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.background}>
        <Container>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Box mb={4} mt={4}>
                <Typography component="div">
                  <Box
                    fontSize="h4.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    Find out if you can get a subsidy.
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    Answer the following 6 questions about your organization.
                  </Box>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={64}>
              <Box mb={4}>
                <Typography component="div">
                  <Box
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    1. In which sector is your organization located?
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize="h8.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    Select multiple options if applicable.
                  </Box>
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <VisualPicker options={this.state.options1} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography component="div">
                  <Box
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    2. In which sector is your organization located?
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize="h8.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    Select multiple options if applicable.
                  </Box>
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <VisualPicker options={this.state.options2} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography component="div">
                  <Box
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    3. In which sector is your organization located?
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize="h8.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    Select multiple options if applicable.
                  </Box>
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <VisualPicker options={this.state.options3} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography component="div">
                  <Box
                    fontSize="h6.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    4. In which sector is your organization located?
                  </Box>
                </Typography>
                <Typography component="div">
                  <Box
                    fontSize="h8.fontSize"
                    fontWeight="fontWeightMedium"
                    m={1}
                  >
                    Select multiple options if applicable.
                  </Box>
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <VisualPicker options={this.state.options4} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Button
                  color="primary"
                  size="large"
                  className={classes.buttonFont}
                  endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
                >
                  Scan for subsidy
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function SubsidyScan(props: Props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Accelerate Growth</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Scan classes={classes} />
    </React.Fragment>
  );
}
