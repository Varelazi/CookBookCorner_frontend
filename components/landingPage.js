import { ImageBackground, StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import { SearchBar, Card } from '@rneui/themed';

const LandingPage = ({ navigation }) => {
    const [search, setSearch] = useState("");
    
    const updateSearch = (search) => {
        setSearch(search);
    }

    return(
        <View style={landingPageStyling.container}>
            <ImageBackground source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7fbb8ab6-ef65-4905-9069-443fada8372b/dfxcr46-2361c558-2d46-4482-8df3-50bda464a496.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdmYmI4YWI2LWVmNjUtNDkwNS05MDY5LTQ0M2ZhZGE4MzcyYlwvZGZ4Y3I0Ni0yMzYxYzU1OC0yZDQ2LTQ0ODItOGRmMy01MGJkYTQ2NGE0OTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xAIYM6USNdo50KwPkXzeQ-_anED7Nn4OVPNd0-B6_vQ' }} style={landingPageStyling.topBackground}> 
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
            <View style={landingPageStyling.trendingCards}>
                <Card containerStyle={{marginBottom: 10}}>
                    <Card.Image
                        style={landingPageStyling.cardImage}
                        source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                    />
                    <Card.Title>Trending 1</Card.Title>
                </Card>
                <Card containerStyle={{marginBottom: 10}}>
                    <Card.Image
                        style={landingPageStyling.cardImage}
                        source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                    />
                    <Card.Title>Trending 2</Card.Title>
                </Card>
            </View>
            <View style={landingPageStyling.trendingCards}>
                <Card containerStyle={{marginBottom: 10}}>
                        <Card.Image
                            style={landingPageStyling.cardImage}
                            source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                        />
                        <Card.Title>Trending 3</Card.Title>
                    </Card>
                    <Card containerStyle={{marginBottom: 10}}>
                        <Card.Image
                            style={landingPageStyling.cardImage}
                            source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                        />
                        <Card.Title>Trending 4</Card.Title>
                    </Card>
            </View>
            </ImageBackground>

        </View>
    )
}

export default LandingPage

const landingPageStyling = StyleSheet.create({
    topBackground:{
        resizeMode: 'cover',
    },
    title:{
        fontSize: 45,
        textAlign: 'center',
        paddingTop: 60,
        padding: 10
    },
    signUp:{
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
        textDecorationLine: 'underline'
    },
    signIn:{
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 15,
        padding: 5,
        paddingBottom: 20,
        borderBottomWidth: 2,
        textDecorationLine: 'underline'
    },
    searchContainer:{
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 40,
        overflow: 'hidden',       
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subheading:{
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 15,
        padding: 5,
    },
    trendingCards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 140,
    },
    cardImage:{
        height: 70,
        width: 100
    },
})

