import {
    createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../screens/home'
import Drawer from '../screens/drawer'
import Add from '../screens/add'
import Edit from '../screens/edit'
const HomeDrawer = createDrawerNavigator(
    {
        Home
    },
    {
        contentComponent: Drawer,
        drawerWidth: 225
    }
)
const appNavigator = createStackNavigator({
    Home: {
        screen: HomeDrawer,
        navigationOptions: {
            header: null
        }
    },
    Add: {
        screen: Add
    },
    Edit: {
        screen: Edit
    }
}
    // , { initialRouteName: 'Edit' }
)
export default createAppContainer(appNavigator)