import LeftSideBar from "@/components/layout/LeftSideBar";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>      
      <UserButton/>
    </div>
  )
}
