import React, { ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container, Box, Typography } from "@material-ui/core";
import { Header } from "../parts/Header";
import { RouteComponentProps } from "react-router-dom";

interface TopProps extends RouteComponentProps<{}> {
  screenName: string;
}

export interface TopState {
  userId: string;
}

export class Top extends React.Component<TopProps, TopState> {
  constructor(props: TopProps, state: TopState) {
    super(props);
    this.state = { userId: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push({
      pathname: "/detail",
      state: { userId: this.state.userId }
    });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      userId: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Container fixed>
          <Header />
          <Box textAlign="center" m={5}>
            <Typography variant="h2">This is GitHub Ranking Page</Typography>
          </Box>
          <Box textAlign="center">
            <TextField
              id="standard-basic"
              label="LoginUserName"
              value={this.state.userId}
              onChange={this.handleChange}
            />
          </Box>
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              SHOW PROFILE
            </Button>
          </Box>
        </Container>
      </div>
    );
  }
}
