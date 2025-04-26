export const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill(<i className="fas fa-star text-yellow-400"></i>),
    ...(halfStar
      ? [<i className="fas fa-star-half-alt text-yellow-400"></i>]
      : []),
    ...Array(emptyStars).fill(<i className="far fa-star text-yellow-400"></i>),
  ];

  return stars;
};
