import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import { getUserData } from "../../external/GetUser";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  CardMedia,
  Avatar
} from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { TopState } from "../top/Top";
import { Header } from "../parts/Header";

interface DetailProps extends RouteComponentProps<{}, {}, TopState> {
  userId: string;
}

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });
// const classes = useStyles();

export class Detail extends React.Component<DetailProps, UserDetailRes> {
  constructor(props: DetailProps, state: UserDetailRes) {
    super(props);
    console.log("constructor = ");
    console.log("state :" + state);
    this.state = state;
  }

  componentDidMount() {
    const userId = this.props.location.state.userId;
    console.log("userId = " + userId);
    this.getUserDetail(userId);
  }

  getUserDetail(userId: string) {
    getUserData(userId).then(res => {
      console.log("state :" + res);
      this.setState(res);
      console.log("this.state.userId :" + this.state.userId);
      console.log("this.state.avatarUrl :" + this.state.avatarUrl);
    });
  }

  render() {
    if (this.state.userId === null) {
      return <span>Not Match</span>;
    }
    return (
      <Container fixed>
        <Header />
        <Box m={2}>
          <Card style={{ maxWidth: 600, display: "flex" }}>
            <CardMedia
              src={this.state.avatarUrl}
              component="img"
              style={{ width: 100, margin: 15 }}
            ></CardMedia>
            <CardContent>
              <Typography variant="h6" component="h6">
                ID : {this.state.userId}
              </Typography>
              <Typography color="textSecondary">
                Rank : {this.state.rank}/{this.state.currentNumber}
              </Typography>
              <Typography color="textSecondary">
                Score : {this.state.score}
              </Typography>
              <Typography color="textSecondary">
                MainLanguage : {this.state.mainLanguage}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {/* <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Card>
                    <CardContent>
                      <Typography>Word of the Day</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid> */}
      </Container>
    );
  }
}
