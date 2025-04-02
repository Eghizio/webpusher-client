interface Props {
  children: string;
  left?: React.ReactNode;
  divider?: boolean;
}

export const Title = ({ children: title, left, divider = false }: Props) => (
  <>
    <h2 className="text-2xl flex items-center gap-2 font-bold">
      {left && (
        <div className="bg-gray-300 p-2 rounded-full w-10 h-10 flex items-center justify-center">
          {left}
        </div>
      )}

      <span>{title}</span>
    </h2>
    {divider ? <Divider /> : null}
  </>
);

const Divider = () => <hr className="my-2 mx-1" />;
