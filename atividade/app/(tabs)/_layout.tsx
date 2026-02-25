import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "blue",
            tabBarStyle: {
                paddingBottom: 30,
                paddingTop: 10,
                backgroundColor: '#e3e0df'
            }
        }}>

        <Tabs.Screen name='index' options={
            {title: "Home", 
                tabBarIcon : ({color, size}) => (
                    <Ionicons name='home' color={color} size={size}/>
                )
            }}/>
        <Tabs.Screen name='catalogo' options={
            {title: "Shop", 
                tabBarIcon : ({color, size}) => (
                    <Ionicons name='cart' color={color} size={size}/>
                )
            }}/>
        <Tabs.Screen name='cursos' options={
            {title: "Cursos", 
                tabBarIcon : ({color, size}) => (
                    <Ionicons name='briefcase-outline' color={color} size={size}/>
                )
            }}/>
    </Tabs>
  )
}

export default TabsLayout