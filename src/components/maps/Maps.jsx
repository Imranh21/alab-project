import GoogleMapReact from "google-map-react";

const key = 'AIzaSyCOCPd6NUvSjVDg0KvLgHI5uLRDBF0Er3A'

const Maps = () => {
  const center = {
    lat: 23.7984941,
    lng: 90.3842619,
  };
  const zoom = 14;

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <div className="marker" lat={23.7984941} lng={90.3842619}></div>
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
