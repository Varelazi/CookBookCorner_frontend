import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { SearchBar } from '@rneui/themed';

const LandingPage = ({ navigation }) => {
    const [search, setSearch] = useState("");
    
    const updateSearch = (search) => {
        setSearch(search);
    }

    return(
        <View>
            <Text style={ landingPageStyling.title }>
                Welcome to CookBook Corner
            </Text>
            <Text style={ landingPageStyling.signUp }>
                Sign Up
            </Text>
            <Text style={ landingPageStyling.signIn }>
                Sign In
            </Text>
            <View style={ landingPageStyling.searchContainer }>
                <SearchBar ref={search => this.search = search} placeholder="Search Recipes" onChangeText={updateSearch} value={search} platform='android' style={ landingPageStyling.searchBar }/>
            </View>
        </View>
    )
}

export default LandingPage

const landingPageStyling = StyleSheet.create({
    title:{
        fontSize: 50,
        textAlign: 'center',
        paddingTop: 50,
        padding: 10
    },
    signUp:{
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 15,
        padding: 5,
        textDecorationLine: 'underline'
    },
    signIn:{
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 15,
        padding: 5,
        paddingBottom: 30,
        borderBottomWidth: 3,
        textDecorationLine: 'underline'
    },
    searchContainer:{
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 40,
        overflow: 'hidden',       
        width: 230,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    searchBar:{
        borderRadius: 40,
    }
})