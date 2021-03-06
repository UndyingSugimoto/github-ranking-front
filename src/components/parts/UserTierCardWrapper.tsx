import React from "react";
import bronze from "../../static/bronze.png";
import silver from "../../static/silver.png";
import gold from "../../static/gold.png";
import pratinum from "../../static/pratinum.png";
import diamond from "../../static/diamond.png";
import master from "../../static/master.png";
import challenger from "../../static/challenger.png";

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
  score: Number;
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
          imageSrc={challenger}
          score={this.props.score}
        />
      );
    } else if (this.props.tier === MASTER) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 10%"
          imageSrc={master}
          score={this.props.score}
        />
      );
    } else if (this.props.tier === DIAMOND) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 15%"
          imageSrc={diamond}
          score={this.props.score}
        />
      );
    } else if (this.props.tier === PRATINUM) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 20%"
          imageSrc={pratinum}
          score={this.props.score}
        />
      );
    } else if (this.props.tier === GOLD) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 30%"
          imageSrc={gold}
          score={this.props.score}
        />
      );
    } else if (this.props.tier === SILVER) {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Top 40%"
          imageSrc={silver}
          score={this.props.score}
        />
      );
    } else {
      return (
        <UserTierCard
          tierName={this.props.tier}
          tierAbout="Under 40%"
          imageSrc={bronze}
          score={this.props.score}
        />
      );
    }
  }
}
