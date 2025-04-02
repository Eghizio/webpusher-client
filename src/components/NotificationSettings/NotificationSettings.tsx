import { BellDot } from "lucide-react";
import { Title } from "../Title/Title";

interface Props {}

export const NotificationSettings = ({}: Props) => {
  return (
    <article>
      <Title left={<BellDot size={26} />}>Notification Settings</Title>
    </article>
  );
};
