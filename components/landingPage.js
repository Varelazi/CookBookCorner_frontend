import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import { SearchBar, Card } from '@rneui/themed';

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
            <Text style={landingPageStyling.subheading}>
                Trending
            </Text>
            <View style={landingPageStyling.innerContainer}>
                <View style={landingPageStyling.row}>
                    <CardContainer />
                    <CardContainer />
                </View>
                <View style={landingPageStyling.row}>
                    <CardContainer />
                    <CardContainer />
                </View>
        </View>
            
        </View>
    )
}
const CardContainer = () => {
    return (
        <View style={landingPageStyling.cardContainer}>
            <Card>
                <Card.Image
                    style={landingPageStyling.card}
                    source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                />
                <Card.Title>HELLO WORLD</Card.Title>
            </Card>
            <Card>
                <Card.Image
                    style={landingPageStyling.card}
                    source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                />
                <Card.Title>HELLO WORLD</Card.Title>
            </Card>
        </View>
    );
};

export default LandingPage

const landingPageStyling = StyleSheet.create({
    title:{
        fontSize: 50,
        textAlign: 'center',
        paddingTop: 60,
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
        borderBottomWidth: 2,
        textDecorationLine: 'underline'
    },
    searchContainer:{
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 40,
        overflow: 'hidden',       
        width: 225,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    searchBar:{
        borderRadius: 40,
    },
    subheading:{
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 15,
        padding: 5,
    },
    innerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardContainer: {
        position: 'absolute',
        width: '50%',
        backgroundColor: 'transparent',
    },
    card: {
        width: '110%',
        height: '80%',
    },

})

