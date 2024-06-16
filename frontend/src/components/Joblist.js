import React from "react";
import Jobcard from "./Jobcard";

const jobList = [
  {
    id: 1,
    title: "Art Director",
    company: "Primary",
    location: "Anywhere",
    description:
      "We are searching for somebody who is competent and dependable for driving plan ventures for promoting campaign",
    time: "15 hours ago",
  },
  {
    id: 2,
    title: "3D Modelling",
    company: "Prin Talent",
    location: "Anywhere",
    description:
      "Are you a 3D modeler? offer assistance us total a few work professionally",
    time: "15 hours ago",
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "High Star",
    location: "Anywhere",
    description:
      "High star is looking for two brand Designer to join our design team",
    time: "15 hours ago",
  },
  {
    id: 4,
    title: "UI/UX Design",
    company: "CTI Group",
    location: "Anywhere",
    description:
      "Looking for Experience ui/ux designer to work for website CTI group",
    time: "15 hours ago",
  },
  {
    id: 5,
    title: "Web Designer",
    company: "Stater Indonesia",
    location: "Anywhere",
    description: "We are looking for designer website",
    time: "15 hours ago",
  },
  {
    id: 6,
    title: "Ilustrator and Visual Design",
    company: "UnSensor",
    location: "Anywhere",
    description:
      "we are looking for talent who are able for apply their creative ideas in visual design and ilustrator",
    time: "15 hours ago",
  },
  {
    id: 7,
    title: "Logo Design",
    company: "Stucel",
    location: "Anywhere",
    description:
      "We are looking for propesional logo design companny, make sure u have a great portfolio for apply in the project",
    time: "15 hours ago",
  },
  {
    id: 8,
    title: "Character Game Design",
    company: "Yiheng Hoheng",
    location: "Anywhere",
    description:
      "Character Designer with expertise in gamification, animation & character design",
    time: "15 hours ago",
  },
  {
    id: 9,
    title: "Product Designer",
    company: "Senc",
    location: "Anywhere",
    description:
      "We need people who are competent in the field of packaging design",
    time: "15 hours ago",
  },
];

const Joblist = () => {
  return (
    <div className=" bg-black min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <Jobcard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
            time={job.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Joblist;
