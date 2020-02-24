import React, { ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container, Box, Grid, Snackbar } from "@material-ui/core";
import { Header } from "../parts/Header";
import { RouteComponentProps } from "react-router-dom";
import GetRanks from "../../external/GetRanks";
import { RankgByLanguageRes } from "../../external/data/RanksByLanguageRes";
import {
  JAVASCRIPT,
  GENERAL,
  PYTHON,
  JAVA,
  CSHARP,
  PHP,
  C_PLUS,
  RUBY,
  GO
} from "../../const/Language";
import { RankingList } from "../parts/RankingList";
import Alert from "@material-ui/lab/Alert";
import topImage from "../../static/top.png";

interface TopProps extends RouteComponentProps<{}> {
  screenName: string;
}

export interface TopState {
  userId: string;
  dialogOpen: boolean;
  ranking: RankgByLanguageRes;
}

export class Top extends React.Component<TopProps, TopState> {
  constructor(props: TopProps, state: TopState) {
    super(props);
    this.state = {
      userId: "",
      dialogOpen: false,
      ranking: {
        rankByLanguages: [
          { language: GENERAL, userInfomations: [] },
          { language: JAVASCRIPT, userInfomations: [] },
          { language: PYTHON, userInfomations: [] },
          { language: JAVA, userInfomations: [] },
          { language: CSHARP, userInfomations: [] },
          { language: PHP, userInfomations: [] },
          { language: C_PLUS, userInfomations: [] },
          { language: RUBY, userInfomations: [] },
          { language: GO, userInfomations: [] }
        ]
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.moveDetailLogic = this.moveDetailLogic.bind(this);
  }

  dialogClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ dialogOpen: false });
  };

  componentDidMount() {
    this.getRanking();
  }

  getRanking() {
    GetRanks.getRanks().then(res => {
      this.setState({ userId: "", ranking: res });
    });
  }

  handleClick() {
    if (this.state.userId === "") {
      this.setState({ dialogOpen: true });
      return;
    }
    this.moveDetailLogic(this.state.userId);
  }

  moveDetailLogic(userId: String) {
    this.props.history.push({
      pathname: "/detail",
      state: { userId: userId }
    });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      userId: e.target.value
    });
  }

  render() {
    const general = this.state.ranking.rankByLanguages.filter(
      t => t.language === GENERAL
    )[0];
    const javascript = this.state.ranking.rankByLanguages.filter(
      t => t.language === JAVASCRIPT
    )[0];
    const python = this.state.ranking.rankByLanguages.filter(
      t => t.language === PYTHON
    )[0];
    const java = this.state.ranking.rankByLanguages.filter(
      t => t.language === JAVA
    )[0];
    const csharp = this.state.ranking.rankByLanguages.filter(
      t => t.language === CSHARP
    )[0];
    const php = this.state.ranking.rankByLanguages.filter(
      t => t.language === PHP
    )[0];
    const cplus = this.state.ranking.rankByLanguages.filter(
      t => t.language === C_PLUS
    )[0];
    const ruby = this.state.ranking.rankByLanguages.filter(
      t => t.language === RUBY
    )[0];
    const go = this.state.ranking.rankByLanguages.filter(
      t => t.language === GO
    )[0];

    return (
      <div>
        <Container>
          <Header />
          <Box textAlign="center" m={3}>
            <img src={topImage} alt={""} width={400} height={120}></img>
          </Box>
          <Box textAlign="center">
            <TextField
              id="standard-basic"
              label="GitHub ID"
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
              <RankingList
                ranksByLanguage={general}
                itemClickCallback={this.moveDetailLogic}
              />
              <RankingList
                ranksByLanguage={javascript}
                itemClickCallback={this.moveDetailLogic}
              />
              <RankingList
                ranksByLanguage={python}
                itemClickCallback={this.moveDetailLogic}
              />
            </Grid>
          </Box>
          <Box m={10}>
            <Grid container spacing={2}>
              <RankingList
                ranksByLanguage={java}
                itemClickCallback={this.moveDetailLogic}
              />
              <RankingList
                ranksByLanguage={csharp}
                itemClickCallback={this.moveDetailLogic}
              />
              <RankingList
                ranksByLanguage={php}
                itemClickCallback={this.moveDetailLogic}
              />
            </Grid>
          </Box>
          <Box m={10}>
            <Grid container spacing={2}>
              <RankingList
                ranksByLanguage={cplus}
                itemClickCallback={this.moveDetailLogic}
              />
              <RankingList
                ranksByLanguage={ruby}
                itemClickCallback={this.moveDetailLogic}
              />
              <RankingList
                ranksByLanguage={go}
                itemClickCallback={this.moveDetailLogic}
              />
            </Grid>
          </Box>
          <Snackbar open={this.state.dialogOpen} autoHideDuration={6000}>
            <Alert onClose={this.dialogClose} severity="error">
              please fill in the value !
            </Alert>
          </Snackbar>
        </Container>
      </div>
    );
  }
}
