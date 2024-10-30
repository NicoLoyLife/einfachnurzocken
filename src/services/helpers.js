// utils/helpers.js

export const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const totalScore = ratings.reduce((sum, item) => sum + item.score, 0);
    const average = totalScore / ratings.length;
    return Math.round(average * 10) / 10; // Rundet auf eine Dezimalstelle
  };
  
  export const getSortedProvidersByRating = (providersData) => {
    const providersArray = Object.values(providersData);
  
    const providersWithRatings = providersArray.map((provider) => ({
      ...provider,
      averageRating: calculateAverageRating(provider.ratings),
    }));
  
    const sortedProviders = providersWithRatings.sort(
      (a, b) => b.averageRating - a.averageRating
    );
  
    return sortedProviders;
  };  