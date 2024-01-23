export default function AdminReviewManageList({
  reviewId,
  userIndex,
  reviewContent,
  handleReplyChange,
  handleReplySubmit,
}) {
  return (
    <div
      key={reviewId}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold">사용자 : {userIndex}</h2>
        <p>{reviewContent}</p>
      </div>
      <div>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          rows={3}
          placeholder="답변을 입력하세요..."
          onChange={(e) => handleReplyChange(reviewId, e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleReplySubmit(reviewId)}
        >
          답변 등록
        </button>
      </div>
    </div>
  );
}
