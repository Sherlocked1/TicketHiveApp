import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { MyField } from "./src/features/core/components/my_field";
import Neumorphism from "./src/features/core/components/neu_view";
import StyledText from "./src/features/core/components/styled_text";

const App = () => {

  const data = [
    { name: 'Black panther' },
    { name: 'Avatar' },
    { name: '' },
    { name: '' },
  ]

  const { width } = useWindowDimensions();


  const renderMovie = (item: string) =>
    <TouchableOpacity activeOpacity={0.7} style={{ width: 150, height: 200, marginHorizontal: 10, borderRadius: 20 }}>
      <Image
        source={{ uri: "https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" }}
        style={{ flex: 1, backgroundColor: '#3e3', borderRadius: 20 }}
      />

      <StyledText fontWeight='SemiBold' fontSize={16}>{item}</StyledText>
      <StyledText fontWeight='ExtraLight' fontSize={14}>
        10 august, 2022 - 14:00
      </StyledText>
    </TouchableOpacity>

  const renderPopularMovie = (item: string) =>
    <TouchableOpacity activeOpacity={0.7} style={{ width: 100, height: 200, marginHorizontal: 10, borderRadius: 20 }}>
      <Image
        source={{ uri: "https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" }}
        style={{ flex: 1, backgroundColor: '#3e3', borderRadius: 20 }}
      />

      <StyledText fontWeight='SemiBold' numberOfLines={1} fontSize={16}>{item}</StyledText>
      <StyledText fontWeight='ExtraLight' numberOfLines={1} fontSize={14}>
        10 august, 2022 - 14:00
      </StyledText>
    </TouchableOpacity>



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
            textColor="black" style={{ height: 60 }} />
        </Neumorphism>

        <StyledText fontSize={24} fontWeight='Bold' style={{ marginVertical: 10 }}>
          Recommended
        </StyledText>

        <FlatList showsHorizontalScrollIndicator={false} data={data} horizontal renderItem={(data) => renderMovie(data.item.name)} />
        
        <StyledText fontSize={24} fontWeight='Bold' style={{ marginVertical: 10 }}>
          Popular
        </StyledText>
        
        <FlatList showsHorizontalScrollIndicator={false} data={data} horizontal renderItem={(data) => renderPopularMovie(data.item.name)} />

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

export default App;