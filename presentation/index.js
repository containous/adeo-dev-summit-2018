// Import React
import React from "react";

// Import Spectacle Core tags
import {Appear, Code, Deck, Heading, Image, Link, List, ListItem ,S, Slide, Spectacle, Text, Notes} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
    traefik: require("../assets/figures/traefik.logo.svg"),
    asterix: require("../assets/asterix.jpg"),
    asterix_premise: require("../assets/asterix-premise.jpg"),
    charlie: require("../assets/where-is-charlie.jpg"),
    why: require("../assets/why.jpg"),
    provider_kubernetes: require("../assets/providers-logo/kubernetes.png"),
    provider_docker_swarm: require("../assets/providers-logo/docker-swarm.png"),
    provider_docker: require("../assets/providers-logo/docker.png"),
    provider_mesos: require("../assets/providers-logo/mesos.png"),
    provider_marathon: require("../assets/providers-logo/marathon.png"),
    provider_rancheros: require("../assets/providers-logo/rancher-os.png"),
    provider_ec2: require("../assets/providers-logo/ec2.png"),
    provider_ecs: require("../assets/providers-logo/ecs.png"),
    provider_servicefabric: require("../assets/providers-logo/service-fabric.png"),
    provider_consul: require("../assets/providers-logo/consul.png"),
    provider_netflix_oss: require("../assets/providers-logo/netflix_oss.png"),
    provider_etcd: require("../assets/providers-logo/etcd.png"),
    provider_zookeeper: require("../assets/providers-logo/zookeeper.png"),
    provider_dynamodb: require("../assets/providers-logo/dynamodb.png"),
    reverse_proxy: require("../assets/reverse-proxy.png"),
    matrix_if_i_told_you: require("../assets/what-if-I-told-you.jpg"),
    need_help: require("../assets/yes-help-please.jpg"),
    evolution_of_software_design: require("../assets/evolution-of-software-design.jpg"),
    traefik_architecture: require("../assets/figures/traefik-architecture.svg"),
    traefik_architecture_simplified: require("../assets/figures/architecture-simplified.svg"),
    traefik_architecture_provider: require("../assets/figures/architecture-at-a-glance-provider.svg"),
    traefik_architecture_entrypoints: require("../assets/figures/architecture-at-a-glance-entrypoints.svg"),
    traefik_architecture_backends: require("../assets/figures/architecture-at-a-glance-backends.svg"),
    traefik_architecture_frontends: require("../assets/figures/architecture-at-a-glance-frontends.svg"),
    traefik_internal_architecture: require("../assets/figures/architecture-overview.svg"),
    traefik_architecture_in_practice: require("../assets/figures/architecture-at-a-glance-in-practice.svg"),
    boring: require("../assets/boring.jpg"),
    celebrate: require("../assets/happy.jpg"),
    handson: require("../assets/hands-on.jpg"),
    demo_1: require("../assets/figures/demo-example-1.png"),
    demo_2: require("../assets/figures/demo-example-2.png"),
    dashboard: require("../assets/web.frontend.png"),
    dashboard_2: require("../assets/traefik-health.png"),
    cluster: require("../assets/cluster.jpg"),
    k8s: require("../assets/kubernetes.svg"),
    ingress_controller: require("../assets/ingress_controller.png"),
    deployment: require("../assets/deployment.png"),
    service: require("../assets/service.png"),
    ingress: require("../assets/ingress.png"),
    k8s_option: require("../assets/k8sconfig.png"),
    dns_challenge: require("../assets/figures/lets-encrypt-dns-challenge.png"),
    http_challenge: require("../assets/figures/lets-encrypt-http-challenge.png"),
};

preloader(images);

const theme = createTheme({
    primary: "#37ABC8",
    white: "#e2e2e2",
    secondary: "#1F2022",
    tertiary: "#e2e2e2",
    quartenary: "#CECECE",
    fifth: "#cccccc"
}, {
    primary: "Montserrat",
    secondary: "Lobster Two",
    third: "Rancho"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["slide"]} transitionDuration={300} theme={theme}>

                <Slide bgColor="white">
                    <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit height="200"/>
                    <Heading size={2} textColor="primary" textFont={"third"}>
                        Reverse Proxy Made Simple
                    </Heading>
                    <Text textFont={"secondary"} margin="40" fit>Gérald Croes (@geraldcroes) — Julien Salleyron (@juguul)</Text>
                    <Text textFont={"secondary"} margin="40">ADEO Dev Summit 2018</Text>
                </Slide>

                <Slide>
                    <Heading type="2" textColor={"tertiary"}>
                        $ cat speakers
                    </Heading>
                    <List fit textColor="white">
                        <ListItem>Developers @ <a href="https://containo.us">Containous</a></ListItem>
                        <ListItem>Worst DIYers ever ...</ListItem>
                        <ListItem>... and let's not talk about gardening!</ListItem>
                        <ListItem>We used to have real jobs</ListItem>
                        <ListItem>Developer, Lead Developer, Software Architect, CIO, CEA, ...</ListItem>
                    </List>
                </Slide>

                <Slide bgColor={"white"}>
                    <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit />
                </Slide>

                <Slide>
                    <Heading>Part 1 - Why?</Heading>
                    <Image src={images.why.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                    <Text textColor="quartenary" textFont={"third"}>Why, Mr Anderson?</Text>
                </Slide>

                <Slide>
                    <Heading textFont={"third"} fit>Evolution of Software Design</Heading>
                    <Image src={images.evolution_of_software_design.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide>
                    <Heading textFont={"third"} fit>The Premise of Microservices...</Heading>
                    <Image src={images.asterix_premise.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide>
                    <Heading textFont={"third"} fit>...and what happens</Heading>
                    <Image src={images.asterix.replace("/", "")} margin="0px auto 20px" fit height="300"/>
                </Slide>

                <Slide>
                    <Image src={images.need_help.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide>
                    <Heading textFont={"third"}>Where is the service?</Heading>
                    <Image src={images.charlie.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor="white">
                    <Heading textFont={"third"} textColor={"primary"}>Tools of the Trade</Heading>
                    <Image src={images.provider_docker.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_docker_swarm.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_kubernetes.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_mesos.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_marathon.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_rancheros.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_ec2.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_ecs.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_servicefabric.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_consul.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_netflix_oss.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_etcd.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_zookeeper.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_dynamodb.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                </Slide>

                <Slide>
                    <Heading size={"3"} textColor={"tertiary"} fit textFont={"third"}>What If I Told You</Heading>
                    <Image src={images.matrix_if_i_told_you.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                    <Text textColor={"quartenary"}>That You Don't Have to Write This Configuration File...?</Text>
                </Slide>


                <Slide bgColor={"white"}>
                    <Heading textFont={"third"} textColor={"primary"}>Here Comes Traefik!</Heading>
                    <Image src={images.traefik_architecture.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} fit textFont={"third"}>Part 2 - Core Concepts</Heading>
                    <Image src={images.boring.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} fit textFont={"third"}>Remember the Diagram?</Heading>
                    <Image src={images.traefik_architecture.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>Let's Simplify</Heading>
                    <Image src={images.traefik_architecture_simplified.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>Providers</Heading>
                    <Image src={images.traefik_architecture_provider.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>Entrypoints</Heading>
                    <Image src={images.traefik_architecture_entrypoints.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>Backends</Heading>
                    <Image src={images.traefik_architecture_backends.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>Frontends</Heading>
                    <Image src={images.traefik_architecture_frontends.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>At a Glance</Heading>
                    <Image src={images.traefik_internal_architecture.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>In Practice</Heading>
                    <Image src={images.traefik_architecture_in_practice.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"} textFont={"third"}>End of Part 2</Heading>
                    <Image src={images.celebrate.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>Part 3 - Hands On</Heading>
                    <Image src={images.handson.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>Deploying a Chat</Heading>
                    <Image src={images.demo_1.replace("/", "")} margin="0px auto 20px" fit height="150"/>
                </Slide>

                <Slide>
                    <Image src={images.dashboard.replace("/", "")} margin="0px auto 20px" fit height="700"/>
                </Slide>

                <Slide>
                    <Image src={images.dashboard_2.replace("/", "")} margin="0px auto 20px" fit height="700"/>
                </Slide>

                <Slide>
                    <Heading size={"4"} textColor={"tertiary"} fit textFont={"third"}>The Cross-Origin Conundrum</Heading>
                    <Image src={images.demo_2.replace("/", "")} margin="0px auto 20px" fit height="450"/>
                </Slide>

                <Slide bgColor="white">
                    <Heading fit textColor="primary" textFont={"third"}>The HTTP Challenge</Heading>
                    <Image src={images.http_challenge.replace("/", "")} margin="0px auto 20px" fit width="980"/>
                </Slide>

                <Slide bgColor="white">
                    <Heading fit textColor="primary" textFont={"third"}>The DNS Challenge</Heading>
                    <Image src={images.dns_challenge.replace("/", "")} margin="0px auto 20px" fit width="980"/>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>Season 2</Heading>
                    <Text fit textFont={"third"} textColor={"fifth"}>TRAILER</Text>
                </Slide>
                <Slide>
                    <Image src={images.cluster.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>
                <Slide>
                    <Image src={images.k8s.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>
                <Slide>
                    <Image src={images.deployment.replace("/", "")} margin="0px auto 20px" fit height="300"/>
                    <Image src={images.service.replace("/", "")} margin="20px 20px 20px 20px" fit height="200"/>
                </Slide>
                <Slide>
                    <Image src={images.ingress.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>
                <Slide>
                    <Image src={images.ingress_controller.replace("/", "")} margin="0px auto 20px" fit height="600"/>
                </Slide>
                <Slide>
                    <Image src={images.k8s_option.replace("/", "")} margin="0px auto 20px" fit height="200"/>
                </Slide>
                <Slide>
                    <Image src={images.dashboard.replace("/", "")} margin="0px auto 20px" fit height="700"/>
                </Slide>
                <Slide>
                    <Heading fit textFont={"third"}>Coming soon in Træfik</Heading>
                </Slide>
                <Slide>
                    <Heading fit textFont={"third"}>Already available in Træfik</Heading>
                <Heading fit textFont={"primary"} type="strikethrough"><S type="strikethrough">Coming soon</S></Heading>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>Part 4  Before We Leave</Heading>
                    <Text fit textFont={"third"} textColor={"fifth"}>If we can catch our train ... like in "no strike today"</Text>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading fit textFont={"third"} textColor={"secondary"}>We Missed Talking About ...</Heading>
                    <Text fit caps textColor={"primary"}>GRPC Circuit Breakers</Text>
                    <Text fit caps textFont="secondary" textColor={"secondary"}>Cluster Mode Health Checks</Text>
                    <Text fit caps textColor={"primary"}>SSL redirect Auth Forward Custom Error Pages Custom Headers</Text>
                    <Text fit caps textColor={"secondary"}>Proxy Protocol Image Docker Multi Arch HSTS</Text>
                    <Text fit caps textColor={"primary"}>Rate Limiting Dynamic TLS Certificate</Text>
                    <Text fit caps textColor={"secondary"}>Wildcard Certificates Zipkin Kubernetes Secrets</Text>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>The Project</Heading>
                    <Heading size={1} fit caps>
                        15,800+ ⭐
                    </Heading>
                    <Heading size={2} fit caps>
                        100M+ ⬇️
                    </Heading>
                    <Heading size={1} fit caps >
                        1400+ LGTM, 280+ 👷
                    </Heading>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>I've Found A Bug!</Heading>
                    <Code>./traefik bug</Code>
                    <Text textFont={"third"} textColor={"fifth"}>Autofills the issue template (environment, configuration files, ...)</Text>
                </Slide>

                <Slide>
                    <Heading fit textFont={"third"}>Thank You!</Heading>
                    <Text fit textFont={"third"} textColor={"fifth"}>And sorry for the lack of meme in the last slide</Text>
                </Slide>
            </Deck>
        );
    }
}
