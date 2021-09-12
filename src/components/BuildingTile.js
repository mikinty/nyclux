import React from "react";
import PropTypes from "prop-types";

/**
 * Building tile used in the front page to give an overview of the apartment.
 */
class BuildingTile extends React.Component {
  render() {
    const data = this.props.data;

    return <div className="building-tile">
      <div className="background">
        <img src={data.photos.hero}/>
      </div>
      <div className="hover-info">
        <div className="building-name">{data.name}</div>
      </div>
    </div>;
  }
}

BuildingTile.propTypes = {
  data: PropTypes.object,
};

export default BuildingTile;
