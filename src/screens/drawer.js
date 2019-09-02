import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
export default class drawer extends Component {
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={style.wrapper}>
                    <View style={style.wrapperProfile}>
                        <Text style={style.imageProfile}>
                        </Text>
                        <Text style={style.nameProfile}>
                            Shaloom Razade
                        </Text>
                    </View>
                    <View style={style.wrapperCategory}>
                        <TouchableOpacity style={style.wrapperListCategory} onPress={() => this.props.navigation.push('Login')}>
                            <Image source={{ uri: '' }} style={style.imageCategory} />
                            <Text style={style.nameCategory}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'column'
    },
    wrapperProfile: {
        flexDirection: "column",
        width: '100%',
        paddingVertical: 20
    },
    imageProfile: {
        width: 100,
        height: 100,
        backgroundColor: '#ddd',
        borderRadius: 50,
        alignSelf: "center",
        marginTop: 30
    },
    nameProfile: {
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
        color: 'black'
    },
    wrapperCategory: {
        flexDirection: "column",
        width: '100%'
    },
    wrapperListCategory: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        paddingHorizontal: 30,
        paddingTop: 10
    },
    imageCategory: {
        height: 50,
        width: 50
    },
    nameCategory: {
        height: 50,
        textAlignVertical: "center",
        textAlign: 'center',
        fontSize: 20
    }
})