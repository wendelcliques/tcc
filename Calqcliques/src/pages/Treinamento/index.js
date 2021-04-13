import React, { useState} from 'react'
import { FlatList,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableWithoutFeedback,
    View, Text } from 'react-native'

    const fontStyles = ["normal", "italic"];
const fontVariants = [
  undefined,
  "small-caps",
  "oldstyle-nums",
  "lining-nums",
  "tabular-nums",
  "proportional-nums"
];
const fontWeights = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
];
const textAlignments = ["auto", "left", "right", "center", "justify"];
const textDecorationLines = [
  "none",
  "underline",
  "line-through",
  "underline line-through",
  
];
const textDecorationStyles = ["solid", "double", "dotted", "dashed"];
const textTransformations = ["none", "uppercase", "lowercase", "capitalize"];
const textAlignmentsVertical = ["auto", "top", "bottom", "center"];
const writingDirections = ["auto", "ltr", "rtl"];

const Treinamento = () => {

    const [fontSize, setFontSize] = useState(10);
    const [fontStyleIdx, setFontStyleIdx] = useState(0);
    const [fontWeightIdx, setFontWeightIdx] = useState(0);
    const [lineHeight, setLineHeight] = useState(10);
    const [textAlignIdx, setTextAlignIdx] = useState(0);
    const [textDecorationLineIdx, setTextDecorationLineIdx] = useState(0);
    const [includeFontPadding, setIncludeFontPadding] = useState(false);
    const [textVerticalAlignIdx, setTextVerticalAlignIdx] = useState(0);
    const [fontVariantIdx, setFontVariantIdx] = useState(0);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [textDecorationStyleIdx, setTextDecorationStyleIdx] = useState(0);
    const [textTransformIdx, setTextTransformIdx] = useState(0);
    const [writingDirectionIdx, setWritingDirectionIdx] = useState(0);
    const [textShadowRadius, setTextShadowRadius] = useState(0);
    const [textShadowOffset, setTextShadowOffset] = useState({
      height: 0,
      width: 0
    });

    return (
        <View style={styles.container}>
            <Text
        style={[
          styles.paragraph,
          {
            fontSize,
            fontStyle: fontStyles[fontStyleIdx],
            fontWeight: fontWeights[fontWeightIdx],
            lineHeight,
            textAlign: textAlignments[textAlignIdx],
            textDecorationLine: textDecorationLines[textDecorationLineIdx],
            textTransform: textTransformations[textTransformIdx],
            textAlignVertical: textAlignmentsVertical[textVerticalAlignIdx],
            fontVariant: [fontVariants[fontVariantIdx]],
            letterSpacing,
            includeFontPadding,
            textDecorationStyle: textDecorationStyles[textDecorationStyleIdx],
            writingDirection: writingDirections[writingDirectionIdx],
            textShadowOffset,
            textShadowRadius
          }
        ]}
      >Treinamento</Text>

      <ScrollView>
          <View>
          <CustomPicker
            label="Text Transform"
            data={textTransformations}
            currentIndex={textTransformIdx}
            onSelected={setTextTransformIdx}
          />
          </View>
      </ScrollView>
        </View>
    )
}

const CustomPicker = ({ label, data, currentIndex, onSelected }) => {
    return (
      <>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.wrapperHorizontal}>
          <FlatList
            bounces
            horizontal
            data={data}
            keyExtractor={(item, idx) => String(item)}
            renderItem={({ item, index }) => {
              const selected = index === currentIndex;
              return (
                <TouchableWithoutFeedback onPress={() => onSelected(index)}>
                  <View
                    style={[
                      styles.itemStyleHorizontal,
                      selected && styles.itemSelectedStyleHorizontal
                    ]}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: selected ? "black" : "grey",
                        fontWeight: selected ? "bold" : "normal"
                      }}
                    >
                      {item 
                      
                    }
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    paragraph: {
      color: "black",
      textDecorationColor: "yellow",
      textShadowColor: "red",
      textShadowRadius: 1,
      margin: 24
    },
    wrapperHorizontal: {
      height: 54,
      justifyContent: "center",
      color: "black",
      marginBottom: 12
    },
    itemStyleHorizontal: {
      marginRight: 10,
      height: 50,
      padding: 8,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 25,
      textAlign: "center",
      justifyContent: "center"
    },
    itemSelectedStyleHorizontal: {
      borderWidth: 2,
      borderColor: "#DAA520"
    },
    platformContainer: {
      marginTop: 8,
      borderTopWidth: 1
    },
    platformContainerTitle: {
      marginTop: 8
    },
    title: {
      fontWeight: "bold",
      marginVertical: 4
    }
  });
export default Treinamento
