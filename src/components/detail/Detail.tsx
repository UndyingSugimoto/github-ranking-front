import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import { getUserData } from "../../external/GetUser";
import {
  Box,
  Container,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { TopState } from "../top/Top";
import { Header } from "../parts/Header";
import { UserProfileCard } from "../parts/UserProfileCard";
import { UserTierCardWrapper } from "../parts/UserTierCardWrapper";
import { UserScoreDetail } from "../parts/UserScoreDetail";
import { NOTFOUND } from "dns";
import { UNSEARCHED } from "../../const/UtilCont";
import Button from "@material-ui/core/Button";

interface DetailProps extends RouteComponentProps<{}, {}, TopState> {
  userId: string;
}
interface DetailState {
  userDetail: UserDetailRes;
}

export class Detail extends React.Component<DetailProps, DetailState> {
  constructor(props: DetailProps) {
    super(props);
    this.state = {
      userDetail: {
        userName: "",
        userId: UNSEARCHED,
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
    this.backTop = this.backTop.bind(this);
  }

  componentDidMount() {
    const userId = this.props.location.state.userId;
    this.getUserDetail(userId);
  }

  getUserDetail(userId: string) {
    if (userId === "" || userId === null || userId === undefined) {
      return;
    }
    getUserData(userId).then(res => {
      this.setState({ userDetail: res });
    });
  }
  backTop() {
    this.props.history.push({
      pathname: "/"
    });
  }

  render() {
    // ロード中
    if (this.state.userDetail.userId === UNSEARCHED) {
      return (
        <Container>
          <Box>
            <Header />
            <div>
              <Box p={2}>
                <Typography color="primary" variant="h6" component="h6">
                  Now Loading...
                </Typography>
              </Box>
              <Box p={2}>
                <CircularProgress />
              </Box>
            </div>
          </Box>
        </Container>
      );
    }
    // 見つからなかった場合
    if (this.state.userDetail.userId === NOTFOUND) {
      return (
        <Container>
          <Box>
            <Header />
            <div>
              <Box m={10}>
                <Typography color="error" variant="h1" component="h6">
                  Woops! Not Found!!
                </Typography>
              </Box>
              <Box p={4}>
                <Button variant="contained" onClick={this.backTop}>
                  BACK TO TOP
                </Button>
              </Box>
            </div>
          </Box>
        </Container>
      );
    }
    return (
      <Container>
        <Header />
        <Box m={2}>
          <UserProfileCard userDetail={this.state.userDetail} />
        </Box>
        <Box m={2}>
          <UserTierCardWrapper tier={this.state.userDetail.tier} />
        </Box>
        <Box m={2}>
          <UserScoreDetail userDetail={this.state.userDetail} />
        </Box>
      </Container>
    );
  }
}
