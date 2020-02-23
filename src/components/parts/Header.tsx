import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ListItem,
  ListItemText,
  List,
  Drawer
} from "@material-ui/core";

export interface HeaderState {
  left: boolean;
}
interface HeaderProps {}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      left: false
    };
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      left: open
    });
  };

  render() {
    const sideList = (
      <div>
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemText primary="Back to Top" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
            <div
              style={{ width: 145 }}
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              {sideList}
            </div>
          </Drawer>
          <Typography variant="h6">GitHub Ranking</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
