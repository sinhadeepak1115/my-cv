import { Resolver, Query } from "type-graphql";
import { Me, Work, Education, Contact, Social, Project } from "./type-defs";
import { RESUME_DATA } from "../data/resume-data";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    // Convert work data
    const work: Work[] = RESUME_DATA.work.map((w) => ({
      company: w.company,
      link: w.link,
      badges: [...w.badges],
      title: w.title,
      start: w.start,
      end: w.end,
      description:
        typeof w.description === "string"
          ? w.description
          : w.description.props.children[0],
    }));

    // Convert education data
    const education: Education[] = RESUME_DATA.education.map((e) => ({
      school: e.school,
      degree: e.degree,
      start: e.start,
      end: e.end,
    }));

    // Convert contact data
    const contact: Contact = {
      email: RESUME_DATA.contact.email,
      tel: RESUME_DATA.contact.tel,
      social: RESUME_DATA.contact.social.map(
        (s): Social => ({
          name: s.name,
          url: s.url,
        }),
      ),
    };

    // Convert projects data
    const projects: Project[] = RESUME_DATA.projects.map((p) => ({
      title: p.title,
      techStack: [...p.techStack],
      description: p.description,
      link: p.link
        ? {
            label: p.link.label,
            href: p.link.href,
          }
        : undefined,
    }));

    // Return the complete Me object
    return {
      name: RESUME_DATA.name,
      initials: RESUME_DATA.initials,
      location: RESUME_DATA.location,
      locationLink: RESUME_DATA.locationLink,
      about: RESUME_DATA.about,
      summary: RESUME_DATA.summary,
      avatarUrl: RESUME_DATA.avatarUrl,
      personalWebsiteUrl: RESUME_DATA.personalWebsiteUrl,
      badges: [...RESUME_DATA.badges],
      contact,
      education,
      work,
      skills: [...RESUME_DATA.skills],
      projects,
    };
  }
}
