import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "EMpire State Building",
    descriptions: "One of the most famouse scy scrapers in the world",
    imageUrl:
      "https://images.adsttc.com/media/images/5841/5a74/e58e/ce8f/db00/01f1/newsletter/Empire_State_Building_15_Dec_2005.jpg?1480677994",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "EMpire State Building",
    descriptions: "One of the most famouse scy scrapers in the world",
    imageUrl:
      "https://images.adsttc.com/media/images/5841/5a74/e58e/ce8f/db00/01f1/newsletter/Empire_State_Building_15_Dec_2005.jpg?1480677994",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
