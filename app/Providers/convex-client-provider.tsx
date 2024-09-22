"use client"
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import Loading from "../utils/loading-screen";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!


const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider publishableKey={`${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}`}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <AuthLoading>
                    <div className="flex justify-center items-center h-screen">
                        <Loading />
                    </div>
                </AuthLoading>
                <Authenticated>
                    {children}
                </Authenticated>
                <Unauthenticated>
                    {children}
                </Unauthenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}