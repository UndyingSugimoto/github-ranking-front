import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody
} from "@material-ui/core";

interface UserScoreDetailPorps {
  userDetail: UserDetailRes;
}

export class UserScoreDetail extends React.Component<UserScoreDetailPorps, {}> {
  render() {
    return (
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
                {this.props.userDetail.followersCount}
              </TableCell>
              <TableCell align="right">
                {this.props.userDetail.issuesCount}
              </TableCell>
              <TableCell align="right">
                {this.props.userDetail.pullRequestCount}
              </TableCell>
              <TableCell align="right">
                {this.props.userDetail.repositoriesCount}
              </TableCell>
              <TableCell align="right">
                {this.props.userDetail.forksCountTotal}
              </TableCell>
              <TableCell align="right">
                {this.props.userDetail.stargazerCountTotal}
              </TableCell>
              <TableCell align="right">
                {this.props.userDetail.watchersCountTotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
