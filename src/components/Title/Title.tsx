interface Props {
  children: string;
  left?: React.ReactNode;
  primary?: boolean;
}

export const Title = ({ children: title, left, primary = false }: Props) => (
  <>
    <h2 className="text-2xl flex items-center gap-2 font-bold">
      {left && (
        <div
          className={
            primary
              ? "w-10 h-10 flex items-center justify-center bg-gray-300 p-2 rounded-full "
              : "w-10 h-10 flex items-center justify-center"
          }
        >
          {left}
        </div>
      )}

      <span>{title}</span>
    </h2>
    {primary ? <Divider /> : null}
  </>
);

const Divider = () => <hr className="my-2 mx-1" />;
