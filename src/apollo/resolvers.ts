import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { RESUME_DATA } from "../data/resume-data";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    // Convert the work descriptions from JSX to string and handle readonly arrays
    const work = RESUME_DATA.work.map((w) => ({
      ...w,
      description:
        typeof w.description === "string"
          ? w.description
          : w.description.props.children[0],
      badges: [...w.badges],
    }));

    // Convert readonly arrays to mutable arrays
    const badges = [...RESUME_DATA.badges];
    const skills = [...RESUME_DATA.skills];
    const projects = RESUME_DATA.projects.map((p) => ({
      ...p,
      techStack: [...p.techStack],
    }));

    // Convert readonly contact.social array to mutable array
    const contact = {
      ...RESUME_DATA.contact,
      social: RESUME_DATA.contact.social.map((s) => ({
        ...s,
        name: s.name,
        url: s.url,
      })),
    };

    // Convert readonly education array to mutable array
    const education = RESUME_DATA.education.map((e) => ({
      ...e,
      school: e.school,
      degree: e.degree,
      start: e.start,
      end: e.end,
    }));

    return {
      ...RESUME_DATA,
      work,
      badges,
      skills,
      projects,
      contact,
      education,
      // Remove certifications as they're not in the schema
      certifications: undefined,
    } as Me;
  }
}
