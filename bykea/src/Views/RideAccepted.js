import React from 'react';
import { Text} from 'react-native';

const RideAccepted = () => {
    const [riderlocation, setRiderLocation] = useState(null);


    useEffect(() => {

        (async () => {
            Location.watchPositionAsync({
                accuracy: 6,
                distanceInterval: 1,
                timeInterval: 1000
            }, (riderlocation) => {
                setRiderLocation(riderlocation)
            })

        })();
    }, []);


    const searchPlaces = (text) => {
        setDestination()
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'fsq38DsZJ6ojaNyPcFjOmd9ozsTRx0mdUpS2DETyzDeZLjI='
            }
        };

        const { latitude, longitude } = location.coords

        fetch(`https://api.foursquare.com/v3/places/search?query=${text}&ll=${latitude},${longitude}&raduis=3000`, options)
            .then((response) => response.json())
            .then((response) => {
                // console.log('response',response)
                setPlaces(response.results)
            })
            .catch((err) => console.error(err));
    }

    if (!riderlocation) {
        return <Text> Waiting For Rider</Text>
      }

  return (
    <View>
        <Text>Ride Accepted</Text>

        <MapView
            initialRegion={{
                latitude: riderlocation.coords.latitude,
                longitude: riderlocation.coords.longitude,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.0001
            }}
            style={styles.map}>
            <Marker
                coordinate={{
                    latitude: riderlocation.coords.latitude,
                    longitude: riderlocation.coords.longitude
                }}
                title={'Your Location'}
                description={'Orangi Town'}
            />
        </MapView>
      
    </View>
  );
};

export default RideAccepted;
