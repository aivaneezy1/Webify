"use client"
import HeroComponent from "./(Components)/Hero/Hero";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

import { UseSelector, useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "./redux/features/userProfile-slice";
import { AppDispatch, RootState } from "./redux/store";

export default function Home() {
  const { isSignedIn, user } = useUser();
  const storeUser = useMutation(api.createUser.createUserTable)
  // Track if user was stored
  const [userStored, setUserStored] = useState(true);

  // useSelector is a hook that allows you to access the current state from the Redux stor
  const userProfile = useSelector((state: RootState) => state.userProfile.value)

  //  Dispatch  is a function used to send actions to the Redux store. When you call dispatch, it triggers the reducer associated with the action and updates the state accordingly.
  const dispatch = useDispatch<AppDispatch>();



  useEffect(() => {
    const handleStoringUser = async () => {
      if (isSignedIn && userStored) {
        try {
          storeUser({});

          // set global user info in redux
          dispatch(setUserInfo({
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl

          }))
          setUserStored(false);
        } catch (err) {
          console.error(`Error occurred: ${err}`);
          throw new Error(`message:${err}`)
        }
      }

    }
    handleStoringUser();
  }, [isSignedIn, storeUser])


  return (
    <div>
      <HeroComponent />

    </div>
  );
}
