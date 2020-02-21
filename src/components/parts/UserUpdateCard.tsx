import React, { MouseEventHandler } from "react";
import { Card, CardContent, Typography, Button, Box } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";

interface UserUpdateCardProps {
  lastupdateDate: Date;
  onClickUpdateButton: MouseEventHandler;
}

export class UserUpdateCard extends React.Component<UserUpdateCardProps, {}> {
  constructor(props: UserUpdateCardProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(event: React.MouseEvent<Element, MouseEvent>) {
    this.props.onClickUpdateButton(event);
  }
  render() {
    return (
      <Card style={{ maxWidth: 270, display: "flex" }}>
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            endIcon={<UpdateIcon>update</UpdateIcon>}
            onClick={event => {
              this.props.onClickUpdateButton(event);
            }}
          >
            update
          </Button>
          <Box mt={3.5}>
            <Typography color="textSecondary">
              Last update :{this.props.lastupdateDate.toDateString()}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
