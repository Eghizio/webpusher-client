import { Megaphone } from "lucide-react";
// import { MessageCircleHeart } from "lucide-react";
import { Title } from "../Title/Title";
import { useAllUsers } from "../UsersList/useAllUsers";
import { useState } from "react";
import { Api } from "@/api/Api";

interface Props {}

export const Broadcast = ({}: Props) => {
  const [users] = useAllUsers();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onBroadcast = async (recipient: string, message: string) => {
    // alert(`${recipient} -> ${message}`);
    if (recipient === "global") {
      return Api.broadcast(message).then(console.log).catch(console.error);
    }

    return Api.broadcastToUser(recipient, message)
      .then(console.log)
      .catch(console.error);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

    // Todo: Refactor.
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // @ts-ignore
    const recipient = form.elements["recipient"].value;
    // @ts-ignore
    const message = form.elements["message"].value;

    onBroadcast(recipient, message).finally(() => setIsSubmitting(false));
  };

  return (
    <article>
      <Title left={<Megaphone size={26} />}>Broadcast</Title>

      <section>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="flex flex-col gap-2 py-4">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Send your message to the world!
            </label>

            <select
              name="recipient"
              id="recipient"
              className="p-2 rounded-md border"
            >
              <option value="global">To everybody</option>
              {users.map(({ id, username }) => (
                <option key={id} value={id}>
                  {username}
                </option>
              ))}
            </select>

            <input
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="w-full p-2 rounded-md border"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md  disabled:bg-gray-500 disabled:brightness-50"
            disabled={isSubmitting}
          >
            Broadcast
          </button>
        </form>
      </section>
    </article>
  );
};
