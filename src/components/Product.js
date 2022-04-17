import React, {Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Products extends Component {
    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <ScrollView>
                    <View key={index} style={{padding: 20}}>
                        <Button onPress={(item) => this.props.onPress(item)}
                        title={item.name + ": $" + item.price}
                        // color= "#CD9884"                        
                        />
                    </View>
                </ScrollView>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}

export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});