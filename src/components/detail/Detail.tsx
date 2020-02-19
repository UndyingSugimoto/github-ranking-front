import React from "react"

type DetailProps = {
    foo: string;
  }
  export class Detail extends React.Component<DetailProps, {}> {
      render() {
          return <span>{this.props.foo}</span>
      }
  }
  