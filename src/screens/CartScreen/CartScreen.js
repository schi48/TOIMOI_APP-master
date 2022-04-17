import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import ProductScreen from '../ProductScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../../../reducers/cartItems';
import cartItems from '../../../reducers/cartItems';
import ShoppingCartIcon from '../../../ShoppingCartIcon';
import { Link } from "react-router-dom";
// import Communications from 'react-native-communications';

class CartScreen extends React.Component { 
    

    render() {

        console.log(JSON.stringify("ADDED: "))
        console.log(JSON.stringify(this.props.cartItems))

        const onCheckoutPressed = () => {
            console.warn("Time to checkout!");
        };

        order = { item: [] };
        var itemName = this.props.cartItems;
        var itemPrice = 
        {
            'Mango Passionfruit Mochi Croissant': 6.00,
            'Pistachio Rose Almond Croissant': 5.50,
            'Strawberry Custard Danish': 4.75,
            'Ferrero Rocher Croissant': 4.75,
            'Cream Corn Cheese Danish': 5.25,
            'Oreo Chocolate Sea Salt Chiffon Cake Roll': 22.00,
            'Taro Basque Cheese Cake': 5.50,
            'Dragon Fruit Yogurt Croissant': 5.50,
            'Taro Tricolor Puff': 4.75,
            'Salted Egg Yolk Puff': 4.75,
            'French Pastry Box (5pcs)': 22.00,
            'Matcha Custard Moon Cake': 4.50,
            'Pineapple Tart': 4.50,
            'Red Bean Mochi Bicolor Puff': 4.75,
            'A-Strawberry Red Bean Mochi': 4.50,
            'Coconut Cherry Blossom Puff': 4.75,
            'Raspberry Lychee Danish': 5.50,
            'Portuguese Egg Tart(half dozen)': 18.00,
            'Savory Danish (Miso Bacon)': 5.25,
            'Almond Croissant': 4.75,
            'Strawberry Cheesecake Cruffin': 5.50,
            'Ube Chiffon Cake Roll': 21.00,
            'Matcha Almond Croissant': 5.50,
            'Pear Cinnamon Croissant': 5.50,
            'Black Sesame Marshmallow Croissant': 5.50,
            'Melon Bun': 5.25,
            'Furikake Pork Floss Croissant': 5.50,
            'UBE Butter Croissant': 5.50,
            'Berries Tiramisu': 8.00,
            'Flaky Croissant': 4.50,
            'Ube Mochi Waffle Sandwich': 6.50,
            'Everything Cream Cheese Croissant': 5.50,
        };

        itemName.map((x) => {
            match = false;
            if (order.item.length === 0) {
                order.item.push({ name: x, count: 1, price: itemPrice[x] });

            }
            else {
                for (indx in order.item) {
                    if (order.item[indx].name === x) {
                        match = true;
                        break;
                    }
                }

                if (match) {
                    order.item[indx].count += 1;
                    order.item[indx].price = order.item[indx].count * itemPrice[x];
                }
                else {
                    order.item.push({ name: x, count: 1, price: itemPrice[x] });
                }
            }
        });

       let amount = 0;
    

        oItems=[]
        for(let i =0; i< order.item.length; i++)
             {
                console.log("Inside LOOP: " + order.item[i].name)
                amount = amount +  order.item[i].price
                oItems.push(
                    <View key={i}>
                            <View style={{marginTop: 20}}>
                                <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}> {order.item[i].name} {'\u00A0'} </Text>
                                <Text style={{fontSize: 17, textAlign: 'center'}}> PRICE: ${order.item[i].price}  {'\u00A0'} QTY: {order.item[i].count} </Text>
                            </View>
                    </View>
                )
             }

        return (
            <React.Fragment>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.root}>
                        <View style={styles.heading}>
                            <Text style={styles.title}>
                                Shopping Cart
                            </Text>
                        </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {oItems}
                    <Text style={{marginTop: 20, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
                        TOTAL: ${amount}
                    </Text>

                </ScrollView>

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
                            title="CHECK OUT"
                            type="CHECK OUT BUTTON"
                            color="green"
                            // onPress={onCheckoutPressed}
                            onPress={() => this.props.navigation.navigate('CartCheckoutScreen')}
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
        height: 2250
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
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

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);



// {
//     GET this.props.cartitems list as input
   
//     Use Map, fiter to provide output
   
//     ["Ferrero Rocher Croissant","Mango Passionfruit Mochi Croissant","Mango Passionfruit Mochi Croissant"]
   
    
//     [["Ferrero",1,1.00],
//     ["Mochi" ,2,2.00]
//     ]
   
// }