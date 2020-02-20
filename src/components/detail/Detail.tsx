import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import { getUserData } from "../../external/GetUser";
import { makeStyles } from "@material-ui/core/styles";
import sample from "../../static/sample.png";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  CardMedia,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper
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
        <Box m={2}>
          <Card style={{ maxWidth: 270, display: "flex" }}>
            <CardMedia
              image={sample}
              component="img"
              style={{ width: 100, margin: 15 }}
            ></CardMedia>
            <CardContent>
              <Typography color="primary" variant="h6" component="h6">
                Challenger
              </Typography>
              <Typography color="textSecondary">Top 5%</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box m={2}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Detail Score</TableCell>
                  <TableCell align="right">followers</TableCell>
                  <TableCell align="right">issues</TableCell>
                  <TableCell align="right">pullRequests</TableCell>
                  <TableCell align="right">repositories</TableCell>
                  <TableCell align="right">forks</TableCell>
                  <TableCell align="right">stargazer</TableCell>
                  <TableCell align="right">watchers</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="right">
                    {this.state.followersCount}
                  </TableCell>
                  <TableCell align="right">{this.state.issuesCount}</TableCell>
                  <TableCell align="right">
                    {this.state.pullRequestCount}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.repositoriesCount}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.forksCountTotal}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.stargazerCountTotal}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.watchersCountTotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    );
  }
}
