import { Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { sliderimages } from '../constants';

export default function Imageslider() {
  return (
    <Carousel
      data={sliderimages}
      renderItem={itemCard}
      width={wp(100)}
      height={hp(22)}
      loop={true}
      autoPlay={true}
      autoPlayInterval={4000}
      scrollAnimationDuration={1000}
    />
  );
}

const itemCard = ({ item }) => (
  <View style={{ width: wp(90), height: hp(22), borderRadius: 20, overflow: 'hidden', alignSelf: 'center' }}>
    <Image
      source={item.image}
      style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 20 }}
    />
  </View>
);
