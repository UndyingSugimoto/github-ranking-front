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
import { UserProfileCard } from "../parts/UserProfileCard";
import { UserTierCardWrapper } from "../parts/UserTierCardWrapper";

interface DetailProps extends RouteComponentProps<{}, {}, TopState> {
  userId: string;
}
interface DetailState {
  userDetail: UserDetailRes;
  left: boolean;
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

export class Detail extends React.Component<DetailProps, DetailState> {
  constructor(props: DetailProps) {
    super(props);
    console.log("constructor = ");
    this.state = {
      left: false,
      userDetail: {
        userName: "",
        userId: "",
        avatarUrl: "",
        tier: "",
        rank: 0,
        score: 0,
        currentNumber: 0,
        followersCount: 0,
        issuesCount: 0,
        pullRequestCount: 0,
        repositoriesCount: 0,
        forksCountTotal: 0,
        stargazerCountTotal: 0,
        watchersCountTotal: 0,
        mainLanguage: ""
      }
    };
  }

  componentDidMount() {
    const userId = this.props.location.state.userId;
    console.log("userId = " + userId);
    this.getUserDetail(userId);
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      left: open
    });
  };

  getUserDetail(userId: string) {
    getUserData(userId).then(res => {
      console.log("state :" + res);
      this.setState({ userDetail: res });
      console.log("this.state.userId :" + this.state.userDetail.userId);
      console.log("this.state.avatarUrl :" + this.state.userDetail.avatarUrl);
    });
  }

  render() {
    if (this.state.userDetail.userId === null) {
      return <span>Not Match</span>;
    }
    return (
      <Container fixed>
        <Header />
        <Box m={2}>
          <UserProfileCard userDetail={this.state.userDetail} />
        </Box>
        <Box m={2}>
          <UserTierCardWrapper tier={this.state.userDetail.tier} />
          {/* <Card style={{ maxWidth: 270, display: "flex" }}>
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
          </Card> */}
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
                    {this.state.userDetail.followersCount}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.userDetail.issuesCount}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.userDetail.pullRequestCount}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.userDetail.repositoriesCount}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.userDetail.forksCountTotal}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.userDetail.stargazerCountTotal}
                  </TableCell>
                  <TableCell align="right">
                    {this.state.userDetail.watchersCountTotal}
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
