import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import { getUserData } from "../../external/GetUser";
import { Box, Container } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { TopState } from "../top/Top";
import { Header } from "../parts/Header";
import { UserProfileCard } from "../parts/UserProfileCard";
import { UserTierCardWrapper } from "../parts/UserTierCardWrapper";
import { UserScoreDetail } from "../parts/UserScoreDetail";

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
    this.getUserDetail(userId);
  }

  getUserDetail(userId: string) {
    getUserData(userId).then(res => {
      this.setState({ userDetail: res });
    });
  }

  render() {
    if (this.state.userDetail.userId === null) {
      return <span>Not Match</span>;
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
