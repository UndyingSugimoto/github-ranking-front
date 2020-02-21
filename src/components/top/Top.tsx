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
import { textAlign } from "@material-ui/system";
import { RankingListItem } from "../parts/RankingListItem";
import { RankingList } from "../parts/RankingList";

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
    this.state = {
      userId: "",
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
              <RankingList ranksByLanguage={general} />
              <RankingList ranksByLanguage={javascript} />
              <RankingList ranksByLanguage={python} />
            </Grid>
          </Box>
          <Box m={10}>
            <Grid container spacing={2}>
              <RankingList ranksByLanguage={java} />
              <RankingList ranksByLanguage={csharp} />
              <RankingList ranksByLanguage={php} />
            </Grid>
          </Box>
          <Box m={10}>
            <Grid container spacing={2}>
              <RankingList ranksByLanguage={cplus} />
              <RankingList ranksByLanguage={ruby} />
              <RankingList ranksByLanguage={go} />
            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
}
