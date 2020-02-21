import { UserDetailRes } from "../../external/data/UserDetailRes";
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

interface UserProfileCardProps {
  userDetail: UserDetailRes;
}

export class UserProfileCard extends React.Component<UserProfileCardProps, {}> {
  render() {
    return (
      <Card style={{ maxWidth: 600, display: "flex" }}>
        <CardMedia
          src={this.props.userDetail.avatarUrl}
          component="img"
          style={{ width: 100, margin: 15 }}
        ></CardMedia>
        <CardContent>
          <Typography variant="h6" component="h6">
            ID : {this.props.userDetail.userId}
          </Typography>
          <Typography color="textSecondary">
            Rank : {this.props.userDetail.rank}/
            {this.props.userDetail.currentNumber}
          </Typography>
          <Typography color="textSecondary">
            Score : {this.props.userDetail.score}
          </Typography>
          <Typography color="textSecondary">
            MainLanguage : {this.props.userDetail.mainLanguage}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
