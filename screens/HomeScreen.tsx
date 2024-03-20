import { Image, Text } from "react-native";
import colors from "../constants/colors";
import screenStyles from "../constants/screenStyles";
import TABBED_SECTIONS from "../data/localData";
import { TabbedHeaderList } from "react-native-sticky-parallax-header";
import TabbedSectionHeader from "../components/TabbedSectionHeader";
import { TabbedSectionItem } from "../components/TabbedSectionItem";
import { AntDesign } from "@expo/vector-icons";
import { servicesCategoriesItems } from "../tabs/servicesCategoriesItems";
import { CoiffureData } from "../tabs/servicesItems";

const ITEM_HEIGHT = 190;
const ITEM_MARGIN_VERTICAL = 5;

export const TABBED_SECTION_ITEM_HEIGHT =
  ITEM_HEIGHT + 2 * ITEM_MARGIN_VERTICAL;

const HomeScreen = () => {
  return (
    <>
      <TabbedHeaderList
        contentContainerStyle={{ backgroundColor: colors.coralPink }}
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={colors.coralPink}
        title="Coiffure"
        titleStyle={screenStyles.text}
        foregroundImage={{
          uri: "https://foodish-api.herokuapp.com/images/samosa/samosa9.jpg",
        }}
        parallaxHeight={100}
        tabs={servicesCategoriesItems.map(({ title }) => ({
          title,
          //   icon: <AntDesign name="stepforward" size={24} color="black" />,
        }))}
        tabTextStyle={screenStyles.text}
        sections={CoiffureData}
        tabTextContainerActiveStyle={{ backgroundColor: colors.activeOrange }}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({ item }) => <TabbedSectionItem {...item} />}
        renderSectionHeader={({ section }) => (
          <TabbedSectionHeader title={section.title} />
        )}
        getItemLayout={(_, index) => ({
          length: TABBED_SECTION_ITEM_HEIGHT,
          offset: TABBED_SECTION_ITEM_HEIGHT * index,
          index,
        })}
        updateCellsBatchingPeriod={100}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default HomeScreen;
