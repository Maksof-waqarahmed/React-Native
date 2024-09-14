import { View, Text, StyleSheet, Button } from "react-native"
import { useState, useEffect } from "react"
import { collection, onSnapshot, query, orderBy, db, acceptReject } from "../Config/Firebase"

export default function PickupARide(){

    const [currentRide, setCurrentRide] = useState('')
    const [reuqest, setRequest] = useState()

    const accept = async () => {
        setRequest('Accept')
        await acceptReject(reuqest)
        // console.log(reuqest, "Request")
    };

  
    const reject = async () => {
        setCurrentRide('')
    };

    useEffect(() => {

        listenToRide();

    }, [])


    function listenToRide() {
        const q = query(collection(db, 'rideRequest'),orderBy("TimeStamp") );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const rides = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data(), 'docDATA')
                rides.push(doc.data());
            });
            console.log("Current ride", rides);
            
                setCurrentRide(rides[rides.length - 1]);
            
            alert("New Request!");
        });

        return unsubscribe
    }
    
    // console.log("setCurrenyRide", currentRide)

    if (!currentRide) {
        return (
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            No requset yet...
          </Text>
        );
      }
  
      return (
        
        <View style={styles.container}>
            <Text>Pick A Ride</Text>
           { reuqest === "Accept" && <View>
            
            
            </View>}

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <Button title='Accept' color="#F95E63" style={styles.button} onPress={accept} />
                <Button title='Reject' color="#F95E63" style={styles.button} onPress={reject} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange buttons horizontally
        justifyContent: 'space-around', // Evenly space buttons
        width: '100%', // Occupy full width
        paddingHorizontal: 20, // Add padding horizontally
        position: 'absolute', // Position at the bottom
        bottom: 20, // Adjust bottom spacing
    },
    button: {
        width: '45%', // Adjust button width
    },
});