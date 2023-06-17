const Tooltip = (props: { message: string; children: any }) => {
  const { message, children } = props;
  return (
    <div className="group relative block">
      {children}
      <span className="absolute top-0 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 italic">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
