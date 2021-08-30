import React, { Component } from "react";
import "./GetImages.css";

class ListImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spanCount: Number(1),
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const myRefCurrent = this.myRef.current;
    myRefCurrent.addEventListener("load", () => {
      const spanCount = Math.round(myRefCurrent.clientHeight / 5) + 2;
      this.setState({
        spanCount,
      });
    });
  }

  render() {
    const { image } = this.props;
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spanCount}` }}
        ref={this.myRef}
        alt={image.description}
        key={image.id}
        src={image.urls.small}
      />
    );
  }
}
export default ListImages;
