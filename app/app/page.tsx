import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

function Profile({ AvatarProps }: AvatarProps) {
  return <Avatar {...AvatarProps} />;
}

interface AvatarProps {
  person: {
    name: string;
    imageId: string;
  };
  size?: number;
}

function Avatar({ person, size = 100 }: AvatarProps) {
  return (
    <img
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
