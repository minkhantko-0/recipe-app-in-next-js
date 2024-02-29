import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";

import { getMeal } from "@/lib/meals";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); // will show the closet not found pages
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function EachMealPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt="picture of a meal" />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
}
