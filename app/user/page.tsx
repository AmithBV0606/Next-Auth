import { AppBar } from "@/components/AppBar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

const getData = async () => {
  const data = await getServerSession(NEXT_AUTH);
  return data;
};

export default async function User() {
  const data = await getData();

  return (
    <div>
      <AppBar />
      {JSON.stringify(data)}
    </div>
  );
}