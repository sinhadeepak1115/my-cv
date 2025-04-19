import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { RESUME_DATA } from "../data/resume-data";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    // Convert the work descriptions from JSX to string
    const work = RESUME_DATA.work.map((w) => ({
      ...w,
      description:
        typeof w.description === "string"
          ? w.description
          : w.description.props.children[0],
    }));

    return {
      ...RESUME_DATA,
      work,
      // Remove certifications as they're not in the schema
      certifications: undefined,
    } as Me;
  }
}
