import React from 'react';

const RecipePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Jollof Rice</h1>
        <img src="/src/jollof-rice.webp" alt="Jollof Rice" className="rounded-lg shadow-md mb-6  mx-auto  "  />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-6">
            <li>2 cups long-grain parboiled rice</li>
            <li>1/4 cup vegetable oil</li>
            <li>1 onion, chopped</li>
            <li>3 medium tomatoes, blended</li>
            <li>1 red bell pepper, blended</li>
            {/* Add more ingredients */}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal pl-6">
            <li>Wash the rice thoroughly and set aside.</li>
            <li>Heat the vegetable oil in a large pot over medium heat.</li>
            <li>Add the chopped onions and sauté until translucent.</li>
            {/* Add more instructions */}
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notes</h2>
          <p className="text-gray-700">
            Jollof Rice is a popular West African dish enjoyed by many. Feel free to serve it with fried plantains and grilled chicken for a complete meal.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RecipePage;