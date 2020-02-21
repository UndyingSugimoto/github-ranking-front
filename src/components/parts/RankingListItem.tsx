import React from "react";
import { UserMinimumInformation } from "../../external/data/UserMinimumInformation";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";

interface RankingListItemProps {
  rank: Number;
  user: UserMinimumInformation;
}

export class RankingListItem extends React.Component<RankingListItemProps, {}> {
  render() {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt={this.props.user.userId}
            src={this.props.user.avatarUrl}
          />
        </ListItemAvatar>
        <ListItemText primary={this.props.rank} />
        <ListItemText primary={this.props.user.userId} />
      </ListItem>
    );
  }
}
