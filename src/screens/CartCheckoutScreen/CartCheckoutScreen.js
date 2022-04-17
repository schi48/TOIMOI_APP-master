import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

// import DetailsScreen from '../DetailsScreen';
import ProductScreen from '../ProductScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import { connect } from 'react-redux';
    
class CartCheckoutScreen extends React.Component{
    render() {
    return (
        <React.Fragment>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View style={styles.heading}>
                    <Text style={styles.title}>
                        Ready to Checkout?
                    </Text>
                </View>
            </View>
        </ScrollView>

        <View style={styles.footer}>
            <View style={{ marginLeft: -220, marginTop: 10, marginBottom: 20, width: 100 }}>
                <Button
                    title="GO BACK"
                    type="GO BACK BUTTON"
                    color="#cc858a"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
            <View style={{ marginLeft: 150, marginTop: -55, marginBottom: 20, width: 200 }}>
                <Button
                    title="LOCATION"
                    type="GEOLOCATION BUTTON"
                    color="#6495ed"
                    // onPress={onCheckoutPressed}
                    onPress={() => this.props.navigation.navigate('GeolocationScreen')}
                />
            </View>
        </View>
        </React.Fragment>

    );
};
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7a8a0',
        height: 700,
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        color: 'white',
        marginTop: 20
    },
    heading: {
        backgroundColor: '#933d41',
        width: 500,
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: -20
    },
    footer: {
        backgroundColor: '#933d41',
        width: 500,
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: -10
    }
});

// const mapStateToProps = (state) => {
//     return {
//         cartItems: state
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem:(product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product})
//     }
// }

//  export default connect(mapStateToProps, mapDispatchToProps)(CartCheckoutScreen);

export default CartCheckoutScreen;