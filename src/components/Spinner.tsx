export default function Spinner() {
  return (
    <div className="min-h-[calc(100vh-60px)] grid place-content-center">
      <div className=" w-[40px] aspect-square rounded-[50%] border-4 border-t-yellow-500 animate-spin"></div>
    </div>
  );
}
