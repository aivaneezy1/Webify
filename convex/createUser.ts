import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUserTable = mutation({
  args: {},
  handler: async (ctx, args) => {
    // if user not logged in call this function. Need to throw an error
    const identity = await ctx.auth.getUserIdentity();

    // check if user exist already or not
    const userExist = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity?.tokenIdentifier ?? "")
      )
      .unique();
    if (userExist) {
      return userExist._id;
    }
    const newUser = await ctx.db.insert("users", {
      firstName: identity?.givenName ?? "",
      lastName: identity?.familyName ?? "",
      email: identity?.email ?? "",
      imageUrl: identity?.pictureUrl ?? "",
      tokenIdentifier: identity?.tokenIdentifier ?? "",
    });

    console.log("user", newUser);
    console.log("identity", identity);
    return newUser;
  },
});

// // Getting user identity
// export const getCurrentUser = query({
//   args: {},
//   handler: async (ctx, args) => {
//     const getCurrentUser = await ctx.auth.getUserIdentity();
//     if (getCurrentUser === null) {
//       throw new Error("Not authenticated");
//     }
//     return getCurrentUser;
//   },
// });
