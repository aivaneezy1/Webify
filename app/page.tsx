"use client"
import HeroComponent from "./(Components)/Hero/Hero";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
export default function Home() {
  const { isSignedIn } = useUser();
  const storeUser = useMutation(api.createUser.createUserTable)
  const [userStored, setUserStored] = useState(true); // Track if user was stored

  useEffect(() => {
    const handleStoringUser = async () => {
      if (isSignedIn && userStored) {
        try {
          storeUser({});
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
