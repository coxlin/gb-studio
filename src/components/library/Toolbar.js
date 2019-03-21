import React, { Component } from "react";
import { Menu, MenuOverlay } from "./Menu";
import { TriangleIcon } from "./Icons";

export const Toolbar = props => <div className="Toolbar" {...props} />;
export const ToolbarButton = props => (
  <div className="Toolbar__Button" {...props} />
);
export const ToolbarSpacer = props => (
  <div className="Toolbar__Spacer" {...props} />
);
export const ToolbarFixedSpacer = props => (
  <div className="Toolbar__FixedSpacer" {...props} />
);

export const ToolbarTitle = props => (
  <div className="Toolbar__Title" {...props} />
);

export class ToolbarDropdownButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { children, label, showArrow = true, ...props } = this.props;
    const { open } = this.state;

    return (
      <div className="Toolbar__DropdownButton" {...props}>
        <ToolbarButton onClick={this.toggleOpen}>
          {label}
          {showArrow && (
            <div className="Toolbar__DropdownButton__Triangle">
              <TriangleIcon />
            </div>
          )}
        </ToolbarButton>
        {open && <MenuOverlay onClick={this.toggleOpen} />}
        {open && <Menu onClick={this.toggleOpen}>{children}</Menu>}
      </div>
    );
  }
}
