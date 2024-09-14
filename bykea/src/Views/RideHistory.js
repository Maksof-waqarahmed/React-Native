import { View, Text, StyleSheet } from 'react-native';
import { getRideHistory, auth } from '../Config/Firebase';
import { useState, useEffect } from 'react';
import Destination from './Destination';

export default function RideHistory(){
    const [rideHistory, setRideHistory] = useState([]);

    useEffect(() => {
        fetchRideHistory();
    }, []);

    const fetchRideHistory = async () => {
        const history = await getRideHistory();
        setRideHistory(history);
    };

    if (!rideHistory.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {rideHistory.map((item, index) => (
                <View key={index} style={styles.rideContainer}>
                    <Text style={styles.text}>Pickup: {item.pickup.name}</Text>
                    <Text style={styles.text}>Destination: {item.destination.name}</Text>
                    <Text style={styles.text}>Vehicle: {item.carType}</Text> 
                    <Text style={styles.text}>Price: {Math.floor(parseFloat(item.fare))}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F95E63',
    },
    rideContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#F95E63'
    },
    loadingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
