import React from "react";
import sample from "../../static/sample.png";
import {
  CHALLENGER,
  MASTER,
  DIAMOND,
  PRATINUM,
  GOLD,
  SILVER
} from "../../const/Tier";
import { UserTierCard } from "./UserTierCard";

interface UserTierCardWrapperProps {
  tier: string;
}

export class UserTierCardWrapper extends React.Component<
  UserTierCardWrapperProps,
  {}
> {
  render() {
    if (this.props.tier === CHALLENGER) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 5%"
          imageSrc={sample}
        />
      );
    } else if (this.props.tier === MASTER) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 10%"
          imageSrc={sample}
        />
      );
    } else if (this.props.tier === DIAMOND) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 15%"
          imageSrc={sample}
        />
      );
    } else if (this.props.tier === PRATINUM) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 20%"
          imageSrc={sample}
        />
      );
    } else if (this.props.tier === GOLD) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 30%"
          imageSrc={sample}
        />
      );
    } else if (this.props.tier === SILVER) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 40%"
          imageSrc={sample}
        />
      );
    } else {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Under 40%"
          imageSrc={sample}
        />
      );
    }
  }
}
