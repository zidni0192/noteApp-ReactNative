import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Picker,
    Alert,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { getAllCategory } from '../publics/redux/actions/category';
import { postNote } from '../publics/redux/actions/note';
class add extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            categoryId: '',
            category: [],
            isLoading: false
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(getAllCategory())
        console.warn(this.props.category);
        if (Array.isArray(this.props.category.categoryList)) {
            this.setState({
                category: this.props.category.categoryList
            })
        } else {
            this.setState({
                category: []
            })
        }
    }
    add = async () => {
        this.setState({ isLoading: true })
        if (this.state.title === '' || this.state.description === '' || this.state.categoryId === '') {
            Alert.alert('Warning', 'Isi Semua Field')
            this.setState({ isLoading: false })

        } else {
            const data = {
                title: this.state.title,
                description: this.state.description,
                categoryId: this.state.categoryId
            }
            await this.props.dispatch(postNote(data))
            this.setState({ isLoading: false })
            if (this.props.note.isFulfilled) {
                Alert.alert('Info', 'Data Sukses di input')
                this.props.navigation.navigate('Home')
            }
        }
    }
    render() {
        return (
            <>
                <View style={style.header}>
                    <TouchableOpacity style={style.btnBack} onPress={() => this.props.navigation.goBack()}>
                    </TouchableOpacity>
                    <Text style={style.title}>
                        ADD NOTE
            </Text>
                    <TouchableOpacity style={style.btnSave} onPress={!this.state.isLoading && this.add}>
                        <Image source={require('../assets/images/checked.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={style.wrapper}>
                        <TextInput placeholder='Add Title ..' style={style.titleInput} onChangeText={(title) => this.setState({ title })} />
                        <TextInput placeholder='Add Description.. ' style={style.description} multiline={true} onChangeText={(description) => this.setState({ description })} />
                        <Picker onValueChange={(categoryId) => this.setState({ categoryId })}
                            selectedValue={this.state.categoryId}>
                            <Picker.Item value={''} label={'Pilih Category'} />
                            {this.state.category.map((item) => {
                                return <Picker.Item value={item.idCategory} label={item.name} />
                            })}
                        </Picker>
                    </View>
                </ScrollView>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        note: state.note,
        category: state.category
    }
}
export default connect(mapStateToProps)(add)
const style = StyleSheet.create({
    header: {
        elevation: 8,
        height: 55,
        backgroundColor: 'white'
    },
    btnBack: {
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
    btnSave: {
        marginHorizontal: 15,
        marginTop: 20,
        alignSelf: 'flex-end'
    },
    wrapper: {
        margin: 20
    },
    titleInput: {
        paddingHorizontal: 20,
        fontSize: 30,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    description: {
        paddingHorizontal: 20,
        fontSize: 30,
        height: 300,
        textAlignVertical: 'top',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
})