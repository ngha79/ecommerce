import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const recipes = [
  {
    path: "/recipes/detail/kombumcha",
    name: "Grapefruit Kombucha Float",
    desc: "This tangy, sparkly, nostalgic treat tastes like a creamsicle, and takes all of two minutes to make. Add a shot of vodka or gin to turn it into a cocktail. Makes 2 floats.",
    type: {
      name: "Ingredients",
      desc: [
        "2 scoops vanilla ice cream of choice",
        "1 bottle Grapefruit Kombucha",
        "Fresh herbs for garnish",
        "Vodka or gin, to make it boozy (optional)",
      ],
    },
    Steps: {
      name: "Steps",
      desc: [
        "Scoop ice cream into tall glasses.",
        "Top with kombucha (and optional shot).",
        "Garnish, and float away on a cloud of joy. 🛀🏻)",
      ],
    },
  },
  {
    path: "/recipes/detail/apple",
    name: "Apple Cinnamon Toast",
    desc: "This is a challava good breakfast or snack to welcome fall and the jewel of the season: apples. We’ve jazzed our apples up with honey, cinnamon, and lemon, and we propose serving them on a thick slice of challah toast. We think you’re going to loaf it.",
    type: {
      name: "Ingredients",
      desc: [
        "1 crisp fall apple, sliced",
        "A dab of coconut oil, for sautéing",
        "Juice of ½ a lemon",
        "1 tbsp honey or maple syrup",
        "Generous sprinkling of cinnamon",
      ],
    },
    Serve: {
      name: "To Serve",
      detail:
        "A slice of lightly toasted challah, a dollop of coconut yogurt, and any crunchy elements of your choosing, such as:",
      desc: [
        "Pomegranate seeds",
        "Crumbled walnuts",
        "Chia seeds",
        "Toasted pine nuts",
      ],
    },
    Steps: {
      name: "Steps",
      desc: [
        "In a small skillet, sauté your sliced apple in coconut oil over medium heat.",
        "Stir in lemon juice, honey or maple, and cinnamon, and cook until golden.",
        "Toast your challah, dress it up, and serve immediately.",
      ],
    },
  },
  {
    path: "/recipes/detail/lemonade",
    name: "Strawberry Lemonade + Yogurt Popsicles",
    desc: "Strawberry and coconut? This is way more than a summer fling–this is a duo that was simply meant to be. Combine as a cold delight and your summer celebrations will be in full swing. Perfect for a day time treat pool-or park-side or a sweet escape for a hot evening. ",
    type: {
      name: "Ingredients + Materials",
      desc: [
        "Strawberries, washed and thinly sliced",
        "Three 300mL bottles Strawberry Lemonade",
        "Your favorite plant-based coconut yogurt",
        "Popsicle mold + popsicle sticks or handles",
      ],
    },
    Steps: {
      name: "Steps",
      desc: [
        "If you’ve been reading this blog for at least one full cycle of your calendar, you’ve already heard us extol the virtues of a popsicle mold. Some people open up their pools or cottages every season. We do this. No doubt you’ve added one to your kitchen appliance collection. Remove it from winter storage and give it a good wipe now.",
        "No popsicle mold? Gasp! Procure one immediately. We’ll wait.",
        "Has it arrived yet? Good. Now you're ready to go. Begin by washing and slicing a handful of strawberries. Add a few of your strawberry slices into each of the holes of your popsicle mold, then pour in some coconut yogurt on top of these pieces. Use a spoon to add the yogurt if needed, filling to about half-way up the mold.",
        "Place a popsicle stick (or the handle and lid if your mold comes with such bonus features) in the middle of your mix. Pro tip: If your popsicle stick is not standing up straight in the yogurt, use tape across the opening of the mold to hold in place.",
        "Place the half-filled molds in your freezer.",
        "Once firm, remove from freezer, then remove the tape or lid. Add a few more strawberry slices, then pour Strawberry Lemonade into your molds until each hole is full. Add the lid back if you have one. Or return the lidless mold to your freezer to harden.",
        "Once firm, they're are ready to enjoy!",
      ],
    },
  },
  {
    path: "/recipes/detail/home",
    name: "How to Frosé at Home",
    desc: "From the very first sip, we knew that we wanted to share this melony magic with as many friends as we could. Our delivery and logistics team quickly realized we’d have a meltdown attempting to ship it to you, so here’s the next best thing: an at-home how-to.",
    type: {
      name: "Ingredients",
      desc: [
        "1 cup rosé (or 1 cup watermelon juice)",
        "½ cup ice",
        "½ cup frozen watermelon",
        "1 tsp lime",
      ],
    },
    Steps: {
      name: "Steps",
      desc: [
        "Add all ingredients to a blender and pulse until well-combined—the goal, of course, is to reach a slushy consistency that isn't too thin. If you’ve over-pulsed, add a few more chunks of frozen watermelon.",
        "Pour into a glass and drink quickly!",
      ],
    },
  },
];

const DetailRecipes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const type = recipes.filter((item) => item.path === location.pathname);
  return (
    <div className="mx-auto mt-36 max-w-7xl lg:px-8">
      <div className="bg-recipes h-[300px] w-full bg-cover bg-center bg-no-repeat my-8"></div>
      <div className="lg:px-56 px-20">
        <h1 className="text-4xl font-poppins py-8">{type[0].name}</h1>
        <span className="text-base">{type[0].desc}</span>
        <div className="w-full pb-10">
          {type[0].type && (
            <>
              <h3 className="text-lg font-bold py-4">{type[0].type.name}</h3>
              <ul className="list-disc px-4">
                {type[0].type.desc.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </>
          )}
          {type[0].Serve && (
            <>
              <h3 className="text-lg font-bold py-4">{type[0].Serve.name}</h3>
              <div className="mb-4">{type[0].Serve.detail}</div>
              <ul className="list-decimal px-8">
                {type[0].Serve.desc.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </>
          )}
          {type[0].Steps && (
            <>
              <h3 className="text-lg font-bold py-4">{type[0].Steps.name}</h3>
              <ul className="list-decimal px-8">
                {type[0].Steps.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <button
          className="text-xl text-center py-10 w-full"
          onClick={() => navigate(-1)}
        >
          Back to blog
        </button>
      </div>
    </div>
  );
};

export default DetailRecipes;
