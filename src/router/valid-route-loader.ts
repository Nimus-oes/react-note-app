import { redirect, type LoaderFunctionArgs } from "react-router";
import { CATEGORY } from "../constants";
import type { CategoryType } from "../types";

export function validateCategory({ params }: LoaderFunctionArgs) {
  if (!CATEGORY.includes(params.category as CategoryType)) {
    return redirect("/error-404");
  }

  return null;
}
