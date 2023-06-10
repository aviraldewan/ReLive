import { FlatList, StyleSheet, Text, View } from 'react-native';
import FundraiserCover from '../components/FundraiserCover';
import fundraiser from '../dummy/fundraiser';

export default function Fundraiser({navigation}) {

  const renderFundraiser = ({item}) => {
    return <FundraiserCover fundraiser={item} navigation={navigation} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fundraiser}
        renderItem={renderFundraiser}
        keyExtractor={(fundraiser) => fundraiser.user_id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  
});
