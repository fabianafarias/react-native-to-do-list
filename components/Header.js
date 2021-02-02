import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = ({title}) => {
  return (
    <View style={styles.header}>     
      <Icon style={styles.iconView}
            name="shopping-cart"
            size={20}
            color="white"           
          />
       <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List', 
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  iconView: {
    textAlign: 'center',
    marginTop: 5,
    marginRight: 15,    
  }
  
});

export default Header;
