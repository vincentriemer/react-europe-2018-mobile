import React from "react";
import {
  Animated,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  Linking,
} from "react-native";
import { Constants, Video } from "expo";
import FadeIn from "react-native-fade-in-image";
import ReadMore from "react-native-read-more-text";
import { BorderlessButton } from "react-native-gesture-handler";
import { HeaderBackButton } from "react-navigation";
import { View as AnimatableView } from "react-native-animatable";
import _ from "lodash";

import AnimatedScrollView from "../components/AnimatedScrollView";
import NavigationBar from "../components/NavigationBar";
import { Colors, FontSizes, Icons, Layout } from "../constants";
import { RegularText, BoldText, SemiBoldText } from "../components/StyledText";
import { getSpeakerTalk, convertUtcDateToEventTimezoneHour } from "../utils";
import { findTalkData, findSpeakerData } from "../data";
import SaveButton from "../components/SaveButton";
import { Ionicons } from "@expo/vector-icons";
import Markdown from "react-native-easy-markdown";
export const Schedule = require("../data/schedule.json");
const Event = Schedule.events[0];

const CustomLink = (href, title, children) => (
  <Text
    key={title + href}
    style={{ textDecorationLine: "underline" }}
    onPress={() => Linking.openURL(href)}
  >
    {children}
  </Text>
);

const CustomizedMarkdown = ({ children, ...restProps }) => (
  <Markdown renderLink={CustomLink}>{children}</Markdown>
);

class SavedButtonNavigationItem extends React.Component {
  render() {
    const { talk } = this.props;

    return (
      <View
        style={{
          // gross dumb things
          paddingTop: Platform.OS === "android" ? 17 : 0,
          marginTop: Layout.notchHeight > 0 ? -5 : 0,
        }}
      >
        <SaveButton talk={talk} />
      </View>
    );
  }
}

export default class Details extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    let params = this.props.navigation.state.params || {};
    let speaker;
    let talk;
    const talkScreen = params.scheduleSlot || params.talk;
    if (talkScreen) {
      talk = params.scheduleSlot || params.talk;
      speakers = talk.speakers;
    } else if (params.speaker) {
      speaker = params.speaker;
      talk = getSpeakerTalk(speaker);
    }

    const { scrollY } = this.state;
    const scale = scrollY.interpolate({
      inputRange: [-300, 0, 1],
      outputRange: [2, 1, 1],
      extrapolate: "clamp",
    });
    const translateX = 0;
    const translateY = scrollY.interpolate({
      inputRange: [-300, 0, 1],
      outputRange: [-50, 1, 1],
      extrapolate: "clamp",
    });

    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 30, 200],
      outputRange: [0, 0, 1],
    });

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {Platform.OS === "ios" || Platform.OS === "dom" ? (
          <Animated.View
            style={{
              position: "absolute",
              top: -350,
              left: 0,
              right: 0,
              height: 400,
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [1, 0, 0],
                  }),
                },
              ],
              backgroundColor: Colors.blue,
            }}
          />
        ) : null}
        <AnimatedScrollView
          style={{ flex: 1, backgroundColor: "transparent" }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <View style={styles.headerContainer}>
            <Animated.View
              style={{
                transform: [{ scale }, { translateX }, { translateY }],
              }}
            >
              <FadeIn placeholderStyle={{ backgroundColor: "transparent" }}>
                {talkScreen ? (
                  <View style={styles.headerRowSpeaker}>
                    {speakers
                      ? speakers.map((speaker, i) => (
                          <View
                            key={speaker.id}
                            style={styles.headerColumnSpeaker}
                          >
                            <Image
                              source={{ uri: speaker.avatarUrl }}
                              style={styles.avatarMultiple}
                              key={speaker.id + talk.title}
                            />
                            {speaker.name.split(" ").map((name, index) => (
                              <View key={index}>
                                <SemiBoldText
                                  style={styles.headerText}
                                  key={"speakers" + speaker.id + name}
                                >
                                  {name}
                                </SemiBoldText>
                              </View>
                            ))}
                          </View>
                        ))
                      : null}
                  </View>
                ) : (
                  <Image
                    source={{ uri: speaker.avatarUrl }}
                    style={styles.avatar}
                    key={speaker.avatarUrl}
                  />
                )}
              </FadeIn>
            </Animated.View>
            {talkScreen ? null : (
              <SemiBoldText style={styles.headerText} key={speaker.id}>
                {speaker.name}
              </SemiBoldText>
            )}
            {speaker && speaker.twitter ? (
              <RegularText style={styles.headerText}>
                @{speaker.twitter || speaker.github}
              </RegularText>
            ) : null}
            {talk ? (
              <BoldText style={styles.talkTitleText}>{talk.title}</BoldText>
            ) : null}
          </View>
          <AnimatableView
            animation="fadeIn"
            useNativeDriver
            delay={Platform.OS === "ios" ? 50 : 150}
            duration={500}
            style={styles.content}
          >
            {talkScreen ? null : (
              <View>
                <SemiBoldText style={styles.sectionHeader}>Bio</SemiBoldText>
                <CustomizedMarkdown>{speaker.bio}</CustomizedMarkdown>
              </View>
            )}
            {talk ? (
              <SemiBoldText style={styles.sectionHeader}>
                {talk && talk.type === 0
                  ? "Talk description"
                  : "Workshop description"}
              </SemiBoldText>
            ) : null}
            {talk ? (
              <CustomizedMarkdown>{talk.description}</CustomizedMarkdown>
            ) : null}
            {talkScreen && speakers.length > 0 ? (
              <View>
                <SemiBoldText style={styles.sectionHeader}>
                  {talk.type === 0 ? "Speakers" : "Trainers"}
                </SemiBoldText>

                {speakers.map((speaker, i) => (
                  <View key={speaker.id}>
                    <SemiBoldText key={speaker.id + talk.title}>
                      {speaker.name}
                    </SemiBoldText>
                    <CustomizedMarkdown>{speaker.bio}</CustomizedMarkdown>
                  </View>
                ))}
              </View>
            ) : null}
            {talk ? (
              <View>
                <SemiBoldText style={styles.sectionHeader}>
                  Time and place
                </SemiBoldText>
                <RegularText>
                  {convertUtcDateToEventTimezoneHour(talk.startDate)}
                </RegularText>
                <RegularText>{talk.room}</RegularText>
              </View>
            ) : null}
          </AnimatableView>
        </AnimatedScrollView>

        <NavigationBar
          animatedBackgroundOpacity={headerOpacity}
          style={[
            Platform.OS === "android"
              ? { height: Layout.headerHeight + Constants.statusBarHeight }
              : null,
          ]}
          renderLeftButton={() => (
            <View
              style={{
                // gross dumb things
                paddingTop: Platform.OS === "android" ? 17 : 0,
                marginTop: Layout.notchHeight > 0 ? -5 : 0,
              }}
            >
              <HeaderBackButton
                onPress={() => this.props.navigation.goBack()}
                tintColor="#fff"
                title={null}
              />
            </View>
          )}
          renderRightButton={() => {
            talk ? <SavedButtonNavigationItem talk={talk} /> : null;
          }}
        />
      </View>
    );
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={handlePress}
      >
        <SemiBoldText style={{ color: Colors.blue, marginTop: 5 }}>
          Read more
        </SemiBoldText>
      </TouchableOpacity>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={handlePress}
      >
        <SemiBoldText style={{ color: Colors.blue, marginTop: 5 }}>
          Show less
        </SemiBoldText>
      </TouchableOpacity>
    );
  };
}
const markdownStyles = {
  text: {},
};
const styles = StyleSheet.create({
  container: {},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  avatarMultiple: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  content: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  markdownBio: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 300,
    height: 200,
  },
  markdownTalkDescription: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 300,
    height: 600,
  },
  headerRowSpeaker: {
    flexDirection: "row",
    height: 140,
  },
  headerColumnSpeaker: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: Colors.blue,
    paddingTop: Constants.statusBarHeight + Layout.notchHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: FontSizes.subtitle,
  },
  talkTitleText: {
    color: "#fff",
    fontSize: FontSizes.title,
    textAlign: "center",
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: FontSizes.bodyTitle,
    marginTop: 15,
    marginBottom: 3,
  },
});
