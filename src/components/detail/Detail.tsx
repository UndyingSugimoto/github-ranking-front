import React from "react";
import { UserDetailRes } from "../../external/data/UserDetailRes";
import { getUserDetail } from "../../external/GetUser";

type DetailProps = {
  userId: string;
};

export class Detail extends React.Component<DetailProps, UserDetailRes> {
  componentDidMount() {
    this.getUserDetail(this.props.userId);
  }

  getUserDetail(userId: string) {
    getUserDetail(userId).then(res => {
      this.setState(res);
    });
  }

  render() {
    const body = () => {
      return (
        <div>
          <span>{this.state.currentNumber}</span>
        </div>
      );
    };

    return body;
  }
}
