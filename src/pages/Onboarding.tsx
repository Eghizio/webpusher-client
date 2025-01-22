import { Api } from "@/api/Api";
import { Page, useNavigation } from "@/context/NavigationContext";

export const OnboardingPage = () => {
  const { navigateTo } = useNavigation();

  const onOnboard = async (username: string) => {
    await Api.registerUser(username).then(console.log); // it does not throw probably. Now it throws after fix.
    navigateTo(Page.Dashboard);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Todo: Refactor.
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // @ts-ignore
    const username = form.elements["username"].value;

    onOnboard(username);
  };

  return (
    <main>
      <h2>Welcome</h2>

      <div className="flex space-x-2">
        <form onSubmit={onSubmit}>
          <label htmlFor="username">What’s your name, superstar?</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Rockstar Developer"
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </main>
  );
};
