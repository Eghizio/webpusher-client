// import { Api } from "@/api/Api";
import { Page, useNavigation } from "@/context/NavigationContext";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

export const OnboardingPage = () => {
  const { navigateTo } = useNavigation();
  const { registerUser } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onOnboard = async (username: string) => {
    await registerUser(username).then(console.log); // it does not throw probably. Now it throws after fix.
    navigateTo(Page.Dashboard);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

    // Todo: Refactor.
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // @ts-ignore
    const username = form.elements["username"].value;

    onOnboard(username).finally(() => setIsSubmitting(false));
  };

  return (
    <main className="flex items-center justify-center min-h-screen py-8">
      <article className="w-full max-w-md py-8 px-12 flex flex-col gap-10">
        <header className="text-center">
          <h2 className="text-3xl font-bold">Hello there 👋</h2>
        </header>

        <form className="space-y-4" onSubmit={onSubmit} autoComplete="off">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              What&apos;s your name?
            </label>
            <input
              id="username"
              name="username"
              placeholder="Enter your name"
              required
              className="w-full p-2 rounded-md border"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-500 disabled:brightness-50"
            disabled={isSubmitting}
          >
            Continue
          </button>
        </form>
      </article>
    </main>
  );
};
