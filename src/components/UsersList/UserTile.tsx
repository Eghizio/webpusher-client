import { useState } from "react";
import { Pointer } from "lucide-react";
// import { MessageCircleHeart } from "lucide-react";
// import { Page, useNavigation } from "@/context/NavigationContext";
import { Button } from "./Button";
import type { User } from "./types";
import { Api } from "@/api/Api";

interface Props {
  user: User;
}

const truncateName = (name: string, maxLength = 24) =>
  name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;

// Todo: Do we need message button here tho?
export const UserTile = ({ user }: Props) => {
  const [isPokeDisabled, setIsPokeDisabled] = useState(false); // set for single user.
  // const { navigateTo } = useNavigation();

  const poke = (userId: string) => {
    setIsPokeDisabled(true);
    Api.pokeUser(userId);
    setTimeout(() => setIsPokeDisabled(false), 3_000);
  };

  // const message = (_userId: number) => {
  //   navigateTo(Page.Dashboard);
  // };

  return (
    <li className="flex items-center justify-between py-2">
      <span className="text-ellipsis max-w-[240px]">
        {truncateName(user.username)}
      </span>

      <div className="flex gap-2">
        {/* <Button onClick={() => message(user.id)}>
          <MessageCircleHeart size={24} />
          <span>Message</span>
        </Button> */}

        <Button onClick={() => poke(user.id)} disabled={isPokeDisabled}>
          <Pointer size={24} />
          <span>Poke</span>
        </Button>
      </div>
    </li>
  );
};
