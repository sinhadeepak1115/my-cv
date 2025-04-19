import { buildSchema } from "type-graphql";
import { MeResolver } from "./resolvers";

export const createSchema = async () => {
  return buildSchema({
    resolvers: [MeResolver],
    validate: false,
    skipCheck: true,
    emitSchemaFile: false,
  });
};
