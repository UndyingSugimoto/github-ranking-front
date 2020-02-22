import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

interface UserTierCardProps {
  tierName: string;
  tierAbout: string;
  imageSrc: string;
  score: Number;
}

export class UserTierCard extends React.Component<UserTierCardProps, {}> {
  render() {
    return (
      <Card style={{ maxWidth: 270, display: "flex" }}>
        <CardMedia
          image={this.props.imageSrc}
          component="img"
          style={{ width: 100, margin: 15 }}
        ></CardMedia>
        <CardContent>
          <Typography color="primary" variant="h6" component="h6">
            {this.props.tierName}
          </Typography>
          <Typography color="textSecondary">
            Score : {this.props.score}
          </Typography>
          <Typography color="textSecondary">{this.props.tierAbout}</Typography>
        </CardContent>
      </Card>
    );
  }
}
