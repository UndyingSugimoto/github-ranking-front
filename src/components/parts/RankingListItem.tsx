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
  itemClickCallback: Function;
}

export class RankingListItem extends React.Component<RankingListItemProps, {}> {
  constructor(props: RankingListItemProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.itemClickCallback(this.props.user.userId);
  }

  render() {
    return (
      <ListItem onClick={this.handleClick} style={{ cursor: "pointer" }}>
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
