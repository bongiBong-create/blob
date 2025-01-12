import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import mobileAvatar from "../../public/avatar-mobile.jpg";
import Blob from "../../components/blob";

export default function Home() {
  return (
    <section className="animate">
      <div className="container">
        <div className="avatar">
          <Image src={avatar} alt="Picture of the author" />
        </div>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
      </div>
      <div className="mobile-container">
        <div className="mobile-avatar">
          <Image src={mobileAvatar} alt="Picture of the author" />
        </div>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
      </div>
    </section>
  );
}
