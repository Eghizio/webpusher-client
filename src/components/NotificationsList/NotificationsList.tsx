import { BellDot } from "lucide-react";

type Notification = {
  id: string;
  text: string;
  datetime: string;
};

interface Props {
  notifications: Notification[];
}

export const NotificationsList = ({ notifications }: Props) => (
  <ul className="flex flex-col gap-3 py-4 mb-24">
    {notifications.map((n) => (
      <li key={n.id}>
        <NotificationCard notification={n} />
      </li>
    ))}
  </ul>
);

const NotificationCard = ({
  notification: { text, datetime },
}: {
  notification: Notification;
}) => (
  <article className="bg-blue-200 flex items-center gap-5 p-2 rounded-md shadow-md hover:shadow-xl hover:brightness-90 cursor-pointer">
    <BellDot size={22} />
    <div>
      <span className="text-xs text-slate-500">
        {new Date(datetime).toLocaleString()}
      </span>
      <p>{text}</p>
    </div>
  </article>
);
