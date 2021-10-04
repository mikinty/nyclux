/**
 * Contains all the information about apartments.
 */

import HERO_7DEY from "./media/7dey-hero.jpg";
import HERO_19DUTCH from "./media/19dutch-hero.jpg";
import HERO_20PINE from "./media/20pine-hero.jpg";
import HERO_35HUDSON from "./media/35hudson-hero.jpg";
import HERO_EUGENE from "./media/eugene-hero.jpg";

export const APARTMENTS = {
  "19DUTCH": {
    name: "19 Dutch",
    description:
      "Perhaps the most luxurious apartment building in FiDi, 19 Dutch truly defines what it means to look like, smell like, and feel like luxury. Custom fragrances envelope all the spaces, carefully selected furniture give you a high-class feel, and high ceilings give you a sense of how grandiose the services in the building are.",
    phone: 9174739667,
    website: "https://www.19dutch.com/",
    year: 2018,
    address: {
      street: "19 Dutch St",
      city: "New York",
      state: "NY",
      zip: 10038,
    },
    amenities: {
      gym: {
        description:
          "Chic gym with dark flooring, segmented into 3 areas, weight training, cardio, and yoga. The weight room can be crowded, but the cardio room is very accommodating, and the yoga room is good for people to stretch or meditate.",
        num_squat_rack: 1,
        num_treadmill: 10,
        dumbbells: true,
        yoga_room: true,
        towels: true,
        size: 0,
      },
      rooftop: {
        description: "Nicer than your average rooftop",
        indoor_space: true,
        outdoor_space: true,
        num_grills: 2,
        elevation: 64,
        size: 0,
      },
      playroom: {
        description: "Basic toys for kids and a TV. Seldom used by residents.",
        size: 0,
      },
    },
    pets: true,
    elevator: true,
    packages: true,
    maintenance: true,
    num_floors: 64,
    notes: {
      elevator: "Often breaks down.",
      packages:
        "They have insurance so if they break your package while handling it, they will reimburse you.",
    },
    photos: {
      hero: HERO_19DUTCH,
    },
  },
  EUGENE: {
    name: "The Eugene",
    description:
      "Situated near the Penn Station and Hudson Yards area, The Eugene sits in a quiet, but classy location, with easy access to a Whole Foods and the luxurious Hudson Yards lifestyle.",
    year: 2017,
    website: "https://www.theeugenenyc.com/",
    amenities: {
      gym: {
        description: "Huge gym.",
        dumbbells: true,
        num_squat_rack: 5,
        num_treadmill: 10,
        yoga_room: true,
        towels: true,
        size: 0,
      },
      rooftop: {
        description: "",
        indoor_space: true,
        outdoor_space: true,
        num_grills: 2,
        elevation: 64,
        size: 0,
      },
    },
    num_floors: 62,
    price: {
      studio: 3800
    },
    photos: {
      hero: HERO_EUGENE,
    },
  },
  "35HUDSON": {
    name: "35 Hudson Yards",
    description: "Luxury asf",
    website: "https://www.35hudsonyards.com/",
    amenities: {
      gym: {
        description: "Huge gym.",
        dumbbells: true,
        num_squat_rack: 1,
        num_treadmill: 5,
        yoga_room: true,
        towels: true,
        size: 0,
      },
    },
    photos: {
      hero: HERO_35HUDSON,
    },
  },
  "20PINE": {
    name: "20 Pine",
    amenities: {
      gym: {
        description: "Huge gym.",
        dumbbells: true,
        num_squat_rack: 1,
        num_treadmill: 5,
        yoga_room: true,
        towels: true,
        size: 0,
      },
      spa: {
        description: "One of a kind spa room with "
      },
      billiards: {
        description: "Hidden behind the vault doors of the old JP Morgan Chase Bank, this is a quiet but classy location for a game of billiards."
      },
      pool: {
        description: "3-lane lap pool that is long enough for an actual swim workout."
      }
    },
    photos: {
      hero: HERO_20PINE,
    },
  },
  "7DEY": {
    name: "7 Dey",
    year: 2021,
    photos: {
      hero: HERO_7DEY,
    },
  },
  "AMERICANCOPPER" : {
    name: "American Copper Buildings",
    website: "https://americancopper.nyc",
    photos: {
      hero: null,
    },
  }
};
