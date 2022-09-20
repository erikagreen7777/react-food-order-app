const MealListItem = (props) => {
  return props.values.map((meal) => <li>{meal.name}</li>);
};

export default MealListItem;
