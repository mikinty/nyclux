import React from "react";

import { Link, useHistory } from "react-router-dom";

/**
 * Building tile used in the front page to give an overview of the apartment.
 */
export default function BuildingTile({ data, url }) {
  return (
    <div className="building-tile">
      <Link to={`/building/${url}`}>
        <div className="building-tile-image-wrapper">
          <div className="background">
            <img src={data.photos.hero} />
          </div>
          <div className="hover-info">
            <div className="building-name">{data.description}</div>
          </div>
        </div>
      </Link>
      <div className="bottom-tile-info">{data.name}</div>
    </div>
  );
}
