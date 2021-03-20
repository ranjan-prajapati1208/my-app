import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InboxIcon from "@material-ui/icons/Inbox";
import Paper from "@material-ui/core/Paper";

class MultiSelectVisualPicker extends Component {
  state = {
    options: this.props.options,
  };

  handleChange = (option) => {
    let options = this.state.options;
    options.forEach((element) => {
      if (element.value === option.value) {
        element.selected = !option.selected;
      }
    });
    this.setState({ options: options });
  };

  render() {
    return (
      <div>
        <Paper elevation={3}>
          <List component="nav">
            {this.state.options.map((option) => (
              <div key={option.value} onClick={() => this.handleChange(option)}>
                <ListItem button>
                  <ListItemIcon>
                    {option.selected ? (
                      <CheckCircleIcon color="primary" />
                    ) : (
                      <InboxIcon color="action" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={option.label} />
                </ListItem>
              </div>
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}

export default MultiSelectVisualPicker;
