import React from "react";
import { useParams } from 'react-router-dom'

import { APARTMENTS } from "../data";

/**
 * Information page for a building, describing its features.
 */

export default function BuildingPage() {
  const { name } = useParams();
  const data = APARTMENTS[name];
  const buildingName = data.name;
  const gymData = data.amenities.gym;
  return <div className='building-page'>
    <div className='gallery'>
      <div className='gallery-slideshow'>
        Pictures
      </div>
    </div>
    <div className='building-name'>
      {buildingName}
    </div>
    <h1>Amenities</h1>
    <div>
      {
        // Write util functions for handling the formatting of each type of amenity
      }
      <div>
        <h2>Gym</h2>
        <div className='description'>
          {gymData.description}
        </div>
        <div className='features'>
          {gymData.dumbbells ? <div>Dumbbells</div> : null}
          {gymData.yoga_room ? <div>Yoga Room</div> : null}
          {gymData.towels ? <div>Towels</div> : null}
          <div>
            Squat Racks: {gymData.num_squat_rack}
          </div>
          <div>
            Treadmills: {gymData.num_treadmill}
          </div>
        </div>
      </div>
      <h2>Rooftop</h2>
      <h2>Lounge</h2>
      <h2>Playroom</h2>
    </div>
    <h1>
      Availibility
    </h1>
  </div>;
}
