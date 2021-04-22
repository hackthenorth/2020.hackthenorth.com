import React from "react";

export enum ListingType {
  GENERAL = "All roles",
  LOGISTICS = "Logistics",
  SPONSORSHIP = "Sponsorship",
  DESIGN = "Design",
  DEVELOPMENT = "Development",
  MARKETING = "Marketing",
  FINANCE = "Finance",
  OPERATIONS = "Operations",
}

export type TOrganizerListing = {
  title: string;
  description: string;
  descriptionExtra?: React.ReactNode;
  responsibilities: React.ReactNode;
  skills: React.ReactNode;
  link: string;
  type: ListingType;
};
