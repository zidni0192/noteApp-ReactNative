import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    StatusBar,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { getAllNotes } from '../publics/redux/actions/note';
class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: []
        }
    }
    cutText = (text) => {
        if (text.length >= 50) {
            return text.substring(0, 50) + '...'
        } else {
            return text
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(getAllNotes())
        console.warn(this.props.note);

        if (Array.isArray(this.props.note.noteList)) {
            this.setState({
                note: this.props.note.noteList
            })
        } else {
            this.setState({
                note: []
            })
        }
    }
    renderItems = ({ item }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: [item.color], width: '45%', height: 160, margin: '2.5%', borderRadius: 10, elevation: 5, paddingHorizontal: 20 }}
            onPress={()=>this.props.navigation.navigate('Edit',{idNote:item.idNote})}>
                <Text style={{ textAlign: 'right', paddingVertical: 10 }}>
                    {item.updatedAt}
                </Text>
                <Text>
                    {item.title}
                </Text>
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {this.cutText(item.description)}
                </Text>
            </TouchableOpacity>
        )
    }
    componentWillUnmount = () => {
        removeEventListener(this.componentDidMount)
    }
    render() {
        return (
            <>
                <StatusBar hidden />
                <View style={style.header}>
                    <TouchableOpacity style={style.btnDrawer} onPress={() => this.props.navigation.openDrawer()}>
                    </TouchableOpacity>
                    <Text style={style.title}>
                        NOTE APP
                    </Text>
                    <TouchableOpacity style={style.btnSort} onPress={() => this.props.navigation.navigate('Add')}>
                        <Image source={require('..//assets/images/sort.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <TextInput style={style.search} placeholder='Search..' />
                    <FlatList
                        data={this.state.note}
                        renderItem={this.renderItems}
                        numColumns={2}
                        style={style.flatList}
                    />
                </ScrollView>
                <TouchableOpacity style={style.btnAddWrap} onPress={() => this.props.navigation.navigate('Add')}>
                    <Text style={style.btnAdd}>
                        +
                </Text>
                </TouchableOpacity>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        note: state.note
    }
}
export default connect(mapStateToProps)(home)
const style = StyleSheet.create({
    search: {
        borderRadius: 50,
        marginHorizontal: 30,
        marginVertical: 25,
        elevation: 5,
        backgroundColor: 'white',
        paddingHorizontal: 25
    },
    header: {
        elevation: 8,
        height: 55,
        backgroundColor: 'white'
    },
    btnDrawer: {
        marginHorizontal: 15,
        marginTop: 10,
        position: 'absolute',
        borderRadius: 50,
        height: 40,
        width: 40,
        backgroundColor: '#ddd'
    },
    title: {
        position: "absolute",
        alignSelf: 'center',
        height: '100%',
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: '700'
    },
    btnSort: {
        marginHorizontal: 15,
        marginTop: 20,
        alignSelf: 'flex-end'
    },
    btnAdd: {
        backgroundColor: 'white',
        elevation: 5,
        height: 50,
        width: 50,
        borderRadius: 50,
        textAlign: "center",
        textAlignVertical: 'center',
        fontWeight: '700',
        fontSize: 30
    },
    btnAddWrap: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 50,
        width: 50,
    }
})