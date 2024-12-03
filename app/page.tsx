import { AppBar } from "@/components/AppBar";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="w-full object-contain">
        <img
          src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-[100%]"
        />
      </div>
    </div>
  );
}
