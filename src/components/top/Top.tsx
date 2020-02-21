import React, { ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Container,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { Header } from "../parts/Header";
import { RouteComponentProps } from "react-router-dom";
import { getRanks } from "../../external/GetRanks";
import { RankgByLanguageRes } from "../../external/data/RanksByLanguageRes";

interface TopProps extends RouteComponentProps<{}> {
  screenName: string;
}

export interface TopState {
  userId: string;
  ranking: RankgByLanguageRes;
}

export class Top extends React.Component<TopProps, TopState> {
  constructor(props: TopProps, state: TopState) {
    super(props);
    this.state = { userId: "", ranking: { rankByLanguages: [] } };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getRanking();
  }

  getRanking() {
    getRanks().then(res => {
      console.log("state :" + res);
      this.setState({ userId: "", ranking: res });
      console.log(
        "ranking :" +
          res.rankByLanguages.map(elm => {
            console.log(elm.language);
          })
      );
      console.log("this.state.userId :" + this.state.userId);
    });
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

  generate(element: React.ReactElement) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value
      })
    );
  }

  render() {
    return (
      <div>
        <Container>
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
          <Box m={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Text only</Typography>
                <div>
                  <List>
                    {this.generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Icon with text</Typography>
                <div>
                  <List>
                    {this.generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Avatar with text</Typography>
                <div>
                  <List>
                    {this.generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
            {/* Gridの境目 */}
          </Box>
          <Box m={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Text only</Typography>
                <div>
                  <List>
                    {this.generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Icon with text</Typography>
                <div>
                  <List>
                    {this.generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Avatar with text</Typography>
                <div>
                  <List>
                    {this.generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
            {/* Gridの境目 */}
          </Box>
        </Container>
      </div>
    );
  }
}
