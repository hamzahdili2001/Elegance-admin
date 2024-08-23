import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";

import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";


import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
    const authResult = auth();

    if (!authResult || !authResult.userId) {
        redirect("/sign-in");
    }

    const userId = authResult.userId;

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    })

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores}/>
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;