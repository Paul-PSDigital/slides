import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../../src/spectacle";

import preloader from "../../src/utils/preloader";

import Interactive from "../interactive";

const images = {
  cat_jenga: require("./images/cat_jenga.jpg"),
  cat_ipad: require("./images/cat_using_ipa.jpeg"),
  cats_on_cats: require("./images/cats_on_cats.jpg"),
  cuddling_kittens: require("./images/cuddling_kittens.jpg"),
  kitten_box: require("./images/kitten_box.jpg"),
  newborn: require("./images/newborn.jpeg"),
  radiator_cat: require("./images/radiator_cat.jpeg"),
  ugly_cat: require("./images/ugly_cat.jpg")
};

preloader([
      images.cat_jenga,
      images.cat_ipad,
      images.cats_on_cats,
      images.cuddling_kittens,
      images.kitten_box,
      images.newborn,
      images.radiator_cat,
      images.ugly_cat
    ]
);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary" notes="
        Cat Using Ipad
        ---

- People that want to set up their own jenkins jobs
- Improving our current pipeline with help

        The focus of this lightning talk is to walk you through the process of the build pipeline currently at Rightster.
        From the point that a pull request is created to getting a release out the door.
        ">
            <Heading textColor="tertiary">Rightster Build Pipeline</Heading>
            <Image width="80%" src={images.cat_ipad}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="
        Radiator Cat
        ---
        - Hubster (events, locks, versions)
        - Jenkins (jobs)
        - Github (source)
        - Crossrider Plugin (version selector)
        - SALT (config management)
        - S3
        ">
            <Heading textColor="tertiary">Getting to know the infrastructure</Heading>
            <Image width="60%" src={images.radiator_cat}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="
        Cats on Cats on Cats
        ---
        When a pull request is created in git, GitHub sends a notificiation to the jenkins API. This triggers a build to be created.
        The job is allocated to one of the build slaves, which runs the unit tests and packages the code into an RPM.

        The RPM is pushed into S3 as part of the jenkins job, and then the Yum Repository is synchronised and Hubster is notified, putting the RPM
        into the Kitten Box.
        ">
            <Heading textColor="tertiary">How a buid is made</Heading>
            <Image width="60%" src={images.cats_on_cats}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="
        The Kitten Box
        ---
        Using the browser plugin you'll see a number of Pull Requests, Dev Builds and Tags that can be deployed to an environment.
        Each of these is an RPM that can be deployed to the environment by clicking on them.
        By clicking on the build a Jenkins job is triggered - which runs the salt state on the environment to update the
        relevent machines to that version.
        ">
            <Heading textColor="tertiary">Looking into the Repository</Heading>
            <Image width="60%" src={images.kitten_box}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" notes="
        Cuddling Kittens
        ---
        This gets us to a point where we can deploy all of our different RPMs onto the right hosts.
        There are also nightly jobs at this point that use the hubster API to perform automatic deploys of the
        dev builds and the tagged release candidates for testing.
        This calls the hubster API to find the versions that can be deployed, and sends those into the relevent jenkins jobs
        to perform the deployments and migrate the database.
        ">
            <Heading textColor="tertiary">Happy Services</Heading>
            <Image width="80%" src={images.cuddling_kittens} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" notes="
        Ugly Cat
        ---
        Looking at how our current solution is holding us back - we want to get to a point where we can happily
        release multiple times a day.
        We acknoledge that our current flow is too slow for us to clear testing of a release - but current approach
        would scale well with microservices.
        There are gaps between our release management process as we try to blend our top-down and bottom-up requirements
        and communicate the status of products - there may be space for better integration of JIRA, Git and Jenkins to faciliate this
        ">
            <Heading textColor="tertiary">Room for Improvement</Heading>
            <Image width="60%" src={images.ugly_cat}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes="
        Newborn
        ----
        Theres new things coming for Hubster in the future that we want to add
        - Advanced Events Integration
        - Progression of Locking API into CI
        - Spot Instances for Testing faster
        - Deploy Sources and skip Yum repo Sync
        - Pipeline Visibility
        - Shipping Containers
        - Automatic Alerts for Release Candidates
        ">
            <Heading textColor="tertiary">More Automation, More Cute Kittens, Faster Releases</Heading>
            <Image width="60%" src={images.newborn}/>
        </Slide>
      </Deck>
    );
  }
}
