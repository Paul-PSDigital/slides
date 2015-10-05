import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../../src/spectacle";

import preloader from "../../src/utils/preloader";

import Interactive from "../interactive";

const images = {
  swiping: require("./swiping.jpg")
};

preloader([images.swiping]);

export default class extends React.Component {
  render() {
    return (
        <Deck transition={["zoom", "slide"]} transitionDuration={800}>
          <Slide transition={["zoom"]} bgColor="primary" notes="
            Technologies used to send low latency messages between services.
            Profobuf - one of the most famous is Google Implementation of this concept, all server-to-server messages within
            Google are defined with Profobuffers (Over 200,000 messages defined).

            Previously worked at RentalCars.com where we were implementing Google Protobuffers as we were preparing our new API's to take
            over from our legacy platform, and link together all our internal services - CRM/CMS/UID/CV/JDAM
          ">
            <Heading size={0.6} fit caps lineHeight={1} textColor="black">
              Getting Thrifty!
            </Heading>
            <Heading size={0.7} bold fit caps textColor="tertiary">
              AND SOME STUFF THAT YOU DIDN'T KNOW THAT YOU DIDN'T KNOW!
            </Heading>
              <Text bold caps textColor="black">Language Neutral Communication between APIs</Text>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="tertiary" notes="
          The effort to reduce the payload between servers and maintain a contract between services is not a new idea.
          Began with ASN1, and has been picked up by COM, CORBA, Thift since then.
          Generally there are not open source implementations of the older standards.
          ">
            <Heading size={1} fit textColor="primary" textFont="secondary">
              History Time
            </Heading>
          </Slide>

          <Slide transition={["slide", "zoom"]} bgColor="tertiary" notes="">
            <Image width="60%" src={images.swiping}/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="
          Abstract Syntax Notation 1
          Doesnt define a protocol - but sets rules for structure of protocol data units (PDU)
            Basic Encoding Rules (BER)
            Canonical Encoding Rules (CER)
            Distinguished Encoding Rules (DER)
            XML Encoding Rules (XER)
            Canonical XML Encoding Rules (CXER)
            Extended XML Encoding Rules (E-XER)
            Packed Encoding Rules (PER, unaligned: UPER, canonical: CPER)
            Generic String Encoding Rules (GSER)
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              ASN1
            </Heading>
            <List textColor="tertiary">
              <ListItem>ISO Standard Created in 1984 </ListItem>
              <ListItem>Describes Rules and Structures for Encoding, Transmitting and Decoding Messages</ListItem>
              <ListItem>^^ Send the same message in XML (XER), Binary (BER), Strings (GSER)</ListItem>
              <ListItem>Largely used in Communications (UMTS/GSM/VOIP)</ListItem>
            </List>
        </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary" notes="
          Example of the structure that can define the PDU in ASN1
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              ASN1 - Example Structure
            </Heading>
            <CodePane
                lang="javascript"
                source={require("raw!./asn.example")}
                margin="20px auto"/>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary" notes="
          Example of the data that is sent over the wire based on the different encoding rule used
          Note that XML is much larger due to the schema being displayed twice and also represented as a string
          Packed Encoding Rules strips out the schema data as both the client and sender already know the schema
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              PDU in XML
            </Heading>
            <CodePane
                lang="javascript"
                source={require("raw!./asn-xml.example")}
                margin="20px auto"/>
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              PDU in DER
            </Heading>
            <CodePane
                lang="javascript"
                source={require("raw!./asn-der.example")}
                margin="20px auto"/>
            <CodePane
                lang="javascript"
                source={require("raw!./asn-derpacked.example")}
                margin="20px auto"/>
          </Slide>
          <Slide transition={["spin"]} bgColor="primary" notes="
          ASN Generators take the message format and generate the classes for the languages that it is to be implemented in
          This is quite different to the standard approach to defining objects in the language the application is written in but
          means the domain models can be shared across multiple languages.
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              Why isn't everyone doing this?
            </Heading>
            <List textColor="tertiary">
              <ListItem>Creating and Integrating with a JSON API takes 0 Brains</ListItem>
              <ListItem>Proprietry Implementations</ListItem>
              <ListItem>Backwards Compatibility</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="
          Quick Look at the Competition - Apache Thrift, Protobuf and Cap'n Proto

          Apache Thrift- Published by Facebook, 2007

          Protobuf - Google's implementation, version 2 of this was made open source without Google Libraries
          Lots of guides in Russian about how to use Protobuffers. Most portable with massive language support.

          Cap'n Proto - Kenton Varda, V2 Protobuffers developer, no Encoding/Decoding Stage. C++ Only.

          Simple Binary Encoding - Created by LMAX for super fast financial trading

          Flatbuffers - C++, Java, C# and Go

          Performance Benchmarks are hard to find - as each implementation is different so you the results will depend on the dataset.
          Limitation at the moment is the languages that these are defined in.
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              Newer, Shinier
            </Heading>

            <Text bold caps textColor="black">Facebook, Google, LMAX and the lead developer from protobuffers v2 have all published:</Text>
            <List textColor="tertiary">
              <ListItem>Apache Thrift (General Internal API's)</ListItem>
              <ListItem>Protobuf (General Internal API's)</ListItem>
              <ListItem>Cap'n Proto (General Internal API's)</ListItem>
              <ListItem>Flatbuffers (Gaming)</ListItem>
              <ListItem>SBE (Finance)</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="primary" notes="
          Kick up the GitHub Project and generate the sample .thrift file
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              Time to write some Hello Worlds!
            </Heading>
            <Text>
              01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="
          Depending on the time here we can go into just a simple usage of this tutorial or go for a longer challenge.
          ">
            <Heading size={1} bold  lineHeight={1} caps textColor="tertiary">
              Setup the Environment
            </Heading>
            <List textColor="tertiary">
              <ListItem>Git Clone: https://github.com/thepauleh/slides</ListItem>
              <ListItem>cd presentation/thrift/tutorial/</ListItem>
              <ListItem>Follow Instructions in README.md</ListItem>
            </List>
          </Slide>
        </Deck>
    );
  }
}
