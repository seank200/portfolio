import { createIntlDict } from "@lib/i18n";
import ExpTag from "../ExpTag";

export const ktDict = createIntlDict(
  {
    role: "Robot Platform Server Developer",
    division: "Physical AI Platform Team",
    affiliation: "Tech Innovation Group, KT",
    location: "Seoul, South Korea 🇰🇷",
    category: "Work Experience",
    details: [
      <>
        Designed and deployed a new data pipeline with a message-queue based
        architecture for real-time monitoring and analysis of robot telemetry
        data. Set up a distributed, scalable RabbitMQ cluster for routing 10~20K
        messages/sec (20-30KB/sec) reliably to persistent RDBs, logging and
        analysis services. Set up TLS and OAuth for security.{" "}
        <ExpTag>#RabbitMQ</ExpTag>
        <ExpTag>#Redis</ExpTag>
        <ExpTag>#K8S</ExpTag>
      </>,
      <>
        Designed architecture and developed a robot control system deployed on
        edge networks for providing fine-grained control and monitoring of
        robots performing collaborative(2+ robots of different
        models/manufacturers) missions. Defined message interface for robots to
        communicate with edge servers via MQTT protocol to even accomodate
        robots with limited hardware resources. <ExpTag>#MQTT</ExpTag>
        <ExpTag>#RabbitMQ</ExpTag>
        <ExpTag>#Spring</ExpTag>
        <ExpTag>#PostgreSQL</ExpTag>
      </>,
      <>
        Developed web backend application for mass deployment, monitoring, and
        control of robots in various commerical & industrial sectors including:
        cleaning, patrol, disinfection, cooking and farming. Implemented
        scheduler module for managing and assigning repetitive tasks to robots,
        which involved orchestration of multiple microservices for device
        availability checks, mission/route planning, monitoring, and status
        report/alert services. <ExpTag>#Java</ExpTag>
        <ExpTag>#SpringFramework</ExpTag>
        <ExpTag>#PostgreSQL</ExpTag>
        <ExpTag>#Kafka</ExpTag>
      </>,
      <>
        Managed networking and infrastructure of a distributed, scalable web app
        consisting of 60+ microservices hosted on cloud K8S clusters. Configured
        routing rules, TLS settings and firewall policies to adhere to corporate
        network security compliance rules. Set up CI/CD pipelines and updated
        K8S config to handle microservice module deployment pipelines.
        Configured load balancers, health checks, scaling rules for high
        availability. <ExpTag>#K8S</ExpTag>
        <ExpTag>#Docker</ExpTag>
        <ExpTag>#Jenkins</ExpTag>
        <ExpTag>#Networking</ExpTag>
        <ExpTag>#Bash</ExpTag>
      </>,
    ],
  },
  {},
);
