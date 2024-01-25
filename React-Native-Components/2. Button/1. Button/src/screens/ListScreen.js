import { FlatList, StyleSheet, Text } from "react-native";

export default function ListScreen(){

    const friends = [
        {name: "friend  Nr. 1", age: "35"},
        {name: "friend  Nr. 2", age: "36"},
        {name: "friend  Nr. 3", age: "37"},
        {name: "friend  Nr. 4", age: "38"},
        {name: "friend  Nr. 5", age: "39"},
        {name: "friend  Nr. 6", age: "31"},
        {name: "friend  Nr. 7", age: "32"}
    ]

    return (
        <FlatList 
            keyExtractor={(friend)=>friend.name}
            data={friends} 
            renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name}, age: {item.age} </Text>
        }}>
        </FlatList>)
    
}

const styles = StyleSheet.create({
    textStyle: {
      marginBottom: 50
    }
});