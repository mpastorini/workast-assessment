import {pick} from "ramda";

export default (user) => pick(["_id", "name", "avatar"], user);