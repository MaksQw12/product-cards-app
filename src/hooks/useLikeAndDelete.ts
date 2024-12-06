export const useLikeAndDelete = (
  id: number,
  onLike: (id: number) => void,
  onDelete: (id: number) => void,
) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike(id);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return {
    handleLikeClick,
    handleDeleteClick,
  };
};
