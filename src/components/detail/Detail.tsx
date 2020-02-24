import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import ControllUser from "../../external/ControllUser";
import {
  Box,
  Container,
  CircularProgress,
  Typography,
  Grid,
  Snackbar
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
import { UserUpdateCard } from "../parts/UserUpdateCard";
import Alert from "@material-ui/lab/Alert";

interface DetailProps extends RouteComponentProps<{}, {}, TopState> {
  userId: string;
}
export type DetailState = {
  userDetail: UserDetailRes;
  openDialog: boolean;
};

export class Detail extends React.Component<DetailProps, DetailState> {
  constructor(props: DetailProps) {
    super(props);
    this.state = {
      userDetail: {
        userName: "",
        userId: UNSEARCHED,
        avatarUrl: "",
        githubUrl: "",
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
        mainLanguage: "",
        lastupdateDate: new Date()
      },
      openDialog: false
    };
    this.backTop = this.backTop.bind(this);
    this.onClickUpdateButton = this.onClickUpdateButton.bind(this);
  }

  componentDidMount() {
    const userId = this.props.location.state.userId;
    this.getUserDetail(userId);
  }

  getUserDetail(userId: string) {
    if (userId === "" || userId === null || userId === undefined) {
      return;
    }
    ControllUser.getUserData(userId).then(res => {
      this.setState({ userDetail: res });
    });
  }

  onClickUpdateButton() {
    // 今日更新したばかりなら更新せずにメッセージをだす
    if (
      new Date(
        this.state.userDetail.lastupdateDate.toString()
      ).toLocaleDateString() === new Date().toLocaleDateString()
    ) {
      this.setState({ openDialog: true });
      return;
    }

    this.updateUserDetail(this.state.userDetail.userId);
  }

  updateUserDetail(userId: string) {
    if (userId === "" || userId === null || userId === undefined) {
      return;
    }

    // TODO ここに最終更新日が今日だったら更新しないでアラートをだすようにロジック書く
    ControllUser.updateUserData(userId).then(res => {
      this.setState({ userDetail: res });
    });
  }

  backTop() {
    this.props.history.push({
      pathname: "/"
    });
  }

  dialogClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openDialog: false });
  };

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
                <Button
                  variant="contained"
                  onClick={this.backTop}
                  className={"backToTopButton"}
                >
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
          <Grid container>
            <Grid item>
              <UserTierCardWrapper
                tier={this.state.userDetail.tier}
                score={this.state.userDetail.score}
              />
            </Grid>
            <Box ml={1}>
              <Grid item>
                <UserUpdateCard
                  lastupdateDate={new Date()}
                  onClickUpdateButton={this.onClickUpdateButton}
                />
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box m={2}>
          <UserScoreDetail userDetail={this.state.userDetail} />
        </Box>
        <Snackbar open={this.state.openDialog} autoHideDuration={6000}>
          <Alert onClose={this.dialogClose} severity="error">
            Just updated today !
          </Alert>
        </Snackbar>
      </Container>
    );
  }
}
