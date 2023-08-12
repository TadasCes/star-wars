"use client";
import { NavControl } from "@/components/Nav/NavControl";
import { FilmSection } from "@/components/films/FilmSection";
import { PeopleList } from "@/components/people/PeopleList";
import { LoadSpinner } from "@/components/utils/LoadSpinner";
import { useGetData } from "@/hooks/useGetData";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useFilmsData } from "./data/FilmsDataProvider";
import Sidebar from "@/components/Nav/Sidebar";
import { Nav } from "@/components/Nav/Nav";

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
