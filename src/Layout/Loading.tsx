const Loading = () => {
  return (
    <div className="w-full h-screen flex bg-[#0E1527] absolute top-0 left-0 items-center justify-center">
      <img
      className="w-[200px] object-cover"
        src="https://www.mazda3revolution.com/attachments/ajax-loader-gif.183066/"
        alt="loading gif"
      />
    </div>
  );
};

export default Loading;
