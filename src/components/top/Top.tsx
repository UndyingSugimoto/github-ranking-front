import React from "react"

type TopProps = {
    foo: string;
  }
 export class Top extends React.Component<TopProps, {}> {
      render() {
          return <span>{this.props.foo}</span>
      }
  }
  