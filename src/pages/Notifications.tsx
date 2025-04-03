import { Banner } from "@/components/Banner/Banner";
import { NotificationsList } from "@/components/NotificationsList/NotificationsList";
import { Title } from "@/components/Title/Title";
import { Bell } from "lucide-react";

export const NotificationsPage = () => (
  <main>
    <Title left={<Bell size={26} />} primary>
      Notifications
    </Title>

    <Banner variant="info">
      <h3 className="font-bold mb-1">
        Here was supposed to be a history of your notifications.
      </h3>
      <p>
        But deadlines you know 🤷 <br />
        So enjoy some mocked ones 🔮
      </p>
    </Banner>

    <NotificationsList notifications={mockedNotifications} />
  </main>
);

const coolNotifications = [
  {
    id: "1",
    text: "🚀 Blast off! Your update is live.",
    datetime: "2025-04-03T08:15:30Z",
  },
  {
    id: "2",
    text: "🔔 Ding! Something cool just happened.",
    datetime: "2025-04-03T09:20:45Z",
  },
  {
    id: "3",
    text: "🔥 Spicy update alert! Check it out.",
    datetime: "2025-04-03T10:05:12Z",
  },
  {
    id: "4",
    text: "💡 Lightbulb moment! You got a new insight.",
    datetime: "2025-04-03T11:30:55Z",
  },
  {
    id: "5",
    text: "📬 Mail call! You have a new message.",
    datetime: "2025-04-03T12:10:05Z",
  },
  {
    id: "6",
    text: "🎉 Surprise! You unlocked something awesome.",
    datetime: "2025-04-03T13:45:18Z",
  },
  {
    id: "7",
    text: "⏳ Wait no more! Your request is ready.",
    datetime: "2025-04-03T14:25:40Z",
  },
  {
    id: "8",
    text: "⚡ Zap! Instant update just for you.",
    datetime: "2025-04-03T15:00:22Z",
  },
  {
    id: "9",
    text: "👀 Psst... Something exciting awaits!",
    datetime: "2025-04-03T16:14:30Z",
  },
  {
    id: "10",
    text: "⏰ Time’s up! Take action now!",
    datetime: "2025-04-03T17:50:55Z",
  },
  {
    id: "11",
    text: "📢 Heads up! You don’t want to miss this.",
    datetime: "2025-04-03T18:05:10Z",
  },
  {
    id: "12",
    text: "🚨 Alert! Something needs your attention.",
    datetime: "2025-04-03T19:30:45Z",
  },
  {
    id: "13",
    text: "🎯 Bullseye! You hit the mark.",
    datetime: "2025-04-03T20:15:20Z",
  },
  {
    id: "14",
    text: "📊 Stats are in! Take a look.",
    datetime: "2025-04-03T21:40:35Z",
  },
  {
    id: "15",
    text: "🔑 You just unlocked a new feature!",
    datetime: "2025-04-03T22:55:42Z",
  },
  {
    id: "16",
    text: "💰 Jackpot! A reward is waiting for you.",
    datetime: "2025-04-03T23:20:11Z",
  },
  {
    id: "17",
    text: "🎭 New twist! Something unexpected happened.",
    datetime: "2025-04-04T00:05:30Z",
  },
  {
    id: "18",
    text: "🧠 Brain boost! A fresh tip just for you.",
    datetime: "2025-04-04T01:40:55Z",
  },
  {
    id: "19",
    text: "🎵 Ding-dong! Opportunity is knocking.",
    datetime: "2025-04-04T02:10:20Z",
  },
  {
    id: "20",
    text: "🌟 Shine on! You just leveled up.",
    datetime: "2025-04-04T03:25:45Z",
  },
];

const mockedNotifications = Array.from(
  { length: 1 },
  () => coolNotifications
).flat();
