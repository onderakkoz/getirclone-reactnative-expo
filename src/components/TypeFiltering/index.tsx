import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/colors";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  item,
  active,
  setCat,
}: {
  item: String;
  active: String;
  setCat: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 12,
          marginRight: 12,
          justifyContent: "center",
          borderRadius: 10,
          margin: 10,
          marginVertical: 15,
          height: height * 0.044,
        },
        item === active
          ? { backgroundColor: colors.purple }
          : {
              backgroundColor: "#fff",
              borderWidth: 2,
              borderColor: "#EEEEEE",
            },
      ]}
    >
      <Text
        style={[
          { fontSize: 16, fontWeight: "bold" },
          item === active ? { color: "#fff" } : { color: colors.purple },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = () => {
  const [Type, setType] = useState<String>("Birlikte İyi Gider");

  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#fff",
        height: height * 0.072,
        shadowColor: "#000",
        shadowOffset: {
          width: 4,
          height: 8,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderBottomWidth: 2,
        borderBottomColor: "#EEEE",
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox key={item} item={item} active={Type} setCat={setType} />
        )
      )}
    </ScrollView>
  );
};

export default TypeFiltering;
