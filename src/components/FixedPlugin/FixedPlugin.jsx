/*eslint-disable*/
import React, { Component } from "react";
import classnames from "classnames";

import image1 from "assets/img/sidebar-1.jpg";
import image2 from "assets/img/sidebar-2.jpg";
import image3 from "assets/img/sidebar-3.jpg";
import image4 from "assets/img/sidebar-4.jpg";
import image5 from "assets/img/sidebar-5.jpg";
import image6 from "assets/img/sidebar-6.jpg";
import image7 from "assets/img/sidebar-7.jpg";
import image8 from "assets/img/sidebar-8.jpg";

import Button from "components/CustomButtons/Button.jsx";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown",
      bg_checked: true,
      bgImage: this.props.bgImage
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }
  render() {
    return (
      <div
        className={classnames("fixed-plugin", {
          "rtl-fixed-plugin": this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">SIDEBAR FILTERS</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  <span
                    className={
                      this.props.bgColor === "purple"
                        ? "badge filter badge-purple active"
                        : "badge filter badge-purple"
                    }
                    data-color="purple"
                    onClick={() => {
                      this.props.handleColorClick("purple");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "blue"
                        ? "badge filter badge-blue active"
                        : "badge filter badge-blue"
                    }
                    data-color="blue"
                    onClick={() => {
                      this.props.handleColorClick("blue");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "green"
                        ? "badge filter badge-green active"
                        : "badge filter badge-green"
                    }
                    data-color="green"
                    onClick={() => {
                      this.props.handleColorClick("green");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "red"
                        ? "badge filter badge-red active"
                        : "badge filter badge-red"
                    }
                    data-color="red"
                    onClick={() => {
                      this.props.handleColorClick("red");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "orange"
                        ? "badge filter badge-orange active"
                        : "badge filter badge-orange"
                    }
                    data-color="orange"
                    onClick={() => {
                      this.props.handleColorClick("orange");
                    }}
                  />
                </div>
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className={this.state["bgImage"] === image1 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image1 });
                  this.props.handleImageClick(image1);
                }}
              >
                <img src={image1} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image2 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image2 });
                  this.props.handleImageClick(image2);
                }}
              >
                <img src={image2} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image3 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image3 });
                  this.props.handleImageClick(image3);
                }}
              >
                <img src={image3} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image4 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image4 });
                  this.props.handleImageClick(image4);
                }}
              >
                <img src={image4} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image5 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image5 });
                  this.props.handleImageClick(image5);
                }}
              >
                <img src={image5} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image6 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image6 });
                  this.props.handleImageClick(image6);
                }}
              >
                <img src={image6} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image7 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image7 });
                  this.props.handleImageClick(image7);
                }}
              >
                <img src={image7} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === image8 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: image8 });
                  this.props.handleImageClick(image8);
                }}
              >
                <img src={image8} alt="..." />
              </a>
            </li>
            <li className="adjustments-line" />
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
