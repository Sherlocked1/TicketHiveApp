import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { RootStackParams } from "../../../main";
import { MyField } from "../../core/components/my_field";
import Neumorphism from "../../core/components/neu_view";
import StyledText from "../../core/components/styled_text";
import Movie from "../../core/models/movie";
import MovieItem from "../components/movie_item";

const Home = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const data:Movie[] = [
      {name:"Black Panther",image_url:"https://m.media-amazon.com/images/I/71Mjk5SDIjL.jpg",time:'August 12th 13:00',id:1},
      {name:"Black Adam",image_url:"https://m.media-amazon.com/images/I/71srVC8TnZL._AC_UF894,1000_QL80_.jpg",time:'August 12th 13:00',id:2},
      {name:"The Menu",image_url:"https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg",time:'August 12th 13:00',id:3},
      {name:"The Batman",image_url:"https://m.media-amazon.com/images/I/81jIkvRtsqL._AC_SL1500_.jpg",time:'August 12th 13:00',id:4},
    ]  

    const goToMovie = (movie:Movie) => {
      navigation.navigate('Movie',{movie});
    }
  
    return (
      <SafeAreaView style={styles.container}>
  
        <View style={{ padding: 10 }}>
          <StyledText fontSize={24} fontWeight='SemiBold'>
            Good morning ,
          </StyledText>
          <StyledText fontSize={24} fontWeight='Bold'>
            Mohammed Sayed
          </StyledText>
          <Neumorphism style={[styles.neuView,{margin:20}]}>
            <MyField icon={{ name: 'search', size: 30 }} placeholder="Search"
              textColor="black" style={{ height: 60 }} keyboardType='web-search'/>
          </Neumorphism>
  
          <StyledText fontSize={24} fontWeight='Bold' style={{ marginVertical: 10 }}>
            Recommended
          </StyledText>
  
          <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(item)=>item.id.toString()} data={data} horizontal renderItem={(data) => <MovieItem onClick={goToMovie} movie={data.item} width={150} height={200}/> } />
          
          <StyledText fontSize={24} fontWeight='Bold' style={{ marginVertical: 10 }}>
            Popular
          </StyledText>
          
          <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(item)=>item.id.toString()} data={data} horizontal renderItem={(data) => <MovieItem onClick={goToMovie} movie={data.item} width={120} height={200}/> } />
  
        </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    neuView: {
      backgroundColor: "white",
      borderRadius: 20,
    },
  
    container: {
      flex: 1,
      padding: 10,
    }
  
  })

export default Home;