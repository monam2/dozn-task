import { BookmarkIcon } from "./BookmarkIcon";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  handleBookmark?: () => void;
  handleOnClick?: () => void;
}

const Card = ({ title, description, buttonText, handleBookmark, handleOnClick }: CardProps) => {
  return (
    <div className="relative flex flex-col gap-4 w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg p-8">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex justify-between">
          <h1 className="text-heading-3 font-bold text-black">{title}</h1>
          <p className="mt-2 text-content-1 text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-content-3 text-gray-400">호출 시간: {"timestamp"}</p>
          <p className="text-content-3 text-gray-400">모듈 코드: {"moduleCode"}</p>
          <p className="text-content-3 text-gray-400">모듈 이름: {"moduleName"}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button onClick={handleBookmark}>
          <BookmarkIcon isActive={false} />
        </button>

        <button
          onClick={handleOnClick}
          className="inline-block bg-blue-100 text-primary font-medium px-4 py-2 rounded-md hover:bg-blue-300 transition-colors duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
