"use client";
import { FilmSection } from "@/components/films/FilmSection";
import { PeopleList } from "@/components/people/PeopleList";

export default function Home() {
  return (
    <>
      <main className="flex w-full min-h-screen flex-col items-center md:p-8">
        <FilmSection />
        <PeopleList />
      </main>
    </>
  );
}
