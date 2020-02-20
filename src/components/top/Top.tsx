import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container, Box, Typography } from "@material-ui/core";
import { Header } from "../parts/Header";
import { spacing } from "@material-ui/system";

type TopProps = {
  screenName: string;
};
export class Top extends React.Component<TopProps, {}> {
  render() {
    return (
      <div>
        <Container fixed>
          <Header />
          <Box textAlign="center" m={5}>
            <Typography variant="h2">This is GitHub Ranking Page</Typography>
          </Box>
          <Box textAlign="center">
            <TextField id="standard-basic" label="LoginUserName" />
          </Box>
          <Box textAlign="center" mt={2}>
            <Button variant="contained" color="primary">
              SHOW PROFILE
            </Button>
          </Box>
        </Container>
      </div>
    );
  }
}
